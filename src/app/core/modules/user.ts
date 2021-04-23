export interface User {
    role: EUserRole;
    address?: string;
    avatar?: string;
    id?: number;
    latitude?: number;
    longitude?: number;
    name?: string;
    phoneNumber?: string;
}
export enum EUserRole {
    Restaurant = 'Restaurant',
    SuperAdmin = 'SuperAdmin'
}

export type TUserRole = EUserRole.Restaurant | EUserRole.SuperAdmin;
