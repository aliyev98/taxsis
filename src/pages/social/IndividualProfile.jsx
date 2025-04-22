import React, { useState } from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import Feed from '../../components/social/feed/Feed';
import Photos from '../../components/social/individualProfile/Photos';
import Videos from '../../components/social/individualProfile/Videos';
import IndividualFriends from '../../components/social/individualProfile/IndividualFriends';
import CV from '../../components/social/individualProfile/CV';
import CvEdit from '../../components/social/individualProfile/CvEdit';
import IndividualProfileEdit from '../../components/social/individualProfile/IndividualProfileEdit';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileNavigate } from '../../redux/slices/profileSlice';

const IndividualProfile = () => {

    const dispatch = useDispatch();

    const activeSection = useSelector((state) => state.profileNav.profileNavigate);

    const [activeNav, setActiveNav] = useState(1);



    const details = [
        { id: 1, img: "/assets/bag-icon.svg", content: "İş yeri", value: "ACFA MMC, Mühasib" },
        { id: 2, img: "/assets/location-icon.svg", content: "Ünvan", value: "Bakı" },
        { id: 3, img: "/assets/bag-icon.svg", content: "Dil", value: "Azərbaycan, İngilis" },
        { id: 4, img: "/assets/bag-icon.svg", content: "İxtissas", value: "Mühasibatlıq" },
        { id: 5, img: "/assets/bag-icon.svg", content: "Ailə", value: "Subay" },
    ]

    const navbar = [
        { id: 1, content: "Postlar" },
        { id: 2, content: "Fotolar" },
        { id: 3, content: "Videolar" },
        { id: 4, content: "Dostlar" },
        { id: 5, content: "CV" },
    ]



    return (
        <div className='individual-profile-page'>

            <FeedHeader />

            <div className="profile-container d-flex justify-content-center">

                <div className="profile">

                    <div className="cover-img">
                        <img src="/assets/cover.jpg" alt="" />
                    </div>

                    <div className="profile-wrapper position-relative d-flex">

                        <div className="left-side">

                            <div className="user-infos-cart d-flex flex-column align-items-center">

                                <div className="profile-img">

                                    <img src="/assets/pp.jpg" alt="" />

                                    <div className="camera-icon">
                                        <img src="/assets/camera-icon.svg" alt="" />
                                    </div>
                                </div>

                                <div className="username">Ulvin Omarov</div>

                                <div className="social-icons d-flex flex-column">

                                    <div className="icons d-flex justify-content-center">
                                        <img src="/assets/twitter.svg" alt="" />
                                        <img src="/assets/instagram.svg" alt="" />
                                        <img src="/assets/facebook.svg" alt="" />
                                    </div>

                                    <div className="line"></div>

                                    <div className="created">Noy 18, 2024-dən bəri üzv</div>

                                </div>

                                <div className="about d-flex flex-column">
                                    <span className="title">Haqqımda</span>
                                    <span className="about-text">
                                        10 ildən artıq mühasibatlıq və maliyyə təcrübəsinə sahib, 50+ yerli və xarici şirkət və ACCA sertifikatlı mühasib.
                                    </span>
                                </div>

                                <div className="user-details d-flex flex-column">

                                    {
                                        details.map((detail) => (
                                            <div key={detail.id} className="item d-flex justify-content-between">
                                                <div className='d-flex align-items-center'>
                                                    <img src={detail.img} alt="" />
                                                    <span>{detail.content}</span>
                                                </div>

                                                <span>{detail.value}</span>
                                            </div>
                                        ))
                                    }





                                </div>

                                <button className="btn btn-edit" onClick={() => dispatch(setProfileNavigate('profileEdit'))}>Profilə düzəliş et</button>

                            </div>
                        </div>

                        <div className="right-side">

                            {/* <div className="profile-navbar d-flex">
                                {
                                    navbar.map((nav) => (
                                        <button
                                            key={nav.id}
                                            className={nav.id === activeNav ? 'active' : ''}
                                            onClick={() => setActiveNav(nav.id)}
                                        >
                                            {nav.content}
                                        </button>
                                    ))
                                }
                            </div> */}

                            {
                                activeSection === "general" ? (
                                    <div>
                                        <div className="profile-navbar d-flex">
                                            {navbar.map((nav) => (
                                                <button
                                                    key={nav.id}
                                                    className={nav.id === activeNav ? 'active' : ''}
                                                    onClick={() => setActiveNav(nav.id)}
                                                >
                                                    {nav.content}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="wrapper">
                                            {activeNav === 1 && <Feed />}
                                            {activeNav === 2 && <Photos />}
                                            {activeNav === 3 && <Videos />}
                                            {activeNav === 4 && <IndividualFriends />}
                                            {activeNav === 5 && <CV />}
                                        </div>
                                    </div>
                                ) : activeSection === "cvEdit" ? (
                                    <CvEdit />
                                ) : activeSection === "cv" ? (
                                    <CV /> 
                                ) : (
                                    <IndividualProfileEdit />
                                )
                            }


                        </div>


                    </div>

                </div>

            </div>



        </div>
    )
}

export default IndividualProfile