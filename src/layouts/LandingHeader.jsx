import React from 'react'

const LandingHeader = () => {
    return (

        <header className="landing-page-header-container">

            <div className="header-logo">
                <img src="/assets/logo.svg" alt="" className="logo-image" />
                <span className="logo-text">TAXSIS</span>
            </div>

            <nav className="header-navbar">
                <a href="/corporate" className="navbar-link">Korporativlər üçün</a>
                <a href="/individuals" className="navbar-link">Fərdlər üçün</a>
                <a href="" className="navbar-link">Təriflər</a>
                <a href="/about" className="navbar-link">Haqqımızda</a>
                <a href="/contact" className="navbar-link">Əlaqə</a>
            </nav>

            <div className="header-actions">
                <a href="/login" className="actions-link">Daxil ol</a>
                <a href="/signUp" className="actions-button">Qeydiyyatdan keç</a>
            </div>

        </header>

    )
}

export default LandingHeader