import { createSlice } from '@reduxjs/toolkit';
import { WordType } from '../../types/types';

const itemFromStorage = localStorage.getItem('words');
const initialState: WordType[] = itemFromStorage ? JSON.parse(itemFromStorage) : [];

export const words = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (state, action) => {
      const word = action.payload;
      state.push(word);
    },
    removeWord: (state, action) => {
      const wordId = action.payload;
      const removedState = state.filter((item) => item.id !== wordId);
      return removedState;
    },
  },
});

export const { actions, reducer } = words;
