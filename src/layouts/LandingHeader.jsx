import React from 'react'

const LandingHeader = () => {
    return (
        <div className="landing-header">

            <div className="landing-header__logo">
                <img src="/assets/logo.svg" alt="" className="landing-header__logo-image" />
                <span className="landing-header__logo-text">TAXSIS</span>
            </div>

            <nav className="landing-header__navbar">
                <a href="/corporate" className="landing-header__navbar-link">Korporativlər üçün</a>
                <a href="/individuals" className="landing-header__navbar-link">Fərdlər üçün</a>
                <a href="" className="landing-header__navbar-link">Təriflər</a>
                <a href="/about" className="landing-header__navbar-link">Haqqımızda</a>
                <a href="/contact" className="landing-header__navbar-link">Əlaqə</a>
            </nav>

            <div className="landing-header__actions">
                <a href="/login" className="landing-header__actions-link">Daxil ol</a>
                <a href="/signUp" className="landing-header__actions-button">Qeydiyyatdan keç</a>
            </div>

        </div>

    )
}

export default LandingHeader