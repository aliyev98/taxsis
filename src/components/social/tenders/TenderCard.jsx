import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedTender, setTenderNavigate } from '../../../redux/slices/tenderSlice';

const TenderCard = ({ tender }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedTender(tender));
    dispatch(setTenderNavigate("detail"));
  };

  return (
    <div
      key={tender.id}
      className='tender-cart d-flex align-items-center'
      onClick={() => handleClick()}
    >
      <div className="tender-img">
        <img src={tender.img} alt={tender.name} />
      </div>

      <div className="tender-infos d-flex flex-column">
        <span className="name">{tender.name}</span>
        <span className="company">{tender.company}</span>
        <span className='description'>{tender.description}</span>

        <div className='infos-footer d-flex align-items-center'>
          <div className="location-container d-flex align-items-center">
            <img src="/assets/location-icon.svg" alt="location" />
            <span className='city'>{tender.city}</span>
          </div>

          <div className="line"></div>

          <span className="created">{tender.created}</span>
        </div>
      </div>

      <div className="deadline d-flex align-items-center">
        <img src="/assets/clock-icon.svg" alt="" />
        <span>{tender.deadline}</span>
      </div>
    </div>
  );
};

export default TenderCard;
