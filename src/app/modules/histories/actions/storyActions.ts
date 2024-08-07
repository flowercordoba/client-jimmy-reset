/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { storyService } from '../services/historie.service';

// export const fetchStories = createAsyncThunk(
//   'stories/fetchStories',
//   async (page: number, thunkAPI) => {
//     try {
//       const response = await storyService.getUserStories(page);
//       return response.data; // Asegúrate de que `response.data` sea un array
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   }
// );

export const fetchStories = createAsyncThunk(
  'stories/fetchStories',
  async (page: number, thunkAPI) => {
    try {
      const response = await storyService.getUserStories(page);
      return response.data.stories; 
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


export const createStory = createAsyncThunk(
  'stories/createStory',
  async (storyData: any, thunkAPI) => {
    try {
      const response = await storyService.createStory(storyData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createStoryWithImage = createAsyncThunk(
  'stories/createStoryWithImage',
  async (storyData: any, thunkAPI) => {
    try {
      const response = await storyService.createStoryWithImage(storyData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const deleteStory = createAsyncThunk(
  'stories/deleteStory',
  async (storyId: string, thunkAPI) => {
    try {
      await storyService.deleteStory(storyId);
      return storyId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
