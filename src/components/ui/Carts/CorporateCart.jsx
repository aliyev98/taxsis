import React from 'react'

const CorporateCart = ({isActive, handleChange}) => {
    return (
        <label
            className={`list-group-item option-corporate d-flex justify-content-between align-items-center ${isActive === "corporate" ? "selected" : ""}`}
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
    )
}

export default CorporateCart