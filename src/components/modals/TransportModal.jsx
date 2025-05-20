// src/components/modals/CellModal.jsx
import React from 'react';
import { createPortal } from 'react-dom';
import InputWithLabel from '../ui/inputs/InputWithLabel'
import FormButton from '../ui/buttons/FormButton'

export default function TransportModal({ isOpen, onClose, row, columnKey, cellValue }) {
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
        <div className="modal-dialog transport-modal modal-dialog-centered" role="document">
          <div className="modal-content position-relative">

            <div className="modal-header d-flex flex-column align-items-center">
              <span>Daşınma AZN</span>
              <span>Formu doldur və əlavə et</span>
            </div>

            <div className="modal-body d-flex flex-column">

              <InputWithLabel label={"Tarix"} />

              <InputWithLabel label={"YGB nömrəsi"} />

              <InputWithLabel label={"Kontragent adı"} />

              <InputWithLabel label={"Xərc növü"} />

              <InputWithLabel label={"Valyuta növü"} />

              <InputWithLabel label={"Valyuta məzənnəsi"} />

              <InputWithLabel label={"Məbləğ valyuta ilə"} />

              <InputWithLabel label={"Məbləğ AZN"} />

            </div>

            <div className="modal-footer">
              <FormButton content={"Əlavə et"} />
            </div>

            <div className="img-div" onClick={onClose}>
              <img src="/assets/close-icon.svg" alt="" />
            </div>


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
