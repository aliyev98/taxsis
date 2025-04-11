import React from 'react'

const InputWithLabel = ({label, placeholder }) => {
    return (
        <div className="input-div d-flex flex-column">
            <label htmlFor="">{label}</label>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default InputWithLabel