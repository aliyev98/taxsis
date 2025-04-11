import React from 'react'

const Videos = () => {

    const videos = [
        { id: 1, img: "/assets/photo.png" },
        { id: 2, img: "/assets/photo2.png" },
        { id: 3, img: "/assets/photo3.png" },
        { id: 4, img: "/assets/photo4.png" },
        { id: 5, img: "/assets/photo.png" },
        { id: 6, img: "/assets/photo.png" },
        { id: 7, img: "/assets/photo.png" },
        { id: 8, img: "/assets/photo.png" },
        { id: 9, img: "/assets/photo.png" },
        { id: 10, img: "/assets/photo.png" },
        { id: 11, img: "/assets/photo.png" },
        { id: 12, img: "/assets/photo.png" },
        { id: 13, img: "/assets/photo.png" },
        { id: 14, img: "/assets/photo.png" },
        { id: 15, img: "/assets/photo.png" },
        { id: 16, img: "/assets/photo.png" },
        { id: 17, img: "/assets/photo.png" },
        { id: 18, img: "/assets/photo.png" },
    ]

    return (
        <div className='videos-container'>

            {
                videos.map((video) => (
                    <div key={video.id} className="video position-relative">
                        <img src={video.img} alt="" />

                        <img className='play-icon position-absolute' src="/assets/play-icon.svg" alt="" />
                    </div>
                ))
            }



        </div>
    )
}

export default Videos