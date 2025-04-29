import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { creditorDebtsColumns, debitorDebtColumns, foreignCreditorColumns, foreignDebitorColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const DebtsTable = () => {

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "debts_table") {
            dispatch(setNavbarSelection("creditor_debts"));
        }
    }, [sidebarSelection, dispatch]);

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const creditorDebtsData = useSelector((state) => state.tableData.creditorDebts.data);
    const debitorDebtData = useSelector((state) => state.tableData.debitorDebt.data);
    const foreignCreditorData = useSelector((state) => state.tableData.foreignCreditor.data);
    const foreignDebitorData = useSelector((state) => state.tableData.foreignDebitor.data);


    const headerBtns = [
        { id: 1, content: "Şablonu yüklə", className: "download" },
        { id: 2, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "creditor_debts", content: "Kreditor borcları" },
        { id: "debitor_debts", content: "Debitor borcları" },
        { id: "foreign_creditor_debts", content: "Xarici kreditor borcları" },
        { id: "foreign_debitor_debts", content: "Xarici debitor borcları" },
    ];

    let colSpans;
    let colSpans2;


    switch (navbarSelection) {
        case "creditor_debts":
            colSpans = [
                { id: 1, content: "KONTRAGENTİN ADI", col: 3 },
                { id: 2, content: "ƏVVƏLƏ BORC QALIQ", col: 3 },
                { id: 3, content: "ƏVVƏLƏ AVANS QALIQ", col: 3 },
                { id: 4, content: "ÖDƏNİLƏN PUL", col: 3 },
                { id: 5, content: "MALLARIN GERİ QAYTARILMASI", col: 3 },
                { id: 6, content: "CƏMİ MƏXARİC", col: 3 },
                { id: 7, content: "Alışlar", col: 3 },
                { id: 8, content: "TƏCHİZATÇIDAN PUL GERİ", col: 3 },
                { id: 9, content: "CƏMİ MƏDAXİL", col: 3 },
                { id: 10, content: "SONA BORC QALIQ", col: 3 },
                { id: 11, content: "SONA AVANS QALIQ", col: 3 },
            ];
            break;
        case "debitor_debts":
            colSpans = [
                { id: 1, content: "KONTRAGENTİN ADI", col: 3 },
                { id: 2, content: "ƏVVƏLƏ BORC QALIQ", col: 3 },
                { id: 3, content: "ƏVVƏLƏ AVANS QALIQ", col: 3 },
                { id: 4, content: "ÖDƏNİLƏN PUL", col: 3 },
                { id: 5, content: "MALLARIN GERİ QAYTARILMASI", col: 3 },
                { id: 6, content: "CƏMİ MƏXARİC", col: 3 },
                { id: 7, content: "Satışlar", col: 3 },
                { id: 8, content: "TƏCHİZATÇIDAN PUL GERİ", col: 3 },
                { id: 9, content: "MÜŞTƏRİDƏN PUL GERİ QAYTARILMASI", col: 3 },
                { id: 10, content: "CƏMİ MƏDAXİL", col: 3 },
                { id: 11, content: "SONA BORC QALIQ", col: 3 },
                { id: 12, content: "SONA AVANS QALIQ", col: 3 },
            ];
            break;
        case "foreign_creditor_debts":
            colSpans = [
                { id: 1, content: "KONTRAGENTİN ADI", col: 4 },
                { id: 2, content: "ƏVVƏLƏ BORC QALIQ", col: 2 },
                { id: 3, content: "ƏVVƏLƏ AVANS QALIQ", col: 2 },
                { id: 4, content: "ÖDƏNİLƏN PUL", col: 2 },
                { id: 5, content: "MALLARIN GERİ QAYTARILMASI", col: 2 },
                { id: 6, content: "CƏMİ MƏXARİC", col: 2 },
                { id: 7, content: "ALIŞLAR", col: 2 },
                { id: 8, content: "TƏCHİZATÇIDAN PUL GERİ", col: 2 },
                { id: 6, content: "CƏMİ MƏDAXİL", col: 2 },
                { id: 11, content: "SONA BORC QALIQ", col: 2 },
                { id: 12, content: "SONA AVANS QALIQ", col: 2 },

            ];
            break;
        case "foreign_debitor_debts":
            colSpans = [
                { id: 1, content: "KONTRAGENTİN ADI", col: 4 },
                { id: 2, content: "ƏVVƏLƏ BORC QALIQ", col: 2 },
                { id: 3, content: "ƏVVƏLƏ AVANS QALIQ", col: 2 },
                { id: 4, content: "ÖDƏNİLƏN PUL", col: 2 },
                { id: 5, content: "MALLARIN GERİ QAYTARILMASI", col: 2 },
                { id: 6, content: "CƏMİ MƏXARİC", col: 2 },
                { id: 7, content: "ALIŞLAR", col: 2 },
                { id: 8, content: "MÜŞTƏRİYƏ PUL GERİ", col: 2 },
                { id: 9, content: "CƏMİ MƏDAXİL", col: 2 },
                { id: 10, content: "SONA BORC QALIQ", col: 2 },
                { id: 11, content: "SONA AVANS QALIQ", col: 2 },
            ];
            break;
        default:
            colSpans = [
                { id: 1, content: "Təşkilat", col: 3 },
                { id: 2, content: "Alış", col: 5 },
                { id: 3, content: "Geri qaytarma", col: 6 },
                { id: 4, content: "XALİS ALIŞ", col: 3 },
            ];
    }

    switch (navbarSelection) {
        case "creditor_debts":
            colSpans2 = [
                { id: 1, content: "TƏŞKİLAT", col: 3 },
                { id: 2, content: "ƏVVƏLƏ QALIQ", col: 6 },
                { id: 3, content: "BORCUN ÖDƏNİLMƏSİ (DÖVRİYYƏ)", col: 9 },
                { id: 4, content: "BORCUN YARANMASI (DÖVRİYYƏ)", col: 9 },
                { id: 5, content: "SONA QALIQ", col: 6 },
            ];
            break;
        case "debitor_debts":
            colSpans2 = [
                { id: 1, content: "TƏŞKİLAT", col: 3 },
                { id: 2, content: "ƏVVƏLƏ QALIQ", col: 6 },
                { id: 3, content: "BORCUN ÖDƏNİLMƏSİ (DÖVRİYYƏ)", col: 9 },
                { id: 4, content: "BORCUN YARANMASI (DÖVRİYYƏ)", col: 12 },
                { id: 5, content: "SONA QALIQ", col: 6 },
            ];
            break;
        case "foreign_creditor_debts":
            colSpans2 = [
                { id: 1, content: "TƏŞKİLAT", col: 4 },
                { id: 2, content: "ƏVVƏLƏ QALIQ", col: 4 },
                { id: 3, content: "BORCUN ÖDƏNİLMƏSİ (DÖVRİYYƏ)", col: 6 },
                { id: 4, content: "BORCUN YARANMASI (DÖVRİYYƏ)", col: 6 },
                { id: 5, content: "SONA QALIQ", col: 4 },
            ];
            break;
        case "foreign_debitor_debts":
            colSpans2 = [
                { id: 1, content: "TƏŞKİLAT", col: 4 },
                { id: 2, content: "ƏVVƏLƏ QALIQ", col: 4 },
                { id: 3, content: "BORCUN ÖDƏNİLMƏSİ (DÖVRİYYƏ)", col: 6 },
                { id: 4, content: "BORCUN YARANMASI (DÖVRİYYƏ)", col: 6 },
                { id: 5, content: "SONA QALIQ", col: 4 },
            ];
            break;
        default:
            colSpans2 = [
                { id: 1, content: "Təşkilat", col: 3 },
                { id: 2, content: "Alış", col: 5 },
                { id: 3, content: "Geri qaytarma", col: 6 },
                { id: 4, content: "XALİS ALIŞ", col: 3 },
            ];
    }

    const creditorDebtsCol = creditorDebtsColumns;
    const debitorDebtCol = debitorDebtColumns;
    const foreignCreditorCol = foreignCreditorColumns;
    const foreignDebitorCol = foreignDebitorColumns;

    let columns;
    let data;

    switch (navbarSelection) {
        case "creditor_debts":
            columns = creditorDebtsCol;
            data = creditorDebtsData;
            break;
        case "debitor_debts":
            columns = debitorDebtCol;
            data = debitorDebtData;
            break;
        case "foreign_creditor_debts":
            columns = foreignCreditorCol;
            data = foreignCreditorData;
            break;
        case "foreign_debitor_debts":
            columns = foreignDebitorCol;
            data = foreignDebitorData;
            break;
        default:
            columns = creditorDebtsCol;
            data = creditorDebtsData;
    }

    return (
        <div className="debts-table tax-module-content">

            <TaxModuleHeader
                title="Borclar cədvəli"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">
                <TaxModuleTable columns={columns} data={data} navBtns={navBtns} colSpans={colSpans} colSpans2={colSpans2} showGroupedHeader={true} />
            </div>


        </div>
    )
}

export default DebtsTable