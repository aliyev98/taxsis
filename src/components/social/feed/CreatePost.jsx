import React from 'react'

const CreatePost = () => {

  const icons = [
    { id: 1, img: './assets/bold-icon.svg' },
    { id: 2, img: './assets/italic-icon.svg' },
    { id: 3, img: './assets/underline-icon.svg' },
    { id: 4, img: './assets/smile-icon.svg' },
    { id: 5, img: './assets/link-icon.svg' },
    { id: 6, img: './assets/list-icon.svg' },
    { id: 7, img: './assets/align-icon.svg' },
    { id: 8, img: './assets/camera-icon.svg' },

]

  return (
    <div className="create-post-container d-flex flex-column">

      <div className="header d-flex align-items-center">
        <div className="profile-picture">
          <img src="./assets/profile-picture.png" alt="" />
        </div>

        <span>Fikirlərini paylaş?!</span>
      </div>

      <div className="tools-container d-flex align-items-center justify-content-between">

        <div className="tools d-flex">

          {
            icons.map((icon) => (
              <button className='tool-btn'>
                <img key={icon.id} src={icon.img} />
              </button>
            ))
          }

        </div>

        <button className="btn btn-primary">Paylaş</button>

      </div>
    </div>
  )
}

export default CreatePost