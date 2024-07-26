/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../services/user.service';
import { Utils } from '../../utils/utils.service';

const getUserSuggestions = createAsyncThunk('user/getSuggestions', async (name, { dispatch }) => {
  try {
    const response = await userService.getUserSuggestions();
    return response.data;
  } catch (error) {
    const typedError = error as any;
    Utils.dispatchNotification(typedError.response.data.message, 'error', dispatch);
  }
});

export { getUserSuggestions };
