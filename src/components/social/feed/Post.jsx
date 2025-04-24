import React from 'react'

const Post = () => {

    const actions = [
        { id: 1, img: "/assets/like-icon.svg", content: 'Bəyən' },
        { id: 2, img: "/assets/comment-icon.svg", content: 'Rəy yaz' },
        { id: 3, img: "/assets/share-icon.svg", content: 'Paylaş' },
    ]

    const posts = [
        {
            id: 1,
            img: '/assets/post-img.jpg',
            text: "2024-cü ilin vergi bəyannaməsi və hesabatın verilməsi ilə bağlı hansı şirkətləri və ya şəxsləri məsləhət görürsünüz?",
            user: {
                name: 'Ulvin Omarov',
                username: '@ulvin.omarov',
                avatar: '/assets/profile-picture.jpg',
            },
            comments:
            {
                id: 2,
                user: {
                    name: 'Elman Vəli',
                    img: '/assets/profile-picture2.jpg',
                    text: 'Salam @vagifaliyev, yoxlayıb sizə tezliklə geri gönüş edəcəm'
                }
            }
        },
        {
            id: 3,
            img: '/assets/post-img2.jpg',
            text: "2024-cü ilin vergi bəyannaməsi və hesabatın verilməsi ilə bağlı hansı şirkətləri və ya şəxsləri məsləhət görürsünüz?",
            user: {
                name: 'Füruzə Səfərli',
                username: '@firuza',
                avatar: '/assets/profile-picture2.jpg',
            },
        },
        {
            id: 4,
            img: '/assets/post-img2.jpg',
            text: "Paketi alıb Adobe xd-ə yükləyirsiniz, bəzi ekranlarda bəzi mətn və başlıqlar sönülüdür, bu, xd proqramının ən son versiyası ilə uyğunluq problemidir.",
            user: {
                name: 'Təranə Abbasova',
                username: '@terane',
                avatar: '/assets/profile-picture3.jpg',
            },
        }
    ]

    return (
        <div className="post-container">

            {
                posts.map((post) => (

                    <div key={post.id} className="post d-flex flex-column">

                        <div className="post-content">

                            <div className="post-header d-flex justify-content-between">

                                <div className="user-infos d-flex align-items-center">

                                    <div className="user-photo">
                                        <img src={post.user.avatar} alt="" />
                                    </div>

                                    <div className="user-details d-flex flex-column align-items-start">

                                        <span className="name">{post.user.name}</span>
                                        <span className="username">{post.user.username}</span>

                                    </div>

                                </div>

                                <div className="created-at">
                                    7 saat əvvəl
                                </div>

                            </div>

                            <div className="post-details">

                                {post.img && (
                                    <div className="post-img">
                                        <img src={post.img} alt="" />
                                    </div>
                                )}

                                <div className="post-text">
                                    {post.text}
                                </div>

                                <div className="post-actions d-flex align-items-center">

                                    {
                                        actions.map((item) => (
                                            <div key={item.id} className="action d-flex align-items-center">
                                                <img src={item.img} alt="" />
                                                <span>{item.content}</span>
                                            </div>
                                        ))
                                    }

                                </div>

                            </div>

                        </div>

                        {
                            post.comments && (
                                <div className="comments d-flex">

                                    <div className="comment d-flex flex-column">

                                        <div className="comment-header d-flex justify-content-between">

                                            <div className="user-infos d-flex align-items-center">

                                                <div className="user-img">
                                                    <img src={post.comments?.user.img} alt="" />
                                                </div>

                                                <div className="name">{post.comments?.user.name}</div>

                                            </div>



                                        </div>

                                        <div className="comment-content">{post.comments?.user.text}</div>

                                        <div className="comment-actions d-flex align-items-center">

                                            {
                                                actions.map((action) => (
                                                    <div key={action.id} className="action d-flex align-items-center">
                                                        <img src={action.img} alt="" />
                                                        <span>{action.content}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>


                                    </div>

                                </div>
                            )
                        }



                        <div className="line"></div>

                    </div>
                ))
            }



        </div>
    )
}

export default Post