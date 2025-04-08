import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/slices/postSlice';
import ProfileDropdown from '../components/dropdwons/ProfileDropdown';

const FeedHeader = () => {

  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='feed-header-container d-flex justify-content-between align-items-center'>

      <div className="logo d-flex align-items-center">

        <div className="logo-img">
          <img src="/assets/logo.svg" alt="" />
          <div className="lines">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <span className='logo-text'>TAXSIS</span>

      </div>

      <div className="search-input d-flex align-items-lg-center">
        <div className="search-icon">
          <img src="/assets/search-icon.svg" alt="" />
        </div>
        <input type="text" placeholder='Axtar' />
      </div>

      <div className='header-nav d-flex align-items-center'>

        <button className="add-post d-flex align-items-center" onClick={() => dispatch(openModal())}>
          <img src="/assets/plus-icon.svg" alt="" />
          <span>Yeni post</span>
        </button>

        <button className="messages">
          <img src="/assets/messages-icon.svg" alt="" />
          <div className="red-dot"></div>
        </button>

        <button className="notifications">
          <img src="/assets/notification-icon.svg" alt="" />
          <div className="red-dot"></div>
        </button>

        <div className="profile-picture position-relative" ref={dropdownRef}>
          <img
            src="/assets/profile-picture.png"
            alt="profile"
            onClick={() => setShowDropdown(prev => !prev)}
            style={{ cursor: 'pointer' }}
          />
          {showDropdown && <ProfileDropdown />}
        </div>


      </div>

    </div>
  )
}

export default FeedHeader