/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios";

class PostService {
  async getAllPosts(page: any) {
    const response = await axios.get(`/post/all/${page}`);
    return response;
  }

  async createPost(body: any) {
    const response = await axios.post('/post', body);
    return response;
  }

  async createPostWithImage(body: any) {
    const response = await axios.post('/post/image/post', body);
    return response;
  }

  async createPostWithVideo(body: any) {
    const response = await axios.post('/post/video/post', body);
    return response;
  }

  async updatePostWithImage(postId: any, body: any) {
    const response = await axios.put(`/post/image/${postId}`, body);
    return response;
  }

  async updatePostWithVideo(postId: any, body: any) {
    const response = await axios.put(`/post/video/${postId}`, body);
    return response;
  }

  async updatePost(postId: any, body: any) {
    const response = await axios.put(`/post/${postId}`, body);
    return response;
  }

  async getReactionsByUsername(username: any) {
    const response = await axios.get(`/post/reactions/username/${username}`);
    return response;
  }

  async getPostReactions(postId: any) {
    const response = await axios.get(`/post/reactions/${postId}`);
    return response;
  }

  async getSinglePostReactionByUsername(postId: any, username: any) {
    const response = await axios.get(`/post/single/reaction/username/${username}/${postId}`);
    return response;
  }

  async getPostCommentsNames(postId: any) {
    const response = await axios.get(`/post/commentsnames/${postId}`);
    return response;
  }

  async getPostComments(postId: any) {
    const response = await axios.get(`/post/comments/${postId}`);
    return response;
  }

  async getPostsWithImages(page: any) {
    const response = await axios.get(`/post/images/${page}`);
    return response;
  }

  async getPostsWithVideos(page: any) {
    const response = await axios.get(`/post/videos/${page}`);
    return response;
  }

  async addReaction(body: any) {
    const response = await axios.post('/post/reaction', body);
    return response;
  }

  async removeReaction(postId: any, previousReaction: any, postReactions: any) {
    const response = await axios.delete(
      `/post/reaction/${postId}/${previousReaction}/${JSON.stringify(postReactions)}`
    );
    return response;
  }

  async addComment(body: any) {
    const response = await axios.post('/post/comment', body);
    return response;
  }

  async deletePost(postId: any) {
    const response = await axios.delete(`/post/${postId}`);
    return response;
  }
}

export const postService = new PostService();
