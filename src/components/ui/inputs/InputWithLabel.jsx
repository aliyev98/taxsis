import React from 'react'

const InputWithLabel = ({label, placeholder, htmlFor, name, id, maxLength, value, onChange, disabled}) => {
    return (
        <div className="input-div d-flex flex-column">
            <label htmlFor={htmlFor}>{label}</label>
            <input name={name} id={id} type="text" placeholder={placeholder} maxLength={maxLength} value={value} onChange={onChange} disabled={disabled} />
        </div>
    )
}

export default InputWithLabel