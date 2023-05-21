import type { User } from './User';

export type UserMessage = {
    followUp: boolean;
    key?: string;
    read: boolean;
    user?: User;
};
