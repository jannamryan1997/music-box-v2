import { IMenuItem } from '../modules/menu-item';
import { EUserRole } from '../modules/user';

export const MENU_ITEM: IMenuItem[] = [
    { label: 'Log', path: 'transaction-log', icon: 'transaction', roles: [EUserRole.SuperAdmin] },
    { label: 'Approvals', path: '/approvals', icon: 'file-text', roles: [EUserRole.SuperAdmin] },
    { label: 'Song queue', path: '/songQueue', icon: 'sound', roles: [EUserRole.Restaurant] },
    { label: 'Statistics', path: '/statistics', icon: 'bar-chart', roles: [EUserRole.SuperAdmin, EUserRole.Restaurant] },
    { label: 'Playlist', path: '/playlist', icon: 'play-square', roles: [EUserRole.SuperAdmin, EUserRole.Restaurant] },
    { label: 'Recommendation', path: '/recommendation', icon: 'issues-close', roles: [EUserRole.Restaurant] },
    { label: 'Settings', path: '#', icon: 'setting', roles: [EUserRole.SuperAdmin, EUserRole.Restaurant] },
    { label: 'Log out', path: 'home', icon: 'logout', roles: [EUserRole.SuperAdmin, EUserRole.Restaurant] }
];
