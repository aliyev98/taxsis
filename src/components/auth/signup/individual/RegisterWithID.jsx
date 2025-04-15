import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStep } from "../../../../redux/slices/stepSlice";
import InputWithLabel from "../../../ui/inputs/InputWithLabel";
import Input from '../../../ui/inputs/Input';
import FormButton from '../../../ui/buttons/FormButton';
import { allowOnlyNumbers, makeWordsCapitalize, formatBirthDate, formatPhoneNumber } from "../../../../utils/InputUtils";

const RegisterWithID = () => {

  const [fincode, setFincode] = useState("");
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const isActive =
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

          <InputWithLabel label={"FİN kod"} htmlFor={"fincode"} name={"fincode"} maxLength={7} id={"fincode"} value={fincode} onChange={(e) => setFincode(e.target.value.toUpperCase())} />

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

        <Input placeholder={"ID"} value={id} htmlFor={"id"} name={"id"} onChange={(e) => setId(allowOnlyNumbers(e.target.value))} />

        <Input placeholder={"Ad, Soyad"} value={fullName} htmlFor={"fullname"} name={"fullname"} onChange={(e) => setFullName(makeWordsCapitalize(e.target.value))} />

        <Input placeholder={"Doğum tarixi"} value={birthDate} htmlFor={"birthDate"} name={"birthDate"} onChange={(e) => setBirthDate(formatBirthDate(e.target.value))} />

        <Input placeholder={"Əsas iş yeri"} value={workPlace} htmlFor={"workPlace"} name={"workPLace"} onChange={(e) => setWorkPlace(e.target.value)} />

        <InputWithLabel label={"Telefon"} value={phone} htmlFor={"phone"} name={"phone"} onChange={(e) => setPhone(formatPhoneNumber(e.target.value))} />

        <InputWithLabel label={"Email"} value={email} htmlFor={"email"} name={"email"} onChange={(e) => setEmail(e.target.value)} />

      </div>

      <FormButton content={"SİMA ilə təsdiq et"} handleContinue={handleContinue} isActive={isActive} />

    </div>
  );
};

export default RegisterWithID;
