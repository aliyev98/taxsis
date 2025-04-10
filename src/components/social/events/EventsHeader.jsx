import React, { useState } from 'react';

const EventsHeader = () => {
  const [filters, setFilters] = useState({
    category: '',
    city: '',
    salary: '',
    education: '',
    experiance: ''
  });

  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => setShowFilters(prev => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='events-header d-flex flex-column'>
      <div className="header d-flex align-items-center">
        <div className="title">Tədbirlər</div>

        <button className="btn btn-filter d-flex align-items-center" onClick={toggleFilters}>
          {showFilters ? (
            <img src="/assets/close-circled-icon.svg" alt="close" />
          ) : (
            <img src="/assets/huni-icon.svg" alt="filter" />
          )}
          <span>Filterlə</span>
        </button>
      </div>

      {showFilters && (
        <div className="filter-form">
          <div className="input-div custom-select">
            <select name="category" value={filters.category} onChange={handleChange}>
              <option value="" disabled hidden>Kateqoriya</option>
              <option value="baku">Bakı</option>
              <option value="ganja">Gəncə</option>
              <option value="sumgait">Sumqayıt</option>
            </select>
          </div>

          <div className="input-div custom-select">
            <select name="city" value={filters.city} onChange={handleChange}>
              <option value="" disabled hidden>Şəhər</option>
              <option value="baku">Bakı</option>
              <option value="ganja">Gəncə</option>
              <option value="sumgait">Sumqayıt</option>
            </select>
          </div>

          <div className="input-div custom-select">
            <select name="salary" value={filters.salary} onChange={handleChange}>
              <option value="" disabled hidden>Tarix</option>
              <option value="500-1000">500-1000</option>
              <option value="1000-1500">1000-1500</option>
            </select>
          </div>

          <div className="input-div custom-select">
            <select name="education" value={filters.education} onChange={handleChange}>
              <option value="" disabled hidden>Qiymət</option>
              <option value="orta">Orta</option>
              <option value="bakalavr">Bakalavr</option>
              <option value="magistr">Magistr</option>
            </select>
          </div>

          <div className="input-div custom-select">
            <select name="experiance" value={filters.experiance} onChange={handleChange}>
              <option value="" disabled hidden>Format</option>
              <option value="none">Yoxdur</option>
              <option value="1year">1 il</option>
              <option value="2year">2 il</option>
            </select>
          </div>



          <div className="input-div">
            <input type="text" placeholder='Açar sözlər' />
          </div>

          <button className="btn btn-primary btn-search">Axtar</button>
        </div>
      )}
    </div>
  );
};

export default EventsHeader;
