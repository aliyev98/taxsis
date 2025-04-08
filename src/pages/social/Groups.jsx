import React from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import FeedSideBar from '../../sidebars/FeedSideBar'
import GroupsHeader from '../../components/social/groups/GroupsHeader'
import Group from '../../components/social/groups/Group'


const Groups = () => {
  return (
    <div className='groups-page-container'>

      <FeedHeader />

      <div className="social-wrapper d-flex">

        <FeedSideBar />

        <div className="content d-flex justify-content-center align-items-center">

          <div className="groups-container d-flex flex-column">

            <GroupsHeader />

            <div className="groups">
              <Group />
            </div>

          </div>

        </div>


      </div>

    </div>
  )
}

export default Groups