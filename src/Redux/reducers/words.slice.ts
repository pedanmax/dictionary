import { createSlice } from '@reduxjs/toolkit';
import { WordType } from '../../types/types';

const initialState = [] as WordType[];

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
