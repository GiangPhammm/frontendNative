import {ApiManager} from './apiManager';

/** @param {object} data */ 
export const userLogin = async (data) => {
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
        return error.response.data;
    }
}