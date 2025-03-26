import React from 'react'
import TaxModuleSideBar from '../../sidebars/TaxModuleSideBar'
import TaxModuleHeader from '../../layouts/TaxModuleHeader';
import Invoices from '../../components/modules/tax/Invoices'
import { useSelector } from "react-redux";
import SubstitutionRegister from '../../components/modules/tax/SubstitutionRegister';
import Deposits from '../../components/modules/tax/Deposits';
import CashOperations from '../../components/modules/tax/CashOperations';


const TaxModule = () => {

    const sidebarSelection = useSelector((state) => state.taxModuleSelection.sidebarSelection);



    return (
        <div className='module-container d-flex'>

            <TaxModuleSideBar />

            <div className="content-wrapper d-flex flex-column">

                <TaxModuleHeader />

                {sidebarSelection === "invoices" && <Invoices />}

                {sidebarSelection === 'substitution_register' && <SubstitutionRegister />}

                {sidebarSelection === "deposits" && <Deposits />}

                {sidebarSelection === "cash_ops" && <CashOperations />}


            </div>

        </div>
    )
}

export default TaxModule