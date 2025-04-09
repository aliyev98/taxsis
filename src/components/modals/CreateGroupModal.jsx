import React, { useEffect, useRef, useState } from 'react';

const CreateGroupModal = ({ show, onClose }) => {

  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

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
        onClick={(e) => e.stopPropagation()}
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

              <div className="upload-img d-flex flex-column">
                <label className="upload-label d-flex align-items-center">
                  <span>Qapaq şəkli</span>
                  <img src="/assets/info-icon.svg" alt="" />
                </label>

                {imagePreview ? (
                  <div className="img-preview">
                    <img src={imagePreview} alt="preview" />
                  </div>
                ) : (
                  <button
                    className="btn upload-btn"
                    onClick={() => fileInputRef.current.click()}
                  >
                    Şəkil yüklə
                  </button>
                )}

                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const previewURL = URL.createObjectURL(file);
                      setImagePreview(previewURL);
                    }
                  }}
                />
              </div>

            </div>

          </div>

          <div className="modal-footer">
            <button className="btn btn-primary">Yadda saxla</button>
          </div>

          <button className="btn-close" onClick={onClose}></button>

        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
