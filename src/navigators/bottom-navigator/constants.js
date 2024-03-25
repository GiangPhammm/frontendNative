import {HomeScreen} from '../../screens/home';
import {MapScreen} from '../../screens/map';
import {ConnectScreen} from '../../screens/connect';
import {MarketScreen} from '../../screens/market';

export const BOTTOM_NAV_ITEMS = [
    {
        name: 'Home',
        icon:'home',
        component: HomeScreen,
    },
    {
        name: 'Map',
        icon:'map',
        component: MapScreen,
    },
    {
        name: 'Connect',
        icon:'account-group',
        component: ConnectScreen,
    },
    {
        name: 'Marketplace',
        icon:'cart',
        component: MarketScreen,
    },
];
