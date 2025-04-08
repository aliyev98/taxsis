import React from 'react'
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/slices/postSlice';


const CreatePost = () => {

  const dispatch = useDispatch();

  const icons = [
    { id: 1, img: '/assets/bold-icon.svg' },
    { id: 2, img: '/assets/italic-icon.svg' },
    { id: 3, img: '/assets/underline-icon.svg' },
    { id: 4, img: '/assets/smile-icon.svg' },
    { id: 5, img: '/assets/link-icon.svg' },
    { id: 6, img: '/assets/list-icon.svg' },
    { id: 7, img: '/assets/align-icon.svg' },
    { id: 8, img: '/assets/camera-icon.svg' },

  ]



  return (
    <div
      className="create-post-container d-flex flex-column" onClick={() => dispatch(openModal())}>

      <div className="header d-flex">

        <div className="profile-picture">
          <img src="/assets/profile-picture.png" alt="" />
        </div>

        {/* <textarea disabled={showModal} placeholder="Fikirlərini paylaş?!" rows={3} name="" id=""></textarea> */}

        <span>Fikirlərini paylaş?!</span>


      </div>

      <div className="tools-container d-flex align-items-center justify-content-end">

        <div className="tools d-flex">

          {
            icons.map((icon) => (
              <button key={icon.id} className='tool-btn'>
                <img src={icon.img} />
              </button>
            ))
          }

        </div>

        <button className="btn btn-primary" disabled>Paylaş</button>

      </div>
    </div>
  )
}

export default CreatePost