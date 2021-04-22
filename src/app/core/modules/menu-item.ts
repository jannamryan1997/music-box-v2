import { TUserRole } from './user';

export interface IMenuItem {
    label: string;
    path: string;
    icon: string;
    roles: TUserRole[];
}

