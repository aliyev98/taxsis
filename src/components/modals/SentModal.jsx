// src/components/modals/NextModal.jsx
import { createPortal } from 'react-dom';

const NextModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Gri overlay */}
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 1040 }}
      />

      {/* Modal kutusu */}
      <div
        className="modal fade show d-block next-modal"
        tabIndex="-1"
        role="dialog"
        style={{ zIndex: 1050 }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Bir Sonraki Adım</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>

            <div className="modal-body">
              {/* Buraya istediğin formu veya mesajı koyabilirsin */}
              <p>İkinci modal içeriği buraya gelecek.</p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Kapat
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  // isteğe bağlı başka bir aksiyon
                  onClose();
                }}
              >
                Tamam
              </button>
            </div>

          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default NextModal;
