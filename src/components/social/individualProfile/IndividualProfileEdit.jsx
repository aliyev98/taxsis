import React from 'react'
import InputWithLabel from '../../ui/InputWithLabel'
import Input from '../../ui/Input'
import TextareaWithLabel from '../../ui/TextareaWithLabel'

const IndividualProfileEdit = () => {
    return (
        <div className='individual-profile-edit'>

            <div className="header d-flex align-items-center">
                <img src="/assets/arrow-left.svg" alt="" />
                <span>Profilə düzəliş et</span>
            </div>

            <div className="edit-inputs">
                <InputWithLabel />

                <Input />

                <TextareaWithLabel />
            </div>

        </div>
    )
}

export default IndividualProfileEdit