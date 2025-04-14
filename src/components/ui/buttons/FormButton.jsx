import React from 'react'

const FormButton = ({ content, isActive, handleContinue }) => {
    return (
        <button className={`btn btn-primary ${isActive ? "active" : "deactive disabled"}`}
            disabled={!isActive}
            onClick={handleContinue}>
            {content}
        </button>
    )
}

export default FormButton