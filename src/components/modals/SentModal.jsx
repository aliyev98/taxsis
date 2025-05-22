// src/components/modals/NextModal.jsx
import { createPortal } from 'react-dom';

const SentModal = ({ isOpen, onClose }) => {

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
                <div className="modal-dialog modal-dialog-centered sent-modal" role="document">
                    <div className="modal-content">

                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={onClose}
                            />
                        </div>

                        <div className="modal-body">
                            <div className="img">
                                🎉
                            </div>

                            <span>Göndərildi!</span>
                            <span>Məlumatlar uğurla şirkət bazasına göndərildi.</span>

                            <button onClick={onClose} className='btn btn-primary'>Aydındır</button>

                        </div>

                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};

export default SentModal;
