/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileResource } from './FileResource';
import type { OrganisationUnit } from './OrganisationUnit';
import type { User } from './User';
import type { UserGroup } from './UserGroup';

export type WebapiWebdomain_MessageConversation = {
    attachments: Array<FileResource>;
    organisationUnits: Array<OrganisationUnit>;
    subject: string;
    text: string;
    userGroups: Array<UserGroup>;
    users: Array<User>;
};

