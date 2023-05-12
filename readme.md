# DHIS2 OpenAPI TypeScript Types Generator

Generates TypeScript types from the DHIS2 OpenAPI specification.

## Installation

Make sure you have have node > 18.

```
yarn install
```

## Usage

```
yarn generate
```

### Options

-   `--url, -u`: The URL of the DHIS2 OpenAPI specification. Default: "https://debug.dhis2.org/dev/api/openapi.json"
-   `--force, -f`: Force fetching the OpenAPI specification even if a cached version exists. Default: false
-   `--no-transform, -n`: Skip transforming the generated types. Default: false

## Example

```
yarn generate --url https://debug.dhis2.org/2.39dev/api/openapi.json --force
```

This example fetches the OpenAPI specification from the specified URL and generates TypeScript types. The `--force` option ensures that the latest specification is fetched and not loaded from the cache.

## Implementation Details

This tool uses

-   [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen/) to generate TypeScript types from the OpenAPI specification.
-   Transformers use [ts-morph](https://github.com/dsherret/ts-morph) for easy parsing and manipulation of the generated types.
    -   Transformers are quite easy to implement. By default these generators are run:
        -   `replaceRefsWithModelType` removes all "Ref\_" types and replaces them with the actual full type of the model. This is done because the OpenAPI spec generates references as a simple "Ref_TYPE" that only specifies the id.
        -   `removeUnusedFiles` removes all files that are not referenced by any other file (except index) and matches the patterns `[/UID_/, /Ref_/, /PropertyNames_/]`. This is done because they are mostly bloat, and due to the `replaceRefsWithModelType`-transformation `REF_`-types are not needed. `string` are used in most places instead of `UID_` types.
