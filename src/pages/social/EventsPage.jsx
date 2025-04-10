import React from 'react';
import FeedHeader from '../../layouts/FeedHeader';
import FeedSideBar from '../../sidebars/FeedSideBar';
import EventsHeader from '../../components/social/events/EventsHeader';
import EventsNavbar from '../../components/social/events/EventsNavbar';
import Events from '../../components/social/events/Events';

const EventsPage = () => {

    return (
        <div className="events-page-container">
            <FeedHeader />

            <div className="social-wrapper d-flex">
                <FeedSideBar />

                <div className="content d-flex justify-content-center">
                    <div className="events-container d-flex flex-column">
                        <EventsHeader />
                        <EventsNavbar />

                        <Events />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
