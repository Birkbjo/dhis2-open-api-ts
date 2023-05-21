import type { OrganisationUnitGroup } from './OrganisationUnitGroup';
import type { OrganisationUnitGroupSet } from './OrganisationUnitGroupSet';

export type OrganisationUnitGroupSetDimension = {
    organisationUnitGroupSet?: OrganisationUnitGroupSet;
    organisationUnitGroups?: Array<OrganisationUnitGroup>;
};
