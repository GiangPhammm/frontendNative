import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './navigators/drawer-navigator';
import {StackNavigator} from './navigators/stack-navigator';

const Drawer = createDrawerNavigator();

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
                <Drawer.Screen name='Dashboard' component={StackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
