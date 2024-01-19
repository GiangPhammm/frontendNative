import React, {useState, } from 'react';

import {
    Text,
    View,
    TextInput,
    StyleSheet,
} from 'react-native';

import {Button} from '../button'

import {signin} from './utils';

/** @param {any} navigation */
export const SignIn = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text
                style={styles.headline}
            >
                {'Welcome back'}
            </Text>
            <TextInput
                style={styles.input}
                value={email}
                placeholder={'Email'}
                placeholderTextColor="#000"
                onChangeText={(text) => setEmail(text)}
                autoCapitalize={'none'}
            />
            <TextInput
                style={styles.input}
                value={password}
                placeholder={'Password'}
                placeholderTextColor="#000"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <Button
                title={'Sign In'}
                onPress={() => signin(email, password)}
            />
            <Text
                style={styles.link}
                onPress={() => navigation.navigate('Scanner')}
            >
                {'Scan QR Code'}
            </Text>
            <Text
                style={styles.link}
                onPress={() => navigation.navigate('Signup')}
            >
                {'Sign up'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        backgroundColor: '#d4e1f1'
    },

    headline: {
        fontSize: 20,
        marginBottom: 25,
        color: '#000'
    },

    input: {
        width: 200,
        height: 40,
        marginBottom: 10,
        backgroundColor: '#fff',
    },

    signUpBtn: {
        width: 'auto',
        marginBottom: 20
    },

    link: {
        marginTop: 20,
        color: '#000'
    }
});
