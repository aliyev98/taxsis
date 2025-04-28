import React, { useEffect, useState } from "react";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { advanceColumns, initialsColumns, replacedColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const SubstitutionRegister = () => {

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "substitution_register") {
            dispatch(setNavbarSelection("replaced"));
        }
    }, [sidebarSelection, dispatch]);

    const headerBtns = [
        { id: 1, content: "Əlavə et", className: "add" },
        { id: 2, content: "Şablonu yüklə", className: "download" },
        { id: 3, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "replaced", content: "Əvəzləşmiş ƏDV-lər" },
        { id: "initials", content: "Əvəzləşmə üzrə ilkin qalıqlar" },
        { id: "advances", content: "İmtiyaz və Avanslar" },
    ];

    const replacedCol = replacedColumns

    const initialsCol = initialsColumns

    const advanceCol = advanceColumns

    const replacedData = useSelector((state) => state.tableData.replaced.data);
    const initialData = useSelector((state) => state.tableData.initial.data);
    const advancedData = useSelector((state) => state.tableData.advanced.data);


    let columns;
    let data;
    let tableTitle;


    switch (navbarSelection) {
        case "replaced":
            columns = replacedCol;
            data = replacedData;
            tableTitle = 'Əvəzləşmiş ƏDV-lər';
            break;
        case "initials":
            columns = initialsCol;
            data = initialData;
            tableTitle = 'Əvəzləşmə üzrə ilkin qalıqlar'
            break;
        case "advances":
            columns = advanceCol;
            data = advancedData;
            tableTitle = 'İmtiyaz və Avanslar'
            break;
        default:
            columns = replacedCol;
            data = replacedData;
            tableTitle = 'Əvəzləşmiş ƏDV-lər';

    }

    return (
        <div className="content">

            <TaxModuleHeader
                title="Əvəzləşmə reyestri"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">
                <TaxModuleTable columns={columns} data={data} title={tableTitle} navBtns={navBtns} editable={true} />
            </div>


        </div>
    );
}

export default SubstitutionRegister