import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBlogs, createBlog, createBlogWithImage, deleteBlog } from '../actions/blogActions';

interface Blog {
  id: string;
  userId: string;
  title: string;
  content: string;
  imgVersion?: string;
  imgId?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<Blog>) => {
      state.blogs.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<Blog[]>) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch blogs';
      })
      .addCase(createBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.blogs.push(action.payload);
      })
      .addCase(createBlogWithImage.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.blogs.push(action.payload);
      })
      .addCase(deleteBlog.fulfilled, (state, action: PayloadAction<string>) => {
        state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
      });
  },
});

export const { addBlog } = blogSlice.actions;
export default blogSlice.reducer;
