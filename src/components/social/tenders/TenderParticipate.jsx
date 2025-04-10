import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTenderNavigate } from '../../../redux/slices/tenderSlice';

const TenderParticipate = () => {
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
        <div className='tender-apply d-flex flex-column align-items-center'>

            <div className="header d-flex align-items-center">
                <button className='btn btn-back' onClick={() => dispatch(setTenderNavigate("detail"))}>
                    <img src="/assets/arrow-left.svg" alt="" />
                </button>
                <span>Müsabiqədə iştirak et</span>
            </div>

            <div className="participate-form d-flex flex-column">

                <input type="text" placeholder='Şirkətin adı' />
                <input type="text" placeholder='VÖEN' />
                <input type="text" placeholder='Telefon' />

                <div className="custom-select">
                    <select name="" id="">
                        <option value="" disabled selected hidden>Fəaliyyət növü</option>
                        <option value="it">İT xidmətləri</option>
                        <option value="techizat">Təchizat</option>
                        <option value="tikinti">Tikinti</option>
                        <option value="digər">Digər</option>
                    </select>

                    <img src="/assets/arrow-down.svg" alt="dropdown-icon" className="select-icon" />
                </div>

                <input type="text" placeholder='Təklif olunan qiymət intervalı' />

                <div className="file-input d-flex flex-column">

                    <label className="input-title d-flex align-items-center">
                        <span>Təklif sənədi</span>
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
                onClick={() => dispatch(setTenderNavigate("finish"))}
            >
                Göndər
            </button>
        </div>
    );
};

export default TenderParticipate;
