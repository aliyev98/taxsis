import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  postText: '',
  postImage: null
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    openModal: (state) => { state.showModal = true },
    closeModal: (state) => {
      state.showModal = false;
      state.postText = '';
      state.postImage = null;
    },
    setPostText: (state, action) => {
      state.postText = action.payload;
    },
    setPostImage: (state, action) => {
      state.postImage = action.payload;
    }
  }
});

export const {
  openModal,
  closeModal,
  setPostText,
  setPostImage
} = postSlice.actions;

export default postSlice.reducer;
