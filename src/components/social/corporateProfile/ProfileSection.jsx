import React, { useState } from 'react'
import Feed from '../feed/Feed'
import Photos from '../individualProfile/Photos'
import Videos from '../individualProfile/Videos'
import AboutCompany from './AboutCompany'
import Portfolio from './Portfolio'

const ProfileSection = () => {

    const [activeSection, setActiveSection] = useState(1)


    const navbar = [
        { id: 1, content: "Postlar" },
        { id: 2, content: "Fotolar" },
        { id: 3, content: "Videolar" },
        { id: 4, content: "Haqqında" },
        { id: 5, content: "Portfolio" },
        { id: 6, content: "Məhsullar" },
    ]



    return (
        <div className="corporate-profile-section d-flex flex-column">

            <div className="content-navbar d-flex align-items-center">
                {
                    navbar.map((nav) => (

                        <button
                            key={nav.id}
                            className={`nav-btn ${activeSection === nav.id ? "active" : ''}`}
                            onClick={() => setActiveSection(nav.id)}
                        >
                            {nav.content}
                        </button>

                    ))
                }
            </div>

            <div className="content d-flex flex-column">

                {activeSection === 1 && <Feed />}
                {activeSection === 2 && <Photos />}
                {activeSection === 3 && <Videos />}
                {activeSection === 4 && <AboutCompany />}
                {activeSection === 5 && <Portfolio />}

            </div>

        </div>
    )
}

export default ProfileSection