import React from 'react'


const CurrencyDropdown = ({ items, selectedCodes, onToggle }) => {
  return (
    <div className="currency-dropdown d-flex flex-column">
      {items.map((item, index) => {
        const isSelected = selectedCodes.includes(item.code);
        return (
          <React.Fragment key={item.code}>
            <div className="dropdown-item d-flex justify-content-between" onClick={() => onToggle(item.code)}>
              <div className="left-side d-flex align-items-center">
                <div className="flag">
                  <img src={item.flag} alt={`Flag of ${item.name}`} />
                </div>
                <div className="currency-info d-flex flex-column">
                  <span className="code">{item.code}</span>
                  <span className="name">{item.name}</span>
                </div>
              </div>

              <button
                className={`toggle-btn ${isSelected ? 'selected' : ''}`}
                
              >
                {isSelected ? (
                  <img src="/assets/close-icon-red.svg" alt="remove" />
                ) : (
                  <img src="/assets/add-icon.svg" alt="add" />
                )}
              </button>
            </div>

            {index !== items.length - 1 && <div className="line" />}
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default CurrencyDropdown;
