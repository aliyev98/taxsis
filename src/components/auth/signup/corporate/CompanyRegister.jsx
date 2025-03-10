import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { setStep } from "../../../../redux/slices/stepSlice";

const CompanyRegister = () => {
    const dispatch = useDispatch();
    const handleContinue = () => dispatch(setStep(6));

    // Telefon ve email state'leri
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    // Yetkilendirilen kişileri saklayan state
    const [inputs, setInputs] = useState([]);

    // Telefon input'unun sadece rakam almasını sağlamak
    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setPhone(value);
    };

    // Yetkilendirme inputlarını yönetme fonksiyonları
    const handleAddInput = () => setInputs([...inputs, { id: "", position: "" }]);
    const handleRemoveInput = (index) => setInputs(inputs.filter((_, i) => i !== index));
    const handleChange = (index, field, value) => {
        const newInputs = [...inputs];
        newInputs[index][field] = value;
        setInputs(newInputs);
    };

    // Statik inputları liste olarak tanımlamak
    const companyDetails = [
        { id: "sin", label: "SIN", value: "2398845" },
        { id: "voen", label: "VÖEN", value: "330056789" },
        { id: "legalName", label: "Hüquqi adı", value: "ACCFIN MMC" },
        { id: "representative", label: "Qanuni təmsilçi", value: "Elşad Ağahəsənov" },
        { id: "activity", label: "Fəaliyyət növü", value: "Mühasibatlıq uçotu" },
    ];

    return (
        <div className='company-register-container d-flex flex-column col-md-8 col-lg-7 col-xl-5 col-xxl-5 col-11'>

            <div className="account-type">Korporativ hesab</div>
            <div className="title">Qeydiyyat</div>
            <div className="info">ACCFIN MMC - 330056789</div>

            <div className="company-register-form d-flex flex-column">
                {/* Statik inputları map ile oluşturma */}
                {companyDetails.map((detail) => (
                    <div key={detail.id} className="input-element d-flex flex-column">
                        <label htmlFor={detail.id}>{detail.label}</label>
                        <input type="text" id={detail.id} value={detail.value} disabled />
                    </div>
                ))}

                {/* Vergi Mükəlləfiyyəti */}
                <div className="input-element select-element d-flex justify-content-between align-items-center">
                    <div className="custom-select d-flex flex-column">
                        <label htmlFor="taxType">Vergi mükəlləfiyyəti növü</label>
                        <select id="taxType">
                            <option value="">Maliyyə</option>
                        </select>
                    </div>
                    <div className="select-icon">
                        <img src="./assets/arrow-down.svg" alt="" />
                    </div>
                </div>

                {/* Email ve Telefon Input'ları */}
                <div className="input-element email-input d-flex flex-column">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input-element phone-input d-flex flex-column">
                    <label htmlFor="phone">Mobil nömrə</label>
                    <input type="text" id="phone" value={phone} onChange={handlePhoneChange} placeholder="Telefon nömrəsi" />
                </div>

                {/* Səlahiyyət verilən şəxslər */}
                <div>Səlahiyyət verilən şəxslər</div>
                {inputs.map((input, index) => (
                    <div key={index} className="authorize-input d-flex flex-column">
                        <div className="input-header d-flex justify-content-between ">
                            <label htmlFor={`input-${index + 1}`}>Fərdi hesab {index + 1}</label>
                            <button className="remove-authority" onClick={() => handleRemoveInput(index)}>Səlahiyyəti sil</button>
                        </div>

                        <div className="input-div d-flex flex-column">
                            <div className="input">
                                <input type="text" placeholder='Fərdi hesabın ID nömrəsi' id={`input-${index + 1}`} value={input.id} onChange={(e) => handleChange(index, "id", e.target.value)} />
                            </div>
                            <div className="select">
                                <select value={input.position} onChange={(e) => handleChange(index, "position", e.target.value)}>
                                    <option value="">Fərdi hesaba vəzifə seç</option>
                                    <option value="manager">Menecer</option>
                                    <option value="assistant">Asistent</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Buton, inputların en altında kalmalı */}
                <div className="add-btn d-flex align-items-center">
                    <button onClick={handleAddInput}><img src="./assets/add-icon.svg" alt="" /></button>
                    <span>Fərdi hesaba səlahiyyət ver</span>
                </div>
            </div>

            <button onClick={handleContinue} className="btn btn-primary">Müraciət göndər</button>

            <div className="warning">
                Müraciət edərək <a href="#">Qaydalar və şərtlər </a> ilə razılaşmış olursunuz
            </div>
        </div>
    );
};

export default CompanyRegister;
