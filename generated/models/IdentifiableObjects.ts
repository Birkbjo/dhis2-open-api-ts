import type { BaseIdentifiableObject } from './BaseIdentifiableObject';

export type IdentifiableObjects = {
    additions?: Array<BaseIdentifiableObject>;
    deletions?: Array<BaseIdentifiableObject>;
    identifiableObjects?: Array<BaseIdentifiableObject>;
};
