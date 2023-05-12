/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebapiControllerTrackerView_RelationshipItem } from './WebapiControllerTrackerView_RelationshipItem';

export type WebapiControllerTrackerView_Relationship = {
    bidirectional: boolean;
    createdAt?: (string | number);
    from?: WebapiControllerTrackerView_RelationshipItem;
    relationship?: string;
    relationshipName?: string;
    relationshipType?: string;
    to?: WebapiControllerTrackerView_RelationshipItem;
    updatedAt?: (string | number);
};

