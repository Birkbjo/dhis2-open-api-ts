/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UID_JobConfiguration } from './UID_JobConfiguration'

export type SchedulerEntryJob = {
    cronExpression: string
    delay: number
    id: UID_JobConfiguration
    name: string
    nextExecutionTime: string
    status: SchedulerEntryJob.status
    type: SchedulerEntryJob.type
}

export namespace SchedulerEntryJob {
    export enum status {
        RUNNING = 'RUNNING',
        COMPLETED = 'COMPLETED',
        STOPPED = 'STOPPED',
        SCHEDULED = 'SCHEDULED',
        DISABLED = 'DISABLED',
        FAILED = 'FAILED',
        NOT_STARTED = 'NOT_STARTED',
    }

    export enum type {
        DATA_STATISTICS = 'DATA_STATISTICS',
        DATA_INTEGRITY = 'DATA_INTEGRITY',
        RESOURCE_TABLE = 'RESOURCE_TABLE',
        ANALYTICS_TABLE = 'ANALYTICS_TABLE',
        CONTINUOUS_ANALYTICS_TABLE = 'CONTINUOUS_ANALYTICS_TABLE',
        DATA_SYNC = 'DATA_SYNC',
        TRACKER_PROGRAMS_DATA_SYNC = 'TRACKER_PROGRAMS_DATA_SYNC',
        EVENT_PROGRAMS_DATA_SYNC = 'EVENT_PROGRAMS_DATA_SYNC',
        FILE_RESOURCE_CLEANUP = 'FILE_RESOURCE_CLEANUP',
        IMAGE_PROCESSING = 'IMAGE_PROCESSING',
        META_DATA_SYNC = 'META_DATA_SYNC',
        AGGREGATE_DATA_EXCHANGE = 'AGGREGATE_DATA_EXCHANGE',
        SMS_SEND = 'SMS_SEND',
        SEND_SCHEDULED_MESSAGE = 'SEND_SCHEDULED_MESSAGE',
        PROGRAM_NOTIFICATIONS = 'PROGRAM_NOTIFICATIONS',
        VALIDATION_RESULTS_NOTIFICATION = 'VALIDATION_RESULTS_NOTIFICATION',
        CREDENTIALS_EXPIRY_ALERT = 'CREDENTIALS_EXPIRY_ALERT',
        MONITORING = 'MONITORING',
        PUSH_ANALYSIS = 'PUSH_ANALYSIS',
        TRACKER_SEARCH_OPTIMIZATION = 'TRACKER_SEARCH_OPTIMIZATION',
        PREDICTOR = 'PREDICTOR',
        DATA_SET_NOTIFICATION = 'DATA_SET_NOTIFICATION',
        REMOVE_USED_OR_EXPIRED_RESERVED_VALUES = 'REMOVE_USED_OR_EXPIRED_RESERVED_VALUES',
        TRACKER_IMPORT_JOB = 'TRACKER_IMPORT_JOB',
        TRACKER_IMPORT_NOTIFICATION_JOB = 'TRACKER_IMPORT_NOTIFICATION_JOB',
        TRACKER_IMPORT_RULE_ENGINE_JOB = 'TRACKER_IMPORT_RULE_ENGINE_JOB',
        MATERIALIZED_SQL_VIEW_UPDATE = 'MATERIALIZED_SQL_VIEW_UPDATE',
        LOCK_EXCEPTION_CLEANUP = 'LOCK_EXCEPTION_CLEANUP',
        LEADER_ELECTION = 'LEADER_ELECTION',
        LEADER_RENEWAL = 'LEADER_RENEWAL',
        COMPLETE_DATA_SET_REGISTRATION_IMPORT = 'COMPLETE_DATA_SET_REGISTRATION_IMPORT',
        DATAVALUE_IMPORT_INTERNAL = 'DATAVALUE_IMPORT_INTERNAL',
        METADATA_IMPORT = 'METADATA_IMPORT',
        DATAVALUE_IMPORT = 'DATAVALUE_IMPORT',
        GEOJSON_IMPORT = 'GEOJSON_IMPORT',
        EVENT_IMPORT = 'EVENT_IMPORT',
        ENROLLMENT_IMPORT = 'ENROLLMENT_IMPORT',
        TEI_IMPORT = 'TEI_IMPORT',
        DISABLE_INACTIVE_USERS = 'DISABLE_INACTIVE_USERS',
        ACCOUNT_EXPIRY_ALERT = 'ACCOUNT_EXPIRY_ALERT',
        SYSTEM_VERSION_UPDATE_CHECK = 'SYSTEM_VERSION_UPDATE_CHECK',
        TEST = 'TEST',
        MOCK = 'MOCK',
        GML_IMPORT = 'GML_IMPORT',
        ANALYTICSTABLE_UPDATE = 'ANALYTICSTABLE_UPDATE',
        PROGRAM_DATA_SYNC = 'PROGRAM_DATA_SYNC',
    }
}
