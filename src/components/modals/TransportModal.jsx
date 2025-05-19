// src/components/modals/CellModal.jsx
import React from 'react';
import { createPortal } from 'react-dom';

export default function CellModal({ isOpen, onClose, row, columnKey, cellValue }) {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className="modal fade show"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        style={{
          display: 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          padding: 0,
          margin: 0,
        }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
          </div>
        </div>
      </div>
      <div
        className="modal-backdrop fade show"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      ></div>
    </>,
    document.body
  );
}
