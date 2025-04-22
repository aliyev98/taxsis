import React from 'react'

const AddButton = ({content, onClick }) => {
  return (
    <button className='add-button d-flex align-items-center' onClick={onClick}>
        <img src="/assets/plus-icon.svg" alt="" />
        <span>{content}</span>
    </button>
  )
}

export default AddButton