import React, {useState, } from 'react';

import {
    Text,
    View,
    TextInput,
    StyleSheet,
} from 'react-native';

import {Button} from '../button'

import {register} from './utils';

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text
                style={styles.headline}
            >
                {'Create an account'}
            </Text>
            <TextInput
                style={styles.input}
                value={username}
                placeholder={'Username'}
                placeholderTextColor="#000"
                onChangeText={(text) => setUsername(text)}
                autoCapitalize={'none'}
            />
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
                title={'Sign Up'}
                onPress={() => register(username, email, password)}
            />
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
        color: '#000',
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
    }

});
