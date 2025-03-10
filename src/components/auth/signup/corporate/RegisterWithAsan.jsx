import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStep } from "../../../../redux/slices/stepSlice";

const RegisterWithAsan = () => {
    const [phone, setPhone] = useState("");
    const [userId, setUserId] = useState("");
    const [isCodeAcceptVisible, setIsCodeAcceptVisible] = useState(false); // Code accept div'inin görünürlüğünü kontrol eden state

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setPhone(value);
    };

    const handleIdChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setUserId(value);
    };

    const isFormValid = phone.length > 0 && userId.length > 0;

    const handleButtonClick = () => {
        if (isFormValid) {
            setIsCodeAcceptVisible(true);
        }
    };

    const dispatch = useDispatch();

    const handleContinue = () => {
        dispatch(setStep(4))
    }

    return (
        <div className="asan-register-container d-flex flex-column col-md-8 col-lg-7 col-xl-5 col-xxl-5 col-11">
            <div className="corporate-icon">
                <img src="./assets/corporateProfile-icon.svg" alt="ico" />
            </div>

            <div className="asan-register-type">Korporativ hesab</div>
            <div className="asan-register-info">Asan İmza ilə qeydiyyat</div>

            {/* Eğer `isCodeAcceptVisible` false ise formu göster, true ise gizle */}
            {!isCodeAcceptVisible && (
                <div className="asan-register-form">
                    <div className="phone-input special-input numeral-input d-flex flex-column">
                        <label htmlFor="phone">Mobil nömrə</label>
                        <input
                            type="text"
                            id="phone"
                            placeholder=""
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>

                    <div className="id-input">
                        <input
                            type="text"
                            placeholder="İstifadəçi ID-si"
                            value={userId}
                            onChange={handleIdChange}
                        />
                    </div>

                    <button
                        className={`btn btn-primary ${isFormValid ? "active" : "deactive disabled"}`}
                        disabled={!isFormValid}
                        onClick={handleButtonClick} // Butona tıklanınca form kaybolacak, code-accept görünecek
                    >
                        Davam et
                    </button>
                </div>
            )}

            {/* Eğer `isCodeAcceptVisible` true ise `code-accept` div'ini göster */}
            {isCodeAcceptVisible && (
                <div className="code-accept d-flex flex-column">
                    <div className="info">
                        Lütfən, telefonunuza göndərilmiş sorğunu qəbul <br /> edin. Sorğunun yoxlama kodunun aşağıdakı kod ilə eyni olmasını müqayisə edin.
                    </div>

                    <div className="timer">00:01:48</div>

                    <button onClick={handleContinue} className="code">Yoxlama kodu: <span>2212</span></button>
                </div>
            )}
        </div>
    );
};

export default RegisterWithAsan;
