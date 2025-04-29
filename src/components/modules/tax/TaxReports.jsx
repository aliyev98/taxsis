import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { vatColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const TaxReports = () => {

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "tax_reports") {
            dispatch(setNavbarSelection("vat"));
        }
    }, [sidebarSelection, dispatch]);

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const vatData = useSelector((state) => state.tableData.vat.data);


    const headerBtns = [
        { id: 1, content: "Şablonu yüklə", className: "download" },
        { id: 2, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "vat", content: "Ədv" },
        { id: "omv", content: "ÖMV" },
    ];

    const vatCol = vatColumns;

    let columns;
    let data;
    let tableTitle;

    switch (navbarSelection) {
        case "vat":
            columns = vatCol;
            data = vatData;
            break;
        case "omv":
            columns = vatCol;
            data = vatData;
            break;
        default:
            columns = vatCol;
            data = vatData;
    }

    return (
        <div className="tax-reports tax-module-content">

            <TaxModuleHeader
                title="Vergi hesabatları"
                headerBtns={headerBtns}
                columns={columns}
            />

            <div className="table">
                <TaxModuleTable columns={columns} data={data} navBtns={navBtns} />
            </div>


        </div>
    )
}

export default TaxReports