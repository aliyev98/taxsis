import React, { useState, useRef } from "react";

const EnterCode = () => {
  const correctCode = "1234"; // Doğru OTP kodu
  const [code, setCode] = useState(["", "", "", ""]); // 4 haneli kod için state
  const [errors, setErrors] = useState([false, false, false, false]); // Hata durumu
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]; // Inputlar için referanslar

  // Kullanıcı inputa rakam girdiğinde çalışır
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      let newCode = [...code];
      let newErrors = [...errors];

      newCode[index] = value;
      setCode(newCode);

      // Girilen rakam doğru mu kontrol et
      newErrors[index] = value !== correctCode[index];
      setErrors(newErrors);

      // Bir sonraki inputa otomatik geçiş yap
      if (index < 3 && !newErrors[index]) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  // Klavyede Backspace ile silme işlemi
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      let newCode = [...code];
      let newErrors = [...errors];

      newCode[index] = ""; // Rakamı sil
      newErrors[index] = false; // Hata mesajını kaldır

      setCode(newCode);
      setErrors(newErrors);

      // Önceki inputa odaklan
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  // Buton rengini belirleme (Tüm rakamlar doğru girilmişse yeşil olur)
  const isCodeCorrect = code.join("") === correctCode && !errors.includes(true);

  return (
    <div className="enter-code-container">
      <div className="register-type">Fərdi hesab</div>
      <div className="register-title">Qeydiyyat</div>
      <div className="register-info">
        +994 12 3456789 nömrəsinə <br /> göndərilən OTP kodu daxil edin
      </div>

      <div className="code-inputs d-flex align-items-center justify-content-center">
        {code.map((digit, index) => (
          <div className={`code-input ${errors[index] ? "error" : ""}`} key={index}>
            <input
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={inputRefs[index]}
              className={errors[index] ? "error" : ""}
            />
          </div>
        ))}
      </div>

      {errors.includes(true) && (
        <div className="error-message">Daxil edilən kod yanlışdır</div>
      )}

      {/* Butonun rengi kodun doğruluğuna göre değişir */}
      <button className={`btn btn-primary ${isCodeCorrect ? "correct" : ""}`} disabled={!isCodeCorrect}>
        Davam et
      </button>
    </div>
  );
};

export default EnterCode;
