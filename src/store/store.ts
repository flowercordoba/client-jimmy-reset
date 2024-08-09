import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from '../app/modules/notifications/reducers/notificationSlice';
import modalReducer from '../shared/reducers/modal/modal.reducer';
import postReducer from '../shared/reducers/post/post.reducer';
import userReducer from '../shared/reducers/user/user.reducer';

export const store = configureStore({
  reducer: {
    notifications: notificationReducer,
    modal: modalReducer,
    post: postReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
