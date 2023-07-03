import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('activeGroup') || '';

export const activeGroup = createSlice({
  name: 'activeGroup',
  initialState,
  reducers: {
    setActiveGroup: (_, action) => {
      const group = action.payload;
      localStorage.setItem('activeGroup', group || '');
      return group;
    },
  },
});

export const { actions, reducer } = activeGroup;
