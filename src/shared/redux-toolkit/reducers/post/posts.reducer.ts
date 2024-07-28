/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPosts } from '../../api/posts';



interface PostsState {
  posts: any[];
  totalPostsCount: number;
  isLoading: boolean;
}

const initialState: PostsState = {
  posts: [],
  totalPostsCount: 0,
  isLoading: false
};

const postsSlice = createSlice({
  name: 'allPosts',
  initialState,
  reducers: {
    addToPosts: (state, action: PayloadAction<any[]>) => {
      state.posts = [...action.payload];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action: PayloadAction<{ posts: any[], totalPosts: number }>) => {
      state.isLoading = false;
      const { posts, totalPosts } = action.payload;
      state.posts = [...posts];
      state.totalPostsCount = totalPosts;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export const { addToPosts } = postsSlice.actions;
export default postsSlice.reducer;
