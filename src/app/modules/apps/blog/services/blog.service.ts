/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "../../../../../shared/services/axios";

class BlogService {
  private baseUrl = 'http://localhost:5000/api/v1';

  async getUserBlogs(page: number) {
    const response = await axios.get(`${this.baseUrl}/blog/all/${page}`, { withCredentials: true });
    return response;
  }

  async createBlog(blogData: any) {
    const response = await axios.post(`${this.baseUrl}/blog`, blogData, { withCredentials: true });
    return response;
  }

  async createBlogWithImage(blogData: any) {
    const response = await axios.post(`${this.baseUrl}/blog/image`, blogData, { withCredentials: true });
    return response;
  }

  async deleteBlog(blogId: string) {
    const response = await axios.delete(`${this.baseUrl}/blog/${blogId}`, { withCredentials: true });
    return response;
  }
}

export const blogService = new BlogService();
