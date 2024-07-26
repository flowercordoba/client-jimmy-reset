/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios";

class FollowerService {
  async getUserFollowing() {
    const response = await axios.get('/user/following');
    return response;
  }

  async getUserFollowers(userId: any) {
    const response = await axios.get(`/user/followers/${userId}`);
    return response;
  }

  async followUser(followerId: any) {
    const response = await axios.put(`/user/follow/${followerId}`);
    return response;
  }

  async unFollowUser(followeeId: any, followerId: any) {
    const response = await axios.put(`/user/unfollow/${followeeId}/${followerId}`);
    return response;
  }

  async blockUser(followerId: any) {
    const response = await axios.put(`/user/block/${followerId}`);
    return response;
  }

  async unblockUser(followerId: any) {
    const response = await axios.put(`/user/unblock/${followerId}`);
    return response;
  }
}

export const followerService = new FollowerService();
