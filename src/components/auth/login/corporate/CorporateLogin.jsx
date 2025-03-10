import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CorporateLogin = () => {
    const [phone, setPhone] = useState("");
    const [userId, setUserId] = useState("");
    const [isCodeAcceptVisible, setIsCodeAcceptVisible] = useState(false);

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setPhone(value);
    };

    const handleIdChange = (e) => {
        setUserId(e.target.value);
    };

    const isFormValid = phone.length > 0 && userId.trim() !== "";

    const handleButtonClick = () => {
        if (isFormValid) {
            setIsCodeAcceptVisible(true);
        }
    };

    const navigate = useNavigate()

    const handleContinue = () => {
        navigate('/')
    }

    return (
        <div className="corporate-login-container d-flex flex-column col-md-8 col-lg-7 col-xl-5 col-xxl-5 col-11">
            <div className="corporate-type">Korporativ hesab</div>
            <div className="corporate-title">Daxil ol</div>
            <div className="corporate-info">Asan İmza ilə daxil ol</div>

            {!isCodeAcceptVisible && (
                <div className="login-form d-flex flex-column">
                    <div className="number-input d-flex flex-column">
                        <label htmlFor="phone">Mobil nömrə</label>
                        <input
                            type="text"
                            id="phone"
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
                        onClick={handleButtonClick}
                    >
                        Davam et
                    </button>
                </div>
            )}

            {isCodeAcceptVisible && (
                <div className="code-accept d-flex flex-column">
                    <div className="info">
                        Lütfən, telefonunuza göndərilmiş sorğunu qəbul <br /> edin. Sorğunun yoxlama kodunun aşağıdakı kod ilə eyni <br /> olmasını müqayisə edin.
                    </div>

                    <div className="timer">00:01:48</div>

                    <button onClick={handleContinue} className="code">Yoxlama kodu: <span>2212</span></button>
                </div>
            )}
        </div>
    );
};

export default CorporateLogin;
