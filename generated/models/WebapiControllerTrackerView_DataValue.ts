/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebapiControllerTrackerView_User } from './WebapiControllerTrackerView_User';

export type WebapiControllerTrackerView_DataValue = {
    createdAt?: (string | number);
    createdBy?: WebapiControllerTrackerView_User;
    dataElement?: string;
    providedElsewhere: boolean;
    storedBy?: string;
    updatedAt?: (string | number);
    updatedBy?: WebapiControllerTrackerView_User;
    value?: string;
};

