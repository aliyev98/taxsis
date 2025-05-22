import React from 'react'
import InputWithLabel from '../ui/inputs/InputWithLabel'
import FormButton from '../ui/buttons/FormButton'

const ConfrontationActsModal = ({ isOpen, onClose, onSend }) => {

    if (!isOpen) return null;

    const inputs = [
        { id: 1, label: "Ad" },
        { id: 2, label: "Soyad" },
        { id: 3, label: "Ata adı" },
        { id: 4, label: "VÖEN" },
        { id: 5, label: "Email" },
        { id: 6, label: "Rəhbər adı" },
        { id: 7, label: "Telefon" },
    ]

    return (
        <>
            {/* Sayfa arkasını karartan overlay */}
            <div className="modal-backdrop  fade show"></div>

            {/* Modal kutusu */}
            <div
                className="modal  fade show d-block confrontation-acts-modal"
                tabIndex="-1"
                role="dialog"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 99999 }}
            >
                <div className="modal-dialog" role="document">

                    <div className="modal-content d-flex flex-column position-relative">

                        <div className="modal-header">
                            <div className="modal-title">
                                Üzləşmə aktları
                            </div>
                        </div>

                        <div className="modal-body d-flex flex-column">

                            {
                                inputs.map((input) => (
                                    <InputWithLabel label={input.label} />
                                ))
                            }

                        </div>

                        <div className="modal-footer">
                            <FormButton
                                content="Göndər"
                                isActive={true}
                                handleContinue={() => onSend()}
                            />
                        </div>


                        <div className="img-div" onClick={onClose}>
                            <img src="/assets/close-icon.svg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfrontationActsModal