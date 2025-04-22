import React, { useState } from 'react'
import { useSelector } from "react-redux";

import FeedHeader from '../../layouts/FeedHeader'
import Feed from '../../components/social/feed/Feed';
import Photos from '../../components/social/individualProfile/Photos';
import Videos from '../../components/social/individualProfile/Videos';
import AboutCompany from '../../components/social/corporateProfile/AboutCompany';
import Portfolio from '../../components/social/corporateProfile/Portfolio';
import Tasks from '../../components/social/corporateProfile/Tasks';
import Authority from '../../components/social/corporateProfile/Authority';
import Colleagues from '../../components/social/colleagues/Colleagues';
import AddColleagues from '../../components/social/colleagues/AddColleagues';

const CorporateProfile = () => {

    const colleagueNavigate = useSelector((state) => state.colleague.colleagueNavigate);


    const [activeBtnId, setActiveBtnId] = useState(1);

    const [activeSection, setActiveSection] = useState(1)


    const sidebarBtns = [
        { id: 1, content: "Profil", img: '/assets/profile-icon.svg' },
        { id: 2, content: "Banklar", img: '/assets/bank-icon.svg' },
        { id: 3, content: "Vəzifələr", img: '/assets/sort-icon.svg' },
        { id: 4, content: "Səlahiyyətlər", img: '/assets/document-icon-black.svg' },
        { id: 5, content: "Əməkdaşlar", img: '/assets/group-icon.svg' },
        { id: 6, content: "Partnyorlar", img: '/assets/groups-icon.svg' },
        { id: 7, content: "Vakansiyalar", img: '/assets/bag-icon-black.svg' },
        { id: 8, content: "Tənzimləmələr", img: '/assets/settings-icon-black.svg' },
        { id: 9, content: "Çıxış et", img: '/assets/logout-icon.svg' },
    ]

    const navbar = [
        { id: 1, content: "Postlar" },
        { id: 2, content: "Fotolar" },
        { id: 3, content: "Videolar" },
        { id: 4, content: "Haqqında" },
        { id: 5, content: "Portfolio" },
        { id: 6, content: "Məhsullar" },
    ]

    return (
        <div className='corporate-profile-page'>

            <FeedHeader />

            <div className="profile-container d-flex justify-content-center">

                <div className="profile d-flex flex-column">

                    <div className="profile-header d-flex flex-column">

                        <div className="cover-photo position-relative">
                            <img src="/assets/corporate-cover.jpg" alt="" />

                            <div className="profile-photo">
                                <div className="img">
                                    <img src="/assets/pp.jpg" alt="" />
                                </div>
                            </div>

                            <button className="edit-cover-photo d-flex align-items-center">
                                <img src="/assets/pen-white.svg" alt="" />
                                <span>Qapaq şəkli</span>
                            </button>

                        </div>

                        <div className="header-infos d-flex align-items-center justify-content-between">


                            <div className="user-infos">

                                <div className="username">
                                    ACCFIN Group
                                </div>

                                <div className="bio">
                                    Böyük xəyal edin. Fərqli düşünün!
                                </div>

                                <div className="sin d-flex align-items-center">
                                    <span>SIN:</span>
                                    <span>453564677</span>
                                </div>

                            </div>

                            <div className="social-links d-flex align-items-center">
                                <div><img src="/assets/twitter.svg" alt="" /></div>
                                <div><img src="/assets/instagram.svg" alt="" /></div>
                                <div><img src="/assets/pinterest.svg" alt="" /></div>
                            </div>

                        </div>

                    </div>

                    <div className="profile-wrapper d-flex">

                        <div className="profile-sidebar d-flex flex-column">

                            <div className="sidebar-title">
                                İdarəetmə paneli
                            </div>

                            <div className="buttons">
                                {
                                    sidebarBtns.map((btn) => (
                                        <button
                                            key={btn.id}
                                            className={`sidebar-btn d-flex align-items-center ${activeBtnId === btn.id ? 'active' : ''}`}
                                            onClick={() => setActiveBtnId(btn.id)}
                                        >
                                            <img src={btn.img} alt="" />
                                            <span>{btn.content}</span>
                                        </button>
                                    ))
                                }
                            </div>

                        </div>


                        <div className="line"></div>

                        {
                            activeBtnId === 1 &&

                            (<div className="profile-content-container d-flex flex-column">

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

                            </div>)
                        }

                        {activeBtnId === 3 && <Tasks />}

                        {activeBtnId === 4 && <Authority />}

                        {activeBtnId === 5 && (
                            <>
                                {colleagueNavigate === "colleagueList" && <Colleagues />}
                                {colleagueNavigate === "addColleague" && <AddColleagues />}
                            </>
                        )}





                    </div>

                </div>






            </div>

        </div>
    )
}

export default CorporateProfile