import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('wordsVisibility') || false;

export const wordsVisibility = createSlice({
  name: 'wordsVisibility',
  initialState,
  reducers: {
    setVisibility: (_, action) => {
      let visibility;
      if (action.payload) {
        visibility = false;
      } else visibility = true;
      return visibility;
    },
  },
});

export const { actions, reducer } = wordsVisibility;
