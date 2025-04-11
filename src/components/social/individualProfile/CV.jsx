import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setProfileNavigate } from '../../../redux/slices/profileSlice';


const CV = () => {

    const dispatch = useDispatch();


    const cvData = useSelector(state => state.cv.cvData);


    const generalInfos = [
        { label: "Ad, Soyad", value: cvData.name },
        { label: "Vəzifə", value: cvData.role },
        { label: "Email", value: cvData.email },
        { label: "Telefon", value: cvData.phone },
        { label: "Yaş", value: cvData.age },
        { label: "Cins", value: cvData.gender },
        { label: "Şəhər", value: cvData.city },
        { label: "Minimum maaş", value: cvData.salary },
    ];


    return (
        <div className='cv-container'>

            <div className="cv-header d-flex justify-content-between align-items-center">
                <span>CV / Resume</span>

                <button className='btn btn-edit'  onClick={() => dispatch(setProfileNavigate('cvEdit'))}>Düzəliş et</button>
            </div>

            <div className="infos-container d-flex flex-column">

                <div className="general-infos">
                    {generalInfos.map((info, index) => (
                        <div key={index} className="info-item d-flex flex-column">
                            <span>{info.label}</span>
                            <span>{info.value}</span>
                        </div>
                    ))}
                </div>

                {cvData.skills.length > 0 && (
                    <div className="skills d-flex flex-column">
                        <span >Bacarıqlar</span>
                        <ul>
                            {cvData.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {cvData.skills.length > 0 && (
                    <div className="work-experience d-flex flex-column">
                        <span >İş təcrübəsi</span>
                        <ul>
                            {cvData.experiences.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="education d-flex flex-column">
                    <span>Təhsil</span>
                    <ul>
                        <li>Ali</li>
                        <li>Azərbaycan Kənd Təsərrüfatı Akademiyası</li>
                        <li>Fakültə İqtisadiyyat fakültəsi</li>
                        <li>İxtisas Mühasibat Uçotu və Audit</li>
                    </ul>
                </div>

                <div className='additional-information d-flex flex-column'>
                    <span>Əlavə məlumat</span>
                    <ul>
                        <li>Naxçıvan Universiteti / Mühasibat uçotu sertifikati / 2021</li>
                        <li>DİM / MHBS üzrə Peşəkar mühasib sertifikatı / 2024</li>
                        <li>Əlavə bir çox təlim və kurslarda iştirak etmişəm.</li>
                    </ul>
                </div>

                <div className="pdf-download d-flex align-items-center justify-content-between">

                    <div className="pdf-img">
                        <img src="assets/pdf.png" alt="" />
                    </div>

                    <div className="pdf-infos d-flex flex-column">
                        <span className='name'>Ulvin Omarov - Resume.pdf</span>
                        <span className='size'>1 MB</span>
                    </div>

                    <button className="btn btn-download">Pdf kimi yüklə</button>

                </div>


            </div>


        </div >
    )
}

export default CV