import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { serviceExportColumns, serviceImportColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const NonResidents = () => {

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "non_residents") {
            dispatch(setNavbarSelection("service_import"));
        }
    }, [sidebarSelection, dispatch]);

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const serviceImportData = useSelector((state) => state.tableData.serviceImport.data);
    const serviceExportData = useSelector((state) => state.tableData.serviceExport.data);


    const headerBtns = [
        { id: 1, content: "Əlavə et", className: "add" },
        { id: 2, content: "Şablonu yüklə", className: "download" },
        { id: 3, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "service_import", content: "Xidmət idxal" },
        { id: "service_export", content: "Xidmət ixrac" },
    ];

    const serviceImportCol = serviceImportColumns;
    const serviceExportCol = serviceExportColumns;

    let columns;
    let data;

    switch (navbarSelection) {
        case "service_import":
            columns = serviceImportCol;
            data = serviceImportData;
            break;
        case "service_export":
            columns = serviceExportCol;
            data = serviceExportData;
            break;
        default:
            columns = serviceImportCol;
            data = serviceImportData;
    }

    return (
        <div className="non-residents tax-module-content">

            <TaxModuleHeader
                title="Qeyri rezidentlər"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">
                <TaxModuleTable columns={columns} data={data} navBtns={navBtns} emptyMessageVisible={true} />
            </div>


        </div>
    )
}

export default NonResidents