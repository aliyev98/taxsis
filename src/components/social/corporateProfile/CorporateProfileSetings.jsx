import React from 'react'
import InputWithLabel from '../../ui/inputs/InputWithLabel'
import SelectWithLabel from '../../ui/inputs/SelectWithLabel'
import FormButton from '../../ui/buttons/FormButton'

const CorporateProfileSetings = () => {
    return (
        <div className='corporate-profile-settings d-flex flex-column justify-content-center align-items-center'>

            <div className="corporate-profile-settings-header">

                <div className="title">
                    Tənzimləmələr
                </div>

            </div>

            <div className="corporate-profile-settings-form d-flex flex-column">
                <InputWithLabel label={"SIN"} />
                <InputWithLabel label={"VOEN"} />
                <InputWithLabel label={"Hüquqi adı"} />
                <InputWithLabel label={"Qanuni təmsilçi"} />
                <InputWithLabel label={"Fəaliyyət növü"} />
                <SelectWithLabel label={"Vergi mükəlləfiyyəti növü"} />
                <InputWithLabel label={"Email"} />
                <InputWithLabel label={"Mobil nömrə"} />
            </div>

            <FormButton content={"Yadda saxla"} />

        </div>
    )
}

export default CorporateProfileSetings