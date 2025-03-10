import React from 'react'
import { Helmet } from "react-helmet-async";
import LandingHeader from '../../layouts/LandingHeader';

const LandingPage = () => {
    return (
        <div className='landing-page-container d-flex flex-column align-items-center'>

            <Helmet>
                <title>Taxsis</title>
                <meta name="description" content="taxsis" />
            </Helmet>

            <LandingHeader />


            <div className="landing-page-heading d-flex flex-column">
                <span className='heading-title'>TAXSIS ilə mühasibatlıq uçotunuzu <br /> beynəlxalq standartlara uyğun qurun</span>
                <span className="heading-text">Taxsis, bənzərsiz sürət, çeviklik və uyğunluqla on minlərlə şirkətə qlobal miqyasda genişlənməyə kömək edir. <br /> Təyyarədə, və aralarındakı hər şeyi asanlaşdıran hamısı bir yerdə Qlobal İnsanlar Platformasını əldə edin.</span>
            </div>

            <div className="video-links d-flex align-items-center justify-content-center">

                <a href="#" className="video-link d-flex align-items-center">
                    <img src="./assets/video-icon.svg" alt="" />
                    <span>Təlimat videolar</span>
                </a>

                <a href="#" className="video-link d-flex align-items-center">
                    <img src="./assets/photo-icon.svg" alt="" />
                    <span>Referans videolar</span>
                </a>

            </div>

            <div className="landing-page-images d-flex justify-content-center">

                <div className="image1">
                    <img src="./assets/landingPagePhoto.png" alt="" />
                </div>

                <div className="image2">
                    <img src="./assets/landingPagePhoto.png" alt="" />
                </div>

                <div className="image3">
                    <img src="./assets/landingPagePhoto.png" alt="png" />
                </div>

                <div className="image4">
                    <img src="./assets/landingPageSidePhoto.png" alt="png" />
                </div>

                <div className="individual-image d-flex align-items-center">

                    <div className="icon">
                        <img src="./assets/individualProfile-icon.svg" alt="png" />
                    </div>

                    <div className="individual-content d-flex flex-column justify-content-center">
                        <span className='content-title'>Fərdi hesab</span>
                        <span className='content-info'>Fiziki şəxslər üçün</span>
                    </div>

                </div>

                <div className="corporate-image d-flex align-items-center">

                    <div className="icon">
                        <img src="./assets/corporateProfile-icon.svg" alt="png" />
                    </div>

                    <div className="corporate-content d-flex flex-column justify-content-center">
                        <span className='content-title'>Korporativ hesab</span>
                        <span className='content-info'>Hüquqi şəxslər üçün</span>
                    </div>

                </div>

            </div>




        </div>
    )
}

export default LandingPage