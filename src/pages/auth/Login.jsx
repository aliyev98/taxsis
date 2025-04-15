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

            <LogoWhite />

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