import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAccountType, setStep } from "../../../redux/slices/stepSlice";

const AccountType = () => {

  const [selectedOption, setSelectedOption] = useState(""); // Seçimi local state'te tutuyoruz
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleContinue = () => {

    if (selectedOption) {
      dispatch(setAccountType(selectedOption)); // Redux'a hesab türünü kaydet
      dispatch(setStep(2)); // Bir sonraki adıma geç
    }
    
  };

  return (
    <div className="account-type-container d-flex flex-column col-md-8 col-lg-5 col-xl-5 col-xxl-4 col-9">
      <div className="account-type-title">Hesap tipi</div>
      <div className="account-type-info">Profilinizə uyğun hesabı seçin</div>

      <div className="account-type-form list-group d-flex flex-column">

        {/* Fərdi hesab */}
        <label
          className={`list-group-item option-individual d-flex justify-content-between align-items-center ${selectedOption === "individual" ? "selected" : ""}`}
          htmlFor="individual"
        >
          <div className="d-flex align-items-center justify-content-center left-side">
            <div className="individual-icon">
              <img src="/assets/individualProfile-icon.svg" alt="icon" />
            </div>
            <div className="individual-content d-flex flex-column">
              <span className="content-title">Fərdi hesab</span>
              <span className="content-info">Fiziki şəxslər üçün</span>
            </div>
          </div>

          <input
            className="form-check-input me-2 ms-auto d-none"
            type="radio"
            id="individual"
            name="accountType"
            value="individual"
            onChange={handleChange}
          />

          <div className="custom-radio d-flex align-items-center justify-content-center"></div>
        </label>

        {/* Korporativ hesab */}
        <label
          className={`list-group-item option-corporate d-flex justify-content-between align-items-center ${selectedOption === "corporate" ? "selected" : ""}`}
          htmlFor="corporate"
        >
          <div className="d-flex align-items-center justify-content-center left-side">
            <div className="corporate-icon">
              <img src="/assets/corporateProfile-icon.svg" alt="icon" />
            </div>
            <div className="corporate-content d-flex flex-column">
              <span className="content-title">Korporativ hesab</span>
              <span className="content-info">Hüquqi şəxslər üçün</span>
            </div>
          </div>

          <input
            className="form-check-input me-2 ms-auto d-none"
            type="radio"
            id="corporate"
            name="accountType"
            value="corporate"
            onChange={handleChange}
          />

          <div className="custom-radio d-flex justify-content-center align-items-center"></div>
        </label>

      </div>

      <button 
        className={`btn btn-primary ${selectedOption ? "active" : "deactive disabled"}`} 
        disabled={!selectedOption} 
        onClick={handleContinue}
      >
        Davam et
      </button>
    </div>
  );
};

export default AccountType;
