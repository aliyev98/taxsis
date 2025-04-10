import React, { useState } from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import FeedSideBar from '../../sidebars/FeedSideBar'
import Input from '../../components/ui/Input'
import TaxModuleTable from '../../components/tables/TaxModuleTable'




const CustomCalculator = () => {

    const inputFields = [
        { placeholder: "VÖEN-ə görə" },
        { placeholder: "Ada görə" }
    ];

    const columns = [
        { id: "no", accessorKey: "no", header: "No" },
        {
            id: "voen", accessorKey: "voen", header: "VÖEN",
            filterOptions: { search: true, type: "search" },
        },
        {
            accessorKey: "name",
            header: "Adı",
            filterOptions: {
                search: true,
                type: "search",
                options: ["A-dan Z-yə", "Z-dən A-ya"],
            },
        },
        {
            id: "taxName",
            accessorKey: "taxName",
            header: "Vergi uçotu orqanının adı",
            filterOptions: {
                search: true,
                type: "search",
                options: ["A-dan Z-yə", "Z-dən A-ya"],
            },
        },
        {
            id: "adress",
            accessorKey: "adress",
            header: "Vergi uçotu orqanının ünvanı",
            filterOptions: {
                search: true,
                type: "search",
                options: ["A-dan Z-yə", "Z-dən A-ya"],
            },
        },
    ];

    const data = [
        { no: 1, voen: "0980865568", name: "ÖMƏROV ÜLVİN RƏHMAN OĞLU", taxName: "9 saylı Ərazi Vergilər İdarəsi", adress: "AZ2300, GÖYÇAY RAYONU, GÖYÇAY ŞƏHƏRİ, Ə.KƏRİM, ev 112 A" },
        { no: 2, voen: "0980865568", name: "ÖMƏROV ÜLVİN RƏHMAN OĞLU", taxName: "9 saylı Ərazi Vergilər İdarəsi", adress: "AZ2300, GÖYÇAY RAYONU, GÖYÇAY ŞƏHƏRİ, Ə.KƏRİM, ev 112 A" },
    ];

    return (
        <div className='vat-search-page-container'>

            <FeedHeader />

            <div className="social-wrapper d-flex">

                <FeedSideBar />

                <div className="content d-flex justify-content-center">

                    <div className="vat-search-container d-flex flex-column align-items-center">

                        <div className="title">
                            VÖEN axtar
                        </div>

                        <div className="vat-search d-flex flex-column align-items-center">

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
                                    <span>Qurumun adından sonra təşkilati-hüquqi formanın adı yazılmamalıdır. <br /> Ad böyük hərflərlə yazılmalıdır.</span>
                                </div>

                                <button className="btn btn-primary btn-control">Yoxla</button>

                            </div>

                            {/* <div className="table">
                                <TaxModuleTable columns={columns} data={data} />
                            </div> */}

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default CustomCalculator