import axios from 'axios';

class FriendRequestService {
  async getFriendRequests() {
    const response = await axios.get('http://localhost:5000/api/v1/friend-requests', { withCredentials: true });
    return response.data;
  }

  async sendFriendRequest(userId: string) {
    const response = await axios.post(
      'http://localhost:5000/api/v1/send',
      { userId },
      { withCredentials: true }
    );
    return response.data;
  }

  async cancelFriendRequest(requestId: string) {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/friend-requests/${requestId}`,
      { withCredentials: true }
    );
    return response.data;
  }
}

export const friendRequestService = new FriendRequestService();
