// src/store/friendRequests/friendRequestSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFriendRequests, sendFriendRequest, acceptFriendRequest, rejectFriendRequest } from '../acctions/friendRequestActions';

interface FriendRequest {
  id: string;
  fromUser: string;
  toUser: string;
  status: 'pending' | 'accepted' | 'rejected';
}

interface FriendRequestState {
  friendRequests: FriendRequest[];
  loading: boolean;
  error: string | null;
}

const initialState: FriendRequestState = {
  friendRequests: [],
  loading: false,
  error: null,
};

const friendRequestSlice = createSlice({
  name: 'friendRequests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFriendRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFriendRequests.fulfilled, (state, action: PayloadAction<FriendRequest[]>) => {
        state.loading = false;
        state.friendRequests = action.payload;
      })
      .addCase(fetchFriendRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch friend requests';
      })
      .addCase(sendFriendRequest.fulfilled, (state, action: PayloadAction<FriendRequest>) => {
        state.friendRequests.push(action.payload);
      })
      .addCase(acceptFriendRequest.fulfilled, (state, action: PayloadAction<string>) => {
        const index = state.friendRequests.findIndex(fr => fr.id === action.payload);
        if (index !== -1) {
          state.friendRequests[index].status = 'accepted';
        }
      })
      .addCase(rejectFriendRequest.fulfilled, (state, action: PayloadAction<string>) => {
        const index = state.friendRequests.findIndex(fr => fr.id === action.payload);
        if (index !== -1) {
          state.friendRequests[index].status = 'rejected';
        }
      });
  },
});

export default friendRequestSlice.reducer;
