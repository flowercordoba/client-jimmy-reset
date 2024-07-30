/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
// import { ICurrentUser } from "./_models";

// const API_URL = import.meta.env.VITE_APP_API_URL ;
const API_URL = import.meta.env.VITE_APP_API_URL || 'http://yeebam-dev.eba-jubbbszd.us-east-1.elasticbeanstalk.com/api/v1';

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/currentuser`;
export const LOGIN_URL = `${API_URL}/signin`;
export const REGISTER_URL = `${API_URL}/signup`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;
export const REFRESH_TOKEN_URL = `${API_URL}/refresh-token`;

// Configuración común para todas las solicitudes
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
};

// Server should return AuthModel
export function login(username: string, password: string) {
  console.log('login', username, password);

  return axios.post<any>(LOGIN_URL, {
    username,
    password
  }, axiosConfig);
}

// Server should return AuthModel
export function register(
username:string,
password:string,
email:string,
avatarColor:string,
avatarImage:string
) {
  return axios.post(REGISTER_URL, {
    email,
    password,
    avatarColor,
    avatarImage,
    username

  }, axiosConfig);
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email
  }, axiosConfig);
}

// Obtener usuario por token
export function getUserByToken(token: string) {
  console.log('getUserByToken', token);
  return axios.get<any>(GET_USER_BY_ACCESSTOKEN_URL, {
    headers: {
      ...axiosConfig.headers,
      'Authorization': `Bearer ${token}`
    },
    withCredentials: axiosConfig.withCredentials
  });



}

export function forgotPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email
  }, axiosConfig);
}


export function resetPassword(token: string) {
  return axios.post<{ result: boolean }>(`/reset-password/${token}`, {
    token
  }, axiosConfig);
}


// async forgotPassword(email) {
//   const response = await axios.post('/forgot-password', { email });
//   return response;
// }

// async resetPassword(token, body) {
//   const response = await axios.post(`/reset-password/${token}`, body);
//   return response;
// }