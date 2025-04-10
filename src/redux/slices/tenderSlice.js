import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tenderNavigate: "tenderList",
    selectedTender: null,
};

const tenderSlice = createSlice({
    name: 'tender',
    initialState,
    reducers: {
        setTenderNavigate: (state, action) => {
            state.tenderNavigate = action.payload;
        },
        setSelectedTender: (state, action) => {
            state.selectedTender = action.payload;
        },
    },
});

export const { setTenderNavigate, setSelectedTender } = tenderSlice.actions;
export default tenderSlice.reducer;
