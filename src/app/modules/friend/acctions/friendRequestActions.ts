/* eslint-disable @typescript-eslint/no-explicit-any */
// src/store/friendRequests/friendRequestActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockFriendRequests } from '../mocks/mockFriendRequests';

interface FriendRequest {
  id: string;
  fromUser: string;
  toUser: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export const fetchFriendRequests = createAsyncThunk<FriendRequest[]>(
  'friendRequests/fetchFriendRequests',
  async (_, thunkAPI) => {
    try {
      // Simular una llamada de API con mockFriendRequests
      const response = { data: mockFriendRequests };
      return response.data as FriendRequest[];
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const sendFriendRequest = createAsyncThunk<FriendRequest, { fromUser: string; toUser: string }>(
  'friendRequests/sendFriendRequest',
  async (friendRequest, thunkAPI) => {
    try {
      // Simular una creación de solicitud de amistad
      const newFriendRequest: FriendRequest = {
        id: Math.random().toString(36).substr(2, 9),
        ...friendRequest,
        status: 'pending'
      };
      return newFriendRequest;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const acceptFriendRequest = createAsyncThunk<string, string>(
  'friendRequests/acceptFriendRequest',
  async (requestId, thunkAPI) => {
    try {
      // Simular la aceptación de una solicitud de amistad
      return requestId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const rejectFriendRequest = createAsyncThunk<string, string>(
  'friendRequests/rejectFriendRequest',
  async (requestId, thunkAPI) => {
    try {
      // Simular el rechazo de una solicitud de amistad
      return requestId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
