import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchStories, createStory, createStoryWithImage, deleteStory } from '../actions/storyActions';

interface Story {
  _id: string;
  id: string;
  content: string;
  imgId?: string;
  imgVersion?: string;
  createdAt: string;
  expiresAt: string;
}

interface StoryState {
  stories: Story[];
  loading: boolean;
  error: string | null;
}

const initialState: StoryState = {
  stories: [],
  loading: false,
  error: null,
};

const storySlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    addStory: (state, action: PayloadAction<Story>) => {
      state.stories.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStories.fulfilled, (state, action: PayloadAction<Story[]>) => {
        state.loading = false;
        state.stories = action.payload;
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch stories';
      })
      .addCase(createStory.fulfilled, (state, action: PayloadAction<Story>) => {
        state.stories.push(action.payload);
      })
      .addCase(createStoryWithImage.fulfilled, (state, action: PayloadAction<Story>) => {
        state.stories.push(action.payload);
      })
      .addCase(deleteStory.fulfilled, (state, action: PayloadAction<string>) => {
        state.stories = state.stories.filter(story => story.id !== action.payload);
      });
  },
});

export const { addStory } = storySlice.actions;
export default storySlice.reducer;
