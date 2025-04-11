import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import TextareaWithLabel from '../../ui/TextareaWithLabel';

const CvEdit = () => {
    const placeholders = [
        { id: 1, placeholder: "Ad, soyad" },
        { id: 2, placeholder: "Vəzifə" },
        { id: 3, placeholder: "Email" },
        { id: 4, placeholder: "Telefon" },
        { id: 5, placeholder: "Yaş" },
        { id: 6, placeholder: "Cins" },
        { id: 7, placeholder: "Şəhər" },
        { id: 8, placeholder: "Minimum əmək haqqı (AZN)" },
    ];

    const genderOptions = ["Kişi", "Qadın"];
    const cityOptions = ["Bakı", "Gəncə", "Sumqayıt", "Şəki", "Şamaxı"];

    return (
        <div className='cv-edit-container'>

            <div className="cv-edit-header">CV / Resume</div>

            <div className="cv-edit d-flex flex-column">

                <div className="general-infos">

                    {placeholders.map((item) => {
                        if (item.placeholder === "Cins") {
                            return (
                                <Select
                                    key={item.id}
                                    placeholder={item.placeholder}
                                    options={genderOptions}
                                />
                            );
                        }

                        if (item.placeholder === "Şəhər") {
                            return (
                                <Select
                                    key={item.id}
                                    placeholder={item.placeholder}
                                    options={cityOptions}
                                />
                            );
                        }

                        return <Input key={item.id} placeholder={item.placeholder} />;
                    })}
                </div>

                <div className="line"></div>

                <Select placeholder={"Təhsil"} />

                <TextareaWithLabel label={"Ətraflı"} placeholder={'Daxil edin'} rows={5} />

                <div className="line"></div>

                <Select placeholder={"İş təcrübəsi"} />

                <TextareaWithLabel label={"Bacarıqlar"} placeholder={'Daxil edin'} rows={5} />

                <TextareaWithLabel label={"Əlavə məlumat"} placeholder={'Daxil edin'} rows={5} />

                <button className="btn btn-save btn-primary">Yadda saxla</button>


            </div>



        </div>
    );
};

export default CvEdit;
