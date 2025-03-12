import React from 'react'

const DatabaseHeader = () => {
    return (
        <div className='panel-header-container d-flex justify-content-between align-items-center'>



            <div className="search-input d-flex align-items-lg-center">
                <div className="search-icon">
                    <img src="./assets/search-icon.svg" alt="" />
                </div>
                <input type="text" placeholder='Axtar' />
            </div>

            <div className='header-nav d-flex align-items-center'>

                <button className="messages">
                    <img src="./assets/messages-icon.svg" alt="" />
                    <div className="red-dot"></div>
                </button>

                <button className="notifications">
                    <img src="./assets/notification-icon.svg" alt="" />
                    <div className="red-dot"></div>
                </button>

                <div className="profile-picture pointer">
                    <img src="./assets/profile-picture.png" alt="" />
                </div>

            </div>

        </div>
    )
}

export default DatabaseHeader