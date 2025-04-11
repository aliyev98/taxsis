import React from 'react'

const InputWithLabel = ({label}) => {
    return (
        <div className="input-div d-flex flex-column">
            <label htmlFor="">{label}</label>
            <input type="text" />
        </div>
    )
}

export default InputWithLabel