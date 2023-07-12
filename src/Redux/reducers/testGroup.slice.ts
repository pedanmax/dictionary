import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('testGroup') || '';

export const testGroup = createSlice({
  name: 'testGroup',
  initialState,
  reducers: {
    setTestGroup: (_, action) => {
      const group = action.payload;
      localStorage.setItem('testGroup', group);
      return group;
    },
  },
});

export const { actions, reducer } = testGroup;
