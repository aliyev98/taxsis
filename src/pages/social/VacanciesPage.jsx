import React from 'react';
import { useSelector } from 'react-redux';
import FeedHeader from '../../layouts/FeedHeader';
import FeedSideBar from '../../sidebars/FeedSideBar';
import Vacancies from '../../components/social/vacancies/Vacancies';
import VacancyDetails from '../../components/social/vacancies/VacancyDetails';
import VacancyApply from '../../components/social/vacancies/VacancyApply'; // Yeni bileşeni içe aktardık
import VacancyFinish from '../../components/social/vacancies/VacancyFinish';

const VacanciesPage = () => {
    const { vacancyNavigate, selectedVacancy } = useSelector((state) => state.vacancy);

    return (
        <div className="vacancies-page-container">
            <FeedHeader />

            <div className="social-wrapper d-flex">
                <FeedSideBar />

                <div className="content d-flex justify-content-center">
                    <div className="vacancies-container">
                        {vacancyNavigate === 'vacanciesList' && <Vacancies />}
                        {vacancyNavigate === 'detail' && <VacancyDetails vacancy={selectedVacancy} />}
                        {vacancyNavigate === 'apply' && <VacancyApply vacancy={selectedVacancy} />}
                        {vacancyNavigate === "finish" && <VacancyFinish />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VacanciesPage;
