import React from 'react'
import { useDispatch } from "react-redux";
import { setRegistrationMethod, setStep } from "../../../../redux/slices/stepSlice";

const IndividualRegistration = () => {

    const dispatch = useDispatch();

    const handleSelection = (method) => {
        dispatch(setRegistrationMethod(method)); // Redux’a kullanıcı seçimini kaydet
        dispatch(setStep(3)); // 3. adıma geç
    };

    return (
        <div className='individual-registration-container d-flex flex-column col-md-8 col-lg-7 col-xl-6 col-xxl-5 col-11'>

            <div className="individual-icon">
                <img src="./assets/individualProfile-icon.svg" alt="ico" />
            </div>

            <div className="individual-registration-title">Fərdi hesab</div>

            <div className="individual-registration-info">Qeydiyyatdan keçin</div>

            <div className="individual-registration-form d-flex flex-column align-items-center">

                <button onClick={() => handleSelection("id")} className="idendification-number d-flex align-items-center">

                    <div className="idendification-number-image">
                        <img src="./assets/identification-icon.png" alt="icon" />
                    </div>

                    <span className="idendification-number-info">
                        İdentifikasiya nömrəsi ilə
                    </span>

                </button>

                <div className="break d-flex justify-content-between align-items-center">
                    <div className="line"></div>
                    <span>və ya</span>
                    <div className="line"> </div>
                </div>

                <button onClick={() => handleSelection("sima")} className="digital-signature d-flex align-items-center">

                    <div className="digital-signature-image d-flex align-items-center justify-content-center">
                        <img src="./assets/sima-icon.png" alt="icon" />
                    </div>

                    <span className="digital-signature-info">
                        SİMA Rəqəmsal imza ilə
                    </span>

                </button>

            </div>

        </div>
    )
}

export default IndividualRegistration