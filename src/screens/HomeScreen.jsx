// HomeScreen.js
import React from 'react';
import {Button} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

export const HomeScreen = (/** @type {any} */ {navigation}) => {

    return (
        <View style={styles.container}>
        <Button
            mode="contained"
            onPress={() => navigation.navigate('LoginScreen')}
            style={styles.button}
        >
            Login
        </Button>
        <Button
            mode="contained"
            onPress={() => navigation.navigate('SignupScreen')}
            style={styles.button}
        >
            Sign Up
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
    button: {
        margin: 10,
    },
});
