/* eslint-disable no-param-reassign */
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
      localStorage.setItem('words', JSON.stringify(state));
    },
    shuffleWords: (state) => {
      const shuffledArr = [...state];
      for (let i = shuffledArr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
      }
      return shuffledArr;
    },
    removeWord: (state, action) => {
      const wordId = action.payload;
      const removedState = state.filter((item) => item.id !== wordId);
      localStorage.setItem('words', JSON.stringify(removedState));
      return removedState;
    },
    visibilityWord: (state, action) => {
      const newState = state.forEach((word) => {
        if (word.id === action.payload) {
          word.visible = !word.visible;
        }
      });
      return newState;
    },
    visibilityAllWord: (state, action) => {
      const newState = state.forEach((word) => {
        if (action.payload) {
          word.visible = false;
        } else word.visible = true;
      });
      return newState;
    },
  },
});

export const { actions, reducer } = words;
