// redux/profile/profileSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileNavigate: 'general', // Başlangıç sekmesi
};

const profileSlice = createSlice({
  name: 'profileNav',
  initialState,
  reducers: {
    setProfileNavigate: (state, action) => {
      state.profileNavigate = action.payload;
    },
  },
});

export const { setProfileNavigate } = profileSlice.actions;

export default profileSlice.reducer;
