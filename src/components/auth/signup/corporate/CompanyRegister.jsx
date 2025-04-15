import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { setStep } from "../../../../redux/slices/stepSlice";
import InputWithLabel from '../../../ui/inputs/InputWithLabel';
import Input from '../../../ui/inputs/Input';
import SelectWithLabel from '../../../ui/inputs/SelectWithLabel';
import { formatPhoneNumber } from '../../../../utils/InputUtils';
import FormButton from '../../../ui/buttons/FormButton';
import Select from '../../../ui/inputs/Select';

const CompanyRegister = () => {
    const dispatch = useDispatch();
    const handleContinue = () => dispatch(setStep(6));

    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [taxType, setTaxType] = useState("default");


    console.log(taxType)

    const isActive = email.trim() !== "" && phone.trim() !== "" && taxType.trim() !== "";

    const [inputs, setInputs] = useState([]);

    // Yetkilendirme inputlarını yönetme fonksiyonları
    const handleAddInput = () => setInputs([...inputs, { id: "", position: "" }]);
    const handleRemoveInput = (index) => setInputs(inputs.filter((_, i) => i !== index));
    const handleChange = (index, field, value) => {
        const newInputs = [...inputs];
        newInputs[index][field] = value;
        setInputs(newInputs);
    };

    // Statik inputları liste olarak tanımlamak
    const staticInputs = [
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

                {staticInputs.map((input) => (

                    <InputWithLabel key={input.id} htmlFor={input.id} label={input.label} id={input.id} value={input.value} name={input.id} disabled={true} />

                ))}


                <SelectWithLabel
                    label="Vergi mükəlləfiyyəti növü"
                    value={taxType}
                    onChange={(e) => setTaxType(e.target.value)}
                    options={[
                        { value: "Maliyyə", label: "Maliyyə" },
                        { value: "Menecment", label: "Menecment" }
                    ]}
                    name="taxType"
                />



                {/* Email ve Telefon Input'ları */}

                <InputWithLabel label="Email" htmlFor="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <InputWithLabel label="Mobil nömrə" htmlFor="phone" id="phone" value={phone} onChange={(e) => setPhone(formatPhoneNumber(e.target.value))} />

                {/* Səlahiyyət verilən şəxslər */}

                {inputs.map((input, index) => (
                    <div key={index} className="authorize d-flex flex-column">

                        <div className='authorized-persons'>Səlahiyyət verilən şəxslər</div>

                        <div className="input-header d-flex justify-content-between ">
                            <label htmlFor={`input-${index + 1}`}>Fərdi hesab {index + 1}</label>
                            <button className="remove-authority" onClick={() => handleRemoveInput(index)}>Səlahiyyəti sil</button>
                        </div>

                        <div className="authority-inputs d-flex flex-column">
                            <Input placeholder='Fərdi hesabın ID nömrəsi' id={`input-${index + 1}`} value={input.id} onChange={(e) => handleChange(index, "id", e.target.value)} />

                            <Select placeholder="Fərdi hesaba vəzifə seç" options={["Menecer", "Asistent"]} value={input.position} onChange={(e) => handleChange(index, "position", e.target.value)} />
                        </div>

                    </div>
                ))}


                {/* Buton, inputların en altında kalmalı */}
                <div className="add-authority d-flex align-items-center" onClick={handleAddInput}>
                    <button ><img src="/assets/add-icon.svg" alt="" /></button>
                    <span>Fərdi hesaba səlahiyyət ver</span>
                </div>

            </div>

            {/* <button onClick={handleContinue} className="btn btn-primary">Müraciət göndər</button> */}
            <FormButton content="Müraciət et" handleContinue={handleContinue} isActive={isActive} />

            <div className="warning">
                Müraciət edərək <a href="#">Qaydalar və şərtlər </a> ilə razılaşmış olursunuz
            </div>

        </div>
    );
};

export default CompanyRegister;
