import { IMenuItem } from '../modules/menu-item';

export const MENU_ITEM: IMenuItem[] = [
    { label: 'Log', path: 'transaction-log', icon: 'transaction', roles: [] },
    { label: 'Approvals', path: '/approvals', icon: 'file-text', roles: [] },
    { label: 'Playlist', path: '/playlist', icon: 'play-square', roles: [] },
    { label: 'Statistics', path: '/statistics', icon: 'bar-chart', roles: [] },
    { label: 'Song queue', path: '/songQueue', icon: 'sound', roles: [] },
    { label: 'Offers', path: '/offers', icon: 'issues-close', roles: [] },
    { label: 'Settings', path: '#', icon: 'setting', roles: [] },
];
