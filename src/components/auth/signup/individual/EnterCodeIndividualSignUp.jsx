import React, { useState, useRef } from "react";
import FormButton from '../../../ui/buttons/FormButton';
import { useNavigate } from "react-router-dom";

const EnterCode = () => {
  const correctCode = "1234";
  const [code, setCode] = useState(["", "", "", ""])
  const [errors, setErrors] = useState([false, false, false, false]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, e) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return;

    let newCode = [...code];
    let newErrors = [...errors];

    newCode[index] = value;
    setCode(newCode);

    // ✅ Sadece değer varsa ve yanlışsa hata göster
    newErrors[index] = value !== "" && value !== correctCode[index];
    setErrors(newErrors);

    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };



  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      let newCode = [...code];
      let newErrors = [...errors];

      if (code[index] === "") {
        // Eğer input zaten boşsa bir önceki inputa git
        if (index > 0) {
          newCode[index - 1] = "";
          newErrors[index - 1] = false;
          inputRefs[index - 1].current.focus();
        }
      } else {
        // Eğer input doluysa sadece o inputu temizle
        newCode[index] = "";
        newErrors[index] = false;
      }

      setCode(newCode);
      setErrors(newErrors);
    }
  };


  const isCodeCorrect = code.join("") === correctCode && !errors.includes(true);

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/")
  }


  return (
    <div className="enter-code-container col-md-8 col-lg-7 col-xl-6 col-xxl-5 col-11">
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

      <FormButton content={"Davam et"} handleContinue={handleContinue} isActive={isCodeCorrect} />

    </div>
  );
};

export default EnterCode;
