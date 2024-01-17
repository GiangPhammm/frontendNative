import {Alert} from 'react-native';
import {TEST_ACCOUNTS} from './test-accounts'; // Test database


// TODO: Add register API
/**
 * @param {string} username 
 * @param {string} password 
 */
export const register = (username, password) => {
    let userExist = false;
    if (!username || !password) {
        Alert.alert(
            'Please fill in required fields',
        );
    }

    if (username && password) {
        TEST_ACCOUNTS.forEach((account) => {
            if (username === account.username) {
                userExist = true;
            }
        })

        if (userExist) {
            Alert.alert(
                'Username already exists',
            );
        } else {
            Alert.alert(
                'Success!',
                `User ${username} was successfully created!`,
            );
        }
    }
};
