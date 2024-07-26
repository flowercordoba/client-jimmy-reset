/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { chatService } from '../../services/chat.service';
import { Utils } from '../../utils/utils.service';

const getConversationList = createAsyncThunk('chat/getUserChatList', async (name, { dispatch }) => {
  try {
    const response = await chatService.getConversationList();
    return response.data;
  } catch (error) {
    // Asegurar que error es de tipo any para acceder a response.data.message
    const typedError = error as any;
    Utils.dispatchNotification(typedError.response.data.message, 'error', dispatch);
  }
});

export { getConversationList };
