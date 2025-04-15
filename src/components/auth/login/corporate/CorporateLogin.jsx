import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccountType } from "../../../../redux/slices/loginSlice"; // Path’i projenin yapısına göre düzenle
import InputWithLabel from '../../../ui/inputs/InputWithLabel';
import Input from '../../../ui/inputs/InputWithLabel';
import { formatPhoneNumber, allowOnlyNumbers } from '../../../../utils/InputUtils';
import FormButton from '../../../ui/buttons/FormButton';

const CorporateLogin = () => {
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [isCodeAcceptVisible, setIsCodeAcceptVisible] = useState(false);

  const dispatch = useDispatch(); // Redux dispatch
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setUserId(e.target.value);
  };

  const isFormValid = phone.length > 0 && userId.trim() !== "";

  const handleButtonClick = () => {
    if (isFormValid) {
      setIsCodeAcceptVisible(true);
    }
  };

  const handleContinue = () => {
    dispatch(setAccountType("corporate")); // Burada accountType'ı güncelliyoruz
    navigate("/feed");
  };

  return (
    <div className="corporate-login-container d-flex flex-column col-md-8 col-lg-7 col-xl-5 col-xxl-5 col-11">
      <div className="corporate-type">Korporativ hesab</div>
      <div className="corporate-title">Daxil ol</div>
      <div className="corporate-info">Asan İmza ilə daxil ol</div>

      {!isCodeAcceptVisible && (
        <div className="login-form d-flex flex-column">

          <div className="number-input d-flex flex-column">

            <InputWithLabel label="Mobil nömrə" id="phone" value={phone} onChange={(e) => setPhone(formatPhoneNumber(e.target.value))} />

          </div>

          <Input placeholder="İstifadəçi ID-si" id="id" value={userId} onChange={(e) => setUserId(allowOnlyNumbers(e.target.value))} />

          <FormButton content="Davam et" isActive={isFormValid} handleContinue={handleButtonClick} />

        </div>
      )}

      {isCodeAcceptVisible && (
        <div className="code-accept d-flex flex-column">
          <div className="info">
            Lütfən, telefonunuza göndərilmiş sorğunu qəbul <br /> edin. Sorğunun yoxlama kodunun aşağıdakı kod ilə eyni <br /> olmasını müqayisə edin.
          </div>

          <div className="timer">00:01:48</div>

          <button onClick={handleContinue} className="code">
            Yoxlama kodu: <span>2212</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CorporateLogin;
