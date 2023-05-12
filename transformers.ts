import {
    Project,
    ImportDeclaration,
    SourceFile,
    ExportDeclaration,
} from "ts-morph";

const REF = "Ref_";
const replaceRef = (name: string) => name.replace(REF, "");

export async function replaceRefsWithModelType(project: Project) {
    const files = project.getSourceFiles();

    const refsPerFile = files
        .map((sf) => getExpandedRefs(project, sf))
        .filter((sf) => sf.length > 0);

    refsPerFile.forEach((refsInFile) => {
        const firstRef = refsInFile[0];

        const originalText = firstRef.originalSourceFile.getText();
        const replaced = originalText.replaceAll(REF, "");

        // this would be the TS-morph way to do it, but it takes way too long
        // around 40s for all files
        // .rename() is the bottleneck
        // ref.refImport.getNamedImports().forEach((ni) => {
        //     if (ni.getName() === ref.refName) {
        //         ni.getNameNode().rename(ref.expandedName);
        //     }
        // });
        firstRef.originalSourceFile.replaceWithText(replaced);
    });
}

export function removeUnusedFiles(patterns: RegExp[]) {
    return (project: Project) => {
        const files = project.getSourceFiles();

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
            const onlyIndex = referencingFiles.every(
                (rf) => rf.getBaseName() === "index.ts"
            );
            if (referencingFiles.length === 0 || onlyIndex) {
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
