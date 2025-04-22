import React from 'react';
import { useSelector } from 'react-redux';
import FeedHeader from '../../layouts/FeedHeader';
import FeedSideBar from '../../sidebars/FeedSideBar';
import TenderDetails from '../../components/social/tenders/TenderDetails';
import Tenders from '../../components/social/tenders/Tenders'
import TenderParticipate from '../../components/social/tenders/TenderParticipate';
import TenderFinish from '../../components/social/tenders/TenderFinish';
import AnnounceTender from '../../components/social/tenders/AnnounceTender';

const TendersPage = () => {
    const { tenderNavigate, selectedTender } = useSelector((state) => state.tender);

    return (
        <div className="tenders-page-container">
            <FeedHeader />

            <div className="social-wrapper d-flex">
                <FeedSideBar />

                <div className="content d-flex justify-content-center">
                    <div className="tenders-container">
                        {tenderNavigate === 'tenderList' && <Tenders />}
                        {tenderNavigate === 'detail' && <TenderDetails />}
                        {tenderNavigate === 'participate' && <TenderParticipate />}
                        {tenderNavigate === "finish" && <TenderFinish />}
                        {tenderNavigate === "announce" && <AnnounceTender />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TendersPage;
