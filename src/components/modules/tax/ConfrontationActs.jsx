import React, { useEffect, useState } from "react";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { confrontationActsColumns } from "../../../constants/TableColumns";

const ConfrontationActs = () => {

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const [reportsHeader, setReportsHeader] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    const confrontationData = useSelector((state) => state.tableData.confrontation.data);

    useEffect(() => {
        if (sidebarSelection === "confrontation_acts") {
            dispatch(setNavbarSelection("creditor"));
        }
    }, [sidebarSelection, dispatch]);

    const headerBtns = [
        { id: 1, content: "Filterlə", className: "filter", icon: "./assets/huni-icon.svg" },
    ];

    const navBtns = [
        { id: "creditor", content: "Kreditor" },
        { id: "debtor", content: "Debitor" },
        { id: "foreign_creditor", content: "Xarici kreditor" },
        { id: "foreign_debtor", content: "Xarici debitor" },
    ];

    const confrontationCol = confrontationActsColumns;

    const showGroupedHeader = true;


    let columns;
    let data;
    let tableTitle;

    switch (navbarSelection) {
        case "creditor":
            columns = confrontationCol;
            data = confrontationData;
            tableTitle = 'Kreditor';
            break;
        case "debtor":
            columns = confrontationCol;
            data = confrontationData;
            tableTitle = 'Debitor';
            break;
        case "foreign_creditor":
            columns = confrontationCol;
            data = confrontationData;
            tableTitle = 'Xarici kreditor';
            break;
        case "foreign_debtor":
            columns = confrontationCol;
            data = confrontationData;
            tableTitle = 'Xarici debitor';
            break;
        default:
            columns = confrontationCol;
            data = confrontationData;
            tableTitle = 'Daxili üzləşmələr';
    }

    return (

        <div className="invoices-container content">

            <TaxModuleContentHeader title="Üzləşmə aktları" navBtns={navBtns} headerBtns={headerBtns} />
            <TaxModuleTable columns={columns} data={data} title={tableTitle} reportsHeader={reportsHeader} isEditing={isEditing} setIsEditing={setIsEditing}
                customHeaderButtons={
                    <>
                        <button onClick={()=> setIsEditing(true)} className="btn custom-btn">Düzəliş et</button>
                        <button className="btn custom-btn">Çap et</button>
                        <button className="btn custom-btn">Göndər</button>
                    </>
                }
                showGroupedHeader={showGroupedHeader}
            />

        </div>

    );
}

export default ConfrontationActs