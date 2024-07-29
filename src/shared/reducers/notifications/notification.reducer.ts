/* eslint-disable @typescript-eslint/no-explicit-any */
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import checkIcon from '@assets/images/check.svg';
// import errorIcon from '@assets/images/error.svg';
// import infoIcon from '@assets/images/info.svg';
// import warningIcon from '@assets/images/warning.svg';
// import { cloneDeep, uniqBy } from 'lodash';

// // Definición del estado inicial
// const initialState: any[] = [];
// let list: any[] = [];

// // Definición de los íconos de notificación
// const toastIcons = [
//   { success: checkIcon, color: '#5cb85c' },
//   { error: errorIcon, color: '#d9534f' },
//   { info: infoIcon, color: '#5bc0de' },
//   { warning: warningIcon, color: '#f0ad4e' }
// ];

// // Creación del slice de notifications
// const notificationsSlice = createSlice({
//   name: 'notifications',
//   initialState,
//   reducers: {
//     addNotification: (state, action: PayloadAction<{ message: string; type: string }>) => {
//       const { message, type } = action.payload;
//       const toast = toastIcons.find((toast) => toast[type as keyof typeof toast]);
//       const toastItem = {
//         id: state.length,
//         description: message,
//         type,
//         icon: toast ? toast[type as keyof typeof toast] : '',
//         backgroundColor: toast ? toast.color : ''
//       };
//       list = cloneDeep(list);
//       list.unshift(toastItem);
//       list = [...uniqBy(list, 'description')];
//       return list;
//     },
//     clearNotification: () => {
//       list = [];
//       return [];
//     }
//   }
// });

// // Exportación de las acciones y el reducer
// export const { addNotification, clearNotification } = notificationsSlice.actions;
// export default notificationsSlice.reducer;
