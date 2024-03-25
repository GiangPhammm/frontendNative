import React, {useEffect} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import {SocialIcon} from 'react-native-elements';

import {globalStyle} from '../../theme';
import {Button} from '../../components/button';

import {styles} from './styles';

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
            source={require('../../assets/welcome-bg.jpg')}
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
