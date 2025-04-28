import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { banksColumns, accountsColumns } from "../../../constants/TableColumns";

const BankStatements = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  const banksData = useSelector((state) => state.tableData.banks.data);
  const accountsData = useSelector((state) => state.tableData.accounts.data);

  // ✅ Bankaların altında kaç hesap olduğunu hesapla
  const enrichedBankData = useMemo(() => {
    return banksData.map((bank) => {
      const relatedAccounts = accountsData.filter((acc) =>
        acc.branch.includes(bank.name)
      );
      return {
        ...bank,
        account_list: relatedAccounts.length,
      };
    });
  }, [banksData, accountsData]);

  // ✅ Şu anda hangi tabloyu göstereceğiz
  const currentTableData = selectedBank
    ? accountsData.filter((acc) => acc.branch.includes(selectedBank.name))
    : enrichedBankData;

  const currentColumns = selectedBank ? accountsColumns : banksColumns;

  // ✅ Header butonları dinamik oluştur
  const headerBtns = useMemo(() => {
    const baseButtons = [
      { id: 3, content: "İmport et", className: "import" }
    ];

    if (selectedBank) {
      return [
        { id: 2, content: "Yeni hesab əlavə et", className: "add-account" },
        ...baseButtons
      ];
    } else {
      return [
        { id: 1, content: "Yeni bank əlavə et", className: "add-bank" },
        ...baseButtons
      ];
    }
  }, [selectedBank]);

  return (
    <div className="content">
      {/* Header */}
      <TaxModuleHeader
        title={
          <div className="d-flex align-items-center">
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

      {/* Table */}
      <div className="table">
        <TaxModuleTable
          columns={currentColumns}
          data={currentTableData}
          editable={false}
          rowClickEnabled={!selectedBank} // ✅ sadece bank tablosunda tıklanabilir
          onRowClick={(bank) => setSelectedBank(bank)}
        />
      </div>
    </div>
  );
};

export default BankStatements;
