import type { Access } from './Access';
import type { AttributeValue } from './AttributeValue';
import type { User } from './User';
import type { Sharing } from './Sharing';
import type { Translation } from './Translation';

export type Document = {
    access?: Access;
    attachment?: boolean;
    attributeValues?: Array<AttributeValue>;
    code?: string;
    contentType?: string;
    created?: string;
    createdBy?: User;
    displayName?: string;
    external: boolean;
    favorite: boolean;
    favorites?: Array<string>;
    href?: string;
    id?: string;
    lastUpdated?: string;
    lastUpdatedBy?: User;
    name?: string;
    sharing?: Sharing;
    translations?: Array<Translation>;
    url?: string;
    user?: User;
};

