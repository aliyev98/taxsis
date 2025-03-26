import React from 'react';
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const modules = [
    { id: 1, name: "Vergi modulu", img: "./assets/tax-modul-icon.svg", color: "#B5E4CA" },
    { id: 2, name: "CRM modulu", img: "./assets/crm-modul-icon.svg", color: "#B1E5FC" },
    { id: 3, name: "HR modulu", img: "./assets/hr-modul-icon.svg", color: "#FFD88D" },
    { id: 4, name: "Management modulu", img: "./assets/menegment-modul-icon.svg", color: "#FFBC99" },
  ];

  const socialMenu = [
    { id: 1, name: 'Dostlar', img: './assets/friends-icon.svg' },
    { id: 2, name: 'Qruplar', img: './assets/groups-icon.svg' },
    { id: 3, name: 'Səhifələr', img: './assets/pages-icon.svg' },
    { id: 4, name: 'Diskusiyalar', img: './assets/discussion-icon.svg' },
    { id: 5, name: 'Vakansiyalar', img: './assets/vacations-icon.svg' },
    { id: 6, name: 'Tədbirlər', img: './assets/ticket-icon.svg' },
    { id: 7, name: 'Kurslar', img: './assets/book-icon.svg' },
    { id: 8, name: 'Marketplace', img: './assets/dollar-icon.svg' },
  ];

  const handleModuleClick = (module, index) => {
    if (index === 0) {
      navigate("/taxModule");
    } else {
      console.log(`Tıklanan modül: ${module.name}`);
    }
  };

  return (
    <div className='sidebar-container col-2'>
      {/* ... linked-accounts bölümü vs ... */}

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
        {socialMenu.map(item => (
          <button key={item.id} className="menu-item d-flex align-items-center">
            <div className="icon">
              <img src={item.img} alt="" />
            </div>
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
