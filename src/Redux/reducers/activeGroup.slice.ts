import { createSlice } from '@reduxjs/toolkit';

export const activeGroup = createSlice({
  name: 'activeGroup',
  initialState: '',
  reducers: {
    setActiveGroup: (state, action) => {
      const group = action.payload;
      return group;
    },
  },
});

export const { actions, reducer } = activeGroup;
