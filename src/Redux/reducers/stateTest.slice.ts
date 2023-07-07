import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import { words } from './words.slice';

const example = {
  word: {
    word: 'example',
    correctTranslate: 'приклад',
    inoutTranslate: 'не знаю',
  },
};

export const stateTest = createSlice({
  name: 'stateTest',
  initialState: { isStarted: false, testFields: {} },
  reducers: {
    startTest: (state, action) => {
      return { ...state, isStarted: action.payload };
    },
    resetTest: (state, action) => {
      return { ...state, isStarted: action.payload, testFields: {} };
    },
    writeTranslate: (state, action) => {
      return { ...state, testFields: { ...state.testFields, ...action.payload } };
    },
  },
});

export const { actions, reducer } = stateTest;
