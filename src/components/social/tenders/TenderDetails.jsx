import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTenderNavigate } from '../../../redux/slices/tenderSlice';

const TenderDetails = () => {
    const dispatch = useDispatch();
    const tender = useSelector((state) => state.tender.selectedTender);

    const description = `Satınalan təşkilatın adı: ŞƏKİ ŞƏHƏR İCRA HAKİMİYYƏTİ
Satınalan təşkilatın VÖEN-i: 3000072051
Satınalan təşkilatın ünvanı: Az 5500 20 Yanvar küçəsi, 8
Musabiqənin adı: Mənzil fondunun əsaslı təmiri
Müsabiqənin nömrəsi: 105528
Təsnifat kodu: 72101500 Binalara cari və əsaslı təmir işləri
Ehtimal olunan qiymət: 289.581,00 AZN
Müsabiqənin dərc edilmə tarixi və vaxtı: 15.02.2025 16:48
Təkliflərin son təqdim olunma tarixi və vaxtı: 18.03.2025 17:00
Zərflərin açılış tarixi və vaxtı: 18.03.2025 17:00`;

    const requirements = `Təchizatçılar təklifləri təqdim etmək üçün istifadə haqqı və iştirak haqqı ödəməlidirlər. Təchizatçıların sayının üçdən az olmasına görə satınalmanın baş tutmadığı hallar istisna olmaqla, iştirak haqqı heç bir halda geri qaytarılmır..`;

    const conditions = `Təchizatçılar tərəfindən satınalmalarda əlaqəli sənədləri görmək üçün istifadə haqqı ödənilir. İstifadə haqqı bir satınalmada iştirak etmək və ya müddətli abunəlik seçmək ilə ödənilə bilər. Ödənilmiş istifadə haqqı heç bir halda geri qaytarılmır. `;

    const descriptionList = description.split(';').filter(line => line.trim() !== '');
    const requirementsList = requirements.split(';').filter(line => line.trim() !== '');
    const conditionsList = conditions.split(';').filter(line => line.trim() !== '');

    return (
        <div className='tender-details-container d-flex flex-column'>

            <div className="tender-header d-flex align-items-center">

                <button className='btn-back' onClick={() => dispatch(setTenderNavigate('tenderList'))}>
                    <img src="/assets/arrow-left.svg" alt="back" />
                </button>

                <div className='tender-cart d-flex align-items-center'>
                    <div className="tender-img">
                        <img src={tender.img} alt={tender.name} />
                    </div>
                    <div className="tender-infos d-flex flex-column">
                        <span className="name">{tender.name}</span>
                        <span className="company">{tender.company}</span>
                    </div>

                </div>

            </div>

            <div className="tender-details d-flex flex-column">

                <div className='deadline-container d-flex flex-row justify-content-between'>
                    <span>Tenderin bitmə vaxtı</span>

                    <div className="deadline flex-row d-flex align-items-center">
                        <img src="/assets/clock-icon.svg" alt="" />
                        <span>{tender.deadline}</span>
                    </div>
                </div>

                <div>
                    <span className="title">Ümumi məlumat</span>
                    <ul className="description-list">
                        {descriptionList.map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <span className='title'>İştirak haqqı: 350 AZN</span>
                    <ul className="description-list">
                        {requirementsList.map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <span className="title">İstifadə haqqı: 25 AZN</span>
                    <ul className="description-list">
                        {conditionsList.map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <span className="title">Malgöndərənlərlə (podratçılarla) vasitəçi olmadan əlaqəni təmin edən, onlarla məlumat mübadiləsini aparan satınalan təşkilatın vəzifəli şəxsi (/ləri)</span>
                    <ul className="description-list">
                        {conditionsList.map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                </div>

                <button className="btn btn-apply" onClick={() => dispatch(setTenderNavigate('participate'))}>
                    Müsabiqədə iştirak et
                </button>
            </div>

        </div>
    );
};

export default TenderDetails;
