import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaxModuleTable from "../../tables/TaxModuleTable";
import { setNavbarSelection } from "../../../redux/slices/taxModuleSlice";
import { tableJoinColumns, substitutionReportColumns, substitutionRestorationColumns, substitutionListColumns, substitutionCurrentColumns } from "../../../constants/TableColumns";
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

    const tableJoinData = useSelector((state => state.tableData.tableJoin.data));
    const substitutionReportData = useSelector((state) => state.tableData.substitutionReport.data);
    const substitutionRestorationData = useSelector((state) => state.tableData.substitutionRestoration.data);
    const substitutionCurrentData = useSelector((state) => state.tableData.substitutionCurrent.data)
    const substitutionListData = useSelector((state) => state.tableData.substitutionList.data);


    const headerBtns = [
        { id: 1, content: "İmport et", className: "import" },
    ];

    const commonBtns = [
        { id: 1, content: "Bölüşdür", className: "btn-white" },
        { id: 2, content: "Redaktə et", className: "btn-white" },
        { id: 3, content: "Avans at", className: "btn-white" },
        { id: 4, content: "İmport et", className: "import" },
    ]

    const navBtns = [
        // { id: "table_join", content: "Table Join Əvəzləşmə" },
        { id: "substitution_report", content: "Əvəzləşmə hesabatı" },
        { id: "substitution_restoration", content: "Əvəzləşmə - Bərpa" },
        { id: "substitution_current", content: "Əvəzləşmə - Cari" },
        { id: "substitution_list", content: "Əvəzləşmə siyahısı" },
    ];

    let colSpans;
    let colSpans2;


    switch (navbarSelection) {
        // case 'table_join':
        //     colSpans = []
        //     break;
        case "substitution_report":
            colSpans = [
                { id: 1, content: "", col: 5 },
                { id: 2, content: "QAİMƏ MƏBLƏĞİ", col: 3 },
            ];
            break;
        case "substitution_restoration":
            colSpans = [
                { id: 1, content: "KONTRAGENT", col: 3 },
                { id: 2, content: "İLKİN QALIQ", col: 2 },
                { id: 3, content: "CƏMİ ALIŞ", col: 2 },
                { id: 4, content: "ƏVƏZLƏŞİB", col: 2 },
                { id: 5, content: "GERİ QAYTARMA", col: 2 },
                { id: 6, content: "SONA QALIQ", col: 2 },
                { id: 7, content: "DÖVR ƏRZİNDƏ ÖDƏNİŞ", col: 2 },
                { id: 8, content: "DÖVR ƏRZİNDƏ GERİ QAYTARMA", col: 2 },
                { id: 9, content: "ƏVVƏLDƏN İMTİYAZDA QALAN", col: 2 },
                { id: 10, content: "ƏVVƏLDƏN AVANSDA QALAN", col: 2 },
                { id: 11, content: "CƏMİ", col: 2 },
                { id: 12, content: "OLMALIDIR", col: 2 },
                { id: 13, content: "FƏRQ", col: 2 },
                { id: 14, content: "ƏVƏZLƏŞMƏLİ", col: 1 },
                { id: 15, content: "ƏVƏZLƏŞMƏYİB", col: 1 },
                { id: 16, content: "BÖLÜŞDÜRÜLÜB", col: 1 },
                { id: 17, content: "İMTİYAZA DÜŞƏN", col: 2 },
                { id: 18, content: "AVANSA DÜŞƏN", col: 2 },

            ];
            break;
        case "substitution_current":
            colSpans = [
                { id: 1, content: "KONTRAGENT", col: 3 },
                { id: 2, content: "ƏVVƏLƏ QALIQ", col: 2 },
                { id: 3, content: "CƏMİ ALIŞ", col: 2 },
                { id: 4, content: "GERİ QAYTARMA", col: 2 },
                { id: 5, content: "SONA QALIQ", col: 2 },
                { id: 6, content: "DÖVR ƏRZİNDƏ ÖDƏNİŞ", col: 2 },
                { id: 7, content: "DÖVR ƏRZİNDƏ GERİ QAYTARMA", col: 2 },
                { id: 8, content: "ƏVVƏLDƏN İMTİYAZDA QALAN", col: 2 },
                { id: 9, content: "ƏVVƏLDƏN AVANSDA QALAN", col: 2 },
                { id: 10, content: "CƏMİ", col: 2 },
                { id: 11, content: "OLMALIDIR", col: 2 },
                { id: 12, content: "FƏRQ", col: 2 },
                { id: 13, content: "ƏVƏZLƏŞMƏLİ", col: 1 },
                { id: 14, content: "BÖLÜŞDÜRÜLÜB", col: 1 },
                { id: 15, content: "İMTİYAZA DÜŞƏN", col: 2 },
                { id: 16, content: "AVANSA DÜŞƏN", col: 2 },
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

        // case 'table_join':
        //     colSpans2 = [
        //     ];
        //     break;
        case "substitution_report":
            colSpans2 = [
            ];
            break;
        case "substitution_restoration":
            colSpans2 = [
                { id: 1, content: "", col: 3 },
                { id: 2, content: "ALIŞ", col: 10 },
                { id: 3, content: "ÖDƏNİŞ", col: 10 },
                { id: 4, content: "MÜQAYİSƏ", col: 4 },
                { id: 5, content: "ƏVƏZLƏŞMƏ", col: 7 },
            ];
            break;
        case "substitution_current":
            colSpans2 = [
                { id: 1, content: '', col: 3 },
                { id: 2, content: "ALIŞ", col: 8 },
                { id: 3, content: "ÖDƏNİŞ", col: 10 },
                { id: 4, content: "MÜQAYİSƏ", col: 4 },
                { id: 5, content: "ƏVƏZLƏŞMƏ", col: 6 }
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
    const substitutionCurrendCol = substitutionCurrentColumns;
    const substitutionListCol = substitutionListColumns;

    let columns;
    let data;

    switch (navbarSelection) {
        // case "table_join":
        //     columns = tableJoinColumns;
        //     data = tableJoinData;
        //     break;
        case "substitution_report":
            columns = substitutionReportCol;
            data = substitutionReportData;
            break;
        case "substitution_restoration":
            columns = substitutionRestorationCol;
            data = substitutionRestorationData;
            break;
        case "substitution_current":
            columns = substitutionCurrendCol;
            data = substitutionCurrentData;
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
                title="Vergi uçotu"
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