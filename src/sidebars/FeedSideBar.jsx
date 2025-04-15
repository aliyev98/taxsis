import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import LinkedAccountsDropdown from '../components/dropdwons/LinkedAccountsDropdown';

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const accountType = useSelector(state => state.login.accountType)

  console.log(accountType)

  const modules = [
    { id: 1, name: 'Vergi modulu', img: '/assets/tax-modul-icon.svg', color: '#B5E4CA' },
    { id: 2, name: 'CRM modulu', img: '/assets/crm-modul-icon.svg', color: '#B1E5FC' },
    { id: 3, name: 'HR modulu', img: '/assets/hr-modul-icon.svg', color: '#FFD88D' },
    { id: 4, name: 'Management modulu', img: '/assets/menegment-modul-icon.svg', color: '#FFBC99' },
  ];

  const individualMenu = [
    { id: 1, name: 'Dostlar', img: '/assets/friends-icon.svg', path: '/friends' },
    { id: 2, name: 'Qruplar', img: '/assets/groups-icon.svg', path: '/groups' },
    { id: 3, name: 'Səhifələr', img: '/assets/pages-icon.svg', path: '#' },
    { id: 4, name: 'Diskusiyalar', img: '/assets/discussion-icon.svg', path: '#' },
    { id: 5, name: 'Vakansiyalar', img: '/assets/vacations-icon.svg', path: '/vacancies' },
    { id: 6, name: 'Tədbirlər', img: '/assets/ticket-icon.svg', path: '/events' },
    { id: 7, name: 'Kurslar', img: '/assets/book-icon.svg', path: '#' },
    { id: 8, name: 'Marketplace', img: '/assets/dollar-icon.svg', path: '#' },
  ];

  const corporateMenu = [
    { id: 1, name: 'Əməkdaşlar', img: '/assets/friends-icon.svg', path: '/colleagues' },
    { id: 2, name: 'Qruplar', img: '/assets/groups-icon.svg', path: '/groups' },
    { id: 3, name: 'Səhifələr', img: '/assets/pages-icon.svg', path: '#' },
    { id: 4, name: 'Diskusiyalar', img: '/assets/discussion-icon.svg', path: '#' },
    { id: 5, name: 'Vakansiyalar', img: '/assets/vacations-icon.svg', path: '/vacancies' },
    { id: 6, name: 'Tədbirlər', img: '/assets/ticket-icon.svg', path: '/events' },
    { id: 7, name: 'Kurslar', img: '/assets/book-icon.svg', path: '#' },
    { id: 8, name: 'Marketplace', img: '/assets/dollar-icon.svg', path: '#' },
    { id: 9, name: 'Tenderlər', img: '/assets/tender-icon.svg', path: '/tenders' },
    { id: 10, name: 'Gömrük kalkulyatoru', img: '/assets/custom-calculator-icon.svg', path: '/calculator' },
    { id: 11, name: 'Valyuta hesabla', img: '/assets/currency-icon.svg', path: '/currency' },
    { id: 12, name: 'Kortirovka', img: '/assets/kartirovka-icon.svg', path: '#' },
    { id: 13, name: 'VÖEN axtar', img: '/assets/search-icon.svg', path: '/vatSearch' },
  ];

  const activeMenu = accountType === 'individual' ? individualMenu : corporateMenu;


  const handleModuleClick = (module, index) => {
    if (index === 0) {
      navigate('/taxModule');
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const [selectedAccount, setSelectedAccount] = useState({
    name: "ACCFIN Group",
    img: "/assets/account-img1.png",
  });

  const accounts = [
    {
      name: "ACCFIN Group",
      img: "/assets/account-img.jpg",
    },
    {
      name: "Test Company",
      img: "/assets/account-img1.png",
    },
    {
      name: "Beta Group",
      img: "/assets/account-img3.png",
    },
  ];

  const handleSelectAccount = (account) => {
    setSelectedAccount(account);
    setShowDropdown(false);
  };


  return (
    <div className="sidebar-container d-flex flex-column col-2">

      <div className="linked-accounts d-flex flex-column">
        <div className="title">VEÖN-Ə BAĞLI HESABLAR</div>

        <div className="selected-account d-flex align-items-center" onClick={() => setShowDropdown((prev) => !prev)} >

          <div className="account-img">
            <img src={selectedAccount.img} alt="" />
          </div>

          <span className="account-name">{selectedAccount.name}</span>

          <div className="arrow-icon">
            <img src="/assets/arrow-down.svg" alt="" />

            {showDropdown && (
              <LinkedAccountsDropdown accounts={accounts} onSelect={handleSelectAccount} />
            )}

          </div>

        </div>

        <div className="add-account d-flex align-items-center">
          <div className="add-icon-img">
            <img src="/assets/plus-icon.svg" alt="" />
          </div>
          <span>Hesab əlavə et</span>
        </div>
      </div>

      <div className="line"></div>

      <div className="modules d-flex flex-column">
        <div className="title">VERGİ MODULU</div>
        {modules.map((module, index) => (
          <button
            key={module.id}
            className="modul d-flex align-items-center"
            onClick={() => handleModuleClick(module, index)}
          >
            <div className="icon" style={{ backgroundColor: module.color }}>
              <img src={module.img} alt="icon" />
            </div>
            <span>{module.name}</span>
          </button>
        ))}
      </div>

      <div className="line"></div>

      <div className="social-menu d-flex flex-column">
        {activeMenu.map((item) => (
          <button
            key={item.id}
            className={`menu-item d-flex align-items-center ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => item.path && navigate(item.path)}
          >
            <div className="icon">
              <img src={item.img} alt={item.name} />
            </div>
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="line"></div>

        <div className="footer-actions d-flex flex-column">
          <a href="">Məxfilik siyasəti</a>
          <a href="">Qaydalar və şərtlər</a>

          <div className="copyright d-flex">
            <img src="/assets/copyright-icon.svg" alt="" />
            <span>Bütün hüquqlar qorunur</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SideBar;
