import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    step: 1, // Kullanıcının hangi adımda olduğunu takip eder
    formData: {
      accountType: "", // Kullanıcının seçtiği hesap türü
      registrationMethod: "", // Kullanıcının seçtiği kayıt yöntemi (ID veya SİMA)
    },
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setAccountType: (state, action) => {
      state.formData.accountType = action.payload;
    },
    setRegistrationMethod: (state, action) => {
      state.formData.registrationMethod = action.payload;
    },
  },
});

export const { setStep, setAccountType, setRegistrationMethod } = formSlice.actions;
export default formSlice.reducer;
