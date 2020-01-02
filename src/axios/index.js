import axios from 'axios';
import { TWITCH_API_CLIENT_ID } from './clientIds';


const axiosInstance = axios.create({
    baseURL: 'https://api.twitch.tv/helix/',
    headers: { 'Client-Id': TWITCH_API_CLIENT_ID }
});

export default axiosInstance;
