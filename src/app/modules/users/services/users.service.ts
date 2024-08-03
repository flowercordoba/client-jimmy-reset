
import axios from 'axios';

export let BASE_ENDPOINT = '';

// when developing locally, change this value to local
export const APP_ENVIRONMENT = 'local';

if (APP_ENVIRONMENT === 'local') {
  BASE_ENDPOINT = 'http://localhost:5000';
} else if (APP_ENVIRONMENT === 'development') {
  BASE_ENDPOINT = 'https://api.dev.dominio.com';
} else if (APP_ENVIRONMENT === 'staging') {
  BASE_ENDPOINT = 'https://api.stg.dominio.com';
} else if (APP_ENVIRONMENT === 'production') {
  BASE_ENDPOINT = 'https://api.dominio.com';
}

const BASE_URL = `${BASE_ENDPOINT}/api/v1`;

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true
});



class UsersService {
  async getUserSuggestions() {
    const response = await axios.get('/user/profile/user/suggestions');
    return response;
  }

  async logoutUser() {
    const response = await axios.get('/signout');
    return response;
  }

  async checkCurrentUser() {
    const response = await axios.get('/currentuser');
    console.log('response currentuser', response);
    return response;
  }

  async getAllUsers(page: any) {
    const response = await axios.get(`/user/all/${page}`);
    return response;
  }

  async searchUsers(query: any) {
    const response = await axios.get(`/user/profile/search/${query}`);
    return response;
  }

  async getUserProfileByUserId(userId: any) {
    const response = await axios.get(`/user/profile/${userId}`);
    return response;
  }

  async getUserProfileByUsername(username: any, userId: any, uId: any) {
    const response = await axios.get(`/user/profile/posts/${username}/${userId}/${uId}`);
    return response;
  }

  async changePassword(body: any) {
    const response = await axios.put('/user/profile/change-password', body);
    return response;
  }

  async updateNotificationSettings(settings: any) {
    const response = await axios.put('/user/profile/settings', settings);
    return response;
  }

  async updateBasicInfo(info: any) {
    const response = await axios.put('/user/profile/basic-info', info);
    return response;
  }

  async updateSocialLinks(info: any) {
    const response = await axios.put('/user/profile/social-links', info);
    return response;
  }
}

export const usersService = new UsersService();
zXZ CE38