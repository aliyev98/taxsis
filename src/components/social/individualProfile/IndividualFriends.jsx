import React, { useState } from 'react'

const IndividualFriends = () => {

  const [activeTab, setActiveTab] = useState(1); // Varsayılan olarak ilk sekme aktif

  const friends = [
    { id: 1, img: '/assets/profile-picture.jpg', name: 'Elman Vəli', time: '03:30PM', online: true },
    { id: 2, img: '/assets/profile-picture2.jpg', name: 'Vaqif Əliyev', time: '11:59AM', online: false },
    { id: 3, img: '/assets/profile-picture3.jpg', name: 'Turanə Abbasova', time: '09:30AM', online: false },
    { id: 4, img: '/assets/profile-picture4.jpg', name: 'Baba Ağayev', time: '08:00AM', online: true },
    { id: 5, img: '/assets/profile-picture5.jpg', name: 'Firuzə Səfərli', time: '07:01AM', online: false },


  ]


  const navbar = [
    { id: 1, content: "Bütün dostlar" },
    { id: 2, content: "Son əlavə olunanlar" },
    { id: 3, content: "Həmkarlar" },
    { id: 4, content: "İzlənənlər" },
    { id: 5, content: "İzlədiklərim" },
  ]
  return (
    <div className='individual-friends-container d-flex flex-column'>

      <div className="header d-flex justify-content-between">
        <span>Dostlar</span>
        <button><img src="/assets/more-icon.svg" alt="" /></button>
      </div>

      <div className="individual-friends-navbar d-flex">
        {navbar.map((nav) => (
          <button
            key={nav.id}
            className={nav.id === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(nav.id)}
          >
            {nav.content}
          </button>
        ))}
      </div>

      <div className="wrapper">
        {friends.map((friend) => (
          <div key={friend.id} className="friend-container d-flex align-items-center">
            <div className="profile-img">
              <img src={friend.img} alt={friend.name} />
            </div>
            <span className="username">{friend.name}</span>
            <div className="online-div d-flex">
              <span className="online-time">{friend.time}</span>
              <div className={`icon ${friend.online ? 'online' : 'offline'}`}></div>
            </div>
          </div>
        ))}
      </div>



    </div>
  )
}

export default IndividualFriends