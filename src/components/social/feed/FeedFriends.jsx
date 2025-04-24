import React from 'react'

const FeedFriends = () => {

    const friends = [
        { id: 1, img: '/assets/profile-picture.jpg', name: 'Elman Vəli', time: '03:30PM', online: true },
        { id: 2, img: '/assets/profile-picture2.jpg', name: 'Vaqif Əliyev', time: '11:59AM', online: false },
        { id: 3, img: '/assets/profile-picture3.jpg', name: 'Turanə Abbasova', time: '09:30AM', online: false },
        { id: 4, img: '/assets/profile-picture4.jpg', name: 'Baba Ağayev', time: '08:00AM', online: true },
        { id: 5, img: '/assets/profile-picture5.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },
        { id: 6, img: '/assets/profile-picture.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },
        { id: 7, img: '/assets/profile-picture5.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },
        { id: 8, img: '/assets/profile-picture2.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },
        { id: 9, img: '/assets/profile-picture3.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },
        { id: 10, img: '/assets/profile-picture5.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },
        { id: 11, img: '/assets/profile-picture2.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },
        { id: 12, img: '/assets/profile-picture5.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },
        { id: 13, img: '/assets/profile-picture3.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },
        { id: 14, img: '/assets/profile-picture.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },
    ]

    return (
        <div className='feed-friends-container col-3'>

            <div className="advertising">
                <img src="/assets/add-icon2.jpg" alt="" />
            </div>

            <div className="messages">

                <div className="messages-header d-flex justify-content-between">

                    <span>Dostlar</span>

                    <div className='dots-img'>
                        <img src="/assets/dots-icon.svg" alt="" />
                    </div>

                </div>

                <div className="friends d-flex flex-column justify-content-between">

                    {
                        friends?.map((friend) => (

                            <div key={friend.id} className="friend d-flex justify-content-between align-items-center">

                                <div className="friend-infos d-flex align-items-center">

                                    <div className="profile-img">
                                        <img src={friend.img} alt="" />
                                    </div>

                                    <span className='name'>{friend.name}</span>

                                </div>

                                <div className="status d-flex align-items-center">

                                    <span className="time">{friend.time}</span>

                                    <div className={`dot ${friend.online ? "online" : "offline"}`}></div>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default FeedFriends 