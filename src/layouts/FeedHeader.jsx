import React from 'react'

const FeedHeader = () => {
    return (
        <div className='feed-header-container d-flex justify-content-between align-items-center'>

            <div className="logo d-flex align-items-center">

                <div className="logo-img">
                    <img src="./assets/logo.svg" alt="" />
                    <div className="lines">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
                <span className='logo-text'>TAXSIS</span>

            </div>

            <div className="search-input d-flex align-items-lg-center">
                <div className="search-icon">
                    <img src="./assets/search-icon.svg" alt="" />
                </div>
                <input type="text" placeholder='Axtar' />
            </div>

            <div className='header-nav d-flex align-items-center'>

                <button className="add-post d-flex align-items-center">
                    <img src="./assets/post-add-icon.svg" alt="" />
                    <span>Yeni post</span>
                </button>

                <button className="messages">
                    <img src="./assets/messages-icon.svg" alt="" />
                    <div className="red-dot"></div>
                </button>

                <button className="notifications">
                    <img src="./assets/notification-icon.svg" alt="" />
                    <div className="red-dot"></div>
                </button>

                <div className="profile-picture">
                    <img src="./assets/profile-picture.png" alt="" />
                </div>

            </div>

        </div>
    )
}

export default FeedHeader