import React from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import FeedSideBar from '../../sidebars/FeedSideBar'
import { useSelector } from 'react-redux';
import AddColleagues from '../../components/social/colleagues/AddColleagues';
import Colleagues from '../../components/social/colleagues/Colleagues';



const ColleaguesPage = () => {


  const colleagueNavigate = useSelector((state) => state.colleague.colleagueNavigate);

  return (
    <div className='colleagues-page-container'>

      <FeedHeader />

      <div className="social-wrapper d-flex">

        <FeedSideBar />

        <div className="content d-flex justify-content-center">

          <div className="colleagues-container d-flex flex-column">

            {colleagueNavigate === "colleagueList" && <Colleagues />}
            {colleagueNavigate === "addColleague" && <AddColleagues />}

          </div>

        </div>


      </div>

    </div>
  )
}

export default ColleaguesPage