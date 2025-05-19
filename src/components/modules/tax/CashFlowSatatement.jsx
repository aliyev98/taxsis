import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { cashFlowsbyItemsColumns, externalDKColumns, internalDKColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";
import { cashFlowsbyItemsData, externalDKData, internalDKData } from "../../../constants/TableDatas";

const CashFlowStatement = () => {

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const [isEditing, setIsEditing] = useState(false);
    const [infosHeader, setInfosHeader] = useState(true);

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    const cashFlowsData = useSelector((state) => state.tableData.cashFlows.data);

    useEffect(() => {
        if (sidebarSelection === "cash_flow") {
            dispatch(setNavbarSelection("internal"));
        }
    }, [sidebarSelection, dispatch]);

    const headerBtns = [];

    const navBtns = [
        { id: "internal", content: "Daxili DK pul hərəkəti" },
        { id: "external", content: "Xarici DK pul hərəkəti" },
        { id: "cash_flows_by_items", content: "Maddələr üzrə pul hərəkəti" },
        { id: "currency", content: "Maddələr üzrə pul hərəkəti valyuta" },
    ];


    let columns;

    return (

        <div className="cash-flow-statement tax-module-content">

            <TaxModuleHeader
                title="Pulun hərəkəti hesabatı"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">

                {
                    navbarSelection === "internal" && (

                        <div className="tables">
                            <TaxModuleTable columns={internalDKColumns} data={internalDKData} navBtns={navBtns}
                                headerFilters={[
                                    {
                                        id: 1,
                                        title: "NÖVÜ",
                                        content: "Kreditor",
                                        options: [
                                            { value: "kreditor", label: "Kreditor" },
                                            { value: "debitor", label: "Debitor" },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        title: "DÖVR",
                                        content: "01.01.2023-31.12.2023",
                                        options: [
                                            { value: "2023", label: "2023" },
                                            { value: "2024", label: "2024" },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        title: "KONTRAGENT",
                                        content: "Aqro-Vest Retail",
                                        options: [
                                            { value: "agro_vest", label: "Aqro-Vest Retail" },
                                            { value: "other", label: "Other Company" },
                                        ],
                                    },
                                ]}
                                isEditing={isEditing} setIsEditing={setIsEditing}
                                showGroupedHeader={true} showHeaderFilters={true} openModal={true}
                                colSpans={[{ id: 1, content: "MƏDAXİL/MƏXARİC", col: 3 },
                                { id: 2, content: "KAPİTAL BANK", col: 3 },
                                { id: 3, content: "ƏDV DEPOZİT HESABI", col: 3 },
                                { id: 4, content: "KASSA", col: 3 },
                                { id: 5, content: "CƏMİ", col: 3 },
                                { id: 6, content: "OLMALIDIR", col: 2 },
                                { id: 7, content: "FƏRQ", col: 2 },]}
                            />
                            <TaxModuleTable columns={internalDKColumns} data={internalDKData} isEditing={isEditing} setIsEditing={setIsEditing}
                                showGroupedHeader={true} openModal={true}
                                colSpans={[{ id: 1, content: "Geri qaytarma", col: 3 },
                                { id: 2, content: "KAPİTAL BANK", col: 3 },
                                { id: 3, content: "ƏDV DEPOZİT HESABI", col: 3 },
                                { id: 4, content: "KASSA", col: 3 },
                                { id: 5, content: "CƏMİ", col: 3 },
                                { id: 6, content: "OLMALIDIR", col: 2 },
                                { id: 7, content: "FƏRQ", col: 2 },]} />
                        </div>

                    )
                }

                {
                    navbarSelection === "external" && (
                        <div className="tables">
                            <TaxModuleTable navBtns={navBtns} columns={externalDKColumns} data={externalDKData} openModal={true}
                                headerFilters={[
                                    {
                                        id: 1,
                                        title: "NÖVÜ",
                                        content: "Kreditor",
                                        options: [
                                            { value: "kreditor", label: "Kreditor" },
                                            { value: "debitor", label: "Debitor" },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        title: "DÖVR",
                                        content: "01.01.2023-31.12.2023",
                                        options: [
                                            { value: "2023", label: "2023" },
                                            { value: "2024", label: "2024" },
                                        ],
                                    },
                                    {
                                        id: 3,
                                        title: "KONTRAGENT",
                                        content: "Aqro-Vest Retail",
                                        options: [
                                            { value: "agro_vest", label: "Aqro-Vest Retail" },
                                            { value: "other", label: "Other Company" },
                                        ],
                                    },
                                    {
                                        id: 4,
                                        title: "BANK/KASSA:",
                                        content: "One-Click Post",
                                        options: [
                                            { value: "one_click", label: "One-Click Post" },
                                            { value: "capital", label: "Capital Bank" },
                                        ],
                                    },
                                ]}
                                showHeaderFilters={true} isEditing={isEditing} setIsEditing={setIsEditing}
                                showGroupedHeader={true} />
                        </div>

                    )
                }

                {
                    navbarSelection === "cash_flows_by_items" && (
                        <div className="tables">
                            <TaxModuleTable navBtns={navBtns} columns={cashFlowsbyItemsColumns} data={cashFlowsbyItemsData} openModal={true}
                                headerFilters={[
                                    {
                                        id: 1,
                                        title: "NÖVÜ",
                                        content: "Kreditor",
                                        options: [
                                            { value: "kreditor", label: "Kreditor" },
                                            { value: "debitor", label: "Debitor" },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        title: "DÖVR",
                                        content: "01.01.2023-31.12.2023",
                                        options: [
                                            { value: "2023", label: "2023" },
                                            { value: "2024", label: "2024" },
                                        ],
                                    },
                                ]}
                                showHeaderFilters={true} isEditing={isEditing} setIsEditing={setIsEditing}
                                showGroupedHeader={true} />
                        </div>
                    )
                }

                {
                    navbarSelection === "currency" && (
                        <div className="tables">
                            <TaxModuleTable navBtns={navBtns} columns={externalDKColumns} data={externalDKData} openModal={true}
                                headerFilters={[
                                    {
                                        id: 1,
                                        title: "NÖVÜ",
                                        content: "Kreditor",
                                        options: [
                                            { value: "kreditor", label: "Kreditor" },
                                            { value: "debitor", label: "Debitor" },
                                        ],
                                    },
                                    {
                                        id: 2,
                                        title: "DÖVR",
                                        content: "01.01.2023-31.12.2023",
                                        options: [
                                            { value: "2023", label: "2023" },
                                            { value: "2024", label: "2024" },
                                        ],
                                    },
                                ]}
                                showHeaderFilters={true} isEditing={isEditing} setIsEditing={setIsEditing}
                                showGroupedHeader={true} />
                        </div>
                    )
                }

            </div>


        </div>

    );
}

export default CashFlowStatement