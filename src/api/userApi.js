import {ApiManager} from './apiManager';

/** @param {object} data */ 
export const loginWithEmailAndPassword = async (data) => {
    try {
        const response = await ApiManager('/login', {
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
        const response = await ApiManager('/logout', {
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