import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVacancyNavigate } from '../../../redux/slices/vacancySlice';

const VacancyDetails = () => {
    const dispatch = useDispatch();
    const vacancy = useSelector((state) => state.vacancy.selectedVacancy);

    const description = `Təyin olunmuş gündəlik istiqamət üzrə hərəkət etmək;
Rəflərdə şirkət məhsullarının tələblərə uyğun olaraq düzgün düzülüşünü təmin etmək;
Malların istehsal tarixlərinə və əmtəə görünüşünə nəzarət etmək;
Qiymət dəyişikliklərinə nəzarət etmək;
Daxili nizam-intizam qaydalarına əməl etmək.`;

    const requirements = `Merçendayzer vəzifə üzrə və ya satıcı kimi ən azı 1 illik iş təcrübəsi;
Şifahi və yazılı ünsiyyət qurmaq və danışıqlar aparmaq bacarığı;
Komanda ilə işləmə bacarığı.`;

    const conditions = `İş yeri: Bakı şəhəri və kəndləri; 
6/7 iş qrafiki, iş vaxtı: həftə içi 09:00-dan 18:00-dək, şənbə günü 09:00-dan 13:00-dək; `;

    const descriptionList = description.split(';').filter(line => line.trim() !== '');
    const requirementsList = requirements.split(';').filter(line => line.trim() !== '');
    const conditionsList = conditions.split(';').filter(line => line.trim() !== '');

    return (
        <div className='vacancy-details-container d-flex flex-column'>
            <div className="vacancy-header d-flex align-items-center">
                <button className='btn-back' onClick={() => dispatch(setVacancyNavigate('vacanciesList'))}>
                    <img src="/assets/arrow-left.svg" alt="back" />
                </button>

                <div className='vacancy-cart d-flex align-items-center'>
                    <div className="vacancy-img">
                        <img src={vacancy.img} alt={vacancy.name} />
                    </div>
                    <div className="vacancy-infos d-flex flex-column">
                        <span className="name">{vacancy.name}</span>
                        <span className="company">{vacancy.company}</span>
                    </div>
                </div>
            </div>

            <div className="vacancy-details d-flex flex-column">
                <div>
                    <span className="title">İş təsviri</span>
                    <ul className="description-list">
                        {descriptionList.map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <span className='title'>Tələblər:</span>
                    <ul className="description-list">
                        {requirementsList.map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <span className="title">İş şəraiti:</span>
                    <ul className="description-list">
                        {conditionsList.map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    Göstərilən tələblərə cavab verən namizədlərdən CV-lərini mövzu yerinə “Merçendayzer” yazaraq elektron poçt ünvanına göndərilməsi və ya 051 235 89 82 nömrəsi ilə əlaqə saxlamaları xahiş olunur. <br />
                    Yalnız tələblərə cavab verən namizədlər müsahibəyə dəvət olunacaqdır.
                </div>

                <button className="btn btn-apply" onClick={() => dispatch(setVacancyNavigate('apply'))}>
                    Müraciət et
                </button>
            </div>
        </div>
    );
};

export default VacancyDetails;
