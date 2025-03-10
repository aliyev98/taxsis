import React, { useState, useRef } from "react";

const IndividualEnterCode = () => {
    const inputRefs = [useRef(), useRef(), useRef(), useRef()]; // 4 input için referanslar
    const [otp, setOtp] = useState(["", "", "", ""]); // OTP kodlarını saklayan state

    // Input değiştiğinde çalışacak fonksiyon
    const handleChange = (index, e) => {
        const value = e.target.value;

        if (/^\d$/.test(value)) { // Sadece rakam kabul et
            let newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Son input'a kadar, eğer bir sonraki varsa ona odaklan
            if (index < 3) {
                inputRefs[index + 1].current.focus();
            }
        }
    };

    // Klavyede silme işlemi (Backspace)
    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace") {
            let newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);

            // Önceki input'a geri dön
            if (index > 0) {
                inputRefs[index - 1].current.focus();
            }
        }
    };

    // Tüm OTP kodu girildiyse butonu aktif yap
    const isOtpComplete = otp.every(num => num !== "");

    return (
        <div className="individual-enter-code-container">
            <div className="login-type">Fərdi hesab</div>
            <div className="login-title">Daxil ol</div>
            <div className="login-info">
                +994 12 3456789 nömrəsinə <br /> göndərilən OTP kodu daxil edin
            </div>

            <div className="code-inputs d-flex align-items-center justify-content-center">
                {otp.map((digit, index) => (
                    <div className="code-input" key={index}>
                        <input
                            type="text"
                            maxLength={1}
                            value={digit}
                            ref={inputRefs[index]}
                            onChange={(e) => handleChange(index, e)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                        />
                    </div>
                ))}
            </div>


            {/* Buton sadece tüm OTP kodları girildiğinde aktif olacak */}
            <button className={`btn btn-primary ${!isOtpComplete ? 'deactive disabled' : 'active'}`}>
                Davam et
            </button>
        </div>
    );
};

export default IndividualEnterCode;
