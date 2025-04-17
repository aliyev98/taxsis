import React from 'react';

const TableDataEditDropdown = ({ onEdit, onDelete, closeDropdown }) => {
  return (
    <div className='data-edit-dropdown d-flex align-items-center' onClick={(e) => e.stopPropagation()}>
      <button className='d-flex align-items-center' onClick={onEdit}>
        <img src="/assets/pen-yellow.svg" alt="" />
        <span>Düzəliş et</span>
      </button>
      <button className='d-flex align-items-center' onClick={onDelete}>
        <img src="/assets/trash-red-icon.svg" alt="" />
        <span>Sil</span>
      </button>
    </div>
  );
};

export default TableDataEditDropdown;
