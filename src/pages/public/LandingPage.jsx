import React from 'react'
import { Helmet } from "react-helmet-async";
import LandingHeader from '../../layouts/LandingHeader';

const LandingPage = () => {
    return (
        <div className='landingPage-container'>

            <Helmet>
                <title>Taxsis</title>
                <meta name="description" content="taxsis" />
            </Helmet>

            <LandingHeader />

            <div className="landingPage-container__body">

                <div className="landingPage-container__body-title">
                    <h1 className='landingPage-container__body-title-main'>TAXSIS ilə mühasibatlıq uçotunuzu beynəlxalq standartlara uyğun qurun</h1>
                    <p className='landingPage-container__body-title-sub'>Taxsis, bənzərsiz sürət, çeviklik və uyğunluqla on minlərlə şirkətə qlobal miqyasda genişlənməyə kömək edir. Təyyarədə, və aralarındakı hər şeyi asanlaşdıran hamısı bir yerdə Qlobal İnsanlar Platformasını əldə edin.</p>
                </div>

                <div className="landingPage-container__body-videos">
                    <a href="#" className="landingPage-container__body-videos-link">
                        <img src="./assets/video-icon.svg" alt="" />
                        <span>Təlimat videolar</span>
                    </a>
                    <a href="#" className="landingPage-container__body-videos-link">
                        <img src="./assets/photo-icon.svg" alt="" />
                        <span>Referans videolar</span>
                    </a>
                </div>

                <div className="landingPage-container__body-images">

                    <div className="landingPage-container__body-images-img1">
                        <img src="./assets/landingPagePhoto.png" alt="png" />
                    </div>

                    <div className="landingPage-container__body-images-img2">
                        <img src="./assets/landingPagePhoto.png" alt="png" />
                    </div>

                    <div className="landingPage-container__body-images-img3">
                        <img src="./assets/landingPagePhoto.png" alt="png" />
                    </div>

                    <div className="landingPage-container__body-images-img4">
                        <img src="./assets/landingPageSidePhoto.png" alt="png" />
                    </div>

                    <div className="landingPage-container__body-images-individual">
                        <div className="landingPage-container__body-images-individual-icon">
                            <img src="./assets/individualProfile-icon.svg" alt="png" />
                        </div>
                        <div className="landingPage-container__body-images-individual-content">
                            <span className='landingPage-container__body-images-individual-content-title'>Fərdi hesab</span>
                            <span className='landingPage-container__body-images-individual-content-content'>Fiziki şəxslər üçün</span>
                        </div>
                    </div>

                    <div className="landingPage-container__body-images-corporate">
                        <div className="landingPage-container__body-images-corporate-icon">
                            <img src="./assets/corporateProfile-icon.svg" alt="png" />
                        </div>
                        <div className="landingPage-container__body-images-corporate-content">
                            <span className='landingPage-container__body-images-individual-content-title'>Korporativ hesab</span>
                            <span className='landingPage-container__body-images-individual-content-content'>Hüquqi şəxslər üçün</span>
                        </div>
                    </div>



                </div>


            </div>


        </div>
    )
}

export default LandingPage