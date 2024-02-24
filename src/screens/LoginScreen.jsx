import React, {useState} from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {SvgXml} from 'react-native-svg';
import EStyleSheet from 'react-native-extended-stylesheet';

import {InputField} from '../components/InputField';
import {Button} from '../components/Button';
import {PRIMARYCOLOR, globalStyle} from '../theme';
import {logoSvg} from '../assets/logo';

export const LoginScreen = (/** @type {any} */ {navigation}) => {
    // const dispatch = useDispatch();
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // const handleOnPressLogin = async () => {
    //     try {
    //     setIsLoading(true);
    //     const loginResultSucceeded = await dispatch(signin({emailOrUsername, password })).unwrap();
    //     await Keychain.setGenericPassword('jwtToken', loginResultSucceeded.jwtToken);
    //     navigation.navigate('MainMenuScreen');
    //     } catch (error) {
    //     isApiValidationErrorResponse(error) ? Alert.alert('Error ', error.message) : Alert.alert('Error');
    //     } finally {
    //     setIsLoading(false);
    //     }
    // };

    return (
        <SafeAreaView style={globalStyle.container}>
        <View style={globalStyle.mainContent}>
            <SvgXml xml={logoSvg} width={200} />

            <Text style={globalStyle.heading1}>Welcome back!</Text>

            <View style={styles.intro}>
            </View>

            <View style={globalStyle.section}>
            <InputField
                placeholder={'Email address or username'}
                value={emailOrUsername}
                action={text => setEmailOrUsername(text)}
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
                    console.log('loggedIn')
                    setIsLoading(true)
                }}
                    title={'Login'} />
            )}
            </View>

            <Text style={styles.text}> Don't have an account?
                <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.inlineLink}> Sign up</Text>
                </Pressable>
            </Text>
        </View>
        </SafeAreaView>
    );
};

const styles = EStyleSheet.create({
    intro: {
        marginTop: '10rem',
    },

    buttonSection: {
        marginTop: '15rem',
    },

    checkboxWrapper: {
        width: '100%',
    },

    checkbox: {
        width: 2,
    },
    
    inlineLink: {
        top: '6rem',
        fontSize: '15rem',
        color: PRIMARYCOLOR
    },

    text: {
        marginTop: '20rem',
        fontSize: '15rem',
    }
});
