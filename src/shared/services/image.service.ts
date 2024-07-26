/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios";


class ImageService {
  async getUserImages(userId: any) {
    const response = await axios.get(`/images/${userId}`);
    return response;
  }

  async addImage(url: string, data: any) {
    const response = await axios.post(url, { image: data });
    return response;
  }

  async removeImage(url: string) {
    const response = await axios.delete(url);
    return response;
  }
}

export const imageService = new ImageService();
