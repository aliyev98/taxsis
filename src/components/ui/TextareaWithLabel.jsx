import React from 'react'

const TextareaWithLabel = ({placeholder, rows, label}) => {
  return (
    <div className='textarea-div d-flex flex-column'>
        <label htmlFor="">{label}</label>
        <textarea name="" id="" rows={rows} placeholder={placeholder}></textarea>
    </div>
  )
}

export default TextareaWithLabel