// src/store/friendsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Friend {
  id: string;
  name: string;
  profilePicture: string;
  // Otros campos relevantes
}

interface FriendsState {
  friends: Friend[];
}

const initialState: FriendsState = {
  friends: [],
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends(state, action: PayloadAction<Friend[]>) {
      state.friends = action.payload;
    },
    addFriend(state, action: PayloadAction<Friend>) {
      state.friends.push(action.payload);
    },
    removeFriend(state, action: PayloadAction<string>) {
      state.friends = state.friends.filter(friend => friend.id !== action.payload);
    },
  },
});

export const { setFriends, addFriend, removeFriend } = friendsSlice.actions;
export default friendsSlice.reducer;
