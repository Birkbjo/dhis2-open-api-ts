import { Project } from "ts-morph";

export type TransformerObject = {
    name: string;
    tranformFunc: TransformerFunc;
};

export type TransformerFunc = (
    project: Project,
    context?: TSTransformer
) => Promise<void> | void;

export type Transformer = TransformerFunc | TransformerObject;

export class TSTransformer {
    project: Project;
    transformers: Map<string, TransformerFunc> = new Map();

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

    runTransformers(): Promise<void> {
        this.transformers.forEach((transformer, name) => {
            console.log("Running transformer: ", name);
            console.time(name);
            transformer(this.project, this);
            console.timeEnd(name);
        });
        console.log("All transformers done. Saving files...");
        return this.project.save();
    }
}
