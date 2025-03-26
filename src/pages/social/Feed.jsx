import React from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import Posts from '../../components/social/feed/Posts'
import Messages from '../../components/social/feed/Messages'

const Feed = () => {

    return (
        <div className='feed-container'>

            <FeedHeader />

            <div className="feed-body d-flex">


                <div className="content-container d-flex justify-content-around p-0 d-row">

                    <Posts />

                    <Messages />


                </div>

            </div>

        </div>
    )
}

export default Feed