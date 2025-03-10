import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slices/formSlice"; // Signup için state
import loginReducer from "../slices/loginSlice"; // Login için state
import stepReducer from "../slices/stepSlice"; // ✅ Step bilgisini yöneten slice

const store = configureStore({
  reducer: {
    form: formReducer,
    login: loginReducer,
    step: stepReducer, // ✅ Step ve accountType burada yönetilecek
  },
});

export default store;
