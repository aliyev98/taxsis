import React from 'react'

const Photos = () => {

    const photos = [
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
        <div className='photos-container'>

            {
                photos.map((photo) => (
                    <div key={photo.id} className="photo">
                        <img src={photo.img} alt="" />
                    </div>
                ))
            }



        </div>
    )
}

export default Photos