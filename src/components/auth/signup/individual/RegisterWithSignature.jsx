import React from 'react'
import { useDispatch } from "react-redux";
import { setStep } from "../../../../redux/slices/stepSlice";

const RegisterWithSignature = () => {

    const dispatch = useDispatch();

    const handleContinue = () => {
        dispatch(setStep(4))
    }

    return (
        <div className='signature-register-container col-md-8 col-lg-7 col-xl-6 col-xxl-5 col-11'>

            <div className="signature-register-type">Fərdi hesab</div>

            <div className="signature-register-title">Qeydiyyat</div>

            <div className="signature-register-info">SİMA İmza ilə qeydiyyat</div>

            <div className="qr-code-container d-flex flex-column">

                <div className="qr-image d-flex flex-column align-items-center">

                    <div className="qr-img-div">
                        <img src="/assets/qrcode.png" alt="" />
                    </div>

                    <div className="expire d-flex">
                        <span>Bitmə vaxtı :</span> <span>00:00:48</span>
                    </div>
                </div>

                <ul>
                    <li>SIMA mobil tədbiqini açın</li>
                    <li><b>Skan et</b> düyməsini sıxın</li>
                    <li>QR kou skan edərək daxil olun</li>
                </ul>

            </div>

            <div onClick={handleContinue} className="btn btn-primary">QR kod scan edildi</div>

        </div>
    )
}

export default RegisterWithSignature