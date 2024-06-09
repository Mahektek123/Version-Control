
import { configureStore } from '@reduxjs/toolkit';
import isLoadedReducer from './isLoadedSlice';

export const store = configureStore({
  reducer: {
    isLoaded: isLoadedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
