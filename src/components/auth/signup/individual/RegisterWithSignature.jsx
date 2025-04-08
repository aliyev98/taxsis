import React from 'react'
import { useDispatch } from "react-redux";
import { setStep } from "../../../../redux/slices/stepSlice";

const RegisterWithSignature = () => {

    const dispatch = useDispatch(); 

    const handleContinue = () =>{
        dispatch(setStep(4))
    }

    return (
        <div className='signature-register-container col-md-8 col-lg-7 col-xl-6 col-xxl-5 col-11'>

            <div className="signature-register-type">Fərdi hesab</div>

            <div className="signature-register-title">Qeydiyyat</div>

            <div className="signature-register-info">SİMA İmza ilə qeydiyyat</div>

            <div className="qr-code">
                <img src="/assets/qr2.png" alt="" />
            </div>

            <div onClick={handleContinue} className="btn btn-primary">QR kod scan edildi</div>

        </div>
    )
}

export default RegisterWithSignature