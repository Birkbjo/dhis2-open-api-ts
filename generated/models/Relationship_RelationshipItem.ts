import type { Event } from './Event';
import type { Program_Enrollment } from './Program_Enrollment';
import type { Relationship_Relationship } from './Relationship_Relationship';
import type { TrackedEntity } from './TrackedEntity';

export type Relationship_RelationshipItem = {
    enrollment?: Program_Enrollment;
    event?: Event;
    relationship?: Relationship_Relationship;
    trackedEntity?: TrackedEntity;
};

