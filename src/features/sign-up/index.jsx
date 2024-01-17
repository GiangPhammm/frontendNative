import React, {useState} from 'react';
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
                onChangeText={(text) => setUsername(text)}
                autoCapitalize={'none'}
            />
            <TextInput
                style={styles.input}
                value={password}
                placeholder={'Password'}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <Button
                style={styles.signUpBtn}
                title={'Sign Up'}
                onPress={() => register(username, password)}
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
        fontWeight: 700,
        marginBottom: 25,
    },

    input: {
        width: 200,
        height: 40,
        marginBottom: 10,
        backgroundColor: '#fff',
    },

    signUpBtn: {
        width: 'auto',
    }

});