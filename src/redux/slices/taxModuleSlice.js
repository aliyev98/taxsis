import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarSelection: "deposits", // 📌 **Başlangıç Sidebar Seçimi**
    navbarSelection: "purchase",  // 📌 **Başlangıç Navbar Seçimi**
};

const selectionSlice = createSlice({
    name: "taxModuleSelection",
    initialState,
    reducers: {
        // 📌 **Sidebar Seçimini Günceller**
        setSidebarSelection: (state, action) => {
            state.sidebarSelection = action.payload;
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
