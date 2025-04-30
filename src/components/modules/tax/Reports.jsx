import React, { useEffect, useState } from "react";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const Reports = () => {

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "reports") {
            dispatch(setNavbarSelection("internal"));
        }
    }, [sidebarSelection, dispatch]);

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
        <div className="reports tax-module-content">

            <TaxModuleHeader
                title="Hesabatlar"
                columns={[]}
                navBtns={navBtns}
            />

            <div className="table">
                <TaxModuleTable columns={[]} data={[]} navBtns={navBtns} title={tableTitle} emptyMessageVisible={true} />
            </div>

        </div>
    );
}

export default Reports