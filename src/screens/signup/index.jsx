import {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {SvgXml} from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {InputField} from '../../components/input-field';
import {Button} from '../../components/button';
import {CheckBox} from '../../components/checkbox';
import {globalStyle} from '../../theme';
import {logoSvg} from '../../assets/logo';
import {signupWithEmailAndPassword} from '../../api/user-api';

import {styles} from './styles';

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
                    <Text style={globalStyle.heading1}>Hi there!</Text>

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
                    </View>

                    <View style={styles.agb}>
                        <CheckBox
                            isChecked={checked}
                            title={'By joining you agree to our'}
                            action={() => setChecked(!checked)}
                        />
                        <Text
                            style={styles.agbLink}
                            onPress={() => navigation.navigate('AgbScreen')}
                        >
                            {' Term & Condition'}
                        </Text>
                    </View>

                    <View style={styles.buttonSection}>
                        {isLoading ? 
                            <Text>signing up ...</Text>
                            :
                            <Button onPress={() => {
                                setIsLoading(true);
                                handleSignup();
                            }} title={'Register'} />
                        }
                    </View>

                    <View style={globalStyle.authHelper}>
                        <Text style={globalStyle.authHelper_text}>
                            Already have an account?
                            <Text
                                onPress={() => navigation.navigate('LoginScreen')}
                                style={globalStyle.inlineLink}> Sign in
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
