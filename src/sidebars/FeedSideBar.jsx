import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const modules = [
    { id: 1, name: 'Vergi modulu', img: '/assets/tax-modul-icon.svg', color: '#B5E4CA' },
    { id: 2, name: 'CRM modulu', img: '/assets/crm-modul-icon.svg', color: '#B1E5FC' },
    { id: 3, name: 'HR modulu', img: '/assets/hr-modul-icon.svg', color: '#FFD88D' },
    { id: 4, name: 'Management modulu', img: '/assets/menegment-modul-icon.svg', color: '#FFBC99' },
  ];

  const socialMenu = [
    { id: 1, name: 'Dostlar', img: '/assets/friends-icon.svg', path: '/friends' },
    { id: 2, name: 'Qruplar', img: '/assets/groups-icon.svg', path: '/groups' },
    { id: 3, name: 'Səhifələr', img: '/assets/pages-icon.svg', path: '/pages' },
    { id: 4, name: 'Diskusiyalar', img: '/assets/discussion-icon.svg', path: '/discussions' },
    { id: 5, name: 'Vakansiyalar', img: '/assets/vacations-icon.svg', path: '/vacancies' },
    { id: 6, name: 'Tədbirlər', img: '/assets/ticket-icon.svg', path: '/events' },
    { id: 7, name: 'Kurslar', img: '/assets/book-icon.svg', path: '/courses' },
    { id: 8, name: 'Marketplace', img: '/assets/dollar-icon.svg', path: '/marketplace' },
  ];

  const handleModuleClick = (module, index) => {
    if (index === 0) {
      navigate('/taxModule');
    }
  };

  return (
    <div className="sidebar-container col-2">
      
      <div className="linked-accounts d-flex flex-column">
        <div className="title">VEÖN-Ə BAĞLI HESABLAR</div>

        <div className="dropdown custom-dropdown">
          <button className="dropdown-toggle selected-account d-flex justify-content-between align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div className="left-side d-flex align-items-center">
              <div className="account-img">
                <img src="/assets/account-img1.png" alt="" />
              </div>
              <div className="account-name">
                <span>ACCFIN Group</span>
              </div>
            </div>
            <div className="dropdown-icon">
              <img src="/assets/dropdown-icon.svg" alt="" />
            </div>
          </button>

          <ul className="dropdown-menu accounts dropdown-menu-end">
            <div className="title">VEÖN-Ə BAĞLI HESABLAR</div>

            {['ACCFIN Group', 'ACFA MMC', 'Innova Co'].map((name, i) => (
              <li key={i}>
                <button className="account d-flex justify-content-between align-items-center">
                  <div className="left-side d-flex align-items-center">
                    <div className="account-img">
                      <img src="/assets/account-img1.png" alt="" />
                    </div>
                    <div className="account-name">
                      <span>{name}</span>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button className="add-account d-flex align-items-center">
          <div className="icon">
            <img src="/assets/plus-icon.svg" alt="" />
          </div>
          <span>Hesab əlavə et</span>
        </button>
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
        {socialMenu.map((item) => (
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
    </div>
  );
};

export default SideBar;
