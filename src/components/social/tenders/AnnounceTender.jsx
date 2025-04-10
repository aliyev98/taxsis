import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AnnounceTender = () => {



    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [activityType, setActivityType] = useState('');

    const icons = [
        { id: 1, img: '/assets/bold-icon.svg' },
        { id: 2, img: '/assets/italic-icon.svg' },
        { id: 3, img: '/assets/underline-icon.svg' },
        { id: 4, img: '/assets/smile-icon.svg' },
        { id: 5, img: '/assets/link-icon.svg' },
        { id: 6, img: '/assets/list-icon.svg' },
        { id: 7, img: '/assets/align-icon.svg' },
        { id: 8, img: '/assets/camera-icon.svg' },
        { id: 9, img: '/assets/file-add.svg' },
        { id: 10, img: '/assets/upload-icon.svg' }
    ];


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
        <div className='announce-tender d-flex flex-column align-items-center'>

            <div className="header d-flex align-items-center">
                <button className='btn btn-back' onClick={() => dispatch(setTenderNavigate("detail"))}>
                    <img src="/assets/arrow-left.svg" alt="" />
                </button>
                <span>Tender elan et</span>
            </div>

            <div className="announce-form d-flex flex-column">

                <input type="text" placeholder='Tenderin adı' />
                <input type="text" placeholder='Tenderi təşkil edən şirkət' />

                <div className="custom-select">
                    <select
                        name="activityType"
                        value={activityType}
                        onChange={(e) => setActivityType(e.target.value)}
                    >
                        <option value="" disabled hidden>Tenderin fəaliyyət növü</option>
                        <option value="it">İT xidmətləri</option>
                        <option value="techizat">Təchizat</option>
                        <option value="tikinti">Tikinti</option>
                        <option value="digər">Digər</option>
                    </select>

                    <img src="/assets/arrow-down.svg" alt="dropdown-icon" className="select-icon" />
                </div>

                <input type="text" placeholder='Qiyməti' />
                <input type="text" placeholder='Şəhər' />
                <input type="text" placeholder='Bitmə tarixi' />

                <div className="file-input d-flex flex-column">

                    <label className="input-title d-flex align-items-center">
                        <span>Şirkətin loqosu</span>
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

                <div className="textarea-div d-flex flex-column justify-content-start">
                    <label htmlFor="">Tender haqqında</label>

                    <div className="textarea">
                        <div className="textarea-actions d-flex">
                            {
                                icons.map((icon)=>(
                                    <button key={icon.id}>
                                        <img src={icon.img} alt="" />
                                    </button>
                                ))
                            }
                        </div>
                        <textarea rows={4} name="" id=""></textarea>
                    </div>
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

export default AnnounceTender;
