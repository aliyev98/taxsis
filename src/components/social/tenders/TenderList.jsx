import React from 'react';
import { tenderData } from '../../../constants/TenderData';
import TenderCard from './TenderCard';

const TenderList = () => {
    return (
        <div className='tender-list d-flex flex-column'>


            {tenderData.map((tender) => (
                <TenderCard key={tender.id} tender={tender} />
            ))}



        </div>
    );
};

export default TenderList;
