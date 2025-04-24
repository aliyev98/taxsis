import React from 'react'

const individualProfileCart = () => {

    const details = [
        { id: 1, img: "/assets/bag-icon.svg", content: "İş yeri", value: "ACFA MMC, Mühasib" },
        { id: 2, img: "/assets/location-icon.svg", content: "Ünvan", value: "Bakı" },
        { id: 3, img: "/assets/bag-icon.svg", content: "Dil", value: "Azərbaycan, İngilis" },
        { id: 4, img: "/assets/bag-icon.svg", content: "İxtissas", value: "Mühasibatlıq" },
        { id: 5, img: "/assets/bag-icon.svg", content: "Ailə", value: "Subay" },
    ]
    
    return (
        <div className="individual-profile-cart d-flex flex-column align-items-center">

            <div className="profile-img">

                <img src="/assets/pp.jpg" alt="" />

                <div className="camera-icon">
                    <img src="/assets/camera-icon.svg" alt="" />
                </div>
            </div>

            <div className="username">Ulvin Omarov</div>

            <div className="social-icons d-flex flex-column">

                <div className="icons d-flex justify-content-center">
                    <img src="/assets/twitter.svg" alt="" />
                    <img src="/assets/instagram.svg" alt="" />
                    <img src="/assets/facebook.svg" alt="" />
                </div>

                <div className="line"></div>

                <div className="created">Noy 18, 2024-dən bəri üzv</div>

            </div>

            <div className="about d-flex flex-column">
                <span className="title">Haqqımda</span>
                <span className="about-text">
                    10 ildən artıq mühasibatlıq və maliyyə təcrübəsinə sahib, 50+ yerli və xarici şirkət və ACCA sertifikatlı mühasib.
                </span>
            </div>

            <div className="user-details d-flex flex-column">

                {
                    details.map((detail) => (
                        <div key={detail.id} className="item d-flex justify-content-between">
                            <div className='d-flex align-items-center'>
                                <img src={detail.img} alt="" />
                                <span>{detail.content}</span>
                            </div>

                            <span>{detail.value}</span>
                        </div>
                    ))
                }





            </div>

            <button className="btn btn-edit" onClick={() => dispatch(setProfileNavigate('profileEdit'))}>Profilə düzəliş et</button>

        </div>
    )
}

export default individualProfileCart