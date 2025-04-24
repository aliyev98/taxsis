import React, { useState } from 'react';
import Input from '../../../components/ui/inputs/Input';
import Select from '../../../components/ui/inputs/Select'
import FormButton from '../../../components/ui/buttons/FormButton';
import ImageUpload from '../../ui/fileUploads/ImageUpload';
import { useDispatch } from 'react-redux';
import { setPartnerNavigate } from '../../../redux/slices/partnersSlice'; // path strukturuna uyğun düzəlt


const AddPartner = () => {
    const dispatch = useDispatch();

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className='add-partner-container d-flex flex-column align-items-center'>
            <div className="add-partner-header">
                <div className="add-partner-title d-flex align-items-center">
                    <img src="/assets/arrow-left.svg" alt="" onClick={() => dispatch(setPartnerNavigate("partnersList"))} />
                    <span>Yeni partnyor əlavə et</span>
                </div>
            </div>

            <div className="add-partner-form d-flex flex-column">
                <Input placeholder={"Partnyorun adı"} />
                <Select placeholder={"Fəaliyyət sahəsi"} />
                <ImageUpload label={"Partnyorun loqosu"} onImageSelect={(file) => setSelectedImage(file)} />
            </div>

            <FormButton content={"Əlavə et"} />
        </div>
    );
};

export default AddPartner;
