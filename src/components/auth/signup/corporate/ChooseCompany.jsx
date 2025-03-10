import React from 'react'
import { useDispatch } from "react-redux";
import { setStep } from "../../../../redux/slices/stepSlice";

const ChooseCompany = () => {

    const dispatch = useDispatch();

        const handleContinue = () => {
            dispatch(setStep(5))
        }


    return (

        <div className='choose-company-container d-flex flex-column col-md-8 col-lg-7 col-xl-6 col-xxl-5 col-11'>

            <div className="corporate-icon">
                <img src="./assets/corporateProfile-icon.svg" alt="ico" />
            </div>

            <div className="register-type">Korporativ hesab</div>

            <div className="info">Asan imzaya bağlı olan şirkətlər. Davam etmək üçün şirkət seçin</div>

            <div className="company-choice-form list-group d-flex flex-column">

                <label onClick={handleContinue} className="list-group-item company d-flex justify-content-between align-items-center" htmlFor="company1">

                    <div className="d-flex align-items-center justify-content-center left-side">

                        <div className="company-icon">
                            <img src="./assets/company-icon.svg" alt="icon" />
                        </div>

                        <div className="company-content">
                            <span className="company-name">ACCFIN MMC</span>
                        </div>

                    </div>

                    <input className="form-check-input me-2 ms-auto d-none" type="radio" id="company1"
                        name="companyType" value="" />

                    <div className="custom-radio d-flex align-items-center justify-content-center"></div>


                </label>

                <label onClick={handleContinue} className="list-group-item company d-flex justify-content-between align-items-center" htmlFor="company2">

                    <div className="d-flex align-items-center justify-content-center left-side">

                        <div className="company-icon">
                            <img src="./assets/company-icon.svg" alt="icon" />
                        </div>

                        <div className="company-content">
                            <span className="company-name">Banksy INC</span>
                        </div>

                    </div>

                    <input className="form-check-input me-2 ms-auto d-none" type="radio" id="company2"
                        name="companyType" value="" />

                    <div className="custom-radio d-flex align-items-center justify-content-center"></div>


                </label>

                <label onClick={handleContinue} className="list-group-item company d-flex justify-content-between align-items-center" htmlFor="company3">

                    <div className="d-flex align-items-center justify-content-center left-side">

                        <div className="company-icon">
                            <img src="./assets/company-icon.svg" alt="icon" />
                        </div>

                        <div className="company-content">
                            <span className="company-name">Coda Digital LLC</span>
                        </div>

                    </div>

                    <input className="form-check-input me-2 ms-auto d-none" type="radio" id="company3"
                        name="companyType" value="" />

                    <div className="custom-radio d-flex align-items-center justify-content-center"></div>


                </label>

            </div>



        </div>
    )
}

export default ChooseCompany