import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { banksColumns, accountsColumns, bankStatementsColumns } from "../../../constants/TableColumns";

const BankStatements = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const banksData = useSelector((state) => state.tableData.banks.data);
  const accountsData = useSelector((state) => state.tableData.accounts.data);
  const bankStatementsData = useSelector((state) => state.tableData.bankStatements.data);

  // Bankalara bağlı hesap sayılarını hesapla
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

  // Hangi veri gösterilecek?
  const currentTableData = selectedAccount
    ? bankStatementsData
    : selectedBank
      ? accountsData.filter((acc) => acc.branch.includes(selectedBank.name))
      : enrichedBankData;

  const currentColumns = selectedAccount
    ? bankStatementsColumns
    : selectedBank
      ? accountsColumns
      : banksColumns;

  // Header butonları
  const headerBtns = useMemo(() => {
    const baseButtons = [{ id: 3, content: "İmport et", className: "import" }];
    if (selectedAccount) {
      return baseButtons;
    } else if (selectedBank) {
      return [{ id: 2, content: "Yeni hesab əlavə et", className: "add-account" }, ...baseButtons];
    } else {
      return [{ id: 1, content: "Yeni bank əlavə et", className: "add-bank" }, ...baseButtons];
    }
  }, [selectedBank, selectedAccount]);

  // Satıra tıklama
  const handleRowClick = (row) => {
    if (!selectedBank) {
      setSelectedBank(row);
    } else if (!selectedAccount) {
      setSelectedAccount(row);
    }
  };

  // Geri butonu
  const handleBack = () => {
    if (selectedAccount) {
      setSelectedAccount(null);
    } else if (selectedBank) {
      setSelectedBank(null);
    }
  };

  return (
    <div className="bank-statements tax-module-content">
      {/* Header */}
      <TaxModuleHeader
        title={
          <div className="d-flex align-items-center">
            {(selectedBank || selectedAccount) && (
              <button className="btn btn-back" onClick={handleBack}>
                <img src="/assets/arrow-back-icon.svg" alt="back" />
              </button>
            )}
            <span className="ms-2">
              {selectedAccount
                ? "Bank çıxarışları"
                : selectedBank
                  ? selectedBank.name
                  : "Bank hesabları"}
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
          rowClickEnabled={true}
          onRowClick={(row) => handleRowClick(row)}
        />
      </div>
    </div>
  );
};

export default BankStatements;
