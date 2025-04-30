import React, { useState } from 'react';
import FormButton from './buttons/FormButton';
import ReportsFilterModal from '../modals/ReportsFilterModal';

const EmptyReportsMessage = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='empty-reports-message'>
            <div className="message-content d-flex flex-column align-items-center">

                <div className="image-div">
                    <img src="/assets/abacus-icon.svg" alt="" />
                </div>

                <span>Oops!</span>

                <span>Hal-hazırda hər hansı bir hesabatınız yoxdur.</span>

                <span>
                    Hesabatlar üzrə məlumatların göstərilməsi üçün “Hesabatları filterlə” <br />
                    düyməsinə klik edib uyğun parametrləri seçin
                </span>

                <FormButton
                    isActive={true}
                    content={"Hesabatları filterlə"}
                    handleContinue={() => setShowModal(true)} // ✅ Butona tıklanınca modal açılır
                />

                {/* ✅ Modal tanımı */}
                {showModal && (
                    <ReportsFilterModal onClose={() => setShowModal(false)} />
                )}
            </div>
        </div>
    );
};

export default EmptyReportsMessage;
