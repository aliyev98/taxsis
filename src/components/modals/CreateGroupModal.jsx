import React, { useEffect } from 'react';

const CreateGroupModal = ({ show, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!show) return null;

  return (
    <div
      className="modal create-group-modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-md modal-dialog-centered"
        role="document"
        onClick={(e) => e.stopPropagation()} // modal içi tıklama kapanmasın
      >
        <div className="modal-content">

          {/* Header */}
          <div className="modal-header d-flex flex-column">
            <span>Qrup yarat</span>
            <span>Formu doldur və yadda saxla</span>
          </div>

          {/* Body */}
          <div className="modal-body d-flex flex-column">

            <div className="form d-flex flex-column">

              <div className="name-input input-group">
                <label htmlFor="name">Qrupun adı</label>
                <input type="text" />
              </div>

              <div className="category input-group">
                <select name="" id="">
                  <option value="">Kategoriyalı</option>
                </select>
              </div>

              <div className="description input-group">
                <input type="text" placeholder='Qısa izahı' />
              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="modal-footer border-0">
            <button className="btn btn-secondary" onClick={onClose}>Bağla</button>
            <button className="btn btn-primary">Yarat</button>
          </div>

          <button className="btn-close"></button>

        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
