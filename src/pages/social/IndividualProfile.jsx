import React from 'react'
import FeedHeader from '../../layouts/FeedHeader'

const IndividualProfile = () => {
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

                                <div className="user-details">

                                    <div>
                                        <img src="" alt="" />
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="right-side">
                            right
                        </div>

                    </div>
                    
                </div>

            </div>



        </div>
    )
}

export default IndividualProfile