import React from 'react'
import { Helmet } from "react-helmet-async";
import LandingHeader from '../../layouts/LandingHeader';

const LandingPage = () => {
    return (
        <div className='landing-page-container'>

            <Helmet>
                <title>Taxsis</title>
                <meta name="description" content="taxsis" />
            </Helmet>

            <LandingHeader />


            <div className="landing-page-heading">
                <span className='heading-title'>TAXSIS ilə mühasibatlıq uçotunuzu <br /> beynəlxalq standartlara uyğun qurun</span>
                <span className="heading-text">Taxsis, bənzərsiz sürət, çeviklik və uyğunluqla on minlərlə şirkətə qlobal miqyasda genişlənməyə kömək edir. <br /> Təyyarədə, və aralarındakı hər şeyi asanlaşdıran hamısı bir yerdə Qlobal İnsanlar Platformasını əldə edin.</span>
            </div>

            <div className="video-links">
                <a href="#" className="video-link">
                    <img src="./assets/video-icon.svg" alt="" />
                    <span>Təlimat videolar</span>
                </a>
                <a href="#" className="video-link">
                    <img src="./assets/photo-icon.svg" alt="" />
                    <span>Referans videolar</span>
                </a>
            </div>


            <div className="landing-page-images">

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

                <div className="landing-individual">
                    <div className="individual-icon">
                        <img src="./assets/individualProfile-icon.svg" alt="png" />
                    </div>
                    <div className="individual-content">
                        <span className='content-title'>Fərdi hesab</span>
                        <span className='content-info'>Fiziki şəxslər üçün</span>
                    </div>
                </div>

                <div className="landing-corporate">
                    <div className="corporate-icon">
                        <img src="./assets/corporateProfile-icon.svg" alt="png" />
                    </div>
                    <div className="corporate-content">
                        <span className='content-title'>Korporativ hesab</span>
                        <span className='content-info'>Hüquqi şəxslər üçün</span>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default LandingPage