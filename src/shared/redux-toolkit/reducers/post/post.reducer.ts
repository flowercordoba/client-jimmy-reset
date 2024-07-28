/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { emptyPostData } from '../../../utils/static.data';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState: any = emptyPostData;

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updatePostItem: (state, action: PayloadAction<Partial<any>>) => {
      for (const [key, value] of Object.entries(action.payload)) {
        (state as any)[key] = value;
      }
    },
    clearPost: () => {
      return emptyPostData;
    }
  }
});

export const { updatePostItem, clearPost } = postSlice.actions;
export default postSlice.reducer;
