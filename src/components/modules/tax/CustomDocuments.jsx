import React, { useEffect, useState } from "react";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { ImportDocsColumns, ExportDocsColumns, TransportExpensesColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const CustomDocuments = () => {

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);



    useEffect(() => {
        if (sidebarSelection === "custom_documents") {
            dispatch(setNavbarSelection("import_docs"));
        }
    }, [sidebarSelection, dispatch]);

    const headerBtns = [
        { id: 1, content: "Əlavə et", className: "add" },
        { id: 2, content: "Şablonu yüklə", className: "download" },
        { id: 3, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "import_docs", content: "İdxal sənədləri" },
        { id: "export_docs", content: "İxrac sənədləri" },
        { id: "transportation_expenses", content: "Daşınma və xərclər" },
    ];

    let colSpans;

    switch (navbarSelection) {
        case "import_docs":
            colSpans = [
                { id: 1, content: null, col: 12 },
                { id: 2, content: "GÖMRÜK YIĞIMLARI", col: 6 },
                { id: 3, content: "", col: 1 },
                { id: 4, content: "Maya dəyəri", col: 2 },
            ];
            break;
        case "export_docs":
            colSpans = [
                { id: 1, content: null, col: 12 },
                { id: 2, content: "GÖMRÜK YIĞIMLARI", col: 6 },
                { id: 3, content: "Maya dəyəri", col: 2 },
            ];
            break;
        default:
            colSpans = [
                { id: 1, content: null, col: 12 },
                { id: 2, content: "GÖMRÜK YIĞIMLARI", col: 6 },
                { id: 3, content: "", col: 1 },
                { id: 4, content: "Maya dəyəri", col: 2 },
            ];
    }

    const importCol = ImportDocsColumns
    const exportCol = ExportDocsColumns
    const transportExpenseCol = TransportExpensesColumns


    const importData = useSelector((state) => state.tableData.importDocs.data);
    const exportData = useSelector((state) => state.tableData.exportDocs.data);
    const transportExpenseData = useSelector((state) => state.tableData.transporExpense.data);


    let columns;
    let data;
    let tableTitle;

    let showGroupedHeader = true


    switch (navbarSelection) {
        case "import_docs":
            columns = importCol;
            data = importData;
            tableTitle = 'Əvəzləşmiş ƏDV-lər';
            showGroupedHeader = true;
            break;
        case "export_docs":
            columns = exportCol;
            data = exportData;
            tableTitle = 'Əvəzləşmə üzrə ilkin qalıqlar'
            showGroupedHeader = true;
            break;
        case "transportation_expenses":
            columns = transportExpenseCol;
            data = transportExpenseData;
            tableTitle = 'İmtiyaz və Avanslar'
            showGroupedHeader = false;
            break;
        default:
            columns = importCol;
            data = importData;
            tableTitle = 'Əvəzləşmiş ƏDV-lər';

    }

    return (
        <div className="custom-documents tax-module-content">

            <TaxModuleHeader
                title="Gömrük sənədləri"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">
                <TaxModuleTable columns={columns} data={data} title={tableTitle} navBtns={navBtns} colSpans={colSpans} showGroupedHeader={showGroupedHeader} editable={true} openModal={true} />
            </div>


        </div>
    );
}

export default CustomDocuments