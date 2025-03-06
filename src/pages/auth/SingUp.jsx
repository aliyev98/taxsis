import React from 'react'
import AccoundType from '../../components/auth/signup/AccountType'
import IndividualRegistrationType from '../../components/auth/signup/IndividualRegistrationType'
import RegisterWithID from '../../components/auth/signup/RegisterWithID'
import IDFinish from '../../components/auth/signup/IDFinish'
import RegisterWithSignature from '../../components/auth/signup/RegisterWithSignature'
import EnterCode from '../../components/auth/signup/EnterCode'
import IndividualLogin from '../../components/auth/login/IndividualLogin'

const SingUp = () => {
    return (
        <div className='signup-container'>

            <div className="signup-image">
                <img src="./assets/image 1.jpg" alt="" />
            </div>

            <div className="signup-form row">
                {/* <AccoundType /> */}
                {/* <IndividualRegistrationType /> */}
                {/* <RegisterWithID /> */}
                {/* <IDFinish /> */}
                {/* <RegisterWithSignature /> */}
                {/* <EnterCode /> */}
                <IndividualLogin />
            </div>


        </div>
    )
}

export default SingUp