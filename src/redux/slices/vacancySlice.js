import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  vacancyNavigate: "vacanciesList",
  selectedVacancy: null,
};

const vacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    setVacancyNavigate: (state, action) => {
      state.vacancyNavigate = action.payload;
    },
    setSelectedVacancy: (state, action) => {
      state.selectedVacancy = action.payload;
    },
  },
});

export const { setVacancyNavigate, setSelectedVacancy } = vacancySlice.actions;
export default vacancySlice.reducer;
