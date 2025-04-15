import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoGreen = () => {

    const navigate = useNavigate();

    return (
        <div className="logo-green d-flex align-items-center" onClick={() => navigate('/')}>

            <div className="logo-img">
                <img src="/assets/logo.svg" alt="" />

                <div className="lines">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>

            <span className='logo-text'>TAXSIS</span>

        </div>
    )
}

export default LogoGreen