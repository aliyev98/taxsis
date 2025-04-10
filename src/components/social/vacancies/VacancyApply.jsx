import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setVacancyNavigate } from '../../../redux/slices/vacancySlice';

const VacancyApply = () => {
    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch = useDispatch();

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);

        const file = e.dataTransfer.files[0];
        if (file) setSelectedFile(file);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setSelectedFile(file);
    };

    return (
        <div className='vacancy-apply d-flex flex-column align-items-center'>

            <div className="header d-flex align-items-center">
                <button className='btn btn-back' onClick={() => dispatch(setVacancyNavigate("detail"))}>
                    <img src="/assets/arrow-left.svg" alt="" />
                </button>
                <span>Vakansiyaya müraciət et</span>
            </div>

            <div className="apply-form d-flex flex-column">

                <input type="text" placeholder='Ad, Soyad' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Telefon' />

                <div className="file-input d-flex flex-column">

                    <label className="input-title d-flex align-items-center">
                        <span>CV, Resume</span>
                        <img src="/assets/info-icon.svg" alt="info" />
                    </label>

                    <div
                        className={`drag-drop-zone d-flex flex-column justify-content-center align-items-center ${dragActive ? 'active' : ''}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => document.getElementById("cvUpload").click()}
                    >
                        {
                            selectedFile
                                ? <span>{selectedFile.name}</span>
                                : <div className='input-info d-flex justify-content-center align-items-center'>
                                    <img src="/assets/upload-icon.svg" alt="" />
                                    <span>Fayl seçin və ya sürükləyib atın</span>
                                </div>
                        }
                    </div>

                    <input
                        type="file"
                        id="cvUpload"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                    />
                </div>

            </div>

            <button
                className='btn btn-send btn-primary'
                onClick={() => dispatch(setVacancyNavigate("finish"))}
            >
                Göndər
            </button>
        </div>
    );
};

export default VacancyApply;
