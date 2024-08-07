import { RootState } from '../store';

export const selectBlogs = (state: RootState) => state.blogs.blogs;
export const selectBlogLoading = (state: RootState) => state.blogs.loading;
export const selectBlogError = (state: RootState) => state.blogs.error;
