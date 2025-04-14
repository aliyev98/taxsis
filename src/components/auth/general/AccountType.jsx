import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAccountType, setStep } from "../../../redux/slices/stepSlice";
import IndividualCart from "../../ui/Carts/IndividualCart";
import CorporateCart from "../../ui/Carts/CorporateCart";
import FormButton from "../../ui/buttons/FormButton";

const AccountType = () => {

  const [isActive, setIsActive] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setIsActive(e.target.value);
  };

  const handleContinue = () => {

    if (isActive) {
      dispatch(setAccountType(isActive));
      dispatch(setStep(2));
    }

  };

  return (
    <div className="account-type-container d-flex flex-column col-md-8 col-lg-5 col-xl-5 col-xxl-4 col-9">

      <div className="account-type-title">Hesap tipi</div>
      <div className="account-type-info">Profilinizə uyğun hesabı seçin</div>

      <div className="account-type-form list-group p-2 d-flex flex-column">

        {/* Fərdi hesab */}

        <IndividualCart isActive={isActive} handleChange={handleChange} />

        {/* Korporativ hesab */}

        <CorporateCart isActive={isActive} handleChange={handleChange} />

      </div>

      <FormButton content={"Davam Et"} isActive={isActive} handleContinue={handleContinue} />

    </div>
  );
};

export default AccountType;
