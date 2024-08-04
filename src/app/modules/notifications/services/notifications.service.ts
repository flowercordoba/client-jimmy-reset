/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "../../../../shared/services/axios";


class NotificationService {
  private baseUrl = 'http://localhost:5000/api/v1';

  async getUserNotifications() {
    const response = await axios.get(`${this.baseUrl}/notifications`, { withCredentials: true });
    return response;
  }

  async markNotificationAsRead(messageId: any) {
    const response = await axios.put(`${this.baseUrl}/notification/${messageId}`, {}, { withCredentials: true });
    return response;
  }

  async deleteNotification(messageId: any) {
    const response = await axios.delete(`${this.baseUrl}/notification/${messageId}`, { withCredentials: true });
    return response;
  }
}

export const notificationService = new NotificationService();
