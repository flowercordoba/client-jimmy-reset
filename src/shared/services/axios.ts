import axios from 'axios';

// when developing locally, change this value to local
export const APP_ENVIRONMENT = 'local';
export const BASE_ENDPOINT = import.meta.env.VITE_APP_API_URL || 'http://api.serversocial.xyz';

const BASE_URL = `${BASE_ENDPOINT}/api/v1`;

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true
});
