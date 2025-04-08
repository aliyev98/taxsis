import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStep } from "../../../../redux/slices/stepSlice";

const RegisterWithID = () => {
  const [fincode, setFincode] = useState("");
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  const formatBirthDate = (value) => {
    // Sadece rakamları al
    const cleaned = value.replace(/\D/g, "");

    // Gün (2 karakter)
    if (cleaned.length <= 2) return cleaned;

    // Gün.Ay (2+2 karakter)
    if (cleaned.length <= 4) return `${cleaned.slice(0, 2)}.${cleaned.slice(2)}`;

    // Gün.Ay.Yıl (2+2+4 karakter)
    return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 4)}.${cleaned.slice(4, 8)}`;
  };


  const isFormValid =
    fincode.length === 7 &&
    id.trim() !== "" &&
    fullName.trim() !== "" &&
    birthDate.trim() !== "" &&
    workPlace.trim() !== "" &&
    phone.trim() !== "" &&
    email.trim() !== "";

  const dispatch = useDispatch();


  const handleContinue = () => {
    dispatch(setStep(4));
  };

  return (
    <div className="id-register-container d-flex flex-column col-md-8 col-lg-7 col-xl-5 col-xxl-5 col-11">
      <div className="id-register-type">Fərdi hesab</div>
      <div className="id-register-title">Qeydiyyat</div>
      <div className="id-register-info">İdentifikasiya ilə qeydiyyat</div>

      <div className="id-register-form d-flex flex-column">
        {/* FIN Kod Input */}
        <div className="fincode-input d-flex align-items-center">
          <div className="input-group d-flex flex-column">
            <label htmlFor="fincode">FIN kod</label>
            <input
              type="text"
              maxLength={7}
              id="fincode"
              value={fincode}
              onChange={(e) => setFincode(e.target.value)}
            />
          </div>

          {fincode.length > 0 && fincode.length < 7 && (
            <div className="input-icon">
              <img src="/assets/spinner-icon.svg" alt="Loading" />
            </div>
          )}

          {fincode.length === 7 && (
            <div className="input-icon">
              <img src="/assets/check.svg" alt="Success" />
            </div>
          )}
        </div>

        <div className="input-element">
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="input-element">
          <input
            type="text"
            placeholder="Ad, soyad"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="input-element birth">
          <input
            type="text"
            placeholder="Doğum tarixi"
            value={birthDate}
            onChange={(e) => setBirthDate(formatBirthDate(e.target.value))}
          />
        </div>

        <div className="input-element">
          <input
            type="text"
            placeholder="Əsas iş yeri"
            value={workPlace}
            onChange={(e) => setWorkPlace(e.target.value)}
          />
        </div>

        <div className="input-element special-input numeral-input d-flex flex-column">
          <label htmlFor="phone">Telefon</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder=""
          />
        </div>

        <div className="input-element special-input d-flex flex-column">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <button onClick={handleContinue} className={`btn btn-primary ${isFormValid ? "active" : "deactive disabled"}`}>
        SİMA ilə təsdiq et
      </button>
    </div>
  );
};

export default RegisterWithID;
