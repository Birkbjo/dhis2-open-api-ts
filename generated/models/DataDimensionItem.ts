import type { DataElement } from './DataElement';
import type { DataElementOperand } from './DataElementOperand';
import type { ExpressionDimensionItem } from './ExpressionDimensionItem';
import type { Indicator } from './Indicator';
import type { ProgramDataElementDimensionItem } from './ProgramDataElementDimensionItem';
import type { ProgramIndicator } from './ProgramIndicator';
import type { ProgramTrackedEntityAttributeDimensionItem } from './ProgramTrackedEntityAttributeDimensionItem';
import type { ReportingRate } from './ReportingRate';
import type { SubexpressionDimensionItem } from './SubexpressionDimensionItem';

export type DataDimensionItem = {
    dataDimensionItemType: DataDimensionItem.dataDimensionItemType;
    dataElement?: DataElement;
    dataElementOperand?: DataElementOperand;
    expressionDimensionItem?: ExpressionDimensionItem;
    indicator?: Indicator;
    programAttribute?: ProgramTrackedEntityAttributeDimensionItem;
    programDataElement?: ProgramDataElementDimensionItem;
    programIndicator?: ProgramIndicator;
    reportingRate?: ReportingRate;
    subexpressionDimensionItem?: SubexpressionDimensionItem;
};

export namespace DataDimensionItem {

    export enum dataDimensionItemType {
        INDICATOR = 'INDICATOR',
        DATA_ELEMENT = 'DATA_ELEMENT',
        DATA_ELEMENT_OPERAND = 'DATA_ELEMENT_OPERAND',
        REPORTING_RATE = 'REPORTING_RATE',
        PROGRAM_INDICATOR = 'PROGRAM_INDICATOR',
        PROGRAM_DATA_ELEMENT = 'PROGRAM_DATA_ELEMENT',
        PROGRAM_ATTRIBUTE = 'PROGRAM_ATTRIBUTE',
        EXPRESSION_DIMENSION_ITEM = 'EXPRESSION_DIMENSION_ITEM',
        SUBEXPRESSION_DIMENSION_ITEM = 'SUBEXPRESSION_DIMENSION_ITEM',
        VALIDATION_RULE = 'VALIDATION_RULE',
    }


}

