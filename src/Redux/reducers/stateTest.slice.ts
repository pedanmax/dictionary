import { createSlice } from '@reduxjs/toolkit';

export const stateTest = createSlice({
  name: 'stateTest',
  initialState: { isStarted: false },
  reducers: {
    startTest: (state, action) => {
      return { ...state, isStarted: action.payload };
    },
    resetTest: (state, action) => {
      return { ...state, isStarted: action.payload };
    },
  },
});

export const { actions, reducer } = stateTest;
