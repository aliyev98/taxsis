import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarSelection: localStorage.getItem("sidebarSelection") || "invoices",
    navbarSelection: localStorage.getItem("navbarSelection") || "purchase",
};
const selectionSlice = createSlice({
    name: "taxModuleSelection",
    initialState,
    reducers: {
        // 📌 **Sidebar Seçimini Günceller**
        setSidebarSelection: (state, action) => {
            state.sidebarSelection = action.payload;
            localStorage.setItem("sidebarSelection", action.payload);
        },
        // 📌 **Navbar Seçimini Günceller**
        setNavbarSelection: (state, action) => {
            state.navbarSelection = action.payload;
        },
    },
});

// **Reducer'ları Export Et**
export const { setSidebarSelection, setNavbarSelection } = selectionSlice.actions;
export default selectionSlice.reducer;
