import React, { useEffect, useState } from "react";
import TaxModuleContentHeader from "../../../layouts/TaxModuleContentHeader";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../../components/tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { byForeignPurchasesColumns, confrontationActsColumns, onPurchasesColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";
import { byForeignPurchasesData } from "../../../constants/TableDatas";

const ConfrontationActs = () => {

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const [isEditing, setIsEditing] = useState(false);

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    const onPurchaseData = useSelector((state) => state.tableData.onPurchase.data);

    useEffect(() => {
        if (sidebarSelection === "invoice_reports") {
            dispatch(setNavbarSelection("on_purchases"));
        }
    }, [sidebarSelection, dispatch]);

    const headerBtns = [
        // { id: 1, content: "Filterlə", className: "filter", icon: "/assets/huni-icon.svg" },
    ];

    const navBtns = [
        { id: "on_purchases", content: "Alış qaimələri üzrə" },
        { id: "on_sales", content: "Satış qaimələri üzrə" },
        { id: "foregin_purchase", content: "Xarici alışlar üzrə" },
        { id: "foregin_sales", content: "Xarici satışlar üzrə" },
    ];

    const colSpans = [
        { id: 1, content: "KONTRAGENT", col: 3 },
        { id: 2, content: "QAIMƏ", col: 3 },
        { id: 3, content: "BAĞLANIB", col: 3 },
        { id: 4, content: "Qalıq", col: 3 },
    ]

    const onPurchasesCol = onPurchasesColumns;

    const showGroupedHeader = true;

    let columns;
    let data;
    let tableTitle;

    switch (navbarSelection) {
        case "on_purchases":
            columns = onPurchasesCol;
            data = onPurchaseData;
            tableTitle = 'Alış qaimələri üzrə';
            break;
        case "on_sales":
            columns = onPurchasesCol;
            data = onPurchaseData;
            tableTitle = 'Satış qaimələri üzrə';
            break;
        case "foregin_purchase":
            columns = onPurchasesCol;
            data = onPurchaseData;
            tableTitle = 'Xarici alışlar üzrə';
            break;
        case "foregin_sales":
            columns = onPurchasesCol;
            data = onPurchaseData;
            tableTitle = 'Xarici satışlar üzrə';
            break;
        default:
            columns = onPurchasesCol;
            data = onPurchaseData;
            tableTitle = 'Alış qaimələri üzrə';
    }

    return (

        <div className="invoices-reports tax-module-content">


            <TaxModuleHeader
                title="Qaimələr üzrə hesabat"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            {
                navbarSelection === "on_purchases" && (
                    <div className="tables">

                        <div className="table">
                            <TaxModuleTable columns={onPurchasesColumns} data={onPurchaseData} showGroupedHeader={true}  navBtns={navBtns} colSpans={colSpans} openModal={true} />
                        </div>

                        <div className="table">
                            <TaxModuleTable columns={onPurchasesColumns} data={onPurchaseData} openModal={true} />
                        </div>
                    </div>
                )
            }

            {
                navbarSelection === "on_sales" && (
                    <div className="tables">

                        <div className="table">
                            <TaxModuleTable columns={onPurchasesColumns} showGroupedHeader={true} data={onPurchaseData} navBtns={navBtns} colSpans={colSpans} openModal={true} />
                        </div>

                        <div className="table">
                            <TaxModuleTable columns={onPurchasesColumns} data={onPurchaseData} openModal={true} />
                        </div>
                    </div>
                )
            }

            {
                navbarSelection === "foregin_purchase" && (
                    <div className="table">
                        <TaxModuleTable columns={byForeignPurchasesColumns} data={byForeignPurchasesData} navBtns={navBtns} openModal={true}/>
                    </div>
                )
            }

                        {
                navbarSelection === "foregin_sales" && (
                    <div className="table">
                        <TaxModuleTable columns={byForeignPurchasesColumns} data={byForeignPurchasesData} navBtns={navBtns} openModal={true} />
                    </div>
                )
            }

            {/* <div className="table">
                <TaxModuleTable columns={columns} navBtns={navBtns} data={data} title={tableTitle} isEditing={isEditing} setIsEditing={setIsEditing}
                    showGroupedHeader={showGroupedHeader} colSpans={colSpans} />

            </div> */}



        </div>

    );
}

export default ConfrontationActs