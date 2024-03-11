import axios from 'axios';

// TODO: Replace with production host later
export const ApiManager = axios.create({
    baseURL: 'http://localhost:5001/petally-api/us-central1/default',
    responseType: 'json',
    withCredentials: true,
})
