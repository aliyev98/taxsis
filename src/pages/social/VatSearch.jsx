import React, { useState } from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import FeedSideBar from '../../sidebars/FeedSideBar'
import Input from '../../components/ui/Input'




const CustomCalculator = () => {

    const inputFields = [
        { placeholder: "VÖEN-ə görə" },
        { placeholder: "Ada görə" }
    ];

    return (
        <div className='vat-search-page-container'>

            <FeedHeader />

            <div className="social-wrapper d-flex">

                <FeedSideBar />

                <div className="content d-flex justify-content-center">

                    <div className="vat-search-container d-flex flex-column">

                        <div className="vat-search d-flex flex-column align-items-center">

                            <div className="title">
                                VÖEN axtar
                            </div>

                            <div className="search d-flex flex-column align-items-center">

                                <div className="title">VÖEN-ə və ya Ada görə vergi ödəyicisinin axtarılması</div>

                                <div className="account-type d-flex align-items-center">

                                    <div className="legal-entities d-flex justify-content-between align-items-center">

                                        <div className="legal-entities-img">
                                            <img src="/assets/corporateProfile-icon.svg" alt="" />
                                        </div>

                                        <span>Hüquqi şəxslər üzrə</span>

                                        <div className="input-div">

                                            <input type="checkbox" name="" id="" />

                                        </div>

                                    </div>

                                    <div className="natural-persons d-flex justify-content-between align-items-center">

                                        <div className="natural-persons-img">
                                            <img src="/assets/profile-icon.svg" alt="" />
                                        </div>

                                        <span>Hüquqi şəxslər üzrə</span>

                                        <div className="input-div">

                                            <input type="checkbox" name="" id="" />

                                        </div>

                                    </div>


                                </div>

                                <div className="inputs">
                                    <div className="inputs d-flex flex-column gap-3 mt-3">
                                        {inputFields.map((field, index) => (
                                            <Input key={index} placeholder={field.placeholder} />
                                        ))}
                                    </div>

                                </div>

                                <div className="information d-flex align-items-center">
                                    <img src="/assets/info-icon-blue.svg" alt="" />
                                    <span>Qurumun adından sonra təşkilati-hüquqi formanın adı yazılmamalıdır. Ad böyük hərflərlə yazılmalıdır.</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default CustomCalculator