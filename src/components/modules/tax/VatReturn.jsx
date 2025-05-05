import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { wholesaleColumns, returnColumns, netSalesColumns, retailSalesColumns, finalSalesColumns } from '../../../constants/TableColumns';
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
        { id: "debitor_transactions", content: "Debitor hərəkəti" },
        { id: "adjusted_section", content: "Dəqiqləşən bölmə" },
        { id: "report", content: "Hesabat" },

    ];

    const wholesSalesData = useSelector((state => state.tableData.wholesSale.data));
    const returnData = useSelector((state) => state.tableData.return.data);
    const netSalesData = useSelector((state) => state.tableData.netSales.data);
    const retailSalesData = useSelector((state) => state.tableData.retailSales.data)
    const finalData = useSelector((state) => state.tableData.final.data);


    let columns;
    // let data;
    let colSpans = [
        { id: 1, content: "", col: 2 },
        { id: 2, content: "SATIŞ", col: 3 },
        { id: 3, content: "PUL", col: 5 },
    ]
    // let colSpans2;


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
                    navbarSelection === "sale" &&
                    (
                        <div className="table">

                            <div className='tables'>
                                <TaxModuleTable columns={wholesaleColumns} data={wholesSalesData} navBtns={navBtns} colSpans={colSpans} showGroupedHeader={true} />
                                <TaxModuleTable columns={returnColumns} data={returnData} navBtns={navBtns} />
                                <TaxModuleTable columns={netSalesColumns} data={netSalesData} navBtns={navBtns} />
                                <TaxModuleTable columns={retailSalesColumns} data={retailSalesData} navBtns={navBtns} />
                                <TaxModuleTable columns={finalSalesColumns} data={finalData} navBtns={navBtns} />|
                            </div>

                            {/* <TaxModuleTable columns={[]} data={[]} navBtns={navBtns} colSpans={colSpans} colSpans2={colSpans2} showGroupedHeader={true} /> */}
                        </div>
                    )
                }

                {/* {
                    navbarSelection === ygb_substitution && (
                        <TaxModuleTable columns={finalSalesColumns} data={finalData} />
                    )
                } */}



            </div>

        </div>
    )
}

export default VatReturn