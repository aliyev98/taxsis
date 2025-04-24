import React, { useState } from 'react';

const Friend = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: "Elman Vəli", avatar: "/assets/profile-picture.png", isFollowing: false },
    { id: 2, name: "Vaqif Əliyev", avatar: "/assets/profile-picture.png", isFollowing: false },
    { id: 3, name: "Aytən Rəsulova", avatar: "/assets/profile-picture.png", isFollowing: true },
    { id: 4, name: "Məhərrəm S. Əliyev", avatar: "/assets/profile-picture.png", isFollowing: false },
    { id: 5, name: "Rasim Quliyev", avatar: "/assets/profile-picture.png", isFollowing: false },
    { id: 6, name: "Nəzrin Babayeva", avatar: "/assets/profile-picture.png", isFollowing: true },
    { id: 7, name: "Tərbiyə Salamova", avatar: "/assets/profile-picture.png", isFollowing: true },
    { id: 8, name: "Nazim Hikmətov", avatar: "/assets/profile-picture.png", isFollowing: false },
    { id: 9, name: "Elman Vəli", avatar: "/assets/profile-picture.png", isFollowing: false },
    { id: 10, name: "Despina Petridis", avatar: "/assets/profile-picture.png", isFollowing: false },
    { id: 11, name: "Etibar Rüstəmli", avatar: "/assets/profile-picture.png", isFollowing: true },
    { id: 12, name: "Aliyə Hüseynova", avatar: "/assets/profile-picture.png", isFollowing: true },
    { id: 13, name: "Firuzə Səfərli", avatar: "/assets/profile-picture.png", isFollowing: false },
    { id: 14, name: "Mariana Pedroza", avatar: "/assets/profile-picture.png", isFollowing: true },
    { id: 15, name: "Gülnar Həşimli", avatar: "/assets/profile-picture.png", isFollowing: false },
    { id: 16, name: "Elman Vəli", avatar: "/assets/profile-picture.png", isFollowing: true },
  ]);

  const toggleFollow = (id) => {
    const updatedFriends = friends.map(friend =>
      friend.id === id ? { ...friend, isFollowing: !friend.isFollowing } : friend
    );
    setFriends(updatedFriends);
  };

  return (
    <>
      {friends.map((friend) => (
        <div key={friend.id} className="friend d-flex align-items-center">

          <div className="profile-img">
            <img src={friend.avatar} alt={friend.name} />
          </div>

          <div className="username">{friend.name}</div>

          <div className="buttons">
            {friend.isFollowing ? (
              <button className="btn btn-unfollow" onClick={() => toggleFollow(friend.id)}>
                İzləmədən çıxart
              </button>
            ) : (
              <button className="btn btn-primary btn-follow" onClick={() => toggleFollow(friend.id)}>
                İzlə
              </button>
            )}
          </div>

        </div>
      ))}
    </>
  );
};

export default Friend;
