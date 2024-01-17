import {Alert} from 'react-native';

const signinEndpoint = 'https://woopick-backend-2plmu3pwka-ey.a.run.app/api/v1/auth/signin';

/**
 * @param {string} email
 * @param {string} password 
 */
export const signin = async (email, password) => {
    if (!email || !password) {
        Alert.alert(
            'Please fill in required fields',
        );
    }

    if (email && password) {
        try {
            const response = await fetch(signinEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            }).then((res) => res.json());

            console.log(response)

            // @ts-ignore
            if (response.type) {
                Alert.alert(
                    'Invalid credential'
                );
            }

            // @ts-ignore
            if (response.jwtToken) {
                Alert.alert(
                    'Success!'
                );
            }
        } catch (error) {
            console.error(error)
        }
    }
};

/**
 * @typedef {object} Response
 * @prop {string} type
 * @prop {string} title
 * @prop {string} jwtToken
 */

