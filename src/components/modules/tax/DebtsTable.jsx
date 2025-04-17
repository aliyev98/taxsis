import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { receiptPurchaseColumns, receiptSalesColumns, externalPurchaseColumns, externalSalesColumns } from "../../../constants/TableColumns";
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

    const receiptPurchaseData = useSelector((state) => state.tableData.receiptPurchase.data);
    const receiptSalesData = useSelector((state) => state.tableData.receiptSales.data);
    const externalPurchaseData = useSelector((state) => state.tableData.externalPurchase.data);
    const externalSalesData = useSelector((state) => state.tableData.externalSales.data);


    const headerBtns = [
        { id: 1, content: "Əlavə et", className: "add" },
        { id: 2, content: "Şablonu yüklə", className: "download" },
        { id: 3, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "creditor_debts", content: "Kreditor borcları" },
        { id: "debitor_debts", content: "Debitor borcları" },
        { id: "foreign_creditor_debts", content: "Xarici kreditor borcları" },
        { id: "foreign_debitor_debts", content: "Xarici debitor borcları" },
    ];

    let colSpans;

    switch (navbarSelection) {
        case "creditor_debts":
            colSpans = [
                { id: 1, content: "Təşkilat", col: 3 },
                { id: 2, content: "Alış", col: 5 },
                { id: 3, content: "Geri qaytarma", col: 6 },
                { id: 4, content: "XALİS ALIŞ", col: 3 },
            ];
            break;
        case "debitor_debts":
            colSpans = [
                { id: 1, content: "Təşkilat", col: 3 },
                { id: 2, content: "Satış", col: 4 },
            ];
            break;
        case "foreign_creditor_debts":
            colSpans = [
                { id: 1, content: "Təşkilat", col: 5 },
                { id: 2, content: "Alış", col: 2 },
                { id: 3, content: "GERİ QAYTARMA", col: 2 },
                { id: 3, content: "Xalis satış", col: 2 },
            ];
            break;
        case "foreign_debitor_debts":
            colSpans = [
                { id: 1, content: "Təşkilat", col: 5 },
                { id: 2, content: "Satış", col: 2 },
                { id: 3, content: "GERİ QAYTARMA", col: 2 },
                { id: 3, content: "Xalis satış", col: 2 },
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

    const receiptPurchaseCol = receiptPurchaseColumns;
    const receiptSalesCol = receiptSalesColumns;
    const externalPurchaseCol = externalPurchaseColumns;
    const externalSalesCol = externalSalesColumns;

    let columns;
    let data;

    switch (navbarSelection) {
        case "creditor_debts":
            columns = receiptPurchaseCol;
            data = receiptPurchaseData;
            break;
        case "debitor_debts":
            columns = receiptSalesCol;
            data = receiptSalesData;
            break;
        case "foreign_creditor_debts":
            columns = externalPurchaseCol;
            data = externalPurchaseData;
            break;
        case "foreign_debitor_debts":
            columns = externalSalesCol;
            data = externalSalesData;
            break;
        default:
            columns = receiptPurchaseCol;
            data = receiptPurchaseData;
    }

    return (
        <div className="content">

            <TaxModuleHeader
                title="Alış-satış hesabatı"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">
                <TaxModuleTable columns={columns} data={data} navBtns={navBtns} colSpans={colSpans} showGroupedHeader={true} />
            </div>


        </div>
    )
}

export default DebtsTable