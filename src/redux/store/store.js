import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slices/formSlice";
import loginReducer from "../slices/loginSlice";
import stepReducer from "../slices/stepSlice";
import taxModuleSelectionReducer from "../slices/taxModuleSlice";
import tableDataReducer from '../slices/tableDataSlice';
import postReducer from '../slices/postSlice';
import vacancyReducer from '../slices/vacancySlice';
import tenderReducer from '../slices/tenderSlice';
import colleagueReducer from '../slices/colleagueSlice';
import cvReducer from '../slices/cvSlice';
import profileReducer from '../slices/profileSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    login: loginReducer,
    step: stepReducer,
    taxModuleSelection: taxModuleSelectionReducer,
    tableData: tableDataReducer,
    post: postReducer,
    vacancy: vacancyReducer,
    tender: tenderReducer,
    colleague: colleagueReducer,
    cv: cvReducer,
    profileNav: profileReducer,
  },
});

export default store;
