import { createSlice } from '@reduxjs/toolkit';
import { purchaseData, actsData, replacedData, initialsData, advanceData, depositsData, onlineCashData, physicalData, confrontationActsData } from '../../constants/TableDatas';
import { data } from 'react-router-dom';

const initialState = {
  purchases: { data: purchaseData },
  acts: { data: actsData },
  replaced: { data: replacedData },
  initial: { data: initialsData },
  advanced: { data: advanceData },
  deposits: {data: depositsData},
  online: {data: onlineCashData},
  physical: {data: physicalData},
  confrontation: {data: confrontationActsData},
};

const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    deleteRow: (state, action) => {
      const { table, no } = action.payload;
      if (state[table]) {
        state[table].data = state[table].data.filter((item) => item.no !== no);
      }
    },
    updateRow: (state, action) => {
      const { table, no, updatedData } = action.payload;
      if (state[table]) {
        const index = state[table].data.findIndex((item) => item.no === no);
        if (index !== -1) {
          state[table].data[index] = {
            ...state[table].data[index],
            ...updatedData,
          };
        }
      }
    },
    addRow: (state, action) => {
      const { table, newRow } = action.payload;
      if (state[table]) {
        const lastNo = state[table].data[state[table].data.length - 1]?.no || 0;
        state[table].data.push({ no: lastNo + 1, ...newRow });
      }
    },
  },
});

export const { deleteRow, updateRow, addRow } = tableDataSlice.actions;
export default tableDataSlice.reducer;
