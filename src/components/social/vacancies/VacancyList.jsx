import React from 'react';
import VacancyCart from './VacancyCart';
import { vacancyData } from '../../../constants/VacancyData';

const VacancyList = () => {
  return (
    <div className='vacancy-list d-flex flex-column'>
      {vacancyData.map((vacancy) => (
        <VacancyCart key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  );
};

export default VacancyList;
