// components/dropdowns/AddRowDropdown.jsx
import React, { useRef, useEffect } from "react";

const AddRowDropdown = ({
  navBtns = [],
  setNavbarSelection,
  setSelectedNavForModal,
  setShowModal,
  setShowDropdown,
  dropdownRef,
}) => {
  return (
    <div className="dropdown-menu add-row-dropdown show d-flex flex-column" ref={dropdownRef}>
      <div className="dropdown-title">Hansı menuya əlavə edilsin?</div>
      {navBtns.map((item) => (
        <button
          key={item.id}
          className="dropdown-item"
          onClick={() => {
            setNavbarSelection(item.id);
            setSelectedNavForModal(item.content);
            setShowDropdown(false);
            setShowModal(true);
          }}
        >
          {item.content}
        </button>
      ))}
    </div>
  );
};

export default AddRowDropdown;
