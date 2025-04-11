import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccountType } from "../../../../redux/slices/loginSlice"; // path'i projene göre düzenle

const IndividualEnterCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, e) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      let newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputRefs[index - 1].current.focus();
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
