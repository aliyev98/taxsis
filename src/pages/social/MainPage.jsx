import React from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import FeedSideBar from '../../sidebars/FeedSideBar'
import Feed from '../../components/social/feed/Feed'
import Messages from '../../components/social/feed/Messages'

const MainPage = () => {
  return (
    <div className='mainpage-container'>

      <FeedHeader />

      <div className="content d-flex justify-content-between">

        <FeedSideBar />

        <Feed />

        <Messages />

      </div>

    </div>
  )
}

export default MainPage