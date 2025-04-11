import React from 'react'
import InputWithLabel from '../../ui/InputWithLabel'
import Input from '../../ui/Input'
import TextareaWithLabel from '../../ui/TextareaWithLabel'
import { useDispatch } from 'react-redux';
import { setProfileNavigate } from '../../../redux/slices/profileSlice';

const IndividualProfileEdit = () => {
    const dispatch = useDispatch();

    return (
        <div className='individual-profile-edit'>

            <div className="header d-flex align-items-center">
                <img onClick={() => dispatch(setProfileNavigate('general'))} src="/assets/arrow-left.svg" alt="" />
                <span className=''>Profilə düzəliş et</span>
            </div>

            <div className="edit-inputs d-flex">

                <div className="left-side d-flex flex-column">
                    <InputWithLabel label={"İş yeri"} />
                    <InputWithLabel label={"Vəzifə"} />
                    <InputWithLabel label={"Ünvan"} />
                    <InputWithLabel label={"Dil"} />
                    <InputWithLabel label={"İxtissas"} />
                    <InputWithLabel label={"Ailə"} />
                    <TextareaWithLabel label={"Bio"} rows={5} />
                </div>

                <div className="right-side d-flex flex-column">
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <InputWithLabel label={"Telefon"} />
                    <InputWithLabel label={"Email"} />
                </div>





            </div>

            <button className="btn btn-save btn-primary" onClick={() => dispatch(setProfileNavigate('general'))}>Yadda saxla</button>

        </div>
    )
}

export default IndividualProfileEdit