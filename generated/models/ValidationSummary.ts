/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Ref_DataElementOperand } from './Ref_DataElementOperand';
import type { ValidationResult } from './ValidationResult';

export type ValidationSummary = {
    commentRequiredViolations?: Array<Ref_DataElementOperand>;
    validationRuleViolations?: Array<ValidationResult>;
};

