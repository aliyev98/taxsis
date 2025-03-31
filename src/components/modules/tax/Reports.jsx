import React, { useEffect, useState } from "react";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";

const SubstitutionRegister = () => {

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "reports") {
            dispatch(setNavbarSelection("internal"));
        }
    }, [sidebarSelection, dispatch]);

    const headerBtns = [
        { id: 1, content: "Əlavə et", className: "add" },
        { id: 2, content: "Şablonu yüklə", className: "download" },
        { id: 3, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "internal", content: "Daxili üzləşmələr" },
        { id: "external", content: "Xarici üzləşmələr" },
    ];


    let tableTitle;


    switch (navbarSelection) {
        case "internal":
            tableTitle = 'Daxili üzləşmələr';
            break;
        case "external":
            tableTitle = 'Xarici üzləşmələr'
            break;
        default:
            tableTitle = 'Daxili üzləşmələr';

    }

    return (
        <div className="invoices-container content">
            <TaxModuleContentHeader title="Hesabatlar" navBtns={navBtns} />
            <TaxModuleTable columns={[]} data={[]} title={tableTitle} emptyMessageVisible={true}  />

        </div>
    );
}

export default SubstitutionRegister