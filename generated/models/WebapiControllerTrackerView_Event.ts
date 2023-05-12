/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebapiControllerTrackerView_DataValue } from './WebapiControllerTrackerView_DataValue';
import type { WebapiControllerTrackerView_Note } from './WebapiControllerTrackerView_Note';
import type { WebapiControllerTrackerView_Relationship } from './WebapiControllerTrackerView_Relationship';
import type { WebapiControllerTrackerView_User } from './WebapiControllerTrackerView_User';

export type WebapiControllerTrackerView_Event = {
    assignedUser?: WebapiControllerTrackerView_User;
    attributeCategoryOptions?: string;
    attributeOptionCombo?: string;
    completedAt?: (string | number);
    completedBy?: string;
    createdAt?: (string | number);
    createdAtClient?: (string | number);
    createdBy?: WebapiControllerTrackerView_User;
    dataValues?: Array<WebapiControllerTrackerView_DataValue>;
    deleted: boolean;
    enrollment?: string;
    event?: string;
    followup: boolean;
    geometry?: Record<string, any>;
    notes?: Array<WebapiControllerTrackerView_Note>;
    occurredAt?: (string | number);
    orgUnit?: string;
    orgUnitName?: string;
    program?: string;
    programStage?: string;
    relationships?: Array<WebapiControllerTrackerView_Relationship>;
    scheduledAt?: (string | number);
    status: WebapiControllerTrackerView_Event.status;
    storedBy?: string;
    trackedEntity?: string;
    updatedAt?: (string | number);
    updatedAtClient?: (string | number);
    updatedBy?: WebapiControllerTrackerView_User;
};

export namespace WebapiControllerTrackerView_Event {

    export enum status {
        ACTIVE = 'ACTIVE',
        COMPLETED = 'COMPLETED',
        VISITED = 'VISITED',
        SCHEDULE = 'SCHEDULE',
        OVERDUE = 'OVERDUE',
        SKIPPED = 'SKIPPED',
    }


}

