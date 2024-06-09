import { createSlice } from '@reduxjs/toolkit';

export const isLoadedSlice = createSlice({
  name: 'isLoaded',
  initialState: false,
  reducers: {
    setLoaded: () => true,
  },
});

export const { setLoaded } = isLoadedSlice.actions;
export default isLoadedSlice.reducer;