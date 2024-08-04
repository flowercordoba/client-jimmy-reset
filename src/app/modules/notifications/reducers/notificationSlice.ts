import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNotifications, markNotificationAsRead, deleteNotification } from '../acctions/notificationActions';

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

interface NotificationState {
  notifications: Notification[];
  loading: boolean;
  error: string | null;
}

const initialState: NotificationState = {
  notifications: [],
  loading: false,
  error: null,
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action: PayloadAction<Notification[]>) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch notifications';
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action: PayloadAction<string>) => {
        const index = state.notifications.findIndex(n => n.id === action.payload);
        if (index !== -1) {
          state.notifications[index].read = true;
        }
      })
      .addCase(deleteNotification.fulfilled, (state, action: PayloadAction<string>) => {
        state.notifications = state.notifications.filter(n => n.id !== action.payload);
      });
  },
});

export const { addNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
