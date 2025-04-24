import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import FeedHeader from '../../layouts/FeedHeader'
import Tasks from '../../components/social/corporateProfile/Tasks';
import Authority from '../../components/social/corporateProfile/Authority';
import Colleagues from '../../components/social/colleagues/Colleagues';
import AddColleagues from '../../components/social/colleagues/AddColleagues';
import PartnersPage from './PartnersPage';
import ProfileSection from '../../components/social/corporateProfile/ProfileSection';
import CorporateProfileVacancies from '../../components/social/corporateProfile/CroporateProfileVacancies';
import CorporateProfileSetings from '../../components/social/corporateProfile/CorporateProfileSetings';
import BankAccount from '../../components/modules/tax/BankAccount';

const CorporateProfile = () => {

    const navigate = useNavigate();

    const colleagueNavigate = useSelector((state) => state.colleague.colleagueNavigate);

    const [activeBtnId, setActiveBtnId] = useState(1);

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

    const { vacancyNavigate, selectedVacancy } = useSelector((state) => state.vacancy);

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
                                            onClick={() => {
                                                if (btn.id === 9) {
                                                    navigate('/login');
                                                } else {
                                                    setActiveBtnId(btn.id);
                                                }
                                            }}

                                        >
                                            <img src={btn.img} alt="" />
                                            <span>{btn.content}</span>
                                        </button>
                                    ))
                                }

                            </div>

                        </div>


                        <div className="line"></div>

                        <div className="corporate-content">

                            {activeBtnId === 1 && <ProfileSection />}

                            {/* {activeBtnId === 2 && <BankAccount />} */}

                            {activeBtnId === 3 && <Tasks />}

                            {activeBtnId === 4 && <Authority />}

                            {activeBtnId === 5 && (
                                <>
                                    {colleagueNavigate === "colleagueList" && <Colleagues />}
                                    {colleagueNavigate === "addColleague" && <AddColleagues />}
                                </>
                            )}

                            {activeBtnId === 6 && <PartnersPage />}

                            {activeBtnId === 7 && (
                                <CorporateProfileVacancies />
                            )}

                            {activeBtnId === 8 && <CorporateProfileSetings />}



                        </div>

                    </div>

                </div>






            </div>

        </div>
    )
}

export default CorporateProfile