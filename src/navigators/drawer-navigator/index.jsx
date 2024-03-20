import {DrawerItem} from '@react-navigation/drawer';
import {Icon} from 'react-native-paper';
import {Image, View, SafeAreaView, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SvgXml} from 'react-native-svg';

import {BLACKCOLOR} from '../../theme';
import {logout} from '../../api/userApi';
import {logoSvg} from '../../assets/logo';

import {DRAWER_ITEMS} from './constants';
import {styles} from './styles';

/** @param {any} navigation */ 
export const DrawerContent = ({navigation}) => {
    const handleLogout = async () => {
        const token = await AsyncStorage.getItem('AccessToken');
        if (token) {
            const res = await logout();
            if (res.status === 200) {
                await AsyncStorage.removeItem('AccessToken');
                navigation.navigate('WelcomeScreen');
            }
        }
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
                    source={require('../../assets/default-avatar.png')}
                />
                <Text style={styles.profileName}>Username</Text>
            </View>
            <View style={styles.drawerList}>
                {DRAWER_ITEMS.map((item, index) => {
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
