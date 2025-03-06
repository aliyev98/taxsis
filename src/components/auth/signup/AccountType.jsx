import React from 'react'

const FirstStep = () => {
  return (

    <div className='account-type-container d-flex flex-column col-md-7 col-lg-6 col-xl-4'>

      <div className="account-type-title">Hesap tipi</div>

      <div className="account-type-info">Profilinizə uyğun hesabı seçin</div>

      <div className="account-type-form list-group d-flex flex-column">

        <label className="list-group-item option-individual d-flex justify-content-between align-items-center" htmlFor="individual">

          <div className="d-flex align-items-center justify-content-center left-side">

            <div className="individual-icon">
              <img src="./assets/individualProfile-icon.svg" alt="icon" />
            </div>

            <div className="individual-content d-flex flex-column">
              <span className="content-title">Fərdi hesab</span>
              <span className="content-info">Fiziki şəxslər üçün</span>
            </div>

          </div>

          <input className="form-check-input me-2 ms-auto d-none" type="radio" id="individual"
            name="accountType" value="" />

          <div className="custom-radio d-flex align-items-center justify-content-center"></div>


        </label>

        <label className="list-group-item option-corporate d-flex justify-content-between align-items-center" htmlFor="corporate">

          <div className="d-flex align-items-center justify-content-center left-side">

            <div className="corporate-icon">
              <img src="./assets/corporateProfile-icon.svg" alt="icon" />
            </div>

            <div className="corporate-content d-flex flex-column">
              <span className="content-title">Korporativ hesab</span>
              <span className="content-info">Hüquqi şəxslər üçün</span>
            </div>

          </div>

          <input className="form-check-input me-2 ms-auto d-none" type="radio" id="corporate"
            name="accountType" value="" />

          <div className="custom-radio d-flex justify-content-center align-items-center"></div>

        </label>

      </div>

      <button className="btn btn-primary">Davam et</button>

    </div>


  )
}

export default FirstStep