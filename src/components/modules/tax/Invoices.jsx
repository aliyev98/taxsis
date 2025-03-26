import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { purchaseColumns, actsColumns } from "../../../constants/TableColumns";

const Invoices = () => {

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "invoices") {
            dispatch(setNavbarSelection("purchase")); // ✅ bu sayfa için varsayılan seçim
        }
    }, [sidebarSelection, dispatch]);

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const purchaseData = useSelector((state) => state.tableData.purchases.data);
    const actsData = useSelector((state) => state.tableData.acts.data);


    const headerBtns = [
        { id: 1, content: "Şablonu yüklə", className: "download" },
        { id: 2, content: "İmport et", className: "import" }
    ];

    const navBtns = [
        { id: "purchase", content: "Alış qaimələri" },
        { id: "sales", content: "Satış qaimələri" },
        { id: "returns", content: "Alıcıdan geri qaytarmalar" },
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
        case "returns":
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
        <div className="invoices-container content">
            <TaxModuleContentHeader
                title="Qaimələr"
                navBtns={navBtns}
                headerBtns={headerBtns}
                columns={columns}
            />
            <TaxModuleTable columns={columns} data={data} title={tableTitle} />
        </div>
    );
};

export default Invoices;
