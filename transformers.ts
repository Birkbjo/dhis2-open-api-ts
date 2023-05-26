import {
    Project,
    ImportDeclaration,
    SourceFile,
    ExportDeclaration,
    Identifier,
    ts,
    ExportDeclarationStructure,
    OptionalKind,
    ExportSpecifier,
} from "ts-morph";
import fs from "fs";

const REF = "Ref_";
const replaceRef = (name: string) => name.replace(REF, "");

export function replaceRefsWithModelType(project: Project) {
    const files = project.getSourceFiles();

    const refsPerFile = files
        .map((sf) => getExpandedRefs(project, sf))
        .filter((sf) => sf.length > 0);

    const renames: [Identifier, string][] = [];
    const importSpecifierRenames: [ImportDeclaration, string][] = [];
    const importsToDelete: ImportDeclaration[] = [];

    refsPerFile.forEach((refsInFile) => {
        refsInFile.forEach((expandedRef) => {
            const fullModelImportSpecifier =
                expandedRef.originalSourceFile.getRelativePathAsModuleSpecifierTo(
                    expandedRef.expandedSourceFile.getFilePath()
                );
            const isSameFile =
                expandedRef.originalSourceFile.getFilePath() ===
                expandedRef.expandedSourceFile.getFilePath();
            // if the expanded type now refers to itself, delete the import rather than rename it
            if (isSameFile) {
                importsToDelete.push(expandedRef.refImport);
                return;
            }
            importSpecifierRenames.push([
                expandedRef.refImport,
                fullModelImportSpecifier,
            ]);

            expandedRef.refImport.getNamedImports().forEach((ni) => {
                if (ni.getName() === expandedRef.refName) {
                    renames.push([ni.getNameNode(), expandedRef.expandedName]);
                }
            });
        });
    });

    importsToDelete.forEach((importDeclaration) => importDeclaration.remove());
    // this also renames references in the same file
    renames.forEach(([identifier, name]) => identifier.rename(name));
    importSpecifierRenames.forEach(([importDeclaration, moduleSpecifier]) =>
        importDeclaration.setModuleSpecifier(moduleSpecifier)
    );
}

export type RemoveUnusedFilesOptions = {
    // if true, files that are only referenced by other files that match the patterns
    // will also be removed
    removeReferencedFilesMatchingPattern: boolean;
};
const removedUnusedFilesDefaultOptions: RemoveUnusedFilesOptions = {
    removeReferencedFilesMatchingPattern: true,
};

export function removeUnusedFiles(
    patterns: RegExp[],
    options: RemoveUnusedFilesOptions = removedUnusedFilesDefaultOptions
) {
    return function removeUnusedFilesTransformer(project: Project) {
        const files = project.getSourceFiles();
        const referencingFilePatterns = [/index.ts/].concat(
            options.removeReferencedFilesMatchingPattern ? patterns : []
        );
        const matchingFiles = files.filter((sf) =>
            patterns.some((p) => p.test(sf.getBaseName()))
        );
        const indexFile = project.getSourceFileOrThrow("index.ts");

        // much faster to do all manipulations in one go
        // https://ts-morph.com/manipulation/performance#performance-tip-analyze-then-manipulate
        const deletedExportsFromIndex: ExportDeclaration[] = [];
        const deletedFiles: SourceFile[] = [];
        matchingFiles.forEach((sf) => {
            const referencingFiles = sf.getReferencingSourceFiles();

            const matchesReferencesFilePattern = referencingFiles.every((rf) =>
                referencingFilePatterns.some((p) => p.test(rf.getBaseName()))
            );
            if (referencingFiles.length === 0 || matchesReferencesFilePattern) {
                const indexExportDeclaration = getExportDeclarationForFile(
                    indexFile,
                    sf
                );
                if (indexExportDeclaration) {
                    deletedExportsFromIndex.push(indexExportDeclaration);
                }
                deletedFiles.push(sf);
            }
        });

        deletedExportsFromIndex.forEach((ed) => ed.remove());
        deletedFiles.forEach((sf) => sf.delete());

        console.log(`Deleted ${deletedFiles.length} files`);
        return;
    };
}

export function setPropertiesRequired(project: Project) {
    const files = project.getSourceFiles();

    files.forEach((sf) => {
        const typeAliases = sf
            .getTypeAliases()
            .filter((t) => t.getType().isObject());

        // could not find an easy way to update properties using ts-morph
        // so use the ts compiler api directly
        // https://ts-morph.com/manipulation/transforms
        typeAliases.forEach((ta) => {
            ta.transform((traversal) => {
                const node = traversal.visitChildren();
                if (ts.isPropertySignature(node)) {
                    return traversal.factory.updatePropertySignature(
                        node,
                        [],
                        node.name,
                        undefined, // removes question token
                        node.type
                    );
                }
                return node;
            });
        });
    });
}

/**
 * Adds types defined in ./customTypes to the project
 * @param project
 */
export function includeCustomTypes(project: Project) {
    fs.cpSync("./customTypes", "./generated", { recursive: true });
    const files = fs.readdirSync("./customTypes");
    const fileNames = files.map((f) => `./generated/${f}`);
    const addedSourceFiles = project.addSourceFilesAtPaths(fileNames);

    const indexFile = project.getSourceFileOrThrow("index.ts");

    // add exported declarations for added files to indexFile
    const exportedDeclarations: OptionalKind<ExportDeclarationStructure>[] = [];
    addedSourceFiles.forEach((sf) => {
        const exportedNames = Array.from(sf.getExportedDeclarations().keys());
        const specifier = indexFile.getRelativePathAsModuleSpecifierTo(
            sf.getFilePath()
        );
        // update custom types imports
        sf.getImportDeclarations().forEach((importDecl) => {
            const moduleSpecifier = importDecl.getModuleSpecifierValue();
            importDecl.setModuleSpecifier(
                moduleSpecifier.replace("../generated", ".")
            );
        });
        exportedDeclarations.push({
            isTypeOnly: true,
            namedExports: exportedNames,
            moduleSpecifier: specifier,
        });
    });
    indexFile.addExportDeclarations(exportedDeclarations);
}

export type RenameExport = {
    from: RegExp;
    to: string;
};

export function renameExports(patterns: RenameExport[]) {
    return function renameTransformer(project: Project) {
        const indexFile = project.getSourceFileOrThrow("index.ts");

        const exportDeclarations = indexFile.getExportDeclarations();
        const renames: [RenameExport, ExportSpecifier][] = [];
        exportDeclarations.forEach((ed) => {
            ed.getNamedExports().forEach((ne) => {
                const name = ne.getName();
                const rename = patterns.find((p) => p.from.test(name));

                if (rename) {
                    renames.push([rename, ne]);
                }
            });
        });
        renames.forEach(([rename, namedExport]) => {
            namedExport.setAlias(rename.to);
        });
    };
}

function getExportDeclarationForFile(
    indexFile: SourceFile,
    sourceFile: SourceFile
) {
    //ed.getModuleSpecifierSourceFile is super slow (~250ms per invocation), so we do it manually instead
    const relativePath = indexFile.getRelativePathAsModuleSpecifierTo(
        sourceFile.getFilePath()
    );
    const exportDeclaration = indexFile.getExportDeclaration((ed) => {
        const moduleSpecifier = ed.getModuleSpecifierValue();

        return moduleSpecifier === relativePath;
    });
    return exportDeclaration;
}

type ExpandRefCandidate = {
    refName: string;
    refImport: ImportDeclaration;
    expandedName: string;
    expandedSourceFile: SourceFile;
    originalSourceFile: SourceFile;
};
/**
 * Gets all REF_Model in a file that qualify for being expanded to the full model type
 * and returns an array of ExpandRefCandidate
 *
 * @param sourceFile
 * @returns
 */
function getExpandedRefs(
    project: Project,
    sourceFile: SourceFile
): ExpandRefCandidate[] {
    const expandedRefs: ExpandRefCandidate[] = [];

    sourceFile.getImportDeclarations().forEach((importDeclaration) => {
        const importSourceFile =
            importDeclaration.getModuleSpecifierSourceFile();

        if (!importSourceFile) {
            return false;
        }

        const refTypeName = importSourceFile.getBaseNameWithoutExtension();
        const fileName = importSourceFile.getBaseName();
        const isRefImport = fileName.includes(REF);

        if (!isRefImport) {
            return false;
        }

        const expandedFileName = replaceRef(fileName);
        const expandedTypeName = replaceRef(refTypeName);
        const expandedFile = project.getSourceFile(expandedFileName);

        if (expandedFile) {
            const hasExpandedModelExport =
                expandedFile.getTypeAlias(expandedTypeName);

            if (!hasExpandedModelExport) {
                return false;
            }
            expandedRefs.push({
                refName: refTypeName,
                refImport: importDeclaration,
                expandedName: expandedTypeName,
                expandedSourceFile: expandedFile,
                originalSourceFile: sourceFile,
            });
        }
        return true;
    });
    return expandedRefs;
}
