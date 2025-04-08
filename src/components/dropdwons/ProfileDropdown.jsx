import React from 'react';

const ProfileDropdown = () => {

  const sections = [
    { id: 1, img: "/assets/profile-icon.svg", content: "Profil" },
    { id: 2, img: "/assets/home-icon.svg", content: "Əsas səhifə" },
  ]

  return (
    <div className="profile-dropdown d-flex flex-column">

      <div className="d-flex flex-column">
        {sections.map((section) => (
          <div key={section.id} className="profile section">
            <img src={section.img} alt="" />
            <span>{section.content}</span>
          </div>
        ))}
      </div>

      <div className="line"></div>

      <div className="tax-accounts d-flex flex-column">

        <span className='title'>VEÖN-Ə BAĞLI HESAB</span>

        <div className="account d-flex align-items-center">

          <div className="account-img">
            <img src="/assets/account-img3.png" alt="" />
          </div>

          <span className='account-name'>ACFA MMC</span>

          <img src="/assets/arrow-right-icon.svg" alt="" />

        </div>



      </div>

      <div className="line"></div>

      <div className="tax-modules d-flex flex-column">

        <span className='title'>Vergi modulu</span>

        <div className="module d-flex align-items-center">

          <div className="module-img">
            <img src="/assets/calculator-icon.svg" alt="" />
          </div>

          <span className='module-name'>ACFA MMC</span>

          <img src="/assets/arrow-right-icon.svg" alt="" />

        </div>

      </div>

      <div className="line"></div>

      <div className="logout d-flex align-items-center">
        <img src="/assets/logout-icon.svg" alt="" />
        <span>Çıxış et</span>
      </div>


    </div>
  );
};

export default ProfileDropdown;
