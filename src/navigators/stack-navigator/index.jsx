import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {WelcomeScreen} from '../../screens/WelcomeScreen';
import {AgbScreen} from '../../screens/AgbScreen';
import {LoginScreen} from '../../screens/LoginScreen';
import {SignupScreen} from '../../screens/SignupScreen';
import {PRIMARYCOLOR, MAIN_BG_COLOR} from '../../theme';
import {Header} from '../header';

import {BottomTabNavigator} from '../bottom-navigator';


const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
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

            <Stack.Screen
                name='HomeScreen'
                component={BottomTabNavigator}
                options={Header}
            />

        </Stack.Navigator>
    )
}