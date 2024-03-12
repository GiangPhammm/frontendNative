import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {Text} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import EStyleSheet from 'react-native-extended-stylesheet';

import {logoSvg} from '../assets/logo';
import {BLACKCOLOR} from '../theme';

export const WelcomeScreen = (/** @type {any} */ {navigation}) => {
    const fetchUserToken = async () => {
        const token = await AsyncStorage.getItem('AccessToken');
        if (token) {
            navigation.replace('HomeScreen');
        }
    }

    useEffect(() => {
        SplashScreen.hide();
        fetchUserToken();
    })

    return (
        <ImageBackground 
            source={require('../assets/welcome-bg.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.section}>
                    <View style={styles.logo}>
                        <SvgXml xml={logoSvg} width="100%" height="100%" />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.welcomeText}>Care of your</Text>
                        <Text style={styles.welcomeText}>little pets</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('LoginScreen')}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <Text style={styles.separator}> | </Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('SignupScreen')}
                        >
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = EStyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '30%'
    },

    section: {
        position: 'relative',
        alignItems: 'center',
        width: '100%',
    },

    logo: {
        width: '50%',
        height: '40%',
    },

    textContainer: {
        width: '100%',
        color: BLACKCOLOR
    },

    welcomeText: {
        fontSize: '40rem',
        textAlign: 'center',
        fontWeight: '700',
        color: BLACKCOLOR,
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    buttonText: {
        color: BLACKCOLOR,
        fontSize: '18rem',
        fontWeight: '700',
    },

    separator: {
        marginHorizontal: '5rem',
        color: BLACKCOLOR,
    },
});
