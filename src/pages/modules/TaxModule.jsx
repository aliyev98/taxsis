import React from 'react'
import TaxModuleSideBar from '../../sidebars/TaxModuleSideBar'
import Invoices from '../../components/modules/tax/Invoices'
import { useSelector } from "react-redux";
import SubstitutionRegister from '../../components/modules/tax/SubstitutionRegister';
import DepositExtracts from '../../components/modules/tax/DepositExtracts';
import CashOperations from '../../components/modules/tax/CashOperations';
import Reports from '../../components/modules/tax/Reports';
import ConfrontationActs from '../../components/modules/tax/ConfrontationActs';
import InvoiceReports from '../../components/modules/tax/InvoiceReports';
import CashFlowStatement from '../../components/modules/tax/CashFlowSatatement';
import BankStatements from '../../components/modules/tax/BankStatements';
import CustomDocuments from '../../components/modules/tax/CustomDocuments';
import TaxReports from '../../components/modules/tax/TaxReports';
import InternalBalances from '../../components/modules/tax/InternalBalances';
import ExternalBalances from '../../components/modules/tax/ExternalBalances';
import NonResidents from '../../components/modules/tax/NonResidents';
import PurchasAndSalesReports from '../../components/modules/tax/PurchaseAndSalesReports';
import DebtsTable from '../../components/modules/tax/DebtsTable';
import Substitution from '../../components/modules/tax/Substitution';
import BankAccount from '../../components/modules/tax/BankAccount';
import TaxModuleSidebar2 from '../../sidebars/TaxModuleSidebar2';
import TaxModuleHeader from '../../layouts/TaxModuleHeader';


const TaxModule = () => {

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);

    return (
        <div className='tax-module-container d-flex'>

            <TaxModuleSideBar />





            {sidebarSelection === "invoices" && <Invoices />}

            {sidebarSelection === 'substitution_register' && <SubstitutionRegister />}

            {sidebarSelection === "deposits_extracts" && <DepositExtracts />}

            {sidebarSelection === "cash_opr" && <CashOperations />}

            {sidebarSelection === "reports" && <Reports />}

            {sidebarSelection === "confrontation_acts" && <ConfrontationActs />}

            {sidebarSelection === "invoice_reports" && <InvoiceReports />}

            {sidebarSelection === "cash_flow" && <CashFlowStatement />}

            {sidebarSelection === "bank_statements" && <BankStatements />}

            {sidebarSelection === "custom_documents" && <CustomDocuments />}

            {sidebarSelection === "tax_reports" && <TaxReports />}

            {sidebarSelection === "internal_balances" && <InternalBalances />}

            {sidebarSelection === "external_balances" && <ExternalBalances />}

            {sidebarSelection === "non_residents" && <NonResidents />}

            {sidebarSelection === "purchase_and_sales_reports" && <PurchasAndSalesReports />}

            {sidebarSelection === "debts_table" && <DebtsTable />}

            {sidebarSelection === "substitution" && <Substitution />}

            {sidebarSelection === "bank_account" && <BankAccount />}




        </div>
    )
}

export default TaxModule