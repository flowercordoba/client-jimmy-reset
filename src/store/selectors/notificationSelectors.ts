// src/store/notifications/notificationSelectors.ts

import { RootState } from "../store";


export const selectNotifications = (state: RootState) => state.notifications.notifications;
export const selectNotificationLoading = (state: RootState) => state.notifications.loading;
export const selectNotificationError = (state: RootState) => state.notifications.error;
