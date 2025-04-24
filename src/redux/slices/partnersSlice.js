import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    partnerNavigate: "partnersList",
    selectedPartner: null,
};

const partnerSlice = createSlice({
    name: 'partner',
    initialState,
    reducers: {
        setPartnerNavigate: (state, action) => {
            state.partnerNavigate = action.payload;
        },
        setSelectedPartner: (state, action) => {
            state.selectedPartner = action.payload;
        },
    },
});

export const { setPartnerNavigate, setSelectedPartner } = partnerSlice.actions;
export default partnerSlice.reducer;
