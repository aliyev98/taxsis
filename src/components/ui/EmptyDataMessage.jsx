import React from 'react'
import FormButton from './buttons/FormButton';

const EmptyDataMessage = () => {
  return (
    <div className='empty-data-message'>

      <div className="message-content d-flex flex-column justify-content-center align-items-center">

        <div className="image-div">
          <span>🔍</span>
        </div>

        <span>Oops!</span>
        <span>Heç bir məlumat tapılmadı!</span>

      </div>

    </div>
  )
}

export default EmptyDataMessage