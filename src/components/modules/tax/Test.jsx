import React, { useState } from "react";
import TestTable from '../../../components/tables/TestTable'

// 1️⃣ BANKA VERİLERİ
const bankColumns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Bank Adı" },
    { accessorKey: "code", header: "Bank Kodu" },
    { accessorKey: "accountCount", header: "Hesab sayı" }, // ✅ EKLENDİ
];


const bankData = [
    { id: 1, name: "Kapital Bank", code: "KB001" },
    { id: 2, name: "Azərbaycan Beynəlxalq Bankı", code: "ABB002" },
    { id: 3, name: "Xalq Bank", code: "XB003" },
];

// 2️⃣ HESAB VERİLERİ
const accountColumns = [
    { accessorKey: "iban", header: "IBAN" },
    { accessorKey: "currency", header: "Valyuta" },
    { accessorKey: "balance", header: "Balans" },
];

const accountsByBank = {
    1: [
        { iban: "AZ00KB00111111111111", currency: "AZN", balance: 1200 },
        { iban: "AZ00KB00122222222222", currency: "USD", balance: 500 },
    ],
    2: [
        { iban: "AZ00ABB00211111111111", currency: "AZN", balance: 800 },
        { iban: "AZ00ABB00233333333333", currency: "EUR", balance: 950 },
    ],
    3: [
        { iban: "AZ00XB00344444444444", currency: "AZN", balance: 3000 },
    ],
};

const BankPage = () => {
    const [selectedBank, setSelectedBank] = useState(null);

    const currentTableData = selectedBank
        ? accountsByBank[selectedBank.id] || []
        : bankData;

    const enrichedBankData = bankData.map((bank) => ({
        ...bank,
        accountCount: accountsByBank[bank.id]?.length || 0,
    }));


    const currentColumns = selectedBank ? accountColumns : bankColumns;

    return (
        <div className="container mt-4">
            <h3 className="mb-3">
                {selectedBank ? `${selectedBank.name} - Hesablar` : "Banklar"}
            </h3>

            {/* 🔙 Geri Dön Butonu */}
            {selectedBank && (
                <button
                    className="btn btn-outline-secondary mb-3"
                    onClick={() => setSelectedBank(null)}
                >
                    ← Bankalara geri dön
                </button>
            )}

            {/* 📊 Tablonu Göster */}
            <TestTable
                columns={currentColumns}
                data={selectedBank ? currentTableData : enrichedBankData} // ✅ enrichedBankData burada
                editable={false}
                rowClickEnabled={!selectedBank}
                onRowClick={(bank) => setSelectedBank(bank)}
            />
        </div>
    );
};

export default BankPage;
