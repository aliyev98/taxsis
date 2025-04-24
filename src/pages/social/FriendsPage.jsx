import React from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import FeedSideBar from '../../sidebars/FeedSideBar'
import Friend from '../../components/social/friends/Friend'
import FriendsNavbar from '../../components/social/friends/FriendsNavbar'


const Friends = () => {

    return (
        <div className='friends-page-container'>

            <FeedHeader />


            <div className="social-wrapper d-flex">

                <FeedSideBar />

                <div className="content d-flex justify-content-center align-items-center">

                    <div className="friend-list d-flex flex-column">

                        <div className="title">Dostlar</div>

                        <FriendsNavbar />

                        <div className="friends">
                            <Friend />
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Friends