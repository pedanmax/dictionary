import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as addWord } from '../reducers/words.slice';

const reducers = combineReducers({
  words: addWord,
});

const store = configureStore({
  reducer: reducers,
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
