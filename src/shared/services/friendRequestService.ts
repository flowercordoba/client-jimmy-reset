import axios from 'axios';

class FriendRequestService {
  private baseUrl = import.meta.env.VITE_APP_API_URL || 'https://api.serversocial.xyz/api/v1';
  async getFriendRequests() {
    const response = await axios.get(`${this.baseUrl}/friend-requests`, { withCredentials: true });
    return response.data;
  }

  async sendFriendRequest(userId: string) {
    const response = await axios.post(
      `${this.baseUrl}/send`,
      { userId },
      { withCredentials: true }
    );
    return response.data;
  }

  async cancelFriendRequest(requestId: string) {
    const response = await axios.delete(
      `${this.baseUrl}/friend-requests/${requestId}`,
      { withCredentials: true }
    );
    return response.data;
  }
}

export const friendRequestService = new FriendRequestService();
