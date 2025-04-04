import React from 'react'
import TaxModuleSideBar from '../../sidebars/TaxModuleSideBar'
import TaxModuleHeader from '../../layouts/TaxModuleHeader';
import Invoices1 from '../../components/modules/tax/Invoices1'
import { useSelector } from "react-redux";
import SubstitutionRegister from '../../components/modules/tax/SubstitutionRegister';
import DepositExtracts from '../../components/modules/tax/DepositExtracts';
import CashOperations from '../../components/modules/tax/CashOperations';
import Reports from '../../components/modules/tax/Reports';
import ConfrontationActs from '../../components/modules/tax/ConfrontationActs';
import InvoiceReports from '../../components/modules/tax/InvoiceReports';
import CashFlowStatement from '../../components/modules/tax/CashFlowSatatement';


const TaxModule = () => {

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    return (
        <div className='module-container d-flex'>

            <TaxModuleSideBar />


            <div className="content-wrapper d-flex flex-column">


                {sidebarSelection === "invoices" && <Invoices1 />}

                {sidebarSelection === 'substitution_register' && <SubstitutionRegister />}

                {sidebarSelection === "deposits_extracts" && <DepositExtracts />}

                {sidebarSelection === "cash_opr" && <CashOperations />}

                {sidebarSelection === "reports" && <Reports />}

                {sidebarSelection === "confrontation_acts" && <ConfrontationActs />}

                {sidebarSelection === "invoice_reports" && <InvoiceReports />}

                {sidebarSelection === "cash_flow" && <CashFlowStatement />}

            </div>

        </div>
    )
}

export default TaxModule