import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import TestTable from "../../../components/tables/TestTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { purchaseColumns, actsColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const Invoices1 = () => {

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "invoices") {
            dispatch(setNavbarSelection("purchase"));
        }
    }, [sidebarSelection, dispatch]);

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const purchaseData = useSelector((state) => state.tableData.purchases.data);
    const actsData = useSelector((state) => state.tableData.acts.data);


    const headerBtns = [
        { id: 1, content: "Şablonu yüklə", className: "download" },
        { id: 2, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "purchase", content: "Alış qaimələri" },
        { id: "sales", content: "Satış qaimələri" },
        { id: "returns_buyer", content: "Alıcıdan geri qaytarmalar" },
        { id: "returns_seller", content: "Satıcıdan geri qaytarmalar" },
        { id: "acts", content: "Alış aktları" },
    ];

    const purchaseCol = purchaseColumns;

    const actsCol = actsColumns

    let columns;
    let data;
    let tableTitle;

    switch (navbarSelection) {
        case "purchase":
            columns = purchaseCol;
            data = purchaseData;
            tableTitle = "Alış qaimələri";
            break;
        case "sales":
            columns = actsCol;
            data = actsData;
            tableTitle = "Satış qaimələri";
            break;
        case "returns_buyer":
            columns = actsCol;
            data = actsData;
            tableTitle = "Alıcıdan geri qaytarmalar";
            break;
        case "returns_seller":
            columns = actsCol;
            data = actsData;
            tableTitle = "Alıcıdan geri qaytarmalar";
            break;
        case "acts":
            columns = actsCol;
            data = actsData;
            tableTitle = "Alış aktları";
            break;
        default:
            columns = purchaseCol;
            data = purchaseData;
            tableTitle = "Alış qaimələri";
    }

    return (
        <div className="content">

            <TaxModuleHeader
                title="Qaimələr"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">
                <TaxModuleTable columns={columns} data={data} navBtns={navBtns} />
            </div>


        </div>
    )
}

export default Invoices1