import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {HomeScreen} from './screens/HomeScreen';
import {WelcomeScreen} from './screens/WelcomeScreen';
import {AgbScreen} from './screens/AgbScreen';
import {LoginScreen} from './screens/LoginScreen';
import {SignupScreen} from './screens/SignupScreen';
import {PRIMARYCOLOR, MAIN_BG_COLOR} from './theme';

import { Header } from './components/Header';
import { DrawerContent } from './components/DrawerContent';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='WelcomeScreen'
                component={WelcomeScreen}
                options={{
                title: '',
                headerShown: false,
                }}
            />
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{
                title: '',
                headerShadowVisible: false,
                headerTintColor: PRIMARYCOLOR,
                headerStyle: {
                    backgroundColor: MAIN_BG_COLOR,
                },
                }}
            />
            <Stack.Screen
                name='SignupScreen'
                component={SignupScreen}
                options={{
                title: '',
                headerShadowVisible: false,
                headerTintColor: PRIMARYCOLOR,
                headerStyle: {
                    backgroundColor: MAIN_BG_COLOR,
                },
                }}
            />
            <Stack.Screen name='AgbScreen' component={AgbScreen} />

            {/* Group of screens that share the same header */}
            <Stack.Group
                screenOptions={Header}
            >
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                    options={{title: ''}}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName='Dashboard'
                screenOptions={{
                headerShown: false,
                drawerType: 'front',
                }}
                drawerContent={() => <DrawerContent />}
            >
                <Drawer.Screen name='Dashboard' component={StackNav} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
