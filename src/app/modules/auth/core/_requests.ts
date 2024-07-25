/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { UserModel } from "./_models";

const API_URL = import.meta.env.VITE_APP_API_URL;

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
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    headers: {
      ...axiosConfig.headers,
      'Authorization': `Bearer ${token}`
    },
    withCredentials: axiosConfig.withCredentials
  });
}
