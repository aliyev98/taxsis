import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { depositsColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const Invoices = () => {

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "deposits_extracts") {
            dispatch(setNavbarSelection(""));
        }
    }, [sidebarSelection, dispatch]);

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const data = useSelector((state) => state.tableData.deposits.data);
    const columns = depositsColumns;
    const tableTitle = "Çıxarışlar"


    const headerBtns = [
        { id: 1, content: "Şablonu yüklə", className: "download" },
        { id: 2, content: "İmport et", className: "import" }
    ];

    const navBtns = [
    ];


    // switch (navbarSelection) {
    //     case "deposits":
    //         columns = purchaseCol;
    //         data = purchaseData;
    //         tableTitle = "Alış qaimələri";
    //         break;
    //     default:
    //         columns = purchaseCol;
    //         data = purchaseData;
    //         tableTitle = "Alış qaimələri";
    // }

    return (
        <div className="deposit-extracts tax-module-content">

            <TaxModuleHeader
                title="Depozit çıxarışları"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />


            <div className="table">
                <TaxModuleTable columns={columns} data={data} title={tableTitle} navBtns={navBtns} />
            </div>


        </div>
    );
};

export default Invoices;
