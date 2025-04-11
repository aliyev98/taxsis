import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = () => {
  const navigate = useNavigate(); // Yönlendirme işlemi için kullanacağımız hook

  const sections = [
    { id: 1, img: "/assets/profile-icon.svg", content: "Profil" },
    { id: 2, img: "/assets/home-icon.svg", content: "Əsas səhifə" },
  ];

  // Profil butonuna tıklandığında yönlendirme işlemi
  const handleProfileClick = () => {
    navigate('/IndividualProfile'); // Profil sayfasına yönlendirir
  };

  // Çıxış et butonuna tıklandığında yönlendirme işlemi
  const handleLogoutClick = () => {
    navigate('/'); // Anasayfaya yönlendirir
  };

  return (
    <div className="profile-dropdown d-flex flex-column">
      <div className="d-flex flex-column">
        {sections.map((section) => (
          <div
            key={section.id}
            className="profile section"
            onClick={section.id === 1 ? handleProfileClick : null} // İlk butona tıklandığında yönlendir
          >
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

      <div className="logout d-flex align-items-center" onClick={handleLogoutClick}>
        <img src="/assets/logout-icon.svg" alt="" />
        <span>Çıxış et</span>
      </div>
    </div>
  );
};

export default ProfileDropdown;
