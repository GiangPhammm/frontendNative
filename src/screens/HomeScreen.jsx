import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/authSlice';
import * as Keychain from 'react-native-keychain';


export const HomeScreen = (/** @type {any} */ {navigation}) => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await Keychain.resetGenericPassword();
        dispatch(logout());
        navigation.navigate('WelcomeScreen');
    };

    return (
        <View style={styles.container}>
            <Button mode='contained' onPress={handleLogout}>
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
