import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { orderBy } from 'lodash';
import { getConversationList } from '../../api/chat';

interface ChatUser {
  id: string;
  name: string;
}

interface Chat {
  id: string;
  createdAt: string;
}

interface ChatState {
  chatList: Chat[];
  selectedChatUser: ChatUser | null;
  isLoading: boolean;
}

const initialState: ChatState = {
  chatList: [],
  selectedChatUser: null,
  isLoading: false
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addToChatList: (state, action: PayloadAction<{ isLoading: boolean; chatList: Chat[] }>) => {
      const { isLoading, chatList } = action.payload;
      state.chatList = [...chatList];
      state.isLoading = isLoading;
    },
    setSelectedChatUser: (state, action: PayloadAction<{ isLoading: boolean; user: ChatUser | null }>) => {
      const { isLoading, user } = action.payload;
      state.selectedChatUser = user;
      state.isLoading = isLoading;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getConversationList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getConversationList.fulfilled, (state, action: PayloadAction<{ list: Chat[] }>) => {
      const { list } = action.payload;
      state.isLoading = false;
      const sortedList = orderBy(list, ['createdAt'], ['desc']);
      state.chatList = [...sortedList];
    });
    builder.addCase(getConversationList.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export const { addToChatList, setSelectedChatUser } = chatSlice.actions;
export default chatSlice.reducer;
