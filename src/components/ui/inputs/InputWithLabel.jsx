import React from 'react'

const InputWithLabel = ({label, placeholder, htmlFor, name, id, maxLenght, value, onChange}) => {
    return (
        <div className="input-div d-flex flex-column">
            <label htmlFor="">{label}</label>
            <input name={name} id={id} type="text" placeholder={placeholder} maxLength={maxLenght} value={value} onChange={onChange} />
        </div>
    )
}

export default InputWithLabel