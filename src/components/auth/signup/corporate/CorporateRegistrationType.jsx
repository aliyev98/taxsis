import React from 'react'
import { useDispatch } from "react-redux";
import { setStep } from "../../../../redux/slices/stepSlice";

const CorporateRegistrationType = () => {

    const dispatch = useDispatch();

    const handleContinue = () => {
        dispatch(setStep(3))
    }
    
    return (
        <div className='corporate-registration-container d-flex flex-column col-md-8 col-lg-7 col-xl-6 col-xxl-5 col-11'>

            <div className="corporate-icon">
                <img src="/assets/corporateProfile-icon.svg" alt="ico" />
            </div>

            <div className="corporate-registration-title">Korporativ hesab</div>

            <div className="corporate-registration-info">Qeydiyyatdan keçin</div>

            <div className="corporate-registration-form d-flex flex-column align-items-center">

                <button onClick={handleContinue} className="asan-signature d-flex align-items-center">

                    <div className="asan-signature-image">
                        <img src="/assets/asan-icon.png" alt="icon" />
                    </div>

                    <span className="asan-signature-info">
                        ASAN İmza ilə
                    </span>

                </button>

            </div>

        </div>
    )
}

export default CorporateRegistrationType