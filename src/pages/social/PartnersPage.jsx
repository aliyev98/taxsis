import React from 'react'
import Partners from '../../components/social/partners/Partners'
import { useSelector } from 'react-redux';
import AddPartner from '../../components/social/partners/AddPartner';


const PartnersPage = () => {

    const partnerNavigate = useSelector((state) => state.partner.partnerNavigate);

    return (
        <div className='partners-page-container'>

            <div className="partners-content">

                {partnerNavigate === "partnersList" && <Partners />}

                {partnerNavigate === "addPartner" && <AddPartner />}


            </div>
        </div>
    )
}

export default PartnersPage