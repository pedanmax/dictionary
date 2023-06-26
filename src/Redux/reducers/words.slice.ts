import { createSlice } from '@reduxjs/toolkit';

const initialState = [] as any;

export const words = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (state, action) => {
      const word = action.payload;
      state.push(word);
    },
  },
});

export const { actions, reducer } = words;
