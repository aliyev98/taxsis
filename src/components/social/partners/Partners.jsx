import React from 'react'
import AddButton from '../../ui/buttons/AddButton';
import { setPartnerNavigate } from '../../../redux/slices/partnersSlice';
import { useDispatch } from 'react-redux';

const Partners = () => {

  const dispatch = useDispatch();


  const partners = [
    { id: 1, img: '/assets/partner-img.png', name: "Kontakt Home", info: "Pərakəndə satış" },
    { id: 2, img: '/assets/partner-img2.png', name: "Express Bank", info: "Marketlər şəbəkəsi" },
    { id: 3, img: '/assets/partner-img3.png', name: "Umico (Competo MMC)", info: "Marketlər şəbəkəsi" },
    { id: 4, img: '/assets/partner-img4.png', name: "OBA market", info: "Marketlər şəbəkəsi" },
    { id: 5, img: '/assets/partner-img4.png', name: "OBA market", info: "Marketlər şəbəkəsi" },
    { id: 6, img: '/assets/partner-img2.png', name: "Express Bank", info: "Marketlər şəbəkəsi" },
    { id: 7, img: '/assets/partner-img3.png', name: "Umico (Competo MMC)", info: "Marketlər şəbəkəsi" },
    { id: 8, img: '/assets/partner-img.png', name: "Kontakt Home", info: "Pərakəndə satış" },
    { id: 9, img: '/assets/partner-img.png', name: "Kontakt Home", info: "Pərakəndə satış" },
    { id: 10, img: '/assets/partner-img.png', name: "Kontakt Home", info: "Pərakəndə satış" },
    { id: 11, img: '/assets/partner-img.png', name: "Kontakt Home", info: "Pərakəndə satış" },
    { id: 12, img: '/assets/partner-img.png', name: "Kontakt Home", info: "Pərakəndə satış" },


  ]

  return (
    <div className='partners-container d-flex flex-column'>

      <div className="partners-header d-flex justify-content-between align-items-center">

        <span className="partners-title">
          Partnyorlar
        </span>

        <AddButton content={"Yeni partnyor əlavə et"} onClick={() => dispatch(setPartnerNavigate("addPartner"))} />

      </div>

      <div className="partners-list">

        {
          partners.map((partner) => (
            <div key={partner.id} className="partner d-flex flex-column">

              <div className="partner-img">
                <img src={partner.img} alt="" />
              </div>

              <div className="partner-name">
                {partner.name}
              </div>

              <div className="partner-info">
                {partner.info}
              </div>

            </div>
          ))
        }



      </div>

    </div>
  )
}

export default Partners