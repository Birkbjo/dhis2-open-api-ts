import { IdentifiableObject } from "./models/IdentifiableObject";
// import { CategoryCombo, DataElement } from "../generated";

type ModelReferenceCollection<T = IdentifiableObject> = Array<T>;
type ModelReference = IdentifiableObject | ModelReferenceCollection;

type BaseGist<T> = {
    apiEndpoints: GistApiEndpoints<T>;
};
type GistApiEndpoints<T> = {
    // filter keys that are references
    [P in keyof T as T[P] extends ModelReference ? P : never]: string;
};
/**
 * A utility type that takes a Model (eg. DataElement)
 * and returns the gist-api representation of that model
 */
export type GistModel<T> = BaseGist<T> & {
    [P in keyof T]: T[P] extends ModelReference
        ? T[P] extends ModelReferenceCollection
            ? number // map array-references to number (gist shows total in collection)
            : string // map references to a string (gist shows id)
        : T[P];
};

// utility type GistModel can be used like this:
// type DataElementGist = GistModel<
//     Pick<DataElement, "id" | "code" | "categoryCombo" | "legendSets">
// >;

/**
 * A utility type that takes a Model (eg. DataElement)
 * and returns a type with the properties that are references
 * Note that in case of collections, the type of the property will be the type of the items in the collection
 * 
 * Eg. GetReferencedModels<DataElement> will return:
 *  {
*   categoryCombo: CategoryCombo;
    commentOptionSet: OptionSet;
    createdBy: User;
    dataElementGroups: DataElementGroup; // note that this is not a collection
    lastUpdatedBy: User;
    legendSet: LegendSet;
    legendSets: LegendSet; // note that this is not a collection
    optionSet: OptionSet;
    user: User;
}
 */
export type GetReferencedModels<T extends IdentifiableObject> = {
    [P in keyof T as T[P] extends ModelReference
        ? P
        : never]: T[P] extends ModelReferenceCollection ? T[P][number] : T[P];
};

/**
 * Constructs a type by picking the properties of T that are of type V
 */
export type PickValue<T, V> = {
    [P in keyof T as T[P] extends V ? P : never]: T[P];
};

export type PickReferenceProperties<T extends IdentifiableObject> = PickValue<
    T,
    ModelReference
>;

// helper type to get an union of all the values in a type
type Values<T> = T[keyof T];

export type GetReferencedModelsUnion<T extends IdentifiableObject> = Values<
    GetReferencedModels<T>
>;

// helper type for PickInModelReferences
// takes a type and returns the "true" type of the model.
// eg if it's a collection, return the type of the members
// if its not a modeltype, return never
type GetModelType<T> = T extends ModelReference
    ? T extends Array<infer U>
        ? U
        : T
    : never;

// helper type for PickInReferences
// Wraps the type in ModelCollection if FullModel extends ModelReferenceCollection
type MaybeModelCollection<
    ModelType,
    FullModel extends ModelReference
> = FullModel extends ModelReferenceCollection
    ? ModelReferenceCollection<ModelType>
    : ModelType;
/**
 * Utility type that picks the properties (RefProps) from the referenced models (RefModelsUnion) in Model
 *
 * RefModelsUnion can also be omitted to pick the same field from all modelreferences.
 * This can be useful when you want to pick the "id" | "displayName" from all references, for example.
 *
 * @example Pick id, displayName for all references
 * type DataElementWithFilteredRefs = PickInModelReferences<DataElement, "id" | "displayName">
 *
 * @example Pick, id, name, categories for categoryCombo-reference
 * type DataElementWithFilteredRefs = PickInModelReferences<DataElement, "id" | "name" | "categories", DataElement["categoryCombo"]>
 */
export type PickInModelReferences<
    Model extends IdentifiableObject,
    RefProps extends keyof RefModelsUnion,
    // we need union because RefProps above cannot extend keyof Model[P][number]
    RefModelsUnion extends GetReferencedModelsUnion<Model> = GetReferencedModelsUnion<Model>
> = {
    [P in keyof Model]: Model[P] extends ModelReference
        ? // this is needed to be able to use RefModelsUnion to filter which properties the type should appy to
          GetModelType<Model[P]> extends RefModelsUnion
            ? // first extract the correct model-type from the union of referenced models
              // then pick the keys from that type
              // then wrap in modelcollection if Model[P] is a collection
              MaybeModelCollection<
                  Pick<
                      Extract<RefModelsUnion, GetModelType<Model[P]>>,
                      RefProps
                  >,
                  Model[P]
              >
            : // if not reference, do nothing
              Model[P]
        : Model[P];
};
