import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../tables/TaxModuleTable";
// import TestTable from "../../tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { receiptPurchaseColumns, receiptSalesColumns, externalPurchaseColumns, externalSalesColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const PurchasAndSalesReports = () => {

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "purchase_and_sales_reports") {
            dispatch(setNavbarSelection("receipts_purchase"));
        }
    }, [sidebarSelection, dispatch]);

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const receiptPurchaseData = useSelector((state) => state.tableData.receiptPurchase.data);
    const receiptSalesData = useSelector((state) => state.tableData.receiptSales.data);
    const externalPurchaseData = useSelector((state) => state.tableData.externalPurchase.data);
    const externalSalesData = useSelector((state) => state.tableData.externalSales.data);


    const headerBtns = [
        { id: 1, content: "Şablonu yüklə", className: "download" },
        { id: 2, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "receipts_purchase", content: "Qaimə üzrə alış" },
        { id: "receipt_sales", content: "Qaimə üzrə satış" },
        { id: "external_purchase", content: "Xarici alış" },
        { id: "external_sales", content: "Xarici satış" },
        { id: "cash_sales", content: "Kassa satışı" },
    ];

    let colSpans;

    switch (navbarSelection) {
        case "receipts_purchase":
            colSpans = [
                { id: 1, content: "Təşkilat", col: 3 },
                { id: 2, content: "Alış", col: 5 },
                { id: 3, content: "Geri qaytarma", col: 6 },
                { id: 4, content: "XALİS ALIŞ", col: 3 },
            ];
            break;
        case "receipt_sales":
            colSpans = [
                { id: 1, content: "Təşkilat", col: 3 },
                { id: 2, content: "Satış", col: 4 },
            ];
            break;
        case "external_purchase":
            colSpans = [
                { id: 1, content: "Təşkilat", col: 5 },
                { id: 2, content: "Alış", col: 2 },
                { id: 3, content: "GERİ QAYTARMA", col: 2 },
                { id: 3, content: "Xalis satış", col: 2 },
            ];
            break;
        case "external_sales":
            colSpans = [
                { id: 1, content: "Təşkilat", col: 5 },
                { id: 2, content: "Satış", col: 2 },
                { id: 3, content: "GERİ QAYTARMA", col: 2 },
                { id: 3, content: "Xalis satış", col: 2 },
            ];
            break;
        case "cash_sales":
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
        case "receipt_purchase":
            columns = receiptPurchaseCol;
            data = receiptPurchaseData;
            break;
        case "receipt_sales":
            columns = receiptSalesCol;
            data = receiptSalesData;
            break;
        case "external_purchase":
            columns = externalPurchaseCol;
            data = externalPurchaseData;
            break;
        case "external_sales":
            columns = externalSalesCol;
            data = externalSalesData;
            break;
        case "cash_sales":
            columns = externalSalesCol;
            data = externalSalesData;
            break;
        default:
            columns = receiptPurchaseCol;
            data = receiptPurchaseData;
    }

    return (
        <div className="purchase-and-salses-reports tax-module-content">

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

export default PurchasAndSalesReports