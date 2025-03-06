import React from 'react'

const IndividualLogin = () => {
    return (
        <div className='individual-login-container'>

            <div className="login-type">Fərdi hesab</div>

            <div className="login-title">Daxil ol</div>

            <div className="login-info">Telefon nömrəsi ilə daxil olun</div>

            <div className="number-input d-flex align-items-center justify-content-between">

                <div className="number-input-group">

                    <label htmlFor="">Telefon nömrəsi</label>

                    <div className="input-group d-flex">

                        <div className='phone-input'>
                            <img src="./assets/phone-icon.svg" alt="" />
                        </div>

                        <input type="text" />

                    </div>

                </div>

                <div className="check-icon">
                    <img className='icon' src="./assets/check.svg" alt="ibo" />
                </div>

            </div>

            <div className="remember-me d-flex">
                <div>
                    <input className='i' type="checkbox" name="" id="" />
                </div>
                <span>Girişi yadda saxla</span>
            </div>

        </div>
    )
}

export default IndividualLogin