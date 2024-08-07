/* eslint-disable @typescript-eslint/no-explicit-any */
import { io } from 'socket.io-client';
import { store } from '../../store/store';
import { addNotification } from '../../app/modules/notifications/reducers/notificationSlice';

const BASE_ENDPOINT = import.meta.env.VITE_APP_API_URL || 'https://api.serversocial.xyz';

class SocketService {
  socket: any;

  setupSocketConnection() {
    console.log('Connecting to:', BASE_ENDPOINT);
    this.socket = io(BASE_ENDPOINT, {
      transports: ['websocket'],
      secure: true
    });
    this.socketConnectionEvents();
  }

  socketConnectionEvents() {
    this.socket.on('connect', () => {
      console.log('connected');
    });

    this.socket.on('notification', (notification: any) => {
      console.log('Received notification:', notification);
      store.dispatch(addNotification(notification));
    });

    this.socket.on('disconnect', (reason: any) => {
      console.log(`Reason: ${reason}`);
      this.socket.connect();
    });

    this.socket.on('connect_error', (error: any) => {
      console.log(`Error: ${error}`);
      this.socket.connect();
    });
  }
}

export const socketService = new SocketService();
