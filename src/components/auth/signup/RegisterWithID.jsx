import React from 'react'

const RegisterWithID = () => {
  return (
    <div className='id-register-container col-4'>

      <div className="id-register-type">Fərdi hesab</div>

      <div className="id-register-title">Qeydiyyat</div>

      <div className="id-register-info">İdentifikasiya ilə qeydiyyat</div>

      <div className="id-register-form d-flex flex-column">

        <div className="fincode-input d-flex align-items-center">

          <div className="input-group d-flex flex-column">
            <label htmlFor="">FIN kod</label>
            <input type="text" />
          </div>

          <div className="input-icon">
            <img src="./assets/spinner-icon.svg" alt="" />
          </div>

        </div>

        <div className="input-element">
          <input type="text" placeholder='ID' />
        </div>

        <div className="input-element">
          <input type="text" placeholder='Ad, soyad' />
        </div>

        <div className="input-element">
          <input type="text" placeholder='Doğum tarixi' />
        </div>

        <div className="input-element">
          <input type="text" placeholder='Əsas iş yeri' />
        </div>

        <div className="input-element special-input d-flex flex-column">
          <label htmlFor="">Telefon</label>
          <input type="text" placeholder='' />
        </div>

        <div className="input-element special-input d-flex flex-column">
          <label htmlFor="">Email</label>
          <input type="text" placeholder='' />
        </div>

      </div>

      <button className="btn btn-primary">SİMA ilə təsdiq et</button>


    </div>
  )
}

export default RegisterWithID