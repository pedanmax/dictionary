import { createSlice } from '@reduxjs/toolkit';
import { WordType } from '../../types/types';

export const testingWords = createSlice({
  name: 'testingWords',
  initialState: [],
  reducers: {
    writeWordsForTest: (_, action) => {
      const { filterWord, words } = action.payload;
      const filteredWords = words.filter((word: WordType) => word.group === filterWord);
      for (let i = filteredWords.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredWords[i], filteredWords[j]] = [filteredWords[j], filteredWords[i]];
      }
      return filteredWords;
    },
    shuffleWords: (state) => {
      const shuffledArr = [...state];
      for (let i = shuffledArr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
      }
      return shuffledArr;
    },
  },
});

export const { actions, reducer } = testingWords;
