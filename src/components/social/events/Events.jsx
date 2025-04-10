import React from 'react'
import Event from './Event'

const Events = () => {

    const events = [
        { id: 1, date: "31.12.2024", name: "Santa Ride - 2024 Yeni il şənliyi", location: "Elektra Hall", img: "/assets/event-img.jpg" },
        { id: 2, date: "31.12.2024", name: "Santa Ride - 2024 Yeni il şənliyi", location: "Elektra Hall", img: "/assets/event-img2.jpg" },
        { id: 3, date: "31.12.2024", name: "Santa Ride - 2024 Yeni il şənliyi", location: "Elektra Hall", img: "/assets/event-img3.png" },
        { id: 4, date: "31.12.2024", name: "Santa Ride - 2024 Yeni il şənliyi", location: "Elektra Hall", img: "/assets/event-img.jpg" },
        { id: 5, date: "31.12.2024", name: "Santa Ride - 2024 Yeni il şənliyi", location: "Elektra Hall", img: "/assets/event-img4.jpg" },
        { id: 6, date: "31.12.2024", name: "Santa Ride - 2024 Yeni il şənliyi", location: "Elektra Hall", img: "/assets/event-img2.jpg" },
        { id: 7, date: "31.12.2024", name: "Santa Ride - 2024 Yeni il şənliyi", location: "Elektra Hall", img: "/assets/event-img2.jpg" },
    ]


    return (
        <div className='events'>
            <Event events = {events} />
        </div>
    )
}

export default Events