/* eslint-disable @typescript-eslint/no-explicit-any */
import { io } from 'socket.io-client';
import { BASE_ENDPOINT } from './axios';

class SocketService {
  socket:any

  setupSocketConnection() {
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

    this.socket.on('disconnect', (reason:any) => {
      console.log(`Reason: ${reason}`);
      this.socket.connect();
    });

    this.socket.on('connect_error', (error:any) => {
      console.log(`Error: ${error}`);
      this.socket.connect();
    });
  }
}

export const socketService = new SocketService();
