import React from 'react'

const IndividualCart = ({isActive, handleChange}) => {
  return (
    <label
      className={`list-group-item option-individual d-flex justify-content-between align-items-center ${isActive === "individual" ? "selected" : ""}`}
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
  )
}

export default IndividualCart