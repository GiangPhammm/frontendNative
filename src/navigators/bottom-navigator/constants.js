import {HomeScreen} from '../../screens/HomeScreen';
import {MapScreen} from '../../screens/MapScreen';
import {ConnectScreen} from '../../screens/ConnectScreen';
import {MarketScreen} from '../../screens/MarketScreen';

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
