import React, {useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SocialIcon} from 'react-native-elements';

import {InputField} from '../../components/input-field';
import {Button} from '../../components/button';
import {globalStyle} from '../../theme';
import {logoSvg} from '../../assets/logo';
import {
    authenticateWithGoogle,
    loginWithEmailAndPassword,
} from '../../api/user-api';

import {styles} from './styles';

/** @param {any} navigation */ 
export const LoginScreen = ({navigation}) => {
    // const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        loginWithEmailAndPassword({
            email: email.toLowerCase(),
            password: password
        }).then(async (res) => {
            if (res.status === 200) {
                await AsyncStorage.setItem('AccessToken', res.data.stsTokenManager.accessToken);
                navigation.navigate('HomeScreen');
            }
        })
    }

    // TODO: handle backend here
    const handleAuthWithGoogle = () => {
        authenticateWithGoogle().then(async (res) => {
            if (res.status === 200) {
                await AsyncStorage.setItem('AccessToken', res.token);
                navigation.navigate('HomeScreen');
            }
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <SafeAreaView style={globalStyle.container}>
            <View style={globalStyle.mainContent}>
                <SvgXml xml={logoSvg} width={200} />

                <Text style={globalStyle.heading1}>Welcome back!</Text>

                <View style={styles.connect}>
                    <SocialIcon
                        type='google'
                        onPress={() => handleAuthWithGoogle()}
                    />
                    <SocialIcon
                        type='facebook'
                    />
                    <SocialIcon
                        type='twitter'
                    />
                </View>

                <View style={styles.separator}>
                    <View style={styles.separator_line} />
                    <View>
                        <Text style={styles.separator_text}>or</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>


                <View style={globalStyle.section}>
                    <InputField
                        placeholder={'Email address'}
                        value={email}
                        action={text => setEmail(text)}
                    />
                    <InputField
                        placeholder={'Password'}
                        value={password}
                        action={text => setPassword(text)}
                        isPassword
                    />
                </View>

                <View style={styles.buttonSection}>
                {isLoading ? (
                    <Text>logging in ....</Text>
                ) : (
                    <Button onPress={() => {
                        handleLogin();
                        setIsLoading(true);
                    }}
                        title={'Login'} />
                )}
                </View>

                <View style={globalStyle.authHelper}>
                    <Text style={globalStyle.authHelper_text}>
                        <Text
                            style={globalStyle.inlineLink}
                            onPress={() => navigation.navigate('WelcomeScreen')}
                        > Forgot password?
                        </Text>
                    </Text>

                    <Text style={globalStyle.authHelper_text}>
                        Don't have an account?
                        <Text
                            style={globalStyle.inlineLink}
                            onPress={() => navigation.navigate('WelcomeScreen')}
                        > Sign up
                        </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

