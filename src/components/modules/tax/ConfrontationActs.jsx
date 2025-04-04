import React, { useEffect, useState } from "react";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { confrontationActsColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

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
        { id: 1, content: "Filterlə", className: "filter", icon: "./assets/filter-light-icon.svg" },

    ];

    const colSpans = [
        { id: 1, content: "KONTRAGENT", col: 4 },
        { id: 2, content: "DEBET", col: 3 },
        { id: 3, content: "KREDİT", col: 3 },
        { id: 4, content: "Qalıq", col: 3 },
    ]

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


            <TaxModuleHeader
                title="Üzləşmə aktları"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">
                <TaxModuleTable columns={columns} data={data} navBtns={navBtns} title={tableTitle} reportsHeader={reportsHeader} colSpans={colSpans} isEditing={isEditing} setIsEditing={setIsEditing}
                    customHeaderButtons={
                        <>
                            <button onClick={() => setIsEditing(true)} className="btn custom-btn">Düzəliş et</button>
                            <button className="btn custom-btn">Çap et</button>
                            <button className="btn custom-btn">Göndər</button>
                        </>
                    }
                    showGroupedHeader={showGroupedHeader}
                />
            </div>


        </div>

    );
}

export default ConfrontationActs