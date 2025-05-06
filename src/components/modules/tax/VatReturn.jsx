import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    wholesaleColumns,
    returnColumns,
    netSalesColumns,
    retailSalesColumns,
    finalSalesColumns,
    ygbSubstitutionColumns,
    invoiceSubstitutionColumns,
    debtorTransactionsColumns,

} from '../../../constants/TableColumns';
import { setNavbarSelection, setSidebarSelection } from '../../../redux/slices/taxModuleSlice';
import TaxModuleHeader from '../../../layouts/TaxModuleHeader';
import TaxModuleTable from '../../tables/TaxModuleTable';

const VatReturn = () => {

    const dispatch = useDispatch();

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);
    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);



    console.log(setSidebarSelection)
    console.log(navbarSelection)


    useEffect(() => {
        if (sidebarSelection === "vat_return") {
            dispatch(setNavbarSelection("sale"));
        }
    }, [setSidebarSelection, dispatch]);

    const headerBtns = [
        { id: 1, content: "İmport et", className: "import" },
    ];

    const navBtns = [
        { id: "sale", content: "Satış" },
        { id: "ygb_substitution", content: "YGB əvəzləşmə" },
        { id: "invoice_substitution", content: "Qaimə əvəzləşmə" },
        { id: "debtor_transactions", content: "Debitor hərəkəti" },
        { id: "adjusted_section", content: "Dəqiqləşən bölmə" },
        { id: "report", content: "Hesabat" },

    ];

    const wholesSalesData = useSelector((state => state.tableData.wholesSale.data));
    const returnData = useSelector((state) => state.tableData.return.data);
    const netSalesData = useSelector((state) => state.tableData.netSales.data);
    const retailSalesData = useSelector((state) => state.tableData.retailSales.data)
    const finalData = useSelector((state) => state.tableData.final.data);

    const ygbSubData = useSelector((state) => state.tableData.ygbSubstitution.data);
    const invoiceSubData = useSelector((state) => state.tableData.invoiceSubstitution.data);
    const debtorTransactionsData = useSelector((state) => state.tableData.debtorTransactions.data);

    let columns;
    let colSpans;

    // switch (navbarSelection) {
    //     case 'sale':
    //         colSpans = [
    //             { id: 1, content: "", col: 2 },
    //             { id: 2, content: "SATIŞ", col: 3 },
    //             { id: 3, content: "PUL", col: 5 },
    //         ]
    //         break;
    //     case "ygb_substitution":
    //         colSpans = [];
    //         break;
    //     case "invoice_substitution":
    //         colSpans = []
    //         break;
    //     case "debtor_transactions":
    //         colSpans = [
    //             { id: 1, content: "KONTRAGENT", col: 3 },
    //             { id: 2, content: "ƏVVƏLƏ QALIQ", col: 2 },
    //             { id: 3, content: "CƏMİ ALIŞ", col: 2 },
    //             { id: 4, content: "GERİ QAYTARMA", col: 2 },
    //             { id: 5, content: "SONA QALIQ", col: 2 },
    //             { id: 6, content: "DÖVR ƏRZİNDƏ ÖDƏNİŞ", col: 2 },
    //             { id: 7, content: "DÖVR ƏRZİNDƏ GERİ QAYTARMA", col: 2 },
    //             { id: 8, content: "ƏVVƏLDƏN İMTİYAZDA QALAN", col: 2 },
    //             { id: 9, content: "ƏVVƏLDƏN AVANSDA QALAN", col: 2 },
    //             { id: 10, content: "CƏMİ", col: 2 },
    //             { id: 11, content: "OLMALIDIR", col: 2 },
    //             { id: 12, content: "FƏRQ", col: 2 },
    //             { id: 13, content: "ƏVƏZLƏŞMƏLİ", col: 1 },
    //             { id: 14, content: "BÖLÜŞDÜRÜLÜB", col: 1 },
    //             { id: 15, content: "İMTİYAZA DÜŞƏN", col: 2 },
    //             { id: 16, content: "AVANSA DÜŞƏN", col: 2 },
    //         ];
    //         break;
    //     case "substitution_list":
    //         colSpans = [
    //         ];
    //         break;
    //     default:
    //         colSpans = [
    //             { id: 1, content: "", col: 5 },
    //             { id: 2, content: "QAİMƏ MƏBLƏĞİ", col: 3 },
    //         ];
    // }

    return (
        <div className='vat-return tax-module-content'>

            <TaxModuleHeader
                title="ƏDV bildirişi"
                headerBtns={headerBtns}
                columns={columns}
                navBtns={navBtns}
            />

            <div className="table">

                {
                    navbarSelection === "sale" && (
                        <div className='tables'>
                            <TaxModuleTable columns={wholesaleColumns} data={wholesSalesData} navBtns={navBtns} colSpans={
                                colSpans = [
                                    { id: 1, content: "", col: 2 },
                                    { id: 2, content: "SATIŞ", col: 3 },
                                    { id: 3, content: "PUL", col: 5 },
                                ]
                            } showGroupedHeader={true} />
                            <TaxModuleTable columns={returnColumns} data={returnData} />
                            <TaxModuleTable columns={netSalesColumns} data={netSalesData} />
                            <TaxModuleTable columns={retailSalesColumns} data={retailSalesData} />
                            <TaxModuleTable columns={finalSalesColumns} data={finalData} />
                        </div>
                    )
                }

                {
                    navbarSelection === "ygb_substitution" && (
                        <TaxModuleTable columns={ygbSubstitutionColumns} data={ygbSubData} navBtns={navBtns} />
                    )
                }

                {
                    navbarSelection === "invoice_substitution" && (
                        <TaxModuleTable columns={invoiceSubstitutionColumns} data={invoiceSubData} navBtns={navBtns} />
                    )
                }

                {
                    navbarSelection === "debtor_transactions" && (
                        <div className="tables">
                            <TaxModuleTable columns={debtorTransactionsColumns} data={debtorTransactionsData} navBtns={navBtns}
                                colSpans={[
                                    { id: 1, content: "Debitor hərəkəti - Əsasa görə", col: 6 },

                                ]} showGroupedHeader={true} />
                            <TaxModuleTable columns={debtorTransactionsColumns} data={debtorTransactionsData}
                                colSpans={[
                                    { id: 1, content: "Debitor hərəkəti - ƏDV-yə görə", col: 6 },

                                ]} showGroupedHeader={true} />
                            <TaxModuleTable columns={debtorTransactionsColumns} data={debtorTransactionsData}
                                colSpans={[
                                    { id: 1, content: "Avansın hərəkəti - Əsasa görə", col: 6 },

                                ]} showGroupedHeader={true} />
                            <TaxModuleTable columns={debtorTransactionsColumns} data={debtorTransactionsData}
                                colSpans={[
                                    { id: 1, content: "Avansın hərəkəti - ƏDV-yə görə", col: 6 },

                                ]} showGroupedHeader={true} />
                        </div>
                    )
                }


            </div>







        </div>

    )
}

export default VatReturn