/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import checkIcon from '@assets/images/check.svg';
import errorIcon from '@assets/images/error.svg';
import infoIcon from '@assets/images/info.svg';
import warningIcon from '@assets/images/warning.svg';
import { cloneDeep, uniqBy } from 'lodash';

interface ToastIcon {
  success?: string;
  error?: string;
  info?: string;
  warning?: string;
  color: string;
}

interface Notification {
  id: number;
  description: string;
  type: string;
  icon: string;
  backgroundColor: string;
}

type NotificationsState = Notification[];

const initialState: NotificationsState = [];
let list: NotificationsState = [];

const toastIcons: ToastIcon[] = [
  { success: checkIcon, color: '#5cb85c' },
  { error: errorIcon, color: '#d9534f' },
  { info: infoIcon, color: '#5bc0de' },
  { warning: warningIcon, color: '#f0ad4e' }
];

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<{ message: string; type: string }>) => {
      const { message, type } = action.payload;
      const toast = toastIcons.find((toast) => toast[type as keyof ToastIcon]);
      if (toast) {
        const toastItem: Notification = {
          id: state.length,
          description: message,
          type,
          icon: toast[type as keyof ToastIcon] as string,
          backgroundColor: toast.color
        };
        list = cloneDeep(list);
        list.unshift(toastItem);
        list = uniqBy(list, 'description');
        return list;
      }
    },
    clearNotification: () => {
      list = [];
      return [];
    }
  }
});

export const { addNotification, clearNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
