import React from 'react'

const AboutCompany = () => {

    const infoList = [
        { id: 1, img: "./assets/bag-icon.svg", content: "İş yeri", value: "ACFA MMC, Mühasib" },
        { id: 2, img: "./assets/location-icon.svg", content: "Ünvan", value: "Bakı, Atatürk prospekti" },
        { id: 3, img: "./assets/language-icon.svg", content: "Dil", value: "Azərbaycan, İngilis" },
        { id: 4, img: "./assets/education-icon.svg", content: "Sahə", value: "Mühasibatlıq" },
        { id: 5, img: "./assets/phone-icon.svg", content: "Telefon", value: "+994 70 800 28 88" },
    ]
    return (
        <div className='about-company'>

            <div className="about-company-title">Haqqında</div>

            <div className="about-company-description">
                “ACCFIN GROUP” peşəkar komandası ilə vergi, maliyyə, audit və idarəetmə sferaları üzrə xidmət göstərən mühasibatlıq bürosudur. Ticarət, tikinti, xidmət və istehsalat sahəsində uzunmüddətli təcrübəyə əsaslanan peşəkar komandamız onlarla şirkətin maliyyə-mühasibatlıq sahəsindəki çatışmazlıqlarını aradan qaldırmış, uçot mexanizmlərini yaratmış və ədalətsiz maliyyə sanksiyalarından xilas etmişdir. Şirkətimiz məxfilik, məsuliyyət , dəqiqlik və professionallıq iş prinsiplərinə əsaslanaraq müştəri məmnuniyyətini qazanmışdır. Müştərilərimizin maraqları, qarşılıqlı hörmət və görülən işə zəmanət şirkətimizin başlıca prioritetlərinə daxildir.
            </div>

            <div className="about-company-info-list d-flex flex-column">


                {
                    infoList.map((item) => (
                        <div key={item.id} className="info-list-item d-flex">

                            <div className="list-item-label d-flex align-items-center">
                                <img src={item.img} alt="" />
                                <span>{item.content}</span>
                            </div>

                            <div className="list-item-value">{item.value}</div>

                        </div>
                    ))
                }



            </div>

        </div>
    )
}

export default AboutCompany