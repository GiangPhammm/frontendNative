import {useState} from 'react';
import {View, Text, Pressable, SafeAreaView, ScrollView} from 'react-native';
import {SvgXml} from 'react-native-svg';
import EStyleSheet from 'react-native-extended-stylesheet';

import {InputField} from '../components/InputField';
import {Button} from '../components/Button';
import {CheckBox} from '../components/CheckBox';
import {
    SECONDARY_COLOR2,
    BLACKCOLOR,
    globalStyle} from '../theme';
import {logoSvg} from '../assets/logo';

export const SignupScreen = (/** @type {any} */ {navigation}) => {
    // const dispatch = useDispatch<AppDispatch>();

    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // const handleOnPressSignUp = async () => {
    //   try {
    //     setIsLoading(true);
    //     await dispatch(
    //       signup({
    //         email,
    //         username,
    //         password,
    //         passwordConfirmation,
    //       })
    //     ).unwrap();
    
    //     // Successfully signed up, navigate to the MainMenuScreen
    //     navigation.navigate('MainMenuScreen');
    //   } catch (error) {
    //     isApiValidationErrorResponse(error) ? Alert.alert('Error ', error.message) : Alert.alert('Error');
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    return (
        <SafeAreaView style={globalStyle.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={globalStyle.mainContent}>
            <SvgXml xml={logoSvg} width={200} />
            <Text style={globalStyle.heading1}>Join Free</Text>

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
                    console.log('signup')
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
