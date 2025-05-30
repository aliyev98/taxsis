import React, { useState } from "react";
import { formatPhoneNumber } from '../../../../utils/InputUtils'
import FormButton from '../../../ui/buttons/FormButton';
import { useDispatch } from "react-redux";
import { setStep } from "../../../../redux/slices/stepSlice";


const IndividualLogin = () => {
    const [phone, setPhone] = useState("");
    const isPhoneValid = phone.length >= 13;

    const dispatch = useDispatch();


    const handleContinue = () => {
        dispatch(setStep(3));
    };

    return (
        <div className="individual-login-container col-md-8 col-lg-7 col-xl-5 col-xxl-5 col-11">

            <div className="login-type">Fərdi hesab</div>
            <div className="login-title">Daxil ol</div>
            <div className="login-info">Telefon nömrəsi ilə daxil olun</div>

            {/* Telefon numarası inputu */}
            <div className="number-input d-flex align-items-center justify-content-between">

                <div className="number-input-group d-flex flex-column">
                    <label htmlFor="phone">Telefon nömrəsi</label>
                    <div className="input-group d-flex">
                        <div className="phone-input">
                            <img src="/assets/phone-icon.svg" alt="Phone Icon" />
                        </div>
                        <input
                            type="text"
                            id="phone"
                            maxLength={13}
                            value={phone}
                            onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                        />
                    </div>
                </div>

                {/* Eğer numara 10 karakterden büyükse ikon göster */}
                {isPhoneValid && (
                    <div className="check-icon">
                        <img className="icon" src="/assets/check.svg" alt="Check Icon" />
                    </div>
                )}
            </div>

            {/* Hatırla checkbox */}
            <div className="remember-me d-flex">
                <div className="input-div d-flex justify-content-center align-items-center">
                    <input type="checkbox" id="remember" />
                </div>
                <label htmlFor="remember">Girişi yadda saxla</label>
            </div>

            <FormButton content="Davam et" isActive={isPhoneValid} handleContinue={handleContinue} />

        </div>
    );
};

export default IndividualLogin;
