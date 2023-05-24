/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Access } from './Access';
import type { AttributeValue } from './AttributeValue';
import type { QueryModifiers } from './QueryModifiers';
import type { CategoryOption } from './CategoryOption';
import type { CategoryOptionGroupSet } from './CategoryOptionGroupSet';
import type { LegendSet } from './LegendSet';
import type { User } from './User';
import type { Sharing } from './Sharing';
import type { Translation } from './Translation';

export type CategoryOptionGroup = {
    access: Access;
    aggregationType: CategoryOptionGroup.aggregationType;
    attributeValues: Array<AttributeValue>;
    categoryOptions: Array<CategoryOption>;
    code: string;
    created: string;
    createdBy: User;
    dataDimensionType: CategoryOptionGroup.dataDimensionType;
    description: string;
    dimensionItem: string;
    displayDescription: string;
    displayFormName: string;
    displayName: string;
    displayShortName: string;
    favorite: boolean;
    favorites: Array<string>;
    formName: string;
    groupSets: Array<CategoryOptionGroupSet>;
    href: string;
    id: string;
    lastUpdated: string;
    lastUpdatedBy: User;
    legendSet: LegendSet;
    legendSets: Array<LegendSet>;
    name: string;
    queryMods: QueryModifiers;
    sharing: Sharing;
    shortName: string;
    translations: Array<Translation>;
    user: User;
};

export namespace CategoryOptionGroup {

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

    export enum dataDimensionType {
        DISAGGREGATION = 'DISAGGREGATION',
        ATTRIBUTE = 'ATTRIBUTE',
    }


}

