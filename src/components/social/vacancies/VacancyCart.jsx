import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedVacancy, setVacancyNavigate } from '../../../redux/slices/vacancySlice';

const VacancyCart = ({ vacancy }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedVacancy(vacancy));
    dispatch(setVacancyNavigate("detail"));
  };

  return (
    <div
      key={vacancy.id}
      className='vacancy-cart d-flex align-items-center'
      onClick={() => handleClick()}
    >
      <div className="vacancy-img">
        <img src={vacancy.img} alt={vacancy.name} />
      </div>

      <div className="vacancy-infos d-flex flex-column">
        <span className="name">{vacancy.name}</span>
        <span className="company">{vacancy.company}</span>

        <div className='infos-footer d-flex align-items-center'>
          <div className="location-container d-flex align-items-center">
            <img src="/assets/location-icon.svg" alt="location" />
            <span className='city'>{vacancy.city}</span>
          </div>

          <div className="line"></div>

          <span className="deadline">{vacancy.deadline}</span>
        </div>
      </div>
    </div>
  );
};

export default VacancyCart;
