import React, { useEffect, useState } from "react";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { creditorColumns, frgnCreditorColumns } from "../../../constants/TableColumns";
import { creditorData, frgnCreditorData } from "../../../constants/TableDatas";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const ConfrontationActs = () => {

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const [isEditing, setIsEditing] = useState(false);

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    const creditorDatas = creditorData;

    const frgnCreditorDatas = frgnCreditorData;


    useEffect(() => {
        if (sidebarSelection === "confrontation_acts") {
            dispatch(setNavbarSelection("creditor"));
        }
    }, [sidebarSelection, dispatch]);

    const headerBtns = [
        // { id: 1, content: "Filterlə", className: "filter", icon: "/assets/filter-light-icon.svg" },

    ];

    const colSpans = [
        { id: 1, content: "KONTRAGENT", col: 4 },
        { id: 2, content: "DEBET", col: 3 },
        { id: 3, content: "KREDİT", col: 3 },
        { id: 4, content: "Qalıq", col: 3 },
    ]

    const colSpans2 = [
        { id: 1, content: "'GÜVƏN LUX' MMC məlumatlarına əsasən, AZN", col: 20 },
    ]

    const navBtns = [
        { id: "creditor", content: "Kreditor" },
        { id: "debtor", content: "Debitor" },
        { id: "foreign_creditor", content: "Xarici kreditor" },
        { id: "foreign_debtor", content: "Xarici debitor" },
    ];

    const showGroupedHeader = true;

    let columns;
    let data;
    let tableTitle;

    switch (navbarSelection) {
        case "creditor":
            columns = creditorColumns;
            data = creditorDatas;
            tableTitle = 'Kreditor';
            break;
        case "debtor":
            columns = creditorColumns;
            data = creditorDatas;
            tableTitle = 'Debitor';
            break;
        case "foreign_creditor":
            columns = frgnCreditorColumns;
            data = frgnCreditorDatas;
            tableTitle = 'Xarici kreditor';
            break;
        case "foreign_debtor":
            columns = frgnCreditorColumns;
            data = frgnCreditorDatas;
            tableTitle = 'Xarici debitor';
            break;
        default:
            columns = creditorColumns;
            data = creditorDatas;
            tableTitle = 'Daxili üzləşmələr';
    }

    return (

        <div className="confrontation-acts tax-module-content">

            <TaxModuleHeader
                title="Üzləşmə aktları"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">

                <TaxModuleTable columns={columns} data={data} navBtns={navBtns} title={tableTitle} reportsHeader={true} colSpans={colSpans} colSpans2={colSpans2} isEditing={isEditing} setIsEditing={setIsEditing}
                    customHeaderButtons={true}
                    showGroupedHeader={showGroupedHeader}
                    showReportsHeaderFilters={true}
                    reportsHeaderFilters={[
                        {
                            id: 1,
                            title: "KONTRAGENT",
                            content: "Aqro-Vest Retail",
                            icon: "/assets/arrow-down.svg",
                            options: [
                                { value: "agro_vest", label: "Aqro-Vest Retail" },
                                { value: "other", label: "Other Company" },
                            ],
                        },
                        {
                            id: 2,
                            title: "ÜZLƏŞMƏ DÖVR",
                            content: "Bir tarix aralığı seçin...",
                            icon: '/assets/calendar-light.svg'
                        },
                    ]}
                />

            </div>


        </div>

    );
}

export default ConfrontationActs