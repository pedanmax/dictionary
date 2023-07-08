import { createSlice } from '@reduxjs/toolkit';

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
