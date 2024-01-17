import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SignUp} from './src/features/sign-up';
import {Welcome} from './src/features/welcome';

const Stack = createStackNavigator();

const NavStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Signup' component={SignUp} />
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
