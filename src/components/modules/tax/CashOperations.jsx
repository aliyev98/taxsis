import React, { useEffect, useState } from "react";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { onlineCashColumns, physicalCashColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const SubstitutionRegister = () => {

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "cash_opr") {
            dispatch(setNavbarSelection("online"));
        }
    }, [sidebarSelection, dispatch]);

    const headerBtns = [
        { id: 1, content: "Əlavə et", className: "add" },
        { id: 2, content: "Şablonu yüklə", className: "download" },
        { id: 3, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "online", content: "Onlayn kassa" },
        { id: "physical", content: "Fiziki kassa" },
    ];

    const onlineCashCol = onlineCashColumns
    const physicalCol = physicalCashColumns

    const onlineCashData = useSelector((state) => state.tableData.online.data);
    const physicalData = useSelector((state) => state.tableData.physical.data);


    let columns;
    let data;
    let tableTitle;


    switch (navbarSelection) {
        case "online":
            columns = onlineCashCol;
            data = onlineCashData;
            tableTitle = 'Onlayn kassa';
            break;
        case "physical":
            columns = physicalCol;
            data = physicalData;
            tableTitle = 'Fiziki kassa'
            break;
        default:
            columns = onlineCashCol;
            data = onlineCashData;
            tableTitle = 'Onlayn kassa';

    }

    return (
        <div className="content">


            <TaxModuleHeader
                title="Kassa Əməliyyatları"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">
                <TaxModuleTable columns={columns} data={data} title={tableTitle} navBtns={navBtns} />
            </div>

        </div>
    );
}

export default SubstitutionRegister