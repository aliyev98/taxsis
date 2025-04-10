import React, { useState } from 'react';
import ActivityTypeDropdown from '../../dropdwons/ActivityTypeDropdown';
import { setTenderNavigate } from '../../../redux/slices/tenderSlice';
import { useDispatch } from 'react-redux';




const TendersHeader = () => {
  const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCheckboxChange = (id) => {
    setSelectedOptions(prev =>
      prev.includes(id) ? prev.filter(opt => opt !== id) : [...prev, id]
    );
  };

  return (
    <div className='tenders-header d-flex flex-column position-relative'>
      <div className="header d-flex align-items-center justify-content-between">
        <div className="title">Tenderlər</div>

        <div className="buttons d-flex align-items-center position-relative">
          <button className="activity-type d-flex align-items-center" onClick={toggleDropdown}>
            <span>Fəaliyyət Növü</span>
            <img src="/assets/arrow-down.svg" alt="" />
          </button>

          {dropdownOpen && (
            <ActivityTypeDropdown
              selectedOptions={selectedOptions}
              onChange={handleCheckboxChange}
            />
          )}

          <button className="announce d-flex align-items-center ms-3" onClick={() => dispatch(setTenderNavigate("announce"))}>
            <img src="/assets/plus-icon.svg" alt="" />
            <span>Tender elan et</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TendersHeader;
