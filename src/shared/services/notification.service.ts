/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios";

class NotificationService {
  async getUserNotifications() {
    const response = await axios.get('/notifications');
    return response;
  }

  async markNotificationAsRead(messageId: any) {
    const response = await axios.put(`/notification/${messageId}`);
    return response;
  }

  async deleteNotification(messageId: any) {
    const response = await axios.delete(`/notification/${messageId}`);
    return response;
  }
}

export const notificationService = new NotificationService();
