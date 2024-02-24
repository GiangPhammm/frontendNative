import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import SplashScreen from 'react-native-splash-screen';

import {logoSvg} from '../assets/logo';
import {BLACKCOLOR, WHITECOLOR} from '../theme';

export const WelcomeScreen = (/** @type {any} */ {navigation}) => {
    useEffect(() => {
        SplashScreen.hide();
    });

    const goToLoginScreen = () => {
        navigation.navigate('LoginScreen');
    };

    const goToRegisterScreen = () => {
        navigation.navigate('SignupScreen');
    };

    return (
        <View style={styles.container}>
        <View style={styles.subContainerTwo}>
            <View style={styles.logo}>
                <SvgXml xml={logoSvg} width="100%" height="100%" />
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Care of your</Text>
            <Text style={styles.welcomeText}>little pets</Text>
            </View>
        </View>
        <View style={styles.subContainerThree}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={goToLoginScreen}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.separator}> | </Text>
            <TouchableOpacity style={styles.button} onPress={goToRegisterScreen}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subContainerTwo: {
        flex: 1.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITECOLOR,
        width: '100%',
    },
    subContainerThree: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITECOLOR,
        width: '100%',
    },
    textContainer: {
        width: '100%',
        marginBottom: '3%',
        color: BLACKCOLOR
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: '10%',
        width: '35%',
        height: '35%',
    },
    welcomeText: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: '700',
        color: BLACKCOLOR,
    },
    button: {
        backgroundColor: WHITECOLOR,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: BLACKCOLOR,
        fontSize: 16,
        fontWeight: 'bold',
    },
    separator: {
        marginHorizontal: 5,
        color: BLACKCOLOR,
    },
});
