import React from 'react'

const Messages = () => {

    const friends = [
        { id: 1, img: '/assets/profile-picture.jpg', name: 'Elman Vəli', time: '03:30PM', online: true },
        { id: 2, img: '/assets/profile-picture2.jpg', name: 'Vaqif Əliyev', time: '11:59AM', online: false },
        { id: 3, img: '/assets/profile-picture3.jpg', name: 'Turanə Abbasova', time: '09:30AM', online: false },
        { id: 4, img: '/assets/profile-picture4.jpg', name: 'Baba Ağayev', time: '08:00AM', online: true },
        { id: 5, img: '/assets/profile-picture5.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },


    ]

    return (
        <div className='messages-container col-3'>

            <div className="advertising">

                <img src="/assets/add-icon2.jpg" alt="" />
                {/* <div className='title'>Vergi və Mühasibatlıq uçotu xidməti</div> */}

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

export default Messages