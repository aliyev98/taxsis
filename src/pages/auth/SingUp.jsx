import React from 'react'
import AccountType from '../../components/auth/general/AccountType'
import IndividualRegistrationType from '../../components/auth/signup/individual/IndividualRegistrationType'
import RegisterWithID from '../../components/auth/signup/individual/RegisterWithID'
import Finish from '../../components/auth/general/Finish'
import RegisterWithSignature from '../../components/auth/signup/individual/RegisterWithSignature'
import EnterCodeIndividualSignUp from '../../components/auth/signup/individual/EnterCodeIndividualSignUp'
import CorporateRegistrationType from '../../components/auth/signup/corporate/CorporateRegistrationType'
import RegisterWithAsan from '../../components/auth/signup/corporate/RegisterWithAsan';
import ChooseCompany from '../../components/auth/signup/corporate/ChooseCompany'
import CompanyRegister from '../../components/auth/signup/corporate/CompanyRegister'
import { useSelector } from "react-redux";


const SingUp = () => {

    const step = useSelector((state) => state.step.step);
    const accountType = useSelector((state) => state.step.accountType);
    const registrationMethod = useSelector((state) => state.step.registrationMethod);


    return (
        <div className='signup-container d-flex f-column align-items-center justify-content-center'>

            <div className="signup-image">
                <img src="./assets/image 1.jpg" alt="" />

                <div className="logo d-flex align-items-center">

                    <div className="logo-img">
                        <img src="./assets/white-logo.svg" alt="" />
                        <div className="lines">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                    </div>
                    <span className='logo-text'>TAXSIS</span>

                </div>
            </div>

            <div className="signup-form d-flex justify-content-center align-items-center flex-column row">

                {/* 1. Adım: Hesap Tipi Seçimi */}

                {step === 1 && <AccountType />}

                {/* 2. Adım: Kullanıcı Hesap Tipine Göre Devam Ediyor */}

                {step === 2 && (
                    accountType === "individual"
                        ? <IndividualRegistrationType />
                        : <CorporateRegistrationType />
                )}

                {/* 3. Adım: Kullanıcı Kayıt Yöntemini Seçiyor */}
                {step === 3 && (
                    accountType === "individual"
                        ? (registrationMethod === "id" ? <RegisterWithID /> : <RegisterWithSignature />)
                        : <RegisterWithAsan />
                )}

                {step === 4 && (
                    accountType === "individual"
                        ? (registrationMethod === "id" ? <Finish /> : <EnterCodeIndividualSignUp />)
                        : <ChooseCompany />
                )}

                {step === 5 && (
                    <CompanyRegister />
                )}

                {step === 6 && (
                    <Finish />
                )}



            </div>


        </div>
    )
}

export default SingUp