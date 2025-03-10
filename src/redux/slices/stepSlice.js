import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1, // İlk başta 1. adım
    accountType: null, // Seçilen hesap tipi ("individual" veya "corporate")
    registrationMethod: null // Kullanıcının seçtiği kayıt yöntemi ("id" veya "sima")
};

const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload;
        },
        prevStep: (state) => {
            if (state.step > 1) {
                state.step -= 1; // Bir önceki adıma dön
            }
        },
        resetStep: (state) => {
            state.step = 1;
            state.accountType = null;
            state.registrationMethod = null; // Seçilen kayıt yöntemi de sıfırlansın
        },
        setAccountType: (state, action) => {
            state.accountType = action.payload;
        },
        setRegistrationMethod: (state, action) => {
            state.registrationMethod = action.payload;
        }
    },
});

export const { setStep, resetStep, setAccountType, setRegistrationMethod } = stepSlice.actions;
export default stepSlice.reducer;
