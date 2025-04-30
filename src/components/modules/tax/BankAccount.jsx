import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { banksColumns, accountsColumns } from "../../../constants/TableColumns";

const BankAccount = () => {
  const [selectedBank, setSelectedBank] = useState(null); // ✅ Yerel state

  const banksData = useSelector((state) => state.tableData.banks.data);
  const accountsData = useSelector((state) => state.tableData.accounts.data); // ✅ dikkat: .data ekli!

  const enrichedBankData = banksData.map((bank) => {
    const relatedAccounts = accountsData.filter((acc) =>
      acc.branch.includes(bank.name)
    );
    return {
      ...bank,
      account_list: relatedAccounts.length,
    };
  });

  const currentTableData = selectedBank
    ? accountsData.filter((acc) =>
        acc.branch.includes(selectedBank.name)
      )
    : enrichedBankData;

  const currentColumns = selectedBank ? accountsColumns : banksColumns;

  const headerBtns = [
    { id: 1, content: "Əlavə et", className: "add" },
    { id: 2, content: "Şablonu yüklə", className: "download" },
    { id: 3, content: "İmport et", className: "import" },
  ];

  return (
    <div className="bank-account tax-module-content">
      <TaxModuleHeader
        title={
          <div className="d-flex">
            {selectedBank && (
              <button
                className="btn btn-back"
                onClick={() => setSelectedBank(null)}
              >
                <img src="/assets/arrow-back-icon.svg" alt="back" />
              </button>
            )}
            <span className="ms-2">
              {selectedBank ? selectedBank.name : "Bank hesabları"}
            </span>
          </div>
        }
        headerBtns={headerBtns}
        columns={currentColumns}
      />

      <div className="table">
        <TaxModuleTable
          columns={currentColumns}
          data={currentTableData}
          editable={true}
          rowClickEnabled={!selectedBank}
          onRowClick={(bank) => setSelectedBank(bank)}
        />
      </div>
    </div>
  );
};

export default BankAccount;
