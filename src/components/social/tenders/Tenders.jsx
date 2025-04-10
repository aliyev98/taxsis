import React from 'react';
import TendersHeader from './TendersHeader'
import TenderList from './TenderList';


const Tenders = () => {
    return (
        <div className='tenders d-flex flex-column'>
            <TendersHeader />
            <TenderList />
        </div>
    );
};

export default Tenders;
