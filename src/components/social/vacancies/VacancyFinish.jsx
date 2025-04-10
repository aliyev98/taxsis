import React from 'react'

const VacancyFinish = () => {
    return (
        <div className='vacancy-finish-page-container d-flex align-items-center justify-content-center flex-column'>

            <div className="finish-page-icon d-flex justify-content-center align-items-center flex-column">
                <span>🎉</span>
            </div>

            <div className="finish-page-text">

                <div className="finish-page-title">Təbriklər!!!</div>

                <div className="finish-page-info">Müraciətiniz uğurlu göndərildi. Tələblərə uyğun olduğunuz halda <br /> sizinlə əlaqə saxlayacaqlar.</div>
            </div>

            <a href='/vacancies' className="btn btn-primary">Vakansiyalara qayıt</a>


        </div>
    )
}

export default VacancyFinish