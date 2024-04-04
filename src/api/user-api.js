import {apiManager} from './api-manager';

/** @param {object} data */ 
export const loginWithEmailAndPassword = async (data) => {
    try {
        const response = await apiManager('/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: data,
        });
        return response;
    } catch (error) {
        // @ts-ignore
        return error.message;
    }
}

export const logout = async () => {
    try {
        const response = await apiManager('/logout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        // @ts-ignore
        return error.message;
    }
}

/** @param {object} data */ 
export const signupWithEmailAndPassword = async (data) => {
    try {
        const response = await apiManager('/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: data,
        });
        return response;
    } catch (error) {
        // @ts-ignore
        return error.message;
    }
}

export const authenticateWithGoogle = async () => {
    try {
        const response = await apiManager('/auth-google', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        // @ts-ignore
        return error.message;
    }
}