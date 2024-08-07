import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from '../app/modules/notifications/reducers/notificationSlice';
import storyReducer from '../app/modules/histories/reducers/storySlice';

export const store = configureStore({
  reducer: {
    notifications: notificationReducer,
    stories: storyReducer,


  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
