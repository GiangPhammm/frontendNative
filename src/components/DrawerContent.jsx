import {DrawerItem} from '@react-navigation/drawer';
import {Icon} from 'react-native-paper';
import {Image, View, SafeAreaView, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SvgXml} from 'react-native-svg';

import {BLACKCOLOR} from '../theme';
import {logout} from '../api/userApi';
import {logoSvg} from '../assets/logo';

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
            <View style={styles.logo}>
                <SvgXml
                    xml={logoSvg}
                    width={130}
                    height={50}      
                />
            </View>

            <View style={styles.profile}>
                <Image
                    style={styles.profileImage}
                    source={require('../assets/default-avatar.png')}
                />
                <Text style={styles.profileName}>Username</Text>
            </View>
            <View style={styles.drawerList}>
                {drawerList.map((item, index) => {
                    return (
                        <DrawerItem
                            labelStyle={{
                                fontSize: 18,
                                color: BLACKCOLOR,
                                marginLeft: -20
                            }}
                            key={index}
                            icon={() => 
                                <Icon
                                    source={item.icon}
                                    color={BLACKCOLOR}
                                    size={25}
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
                        marginLeft: -20,
                    }}
                    icon={() => 
                        <Icon
                            source='logout'
                            color={BLACKCOLOR}
                            size={25}
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
        marginHorizontal: '10rem',
    },

    logo: {
        alignItems: 'center',
    },

    profile: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '20rem',
        marginTop: '30rem',
        alignItems: 'center', 
    },

    profileImage: {
        width: '50rem',
        height: '50rem',
    },

    profileName: {
        fontSize: '18rem',
        fontWeight: '700',
        marginLeft: '10rem',
    },

    drawerList: {
        marginTop: '20rem',
    },

    logoutButton: {
        position: 'relative',
        marginTop: 'auto',
    }
});