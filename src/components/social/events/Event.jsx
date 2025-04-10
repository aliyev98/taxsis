import React, { useState } from 'react';

const Event = ({ events }) => {
    return (
        <>
            {
                events.map((event, index) => (
                    <SingleEventCard key={index} event={event} />
                ))
            }
        </>
    );
};

const SingleEventCard = ({ event }) => {
    const [activeButton, setActiveButton] = useState(null);

    return (
        <div className="card event-card" style={{ width: '18rem' }}>
            <img src={event.img} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <div className="date">{event.date}</div>
                <div className="name">{event.name}</div>

                <div className="location d-flex align-items-center">
                    <img src="/assets/location-icon.svg" alt="" />
                    <span>{event.location}</span>
                </div>

                <div className="buttons d-flex align-items-center">
                    <button
                        className={activeButton === 'interested' ? 'active' : ''}
                        onClick={() => setActiveButton('interested')}
                    >
                        Maraqlıdır
                    </button>
                    <button
                        className={activeButton === 'going' ? 'active' : ''}
                        onClick={() => setActiveButton('going')}
                    >
                        Gedirəm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Event;
