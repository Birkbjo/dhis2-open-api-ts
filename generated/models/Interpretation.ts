import type { Access } from './Access';
import type { AttributeValue } from './AttributeValue';
import type { Mention } from './Mention';
import type { DataSet } from './DataSet';
import type { EventChart } from './EventChart';
import type { EventReport } from './EventReport';
import type { EventVisualization } from './EventVisualization';
import type { InterpretationComment } from './InterpretationComment';
import type { Map } from './Map';
import type { OrganisationUnit } from './OrganisationUnit';
import type { User } from './User';
import type { Visualization } from './Visualization';
import type { Sharing } from './Sharing';
import type { Translation } from './Translation';

export type Interpretation = {
    access?: Access;
    attributeValues?: Array<AttributeValue>;
    code?: string;
    comments?: Array<InterpretationComment>;
    created?: string;
    createdBy?: User;
    dataSet?: DataSet;
    displayName?: string;
    eventChart?: EventChart;
    eventReport?: EventReport;
    eventVisualization?: EventVisualization;
    favorite: boolean;
    favorites?: Array<string>;
    href?: string;
    id?: string;
    lastUpdated?: string;
    lastUpdatedBy?: User;
    likedBy?: Array<User>;
    likes: number;
    map?: Map;
    mentions?: Array<Mention>;
    organisationUnit?: OrganisationUnit;
    period?: string;
    sharing?: Sharing;
    text?: string;
    translations?: Array<Translation>;
    type: Interpretation.type;
    user?: User;
    visualization?: Visualization;
};

export namespace Interpretation {

    export enum type {
        VISUALIZATION = 'VISUALIZATION',
        EVENT_VISUALIZATION = 'EVENT_VISUALIZATION',
        MAP = 'MAP',
        EVENT_REPORT = 'EVENT_REPORT',
        EVENT_CHART = 'EVENT_CHART',
        DATASET_REPORT = 'DATASET_REPORT',
    }


}

