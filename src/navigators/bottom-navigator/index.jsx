import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-paper';

import {BOTTOM_NAV_ITEMS} from './constants';
import {PRIMARYCOLOR} from '../../theme';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                {BOTTOM_NAV_ITEMS.map((item) => {
                    if (route.name === item.name) {
                        iconName = focused ? item.icon : `${item.icon}-outline`;
                    }
                })}

                return <Icon source={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: PRIMARYCOLOR,
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
        })}
      >
            {BOTTOM_NAV_ITEMS.map((item, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={item.name}
                        component={item.component}
                    />
                )
            })}
        </Tab.Navigator>
    );
}
