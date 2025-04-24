import React from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import FeedSideBar from '../../sidebars/FeedSideBar'
import Feed from '../../components/social/feed/Feed'
import FeedFriends  from '../../components/social/feed/FeedFriends'

const MainPage = () => {
  return (
    <div className='mainpage-container'>

      <FeedHeader />

      <div className="content d-flex justify-content-between">

        <FeedSideBar />

        <Feed />

        <FeedFriends  />

      </div>

    </div>
  )
}

export default MainPage