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
    adjustedSectionColumns,

} from '../../../constants/TableColumns';
import { setNavbarSelection, setSidebarSelection } from '../../../redux/slices/taxModuleSlice';
import TaxModuleHeader from '../../../layouts/TaxModuleHeader';
import TaxModuleTable from '../../tables/TaxModuleTable';

const VatReturn = () => {

    const dispatch = useDispatch();

    const navbarSelection = useSelector((state) => state.taxModuleSelection.navbarSelection);
    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);


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
    const adjustedSectionData = useSelector((state) => state.tableData.adjustedSection.data);

    let columns;
    let colSpans;

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

                {
                    navbarSelection === "adjusted_section" && (
                        <TaxModuleTable columns={adjustedSectionColumns} data={adjustedSectionData} navBtns={navBtns} />
                    )
                }

                {
                    navbarSelection === "report" && (
                        <TaxModuleTable columns={adjustedSectionColumns} data={adjustedSectionData} navBtns={navBtns} />

                    )
                }


            </div>







        </div>

    )
}

export default VatReturn