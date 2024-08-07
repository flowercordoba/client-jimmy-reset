/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from '../../../../shared/services/axios';

class StoryService {
  private baseUrl = 'http://localhost:5000/api/v1';

  async getUserStories(page: number) {
    const response = await axios.get(`${this.baseUrl}/stories/all/${page}`, { withCredentials: true });
    return response;
  }

  async createStory(storyData: any) {
    const response = await axios.post(`${this.baseUrl}/story`, storyData, { withCredentials: true });
    return response;
  }

  async createStoryWithImage(storyData: any) {
    const response = await axios.post(`${this.baseUrl}/story/image`, storyData, { withCredentials: true });
    return response;
  }

  async deleteStory(storyId: string) {
    const response = await axios.delete(`${this.baseUrl}/story/${storyId}`, { withCredentials: true });
    return response;
  }
}

export const storyService = new StoryService();
