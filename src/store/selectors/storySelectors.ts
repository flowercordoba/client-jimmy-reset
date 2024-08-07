import { RootState } from '../store';

export const selectStories = (state: RootState) => state.stories.stories;
export const selectStoriesLoading = (state: RootState) => state.stories.loading;
export const selectStoriesError = (state: RootState) => state.stories.error;
