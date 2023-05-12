import type { Access } from './Access';
import type { AttributeValue } from './AttributeValue';
import type { User } from './User';
import type { Sharing } from './Sharing';
import type { Translation } from './Translation';

export type IdentifiableObject = {
    access?: Access;
    attributeValues?: Array<AttributeValue>;
    code?: string;
    created?: string;
    createdBy?: User;
    displayName?: string;
    favorite: boolean;
    favorites?: Array<string>;
    href?: string;
    id: number;
    lastUpdated?: string;
    lastUpdatedBy?: User;
    name?: string;
    sharing?: Sharing;
    translations?: Array<Translation>;
    uid?: string;
    user?: User;
};

