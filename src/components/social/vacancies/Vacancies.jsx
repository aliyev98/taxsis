import React from 'react';
import VacanciesHeader from './VacanciesHeader';
import VacanciesNavbar from './VacanciesNavbar';
import VacancyList from './VacancyList';

const Vacancies = () => {
    return (
        <div className='vacancies d-flex flex-column'>
            <VacanciesHeader />
            <VacanciesNavbar />
            <VacancyList />
        </div>
    );
};

export default Vacancies;
