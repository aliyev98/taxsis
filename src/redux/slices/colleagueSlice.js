import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    colleagueNavigate: "colleagueList",
    selectedColleague: null,
};

const colleagueSlice = createSlice({
    name: 'colleague',
    initialState,
    reducers: {
        setColleagueNavigate: (state, action) => {
            state.colleagueNavigate = action.payload;
        },
        setSelectedColleague: (state, action) => {
            state.selectedColleague = action.payload;
        },
    },
});

export const { setColleagueNavigate, setSelectedColleague } = colleagueSlice.actions;
export default colleagueSlice.reducer;
