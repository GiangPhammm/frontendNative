import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SignIn} from './src/features/sign-in';
import {SignUp} from './src/features/sign-up';
import {Welcome} from './src/features/welcome';
import {Scanner} from './src/features/camera';

const Stack = createStackNavigator();

const NavStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Signin' component={SignIn} />
            <Stack.Screen name='Signup' component={SignUp} />
            <Stack.Screen name='Scanner' component={Scanner} />
        </Stack.Navigator>
    );
}

export const App = () => {
    return (
        <NavigationContainer>
            <NavStack />
        </NavigationContainer>
    );
}

export default App;
