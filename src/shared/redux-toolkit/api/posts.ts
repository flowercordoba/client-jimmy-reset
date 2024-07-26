/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Utils } from '../../utils/utils.service';
import { postService } from '../../services/post.service';

const getPosts = createAsyncThunk('post/getPosts', async (name, { dispatch }) => {
  try {
    const response = await postService.getAllPosts(1);
    return response.data;
  } catch (error) {
    const typedError = error as any;
    Utils.dispatchNotification(typedError.response.data.message, 'error', dispatch);
  }
});

export { getPosts };
