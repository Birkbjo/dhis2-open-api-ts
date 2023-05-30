import { Project } from "ts-morph";

export type TransformerObject = {
    name: string;
    tranformFunc: TransformerFunc;
};

export type TransformerFunc = (
    project: Project,
    context: TSTransformer
) => Promise<void> | void;

export type Transformer = TransformerFunc | TransformerObject;

export class TSTransformer {
    project: Project;
    transformers: Map<string, TransformerFunc> = new Map();
    mergedFilePath: string | undefined;

    constructor(filesGlob: string, transformers: Transformer[]) {
        this.project = new Project();
        this.project.addSourceFilesAtPaths(filesGlob);
        this.project.resolveSourceFileDependencies();

        this.inititalizeTransformers(transformers);
    }

    private inititalizeTransformers(transformers: Transformer[]) {
        this.transformers.clear();
        transformers.forEach((transformer) => {
            if (typeof transformer === "function") {
                this.transformers.set(transformer.name, transformer);
            } else {
                this.transformers.set(
                    transformer.name,
                    transformer.tranformFunc
                );
            }
        });
    }

    async runTransformers(): Promise<void> {
        const transformers = Array.from(this.transformers);

        const promises = transformers.map(
            async ([transformerName, transformer]) => {
                console.log("Running transformer: ", transformerName);
                console.time(transformerName);
                const transformerRes = transformer(this.project, this);
                if (
                    transformerRes &&
                    typeof transformerRes.then === "function"
                ) {
                    await transformerRes;
                }
                console.timeEnd(transformerName);
            }
        );
        for (const promise of promises) {
            await promise;
        }
        //await Promise.all(promises);

        console.log("All transformers done. Saving files...");
        return this.project.save();
    }
}
