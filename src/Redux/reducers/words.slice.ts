import { createSlice } from '@reduxjs/toolkit';
import { WordType } from '../../types/types';

const initialState: WordType[] = [];

export const words = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (state, action) => {
      const word = action.payload;
      state.push(word);
    },
    removeWord: (state, action) => {
      const word = action.payload;
      const removedState = state.filter((item) => item.id === word.id);
      return removedState;
    },
  },
});

export const { actions, reducer } = words;
