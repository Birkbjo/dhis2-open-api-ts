import * as OpenAPI from "openapi-typescript-codegen";
import { parseArgs } from "node:util";
import fs from "fs";
import { TSTransformer, TransformerObject } from "./transformer";
import {
    replaceRefsWithModelType,
    removeUnusedFiles,
    setPropertiesRequired,
    includeCustomTypes,
    RenameExport,
    renameExports,
    addGeneratedByComment,
} from "./transformers";

const getOpenApiSchemaFileName = (version: string): string =>
    `openapi-dhis2-${version}.json`;

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
    const fileNames = fs
        .readdirSync(".")
        .filter(
            (fileName) =>
                fileName.startsWith("openapi") && fileName.endsWith(".json")
        )
        .sort();

    const latestSchema = fileNames.pop();
    let result;
    let cached = false;
    if (options.force || !latestSchema) {
        result = await fetchOpenAPI(url);
    } else {
        const schemas = fs.readFileSync(latestSchema, "utf-8");
        result = await new Promise((resolve) => resolve(JSON.parse(schemas)));
        cached = true;
    }
    return { cached, result };
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
    } as const;

    const { values } = parseArgs({ options });
    if (!values.url) throw new Error("No url provided");

    const { cached, result: openApiSchema } = await getOpenApi(values.url, {
        force: values.force,
    });

    if (!cached || !values.force) {
        console.log("Generating types");
        await OpenAPI.generate({
            input: openApiSchema,
            output: "./generated",
            exportCore: false,
            exportServices: false,
        });
        console.log("Generated types from OpenAPI schema");
    }

    if (!values["no-transform"]) {
        const removeFilePatterns = [/UID_/, /Ref_/, /PropertyNames_/, /Webapi/];
        const renames: RenameExport[] = [{ from: /MeDto/, to: "CurrentUser" }];
        const transformers = [
            includeCustomTypes,
            replaceRefsWithModelType,
            removeUnusedFiles(removeFilePatterns),
            setPropertiesRequired,
            renameExports(renames),
            addGeneratedByComment(),
        ];
        const transformer = new TSTransformer(
            "./generated/index.ts",
            transformers
        );
        transformer.runTransformers();
    }
}

main();
