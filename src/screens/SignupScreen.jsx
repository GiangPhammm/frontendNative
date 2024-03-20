import {useState} from 'react';
import {View, Text, Pressable, SafeAreaView, ScrollView} from 'react-native';
import {SvgXml} from 'react-native-svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {InputField} from '../components/input-field';
import {Button} from '../components/button';
import {CheckBox} from '../components/checkbox';
import {
    SECONDARY_COLOR2,
    BLACKCOLOR,
    globalStyle} from '../theme';
import {logoSvg} from '../assets/logo';
import {signupWithEmailAndPassword} from '../api/userApi';

export const SignupScreen = (/** @type {any} */ {navigation}) => {
    // const dispatch = useDispatch<AppDispatch>();

    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = () => {
        signupWithEmailAndPassword({
            username: username,
            email: email,
            password: password,
            passwordConfirmation: passwordConfirmation,
        }).then(async (res) => {
            if (res.status === 200) {
                await AsyncStorage.setItem('AccessToken', res.data.user.stsTokenManager.accessToken);
                navigation.navigate('HomeScreen');
            }
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <SafeAreaView style={globalStyle.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={globalStyle.mainContent}>
            <SvgXml xml={logoSvg} width={200} />
            <Text style={globalStyle.heading1}>Create an account</Text>

            <View style={globalStyle.section}>
                <InputField
                    placeholder={'Email'}
                    value={email}
                    action={text => setEmail(text)}
                />
                <InputField
                    placeholder={'Username'}
                    value={username}
                    action={text => setUsername(text)}
                />
                <InputField
                    placeholder={'Password'}
                    value={password}
                    action={text => setPassword(text)}
                    isPassword
                />
                <InputField
                    placeholder={'Confirm Password'}
                    value={passwordConfirmation}
                    action={text => setPasswordConfirmation(text)}
                    isPassword
                />

                <Text>
                <CheckBox
                    isChecked={checked}
                    title={'By joining you agree to our'}
                    action={() => setChecked(!checked)}
                />
                <Pressable
                    onPress={() => navigation.navigate('AgbScreen')}
                >
                    <Text style={styles.agbLink}>
                    {' Term & Condition'}
                    </Text>
                </Pressable>
                </Text>
            </View>

            <View style={styles.buttonSection}>
                {isLoading ? (
                <Text>signing up ...</Text>
                ) : (
                <Button onPress={() => {
                    setIsLoading(true);
                    handleSignup();
                }} title={'Register'} />
                )}
                <Text style={styles.text}>
                or
                <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.inlineLink}> Login</Text>
                </Pressable>
                </Text>
            </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};

const styles = EStyleSheet.create({
    buttonSection: {
        marginTop: '15rem',
    },

    checkbox: {
        width: '2rem',
    },

    text: {
        fontSize: '18rem',
        fontWeight: '400',
        lineHeight: '22.4rem',
        textAlign: 'center',
        marginTop: '15rem',
        color: BLACKCOLOR
    },

    agbLink: {
        bottom: '1rem',
        fontSize: '13rem', 
        color: SECONDARY_COLOR2,
        fontWeight: '700',
    },

    inlineLink: {
        top: '4rem',
        fontSize: '18rem',
        color: BLACKCOLOR
    },
});
