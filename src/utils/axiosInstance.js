import axios from 'axios';
import {API_URL} from '@env';

console.log('API URL', API_URL);

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
