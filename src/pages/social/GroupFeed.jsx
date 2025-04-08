import React from 'react'
import { useParams } from 'react-router-dom';
import FeedHeader from '../../layouts/FeedHeader';
import FeedSideBar from '../../sidebars/FeedSideBar';
import Feed from '../../components/social/feed/Feed';
import Messages from '../../components/social/feed/Messages';

const GroupFeed = () => {


    const { id } = useParams();


    return (
        <div className='group-feed-container'>
            <FeedHeader />

            <div className="content d-flex justify-content-between">

                <FeedSideBar />

                <Feed groupId={id} />

                <Messages />

            </div>

        </div>
    )
}

export default GroupFeed