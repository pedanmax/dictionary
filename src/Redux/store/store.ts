import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as wordsSlice } from '../reducers/words.slice';
import { reducer as activeGroupSlice } from '../reducers/activeGroup.slice';
import { reducer as wordsVisibility } from '../reducers/wordsVisibility.slice';

const reducers = combineReducers({
  words: wordsSlice,
  activeGroup: activeGroupSlice,
  wordsVisibility,
});

const store = configureStore({
  reducer: reducers,
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
