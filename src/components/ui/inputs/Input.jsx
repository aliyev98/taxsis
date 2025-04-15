import React from 'react'

const Input = ({ placeholder, id, name, onChange, value }) => {
  return (
    <input className='input' name={name} id={id} onChange={onChange} value={value} type="text" placeholder={placeholder} />
  )
}

export default Input