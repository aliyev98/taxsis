import React from 'react';

const Select = ({ placeholder, options = [], defaultValue = "", name }) => {
  return (
    <div className="select-div position-relative">
      <select
        className="select"
        name={name}
        id={name}
        defaultValue={defaultValue}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt.value || opt}>{opt.label || opt}</option>
        ))}
      </select>

      <img src="/assets/arrow-down.svg" className="select-icon" alt="select-icon" />
    </div>
  );
};

export default Select;
