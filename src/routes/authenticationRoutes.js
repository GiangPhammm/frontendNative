import {LoginScreen} from '../screens/login/login';

export const authenticationRoutes = {
    loginScreen: {
        name: 'login',
        component: LoginScreen,
        options: {title: 'Welcome', headerShown: false },
    },
};
