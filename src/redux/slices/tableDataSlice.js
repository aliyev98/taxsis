import { createSlice } from '@reduxjs/toolkit';
import {
  purchaseData,
  actsData,
  replacedData,
  initialsData,
  advanceData,
  depositsData,
  bankStatementsData,
  onlineCashData,
  physicalData,
  confrontationActsData,
  onPurchaseData,
  importDocsData,
  exportDocsData,
  transportExpensesData,
  vatDatas,

  internalCreditorData,
  internalDebitorData,
  internalGivenAdvanceData,
  internalReceivedAdvanceData,

  externalCreditorData,
  externalDebitorData,
  externalGivenAdvanceData,
  externalReceivedAdvanceData,

  serviceImportData,
  serviceExportData,

  receiptPurchaseData,
  receiptSalesData,
  externalPurchaseData,
  externalSalesData,

  creditorDebtsData,
  debitorDebtData,
  foreignCreditorData,
  foreignDebitorData,

  tableJoinData,
  substitutionReportData,
  substitutionRestorationData,
  substitutionCurrentData,
  substitutionListData,

  wholesaleData,
  returnData,
  netSalesData,
  retailSalesData,
  finalData,
  ygbSubstitutionData,
  invoiceSubstitutionData,
  debtorTransactionsData,
  adjustedSectionData,


  banksData,
  accountsData,


} from '../../constants/TableDatas';
import { data } from 'react-router-dom';

const initialState = {
  purchases: { data: purchaseData },
  acts: { data: actsData },
  replaced: { data: replacedData },
  initial: { data: initialsData },
  advanced: { data: advanceData },
  deposits: { data: depositsData },
  bankStatements: { data: bankStatementsData },
  online: { data: onlineCashData },
  physical: { data: physicalData },
  confrontation: { data: confrontationActsData },
  onPurchase: { data: onPurchaseData },
  importDocs: { data: importDocsData },
  exportDocs: { data: exportDocsData },
  transporExpense: { data: transportExpensesData },
  vat: { data: vatDatas },
  internalCreditor: { data: internalCreditorData },
  internalDebitor: { data: internalDebitorData },
  internalGivenAdvance: { data: internalGivenAdvanceData },
  internalReceivedAdvance: { data: internalReceivedAdvanceData },
  externalCreditor: { data: externalCreditorData },
  externalDebitor: { data: externalDebitorData },
  externalGivenAdvance: { data: externalGivenAdvanceData },
  externalReceivedAdvance: { data: externalReceivedAdvanceData },
  serviceImport: { data: serviceImportData },
  serviceExport: { data: serviceExportData },

  receiptPurchase: { data: receiptPurchaseData },
  receiptSales: { data: receiptSalesData },
  externalPurchase: { data: externalPurchaseData },
  externalSales: { data: externalSalesData },

  // borclar
  creditorDebts: { data: creditorDebtsData },
  debitorDebt: { data: debitorDebtData },
  foreignCreditor: { data: foreignCreditorData },
  foreignDebitor: { data: foreignDebitorData },


  ///vergi uçotu

  // (əvəzləşmə)
  tableJoin: { data: tableJoinData },
  substitutionReport: { data: substitutionReportData },
  substitutionRestoration: { data: substitutionRestorationData },
  substitutionCurrent: { data: substitutionCurrentData },
  substitutionList: { data: substitutionListData },

  // (ədv bildirişi)

  wholesSale: { data: wholesaleData },
  return: { data: returnData },
  netSales: { data: netSalesData },
  retailSales: { data: retailSalesData },
  final: { data: finalData },
  ygbSubstitution: { data: ygbSubstitutionData },
  invoiceSubstitution: {data: invoiceSubstitutionData},
  debtorTransactions: {data: debtorTransactionsData},
  adjustedSection: {data: adjustedSectionData},



  //params

  banks: { data: banksData },
  accounts: { data: accountsData },

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
