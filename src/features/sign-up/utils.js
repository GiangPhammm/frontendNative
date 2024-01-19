import {Alert} from 'react-native';

const APP_URL = 'https://thanhcong-asia-gmbh.de';
const SIGNUP_ENDPOINT = 'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1/auth/signup';
const TOKEN = 'ck_e6941fc46998e2bd52584d99039dc6a6a8038338|cs_c3b4e30220a99465738b32d3a8894471b849378f';
/**
 * @param {string} email 
 * @param {string} username
 * @param {string} password 
 */
export const register = async (username, email, password) => {
    if (!email || !password) {
        Alert.alert(
            'Please fill in required fields',
        );
    }

    if (email && password) {
        try {
            const response = await fetch(SIGNUP_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    appURL: APP_URL,
                    email: email,
                    username: username,
                    password: password,
                    token: TOKEN,
                }),
            }).then((res) => res.json());

            console.log(response)

        } catch (error) {
            console.error(error)
        }
    }
};
