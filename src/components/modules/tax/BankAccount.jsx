import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { banksColumns, accountsColumns } from "../../../constants/TableColumns";
import {
  selectBanksData,
  selectAccountsData,
} from "../../../redux/slices/tableDataSlice"; // slice'tan alım örneği

const BankAccount = () => {
  const [selectedBank, setSelectedBank] = useState(null); // ✅ Yerel state olarak tanımlandı

  const banksData = useSelector(selectBanksData);
  const accountsData = useSelector(selectAccountsData);

  const enrichedBankData = banksData.map((bank) => ({
    ...bank,
    account_list: accountsData[bank.id]?.length || 0,
  }));

  const currentTableData = selectedBank
    ? accountsData[selectedBank.id] || []
    : enrichedBankData;

  const currentColumns = selectedBank ? accountsColumns : banksColumns;

  const headerBtns = [
    { id: 1, content: "Əlavə et", className: "add" },
    { id: 2, content: "Şablonu yüklə", className: "download" },
    { id: 3, content: "İmport et", className: "import" },
  ];

  return (
    <div className="content">
      <TaxModuleHeader
        title={
          <div className="d-flex align-items-center gap-2">
            {selectedBank && (
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setSelectedBank(null)}
              >
                ←
              </button>
            )}
            <span>{selectedBank ? selectedBank.name : "Bank hesabları"}</span>
          </div>
        }
        headerBtns={headerBtns}
        columns={currentColumns}
      />

      <div className="table">
        <TaxModuleTable
          columns={currentColumns}
          data={currentTableData}
          editable={false}
          rowClickEnabled={!selectedBank}
          onRowClick={(bank) => setSelectedBank(bank)}
        />
      </div>
    </div>
  );
};

export default BankAccount;
