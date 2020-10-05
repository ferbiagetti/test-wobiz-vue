import axios from 'axios';

export const httpsWobizBackend = axios.create({
    baseURL: '/wobizBackend/'
});