import React, { useEffect, useState } from "react";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { cashFlowColumns, onPurchasesColumns } from "../../../constants/TableColumns";

const CashFlowStatement = () => {

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const [isEditing, setIsEditing] = useState(false);
    const [infosHeader, setInfosHeader] = useState(true);

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    const cashFlowsData = useSelector((state) => state.tableData.cashFlows.data);

    useEffect(() => {
        if (sidebarSelection === "cash_flow") {
            dispatch(setNavbarSelection("internal"));
        }
    }, [sidebarSelection, dispatch]);

    const headerBtns = [
        { id: 1, content: "Filterlə", className: "filter", icon: "./assets/huni-icon.svg" },
        { id: 2, content: "Əlavə et", className: "add" },
    ];

    const navBtns = [
        { id: "internal", content: "Daxili DK pul hərəkəti" },
        { id: "external", content: "Xarici DK pul hərəkəti" },
        { id: "article", content: "Maddələr üzrə pul hərəkəti" },
        { id: "currency", content: "Maddələr üzrə pul hərəkəti valyuta" },
    ];

    const colSpans = [
        { id: 1, content: "KONTRAGENT", col: 3 },
        { id: 2, content: "KAPİTAL BANK", col: 3 },
        { id: 3, content: "ƏDV DEPOZİT HESABI", col: 3 },
        { id: 4, content: "KASSA", col: 3 },
        { id: 5, content: "CƏMİ", col: 3 },
        { id: 6, content: "OLMALIDIR", col: 2 },
        { id: 7, content: "FƏRQ", col: 2 },
    ]

    const infos = [
        { id: 1, title: "NÖVÜ", content: "Kreditor" },
        { id: 2, title: "DÖVR", content: "01.01.2023-31.12.2023" },
        { id: 3, title: "KONTRAGENT", content: "Aqro-Vest Retail" },
        { id: 4, title: "BANK/KASSA:", content: "One-Click Post" },
    ]

    const cashFlowCol = cashFlowColumns;

    const showGroupedHeader = true;

    let columns;
    let data;
    let tableTitle;

    switch (navbarSelection) {
        case "internal":
            columns = cashFlowCol;
            data = cashFlowsData;
            tableTitle = 'Alış qaimələri üzrə';
            break;
        case "external":
            columns = cashFlowCol;
            data = cashFlowsData;
            tableTitle = 'Satış qaimələri üzrə';
            break;
        case "article":
            columns = cashFlowCol;
            data = cashFlowsData;
            tableTitle = 'Xarici alışlar üzrə';
            break;
        case "currency":
            columns = cashFlowCol;
            data = cashFlowsData;
            tableTitle = 'Xarici satışlar üzrə';
            break;
        default:
            columns = cashFlowCol;
            data = cashFlowsData;
            tableTitle = 'Alış qaimələri üzrə';
    }

    return (

        <div className="invoices-container content">

            <TaxModuleContentHeader title="Üzləşmə aktları" navBtns={navBtns} headerBtns={headerBtns} columns={columns} />
            <TaxModuleTable columns={columns} data={data} title={tableTitle} isEditing={isEditing} setIsEditing={setIsEditing}
                showGroupedHeader={showGroupedHeader} colSpans={colSpans} infos = {infos} infosHeader = {infosHeader}
            />

        </div>

    );
}

export default CashFlowStatement