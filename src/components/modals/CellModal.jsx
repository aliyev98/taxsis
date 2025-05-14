// components/ui/CellModal.jsx
import React from 'react';

export default function CellModal({ isOpen, onClose, row, columnKey, cellValue }) {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h5>Hüceyrə əməliyyatı</h5>
          <button onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p><strong>Column:</strong> {columnKey}</p>
          <p><strong>Value:</strong> {cellValue}</p>
          {/* Buraya istediğin form alanlarını ekle */}
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Bağla</button>
          <button onClick={() => {
            // submit işlemi...
            onClose();
          }}>Yadda saxla</button>
        </div>
      </div>
    </div>
  );
}
