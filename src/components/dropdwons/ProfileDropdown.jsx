import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProfileDropdown = () => {

  const accountType = useSelector((state) => state.login.accountType);


  const navigate = useNavigate();

  const sections = [
    { id: 1, img: "/assets/profile-icon.svg", content: "Profil" },
    { id: 2, img: "/assets/home-icon.svg", content: "Əsas səhifə" },
  ];

  const handleProfileClick = () => {

    if (accountType === "individual") {
      navigate('/IndividualProfile');
    }
    else {
      navigate('/corporateProfile');
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <div className="profile-dropdown d-flex flex-column">
      <div className="d-flex flex-column">
        {sections.map((section) => (
          <div
            key={section.id}
            className="profile section"
            onClick={
              section.id === 1
                ? handleProfileClick
                : section.id === 2
                  ? handleHomeClick
                  : null
            }
          >
            <img src={section.img} alt="" />
            <span>{section.content}</span>
          </div>
        ))}
      </div>

      <div className="line"></div>

      <div className="tax-accounts d-flex flex-column">
        <span className='title'>VEÖN-Ə BAĞLI HESAB</span>

        <div className="dropdown-account d-flex justify-content-between align-items-center">

          <div className="account-image">
            <img src="/assets/account-img3.png" alt="" />
          </div>

          <span className='account-name'>ACFA MMC</span>

          <div className="left-icon">
            <img src="/assets/arrow-right-icon.svg" alt="" />
          </div>


        </div>

      </div>

      <div className="line"></div>

      <div className="tax-modules d-flex flex-column">

        <span className='title'>Vergi modulu</span>

        <div className="dropdown-module d-flex justify-content-between align-items-center">

          <div className="module-img">
            <img src="/assets/calculator-icon.svg" alt="" />
          </div>

          <span className='module-name'>ACFA MMC</span>

          <div className="left-icon">
            <img src="/assets/arrow-right-icon.svg" alt="" />
          </div>

        </div>
      </div>

      <div className="line"></div>

      <div className="logout d-flex align-items-center" onClick={handleLogoutClick}>
        <img src="/assets/logout-icon.svg" alt="" />
        <span>Çıxış et</span>
      </div>
    </div>
  );
};

export default ProfileDropdown;
