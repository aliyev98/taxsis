import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { substitutionReportColumns, substitutionRestorationColumns, substitutionListColumns } from "../../../constants/TableColumns";
import TaxModuleHeader from "../../../layouts/TaxModuleHeader";

const Substitution = () => {

    const dispatch = useDispatch();

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    useEffect(() => {
        if (sidebarSelection === "substitution") {
            dispatch(setNavbarSelection("substitution_report"));
        }
    }, [sidebarSelection, dispatch]);

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const substitutionReportData = useSelector((state) => state.tableData.substitutionReport.data);
    const substitutionRestorationData = useSelector((state) => state.tableData.substitutionRestoration.data);
    const substitutionListData = useSelector((state) => state.tableData.substitutionList.data);


    const headerBtns = [
        { id: 1, content: "Əlavə et", className: "add" },
        { id: 2, content: "Şablonu yüklə", className: "download" },
        { id: 3, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "substitution_report", content: "Əvəzləşmə hesabatı" },
        { id: "substitution_restoration", content: "Əvəzləşmə - Bərpaı" },
        { id: "substitution_current", content: "Əvəzləşmə - Cari" },
        { id: "substitution_list", content: "Əvəzləşmə siyahısı" },
    ];

    let colSpans;
    let colSpans2;


    switch (navbarSelection) {
        case "substitution_report":
            colSpans = [
                { id: 1, content: "", col: 5 },
                { id: 2, content: "QAİMƏ MƏBLƏĞİ", col: 3 },
            ];
            break;
        case "substitution_restoration":
            colSpans = [
                { id: 1, content: "", col: 3 },
                { id: 2, content: "QALIQ", col: 1 },
                { id: 3, content: "CƏMİ ALIŞ", col: 2 },
                { id: 4, content: "ƏVƏZLƏŞİB", col: 1 },
                { id: 5, content: "GERİ QAYTARMA", col: 1 },
                { id: 6, content: "QALIQ", col: 1 },
                { id: 7, content: "DÖVR ƏRZİNDƏ ÖDƏNİŞ", col: 2 },
                { id: 8, content: "ƏVVƏLDƏN AVANSDA QALAN", col: 2 },
                { id: 9, content: "CƏMİ", col: 2 },
                { id: 10, content: "ƏVƏZLƏŞMƏLİ", col: 1 },
                { id: 11, content: "ƏVƏZLƏŞMƏYİB", col: 1 },
                { id: 12, content: "BÖLÜŞDÜRÜLÜB", col: 1 },
                { id: 13, content: "İMTİYAZA DÜŞƏN", col: 2 },
                { id: 14, content: "AVANSA DÜŞƏN", col: 2 },

            ];
            break;
        case "substitution_current":
            colSpans = [
            ];
            break;
        case "substitution_list":
            colSpans = [
            ];
            break;
        default:
            colSpans = [
                { id: 1, content: "", col: 5 },
                { id: 2, content: "QAİMƏ MƏBLƏĞİ", col: 3 },
            ];
    }

    switch (navbarSelection) {
        case "substitution_report":
            colSpans2 = [
            ];
            break;
        case "substitution_restoration":
            colSpans2 = [
                { id: 1, content: "", col: 3 },
                { id: 2, content: "ALIŞ", col: 6 },
                { id: 3, content: "ÖDƏNİŞ", col: 9 },
            ];
            break;
        case "substitution_current":
            colSpans2 = [
            ];
            break;
        case "substitution_list":
            colSpans2 = [
            ];
            break;
        default:
            colSpans2 = [
            ];
    }

    const substitutionReportCol = substitutionReportColumns;
    const substitutionRestorationCol = substitutionRestorationColumns;
    const substitutionListCol = substitutionListColumns;

    let columns;
    let data;

    switch (navbarSelection) {
        case "substitution_report":
            columns = substitutionReportCol;
            data = substitutionReportData;
            break;
        case "substitution_restoration":
            columns = substitutionRestorationCol;
            data = substitutionRestorationData;
            break;
        case "substitution_current":
            columns = substitutionReportCol;
            data = substitutionReportData;
            break;
        case "substitution_list":
            columns = substitutionListCol;
            data = substitutionListData;
            break;
        default:
            columns = substitutionReportCol;
            data = substitutionReportData;
    }

    return (
        <div className="substitution tax-module-content">

            <TaxModuleHeader
                title="Əvəzləşmə"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">
                <TaxModuleTable columns={columns} data={data} navBtns={navBtns} colSpans={colSpans} colSpans2={colSpans2} showGroupedHeader={true} />
            </div>


        </div>
    )
}

export default Substitution