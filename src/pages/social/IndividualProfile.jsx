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
import IndividualProfileCart from '../../components/social/individualProfile/individualProfileCart';

const IndividualProfile = () => {

    const dispatch = useDispatch();

    const activeSection = useSelector((state) => state.profileNav.profileNavigate);

    const [activeNav, setActiveNav] = useState(1);





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

            <div className="individual-profile-container d-flex justify-content-center">

                <div className="individual-profile">

                    <div className="individual-profile-cover position-relative">

                        <img className='cover-img' src="/assets/cover.jpg" alt="" />

                        <button className='btn-edit-cover d-flex align-items-center'>
                            <img src="/assets/pen-white.svg" alt="" />
                            <span>Qapaq şəkli</span>
                        </button>


                    </div>

                    <div className="individual-profile-wrapper d-flex justify-content-end">

                        <div className="profile-cart position-relative">
                            <IndividualProfileCart />
                        </div>

                        <div className="individual-profile-content">
                            {
                                activeSection === "general" ? (
                                    <div className='d-flex flex-column content-wrapper'>
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

                    {/* <div className="profile-wrapper position-relative d-flex">

                        <div className="left-side">

                            <IndividualProfileCart />

                        </div>

                        <div className="right-side">




                        </div>


                    </div> */}

                </div>

            </div>



        </div>
    )
}

export default IndividualProfile