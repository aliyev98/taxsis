import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccountType } from "../../../../redux/slices/loginSlice";

const IndividualEnterCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, e) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };


  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];
  
      if (otp[index] !== "") {
        // Eğer input doluysa, önce temizle sonra önceki input'a odakla
        newOtp[index] = "";
        setOtp(newOtp);
  
        if (index > 0) {
          setTimeout(() => {
            inputRefs[index - 1].current.focus();
          }, 0);
        }
      } else if (index > 0) {
        // Eğer zaten boşsa, direkt bir önceki input'a odakla ve onu da temizle
        newOtp[index - 1] = "";
        setOtp(newOtp);
        setTimeout(() => {
          inputRefs[index - 1].current.focus();
        }, 0);
      }
    }
  };
  


  const isOtpComplete = otp.every(num => num !== "");

  const handleContinue = () => {
    if (isOtpComplete) {
      dispatch(setAccountType("individual")); // Burada accountType state'ini güncelliyoruz
      navigate("/feed");
    }
  };

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

      <button
        className={`btn btn-primary ${!isOtpComplete ? 'deactive disabled' : 'active'}`}
        disabled={!isOtpComplete}
        onClick={handleContinue}
      >
        Davam et
      </button>
    </div>
  );
};

export default IndividualEnterCode;
