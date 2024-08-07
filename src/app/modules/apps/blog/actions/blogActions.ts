/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { blogService } from '../services/blog.service';

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (page: number, thunkAPI) => {
    try {
      const response = await blogService.getUserBlogs(page);
      return response.data.blogs; // Asegúrate de que `response.data.blogs` sea un array
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createBlog = createAsyncThunk(
  'blogs/createBlog',
  async (blogData: any, thunkAPI) => {
    try {
      const response = await blogService.createBlog(blogData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createBlogWithImage = createAsyncThunk(
  'blogs/createBlogWithImage',
  async (blogData: any, thunkAPI) => {
    try {
      const response = await blogService.createBlogWithImage(blogData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const deleteBlog = createAsyncThunk(
  'blogs/deleteBlog',
  async (blogId: string, thunkAPI) => {
    try {
      await blogService.deleteBlog(blogId);
      return blogId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
