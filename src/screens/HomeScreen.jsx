import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import {logout} from '../api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const HomeScreen = (/** @type {any} */ {navigation}) => {
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
        <View style={styles.container}>
            <Button mode='contained' onPress={() => handleLogout()}>
                Logout
            </Button>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});
