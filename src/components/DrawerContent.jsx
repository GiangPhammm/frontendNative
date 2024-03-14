import {DrawerItem} from '@react-navigation/drawer';
import {Icon} from 'react-native-paper';
import {Image, View, SafeAreaView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {BLACKCOLOR} from '../theme';
import {logout} from '../api/userApi';

const drawerList = [
  {
    label: 'Profile',
    icon:'account-outline',
    component: 'ProfileScreen',
  },
  {
    label: 'Settings & Privacy',
    icon:'cog-outline',
    component: 'SettingsScreen',
  },
  {
    label: 'Imprint',
    icon:'book-outline',
    component: 'TocScreen',
  },
  {
    label: 'Help & Support',
    icon:'help-circle-outline',
    component: 'HelpScreen',
  },
];

/** @param {any} navigation */ 
export const DrawerContent = ({navigation}) => {
    const handleLogout = async () => {
        const token = await AsyncStorage.getItem('AccessToken');
        if (token) {
            const res = await logout();
            if (res.status === 200) {
                await AsyncStorage.removeItem('AccessToken');
            }
        }
        navigation.navigate('WelcomeScreen');
};

  return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.profileImage}
                source={require('../assets/default-avatar.png')}
            />
            <View style={styles.drawerList}>
                {drawerList.map((item, index) => {
                    return (
                        <DrawerItem
                            labelStyle={{
                                fontSize: 18,
                                color: BLACKCOLOR,
                                marginLeft: -15
                            }}
                            key={index}
                            icon={() => 
                                <Icon
                                    source={item.icon}
                                    color={BLACKCOLOR}
                                    size={30}
                                />
                            }
                            label={item.label}
                            onPress={() => {
                                //@ts-ignore
                                navigation.navigate(item?.component)
                            }}
                        />
                    )
                })}
            </View>

            <View style={styles.logoutButton}>
                <DrawerItem
                    labelStyle={{
                        fontSize: 18,
                        color: BLACKCOLOR,
                        marginLeft: -15,
                    }}
                    icon={() => 
                        <Icon
                            source='logout'
                            color={BLACKCOLOR}
                            size={30}
                        />
                    }
                    label='Logout'
                    onPress={() => handleLogout()}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        marginHorizontal: '10rem',
        marginTop: '30rem',
        marginBottom: '10rem',
        justifyContent: 'space-between',
    },

    profileImage: {
        width: '50rem',
        height: '50rem',
        marginLeft: '22rem',
        marginTop: '30rem',
    },

    drawerList: {
        marginTop: '20rem',
    },

    logoutButton: {
        position: 'relative',
        marginTop: 'auto',
    }
});