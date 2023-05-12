import type { Access } from './Access';
import type { AttributeValue } from './AttributeValue';
import type { DimensionItemKeywords } from './DimensionItemKeywords';
import type { EventRepetition } from './EventRepetition';
import type { DimensionalItemObject } from './DimensionalItemObject';
import type { OptionSet } from './OptionSet';
import type { User } from './User';
import type { Sharing } from './Sharing';
import type { Translation } from './Translation';

export type DimensionalObject = {
    access?: Access;
    aggregationType: DimensionalObject.aggregationType;
    allItems: boolean;
    analyticsType: DimensionalObject.analyticsType;
    attributeValues?: Array<AttributeValue>;
    code?: string;
    created?: string;
    createdBy?: User;
    dataDimension: boolean;
    dataDimensionType: DimensionalObject.dataDimensionType;
    description?: string;
    dimension?: string;
    dimensionDisplayName?: string;
    dimensionItemKeywords?: DimensionItemKeywords;
    dimensionName?: string;
    dimensionType: DimensionalObject.dimensionType;
    displayDescription?: string;
    displayName?: string;
    displayShortName?: string;
    eventRepetition?: EventRepetition;
    favorite: boolean;
    favorites?: Array<string>;
    filter?: string;
    fixed: boolean;
    groupUUID?: string;
    href?: string;
    id: number;
    items?: Array<DimensionalItemObject>;
    key?: string;
    lastUpdated?: string;
    lastUpdatedBy?: User;
    legendSet: boolean;
    name?: string;
    optionSet?: OptionSet;
    programStage: boolean;
    sharing?: Sharing;
    shortName?: string;
    translations?: Array<Translation>;
    uid?: string;
    user?: User;
    valueType: DimensionalObject.valueType;
};

export namespace DimensionalObject {

    export enum aggregationType {
        SUM = 'SUM',
        AVERAGE = 'AVERAGE',
        AVERAGE_SUM_ORG_UNIT = 'AVERAGE_SUM_ORG_UNIT',
        LAST = 'LAST',
        LAST_AVERAGE_ORG_UNIT = 'LAST_AVERAGE_ORG_UNIT',
        LAST_LAST_ORG_UNIT = 'LAST_LAST_ORG_UNIT',
        LAST_IN_PERIOD = 'LAST_IN_PERIOD',
        LAST_IN_PERIOD_AVERAGE_ORG_UNIT = 'LAST_IN_PERIOD_AVERAGE_ORG_UNIT',
        FIRST = 'FIRST',
        FIRST_AVERAGE_ORG_UNIT = 'FIRST_AVERAGE_ORG_UNIT',
        FIRST_FIRST_ORG_UNIT = 'FIRST_FIRST_ORG_UNIT',
        COUNT = 'COUNT',
        STDDEV = 'STDDEV',
        VARIANCE = 'VARIANCE',
        MIN = 'MIN',
        MAX = 'MAX',
        MIN_SUM_ORG_UNIT = 'MIN_SUM_ORG_UNIT',
        MAX_SUM_ORG_UNIT = 'MAX_SUM_ORG_UNIT',
        NONE = 'NONE',
        CUSTOM = 'CUSTOM',
        DEFAULT = 'DEFAULT',
    }

    export enum analyticsType {
        AGGREGATE = 'AGGREGATE',
        EVENT = 'EVENT',
    }

    export enum dataDimensionType {
        DISAGGREGATION = 'DISAGGREGATION',
        ATTRIBUTE = 'ATTRIBUTE',
    }

    export enum dimensionType {
        DATA_X = 'DATA_X',
        PROGRAM_DATA_ELEMENT = 'PROGRAM_DATA_ELEMENT',
        PROGRAM_ATTRIBUTE = 'PROGRAM_ATTRIBUTE',
        PROGRAM_INDICATOR = 'PROGRAM_INDICATOR',
        DATA_COLLAPSED = 'DATA_COLLAPSED',
        CATEGORY_OPTION_COMBO = 'CATEGORY_OPTION_COMBO',
        ATTRIBUTE_OPTION_COMBO = 'ATTRIBUTE_OPTION_COMBO',
        PERIOD = 'PERIOD',
        ORGANISATION_UNIT = 'ORGANISATION_UNIT',
        CATEGORY_OPTION_GROUP_SET = 'CATEGORY_OPTION_GROUP_SET',
        DATA_ELEMENT_GROUP_SET = 'DATA_ELEMENT_GROUP_SET',
        ORGANISATION_UNIT_GROUP_SET = 'ORGANISATION_UNIT_GROUP_SET',
        ORGANISATION_UNIT_GROUP = 'ORGANISATION_UNIT_GROUP',
        CATEGORY = 'CATEGORY',
        OPTION_GROUP_SET = 'OPTION_GROUP_SET',
        VALIDATION_RULE = 'VALIDATION_RULE',
        STATIC = 'STATIC',
        ORGANISATION_UNIT_LEVEL = 'ORGANISATION_UNIT_LEVEL',
    }

    export enum valueType {
        TEXT = 'TEXT',
        LONG_TEXT = 'LONG_TEXT',
        MULTI_TEXT = 'MULTI_TEXT',
        LETTER = 'LETTER',
        PHONE_NUMBER = 'PHONE_NUMBER',
        EMAIL = 'EMAIL',
        BOOLEAN = 'BOOLEAN',
        TRUE_ONLY = 'TRUE_ONLY',
        DATE = 'DATE',
        DATETIME = 'DATETIME',
        TIME = 'TIME',
        NUMBER = 'NUMBER',
        UNIT_INTERVAL = 'UNIT_INTERVAL',
        PERCENTAGE = 'PERCENTAGE',
        INTEGER = 'INTEGER',
        INTEGER_POSITIVE = 'INTEGER_POSITIVE',
        INTEGER_NEGATIVE = 'INTEGER_NEGATIVE',
        INTEGER_ZERO_OR_POSITIVE = 'INTEGER_ZERO_OR_POSITIVE',
        TRACKER_ASSOCIATE = 'TRACKER_ASSOCIATE',
        USERNAME = 'USERNAME',
        COORDINATE = 'COORDINATE',
        ORGANISATION_UNIT = 'ORGANISATION_UNIT',
        REFERENCE = 'REFERENCE',
        AGE = 'AGE',
        URL = 'URL',
        FILE_RESOURCE = 'FILE_RESOURCE',
        IMAGE = 'IMAGE',
        GEOJSON = 'GEOJSON',
    }


}

