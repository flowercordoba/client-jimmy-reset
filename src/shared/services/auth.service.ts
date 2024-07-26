/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios";

class AuthService {
  async signUp(body: any) {
    const response = await axios.post('/signup', body);
    return response;
  }

  async signIn(body: any) {
    const response = await axios.post('/signin', body);
    return response;
  }

  async forgotPassword(email: any) {
    const response = await axios.post('/forgot-password', { email });
    return response;
  }

  async resetPassword(token: any, body: any) {
    const response = await axios.post(`/reset-password/${token}`, body);
    return response;
  }
}

export const authService = new AuthService();
