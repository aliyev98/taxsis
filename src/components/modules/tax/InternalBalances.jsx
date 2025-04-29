import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { internalCreditorColumns, internalDebitorColumns, internalGivenAdvanceColumns, internalReceivedAdvanceColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const InternalBalances = () => {

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "internal_balances") {
            dispatch(setNavbarSelection("creditor"));
        }
    }, [sidebarSelection, dispatch]);

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const creditorData = useSelector((state) => state.tableData.internalCreditor.data);
    const debitorData = useSelector((state) => state.tableData.internalDebitor.data);
    const givenAdvanceData = useSelector((state) => state.tableData.internalGivenAdvance.data);
    const receivedAdvanceData = useSelector((state) => state.tableData.internalReceivedAdvance.data);


    const headerBtns = [
        { id: 1, content: "Əlavə et", className: "add" },
        { id: 2, content: "Şablonu yüklə", className: "download" },
        { id: 3, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "creditor", content: "Kreditor" },
        { id: "debitor", content: "Debitor" },
        { id: "given_advance", content: "Verilmiş avans" },
        { id: "received_advance", content: "Alınmış avans" },
    ];

    const creditorCol = internalCreditorColumns;
    const debitorCol = internalDebitorColumns;
    const givenAdvanceCol = internalGivenAdvanceColumns;
    const receivedAdvanceCol = internalReceivedAdvanceColumns

    let columns;
    let data;

    switch (navbarSelection) {
        case "creditor":
            columns = creditorCol;
            data = creditorData;
            break;
        case "debitor":
            columns = debitorCol;
            data = debitorData;
            break;
        case "given_advance":
            columns = givenAdvanceCol;
            data = givenAdvanceData;
            break;
        case "received_advance":
            columns = receivedAdvanceCol;
            data = receivedAdvanceData;
            break;
        default:
            columns = creditorCol;
            data = creditorData;
    }

    return (
        <div className="internal-balances tax-module-content">

            <TaxModuleHeader
                title="Daxili qalıqlar"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">
                <TaxModuleTable columns={columns} data={data} navBtns={navBtns} editable={true} />
            </div>


        </div>
    )
}

export default InternalBalances