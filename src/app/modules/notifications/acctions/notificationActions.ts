/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationService } from '../services/notifications.service';

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, thunkAPI) => {
    try {
      const response = await notificationService.getUserNotifications();
      return response.data; // Asegúrate de que `response.data` sea un array
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const markNotificationAsRead = createAsyncThunk(
  'notifications/markNotificationAsRead',
  async (messageId: string, thunkAPI) => {
    try {
      await notificationService.markNotificationAsRead(messageId);
      return messageId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const deleteNotification = createAsyncThunk(
  'notifications/deleteNotification',
  async (messageId: string, thunkAPI) => {
    try {
      await notificationService.deleteNotification(messageId);
      return messageId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
