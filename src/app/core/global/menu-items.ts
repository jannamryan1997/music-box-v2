import { IMenuItem } from '../modules/menu-item';

export const MENU_ITEM: IMenuItem[] = [
    { label: 'Log', path: 'transaction-log', icon: 'play-circle', roles: [] },
    { label: 'Approvals', path: '/approvals', icon: 'play-circle', roles: [] },
    { label: 'Playlist', path: '/playlist', icon: 'font-colors', roles: [] },
    { label: 'Statistics', path: '/statistics', icon: 'coffee', roles: [] },
    { label: 'Settings', path: '#', icon: 'usergroup-add', roles: [] },
    { label: 'Song queue', path: '/songQueue', icon: 'logout', roles: [] },
    { label: 'Offers', path: '/offers', icon: 'logout', roles: [] },
];
