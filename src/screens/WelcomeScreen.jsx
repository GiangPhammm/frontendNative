import React, {useEffect} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SocialIcon} from 'react-native-elements';

import {BLACKCOLOR, globalStyle} from '../theme';
import {Button} from '../components/button';

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
                    <View style={styles.buttonContainer}>
                        <Button 
                            onPress={() => navigation.navigate('SignupScreen')}
                            title={'Create an account'}
                        />
                    </View>

                    <View style={styles.separator}>
                        <View style={styles.separator_line} />
                        <View>
                            <Text style={styles.separator_text}>or connect with</Text>
                        </View>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    </View>

                    <View style={styles.connect}>
                        <SocialIcon
                            type='google'
                        />
                        <SocialIcon
                            type='facebook'
                        />
                        <SocialIcon
                            type='twitter'
                        />
                    </View>

                    <View style={globalStyle.authHelper}>
                        <Text style={globalStyle.authHelper_text}>By joining you agree to our
                            <Text
                                onPress={() => navigation.navigate('AgbScreen')}
                                style={globalStyle.inlineLink}> Terms & Conditions
                            </Text>
                        </Text>
                        <Text style={globalStyle.authHelper_text}>
                            Already have an account?
                            <Text
                                onPress={() => navigation.navigate('LoginScreen')}
                                style={globalStyle.inlineLink}> Sign in
                            </Text>
                        </Text>
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
        top: '0%',
        margin: '40rem'
    },

    section: {
        position: 'relative',
        alignItems: 'center',
        width: '100%',
        height: '40%',
        top: '70%'
    },

    logo: {
        width: '50%',
        height: '40%',
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
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '20rem',
    },

    separator_line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
    },

    separator_text: {
        width: '130rem',
        textAlign: 'center',
        fontSize: '15rem',
    },

    connect: {
        flexDirection: 'row',
        marginTop: '10rem',
    },
});
