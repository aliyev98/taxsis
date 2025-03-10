import React from 'react'

const LandingHeader = () => {
    return (

        <header className="landing-page-header-container d-flex justify-content-between align-items-center">

            <a href='/' className="header-logo d-flex align-items-center">
                <div className='logo-img'>
                    <img src="/assets/logo.svg" alt="" className="logo-image" />

                    <div className="lines">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
                <span className="logo-text">TAXSIS</span>


            </a>

            <nav className="header-navbar d-flex justify-content-between align-items-center">
                <a href="/corporate" className="navbar-link">Korporativlər üçün</a>
                <a href="/individuals" className="navbar-link">Fərdlər üçün</a>
                <a href="" className="navbar-link">Təriflər</a>
                <a href="/about" className="navbar-link">Haqqımızda</a>
                <a href="/contact" className="navbar-link">Əlaqə</a>
            </nav>

            <div className="header-actions d-flex align-items-center justify-content-between">
                <a href="/login" className="login-link">Daxil ol</a>
                <a href="/signUp" className="signup-link">Qeydiyyatdan keç</a>
            </div>


        </header>

    )
}

export default LandingHeader