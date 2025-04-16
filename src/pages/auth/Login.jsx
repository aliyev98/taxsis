import React from 'react'
import EnterCodeIndividualLogin from '../../components/auth/login/individual/EnterCodeIndividualLogin'
import IndividualLogin from '../../components/auth/login/individual/IndividualLogin'
import CorporateLogin from '../../components/auth/login/corporate/CorporateLogin'
import { useSelector } from "react-redux";
import AccountType from '../../components/auth/general/AccountType';
import LogoWhite from '../../components/ui/LogoWhite';


const Login = () => {

    const step = useSelector((state) => state.step.step);
    const accountType = useSelector((state) => state.step.accountType);
    const registrationMethod = useSelector((state) => state.step.registrationMethod);


    return (

        <div className='login-container d-flex f-column align-items-center justify-content-center'>

            <div className="login-image">

                <img src="/assets/image 1.jpg" alt="" />

                <LogoWhite />

                <div className="phone-number position-absolute d-flex align-items-center">
                    <img src="/assets/phone-icon.svg" alt="" />
                    <span>+994 12 345 67 89</span>
                </div>

            </div>



            <div className="login-form d-flex justify-content-center align-items-center flex-column row">

                {step === 1 && <AccountType />}

                {step === 2 && (
                    accountType === "individual"
                        ? <IndividualLogin />
                        : <CorporateLogin />
                )}

                {
                    step === 3 && (
                        <EnterCodeIndividualLogin />
                    )
                }


                {/* <IndividualEnterCode /> */}
                {/* <IndividualLogin /> */}
                {/* <CorporateLogin /> */}
            </div>


        </div>

    )
}

export default Login