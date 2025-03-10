import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    step: 1, // Login sürecindeki adımı takip eder
    accountType: "", // Kullanıcının seçtiği hesap türü ("individual" veya "corporate")
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setAccountType: (state, action) => {
      state.accountType = action.payload;
    },
  },
});

export const { setStep, setAccountType } = loginSlice.actions;
export default loginSlice.reducer;
