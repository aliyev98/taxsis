import React from 'react'
import { profileVacancyData } from '../../../constants/VacancyData'
import VacancyCart from '../vacancies/VacancyCart'
import AddButton from '../../ui/buttons/AddButton'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { setSelectedVacancy, setVacancyNavigate } from '../../../redux/slices/vacancySlice';


const CorporateProfileVacancies = () => {

  const { vacancyNavigate, selectedVacancy } = useSelector((state) => state.vacancy);

  const dispatch = useDispatch();


  return (
    <div className='corporate-profile-vacancies d-flex flex-column'>

      <div className="corporate-profile-vacancies-header d-flex justify-content-between align-items-center">

        <div className="title">
          Vakansiyalar
        </div>

        <AddButton content={"Vakansiya yarat"} />

      </div>

      <div className="corporate-profile-vacancies-list d-flex flex-column">
        {
          profileVacancyData.map((vacancy) => (

            <VacancyCart key={vacancy.id}
              vacancy={vacancy}
              onClick={() => {
                dispatch(setSelectedVacancy(vacancy));
                dispatch(setVacancyNavigate("detail"));
              }}
            />

          ))
        }
      </div>

    </div>
  )
}

export default CorporateProfileVacancies