/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImportConflict } from './ImportConflict'

export type ImportConflicts = {
    conflictCount: number
    conflicts: Array<ImportConflict>
    conflictsDescription: string
    totalConflictOccurrenceCount: number
}
