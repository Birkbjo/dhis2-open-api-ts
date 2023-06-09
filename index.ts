import * as OpenAPI from "openapi-typescript-codegen";
import { parseArgs } from "node:util";
import fs from "fs";
import { TSTransformer } from "./transformer";
import {
    replaceRefsWithModelType,
    removeUnusedFiles,
    setPropertiesRequired,
    includeCustomTypes,
    RenameExport,
    renameExports,
    addGeneratedByComment,
    formatFiles,
    mergeToOutputFile,
    rename,
} from "./transformers";
import path from "path";

const getOpenApiSchemaFileName = (version: string): string =>
    `openapi-dhis2-${version}.json`;

const resolveLatestOpenApiJson = (): Record<string, any> | null => {
    try {
        const fileNames = fs
            .readdirSync(".")
            .filter(
                (fileName) =>
                    fileName.startsWith("openapi") && fileName.endsWith(".json")
            )
            .sort();
        const latestSchema = fileNames.pop();

        if (!latestSchema) {
            return null;
        }
        const fileContent = fs.readFileSync(latestSchema, "utf-8");
        return JSON.parse(fileContent);
    } catch {
        return null;
    }
};

function fetchOpenAPI(url: string): Promise<any> {
    console.log("fetching", url);
    return fetch(url, {
        headers: {
            Authorization: `Basic ${btoa(`admin:district`)}`,
        },
    }).then(async (res) => {
        if (res.ok) {
            const json = await res.json();
            const version = json.info.version.replace(/\./g, "-");
            const fileName = getOpenApiSchemaFileName(version);
            fs.writeFileSync(fileName, JSON.stringify(json));
            return json;
        }
        throw new Error("Failed to fetch schemas");
    });
}

type GetOpenApiSchemaOptions = {
    force?: boolean;
    version?: string;
};

type CachedResult = {
    cached: boolean;
    result: any;
};

async function getOpenApi(
    url: string,
    options: GetOpenApiSchemaOptions = { force: false }
): Promise<CachedResult> {
    const latestSchema = resolveLatestOpenApiJson();

    let result;
    if (options.force || !latestSchema) {
        result = await fetchOpenAPI(url);
    } else {
        result = latestSchema;
    }
    return { cached: !!latestSchema, result };
}

function cleanOutput(output) {
    const outputpath = path.resolve(output);
    const files = fs.readdirSync(outputpath);
    const hasIndex = files.includes("index.ts");
    if (hasIndex) {
        fs.rmSync(outputpath, { recursive: true });
    }
}

async function main() {
    const options = {
        url: {
            type: "string",
            short: "u",
            default: "https://debug.dhis2.org/dev/api/openapi.json",
        },
        force: {
            type: "boolean",
            short: "f",
            default: false,
        },
        "no-transform": {
            type: "boolean",
            short: "n",
            default: false,
        },
        clean: {
            type: "boolean",
            short: "c",
            default: false,
        },
        output: {
            type: "string",
            short: "o",
            default: "./generated",
        },
    } as const;

    const { values } = parseArgs({ options });
    if (!values.url) throw new Error("No url provided");
    if (!values.output) throw new Error("No output provided");

    if (values.clean) {
        cleanOutput(values.output);
    }
    const { result: openApiSchema } = await getOpenApi(values.url, {
        force: values.force,
    });

    console.log("Generating types");
    await OpenAPI.generate({
        input: openApiSchema,
        output: values.output,
        exportCore: false,
        exportServices: false,
    });
    console.log("Generated types from OpenAPI schema");

    if (!values["no-transform"]) {
        const removeFilePatterns = [/UID_/, /Ref_/, /PropertyNames_/, /Webapi/];

        const renames: RenameExport[] = [{ from: /MeDto/, to: "CurrentUser" }];
        // note that order matters
        // some transformers depend on the output of others
        const transformers = [
            replaceRefsWithModelType,
            removeUnusedFiles(removeFilePatterns),
            setPropertiesRequired({ excludeTypeNames: [/Pager/] }),
            // renameExports(renames),
            rename(renames),
            mergeToOutputFile({
                outputPath: path.join(values.output, "models.ts"),
            }),
            includeCustomTypes,
            addGeneratedByComment({ allFiles: true }),
            formatFiles,
        ];
        const transformer = new TSTransformer(
            path.join(values.output, "index.ts"),
            transformers
        );
        transformer.runTransformers();
    }
}

main();
