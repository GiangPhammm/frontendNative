import AsyncStorage from '@react-native-async-storage/async-storage';

import {loginWithEmailAndPassword} from '../../api/user-api';

/**
 * @param {string} email 
 * @param {string} password 
 */
export const handleLogin = (email, password) => {
    loginWithEmailAndPassword({
        email: email.toLowerCase(),
        password: password
    }).then(async (res) => {
        if (res.status === 200) {
            await AsyncStorage.setItem('AccessToken', res.data.stsTokenManager.accessToken);
        }
    }).catch(error => {
        console.log(error);
    });
}
