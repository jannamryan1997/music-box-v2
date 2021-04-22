export interface User {
    role: EUserRole;
}
export enum EUserRole {
    Restaurant = 'Restaurant',
    SuperAdmin = 'SuperAdmin'
}

export type TUserRole = EUserRole.Restaurant  | EUserRole.SuperAdmin;
