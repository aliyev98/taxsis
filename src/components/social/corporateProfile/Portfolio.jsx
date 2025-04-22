import React from 'react'

const Portfolio = () => {

    const portfolios = [
        { id: 1, img: "/assets/portfolio-img5.png", name: "AZZA", info: "Bank və maliyyə" },
        { id: 2, img: "/assets/portfolio-img2.png", name: "Pizza Mizza", info: "Bank və maliyyə" },
        { id: 3, img: "/assets/portfolio-img3.png", name: "NS Studio", info: "Bank və maliyyə" },
        { id: 4, img: "/assets/portfolio-img4.png", name: "Paşa bank", info: "Bank və maliyyə" },
        { id: 5, img: "/assets/portfolio-img5.png", name: "AZZA", info: "Bank və maliyyə" },
        { id: 6, img: "/assets/portfolio-img3.png", name: "Azeconnect", info: "Bank və maliyyə" },
        { id: 7, img: "/assets/portfolio-img4.png", name: "Azerbaijan Airlines", info: "Bank və maliyyə" },
        { id: 8, img: "/assets/portfolio-img4.png", name: "Azerbaijan Airlines", info: "Bank və maliyyə" },
        { id: 9, img: "/assets/portfolio-img4.png", name: "Paşa bank", info: "Bank və maliyyə" },
        { id: 10, img: "/assets/portfolio-img5.png", name: "AZZA", info: "Bank və maliyyə" },

    ]

    return (
        <div className='portolio-container d-flex flex-column'>

            <div className="portfolio-page-title">
                Portfolio
            </div>

            <div className="portfolios">

                {
                    portfolios.map((portfolio) => (
                        <div key={portfolio.id} className="portfolio d-flex flex-column">

                            <div className="portfolio-img">
                                <img src={portfolio.img} alt="" />
                            </div>

                            <span className="portfolio-name">
                                {portfolio.name}
                            </span>

                            <span className="portfolio-info">
                                {portfolio.info}
                            </span>

                        </div>
                    ))
                }



            </div>

        </div>
    )
}

export default Portfolio