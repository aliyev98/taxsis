import React from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import FeedLeftSide from '../../components/social/feed/FeedLeftSide'

const Feed = () => {
    return (
        <div className='feed-container'>

            <div className="header">
                <FeedHeader />
            </div>

            <div className="feed-body d-flex">
                <FeedLeftSide />
            </div>
        </div>
    )
}

export default Feed