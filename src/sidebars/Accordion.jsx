import React, { useState } from "react";
import LogoGreen from '../components/ui/LogoGreen'

const AccordionSidebar = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleAccordion = (id) => {
    if (!isCollapsed) {
      setActiveAccordion(activeAccordion === id ? null : id);
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setOpenDropdown(null); // Sidebar küçülürse açık olan dropdown kapansın
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const accordions = [
    {
      id: "database",
      title: "Məlumat bazası",
      icon: "/assets/database-icon.svg",
      subItems: [
        "Qaimələr",
        "Əvəzləşmə reyestri",
        "Depozit çıxarışları",
        "Bank çıxarışları",
        "Kassa əməliyyatları",
        "Gömrük sənədləri",
        "Şirkət bazası",
        "Vergi hesabatları",
        "İlkin qalıqlar",
        "Qeyri rezidentlər",
      ],
    },
    {
      id: "reports",
      title: "Hesabatlar",
      icon: "/assets/document-icon.svg",
      subItems: ["Üzləşmə aktları", "Qaimələr üzrə hesabat", "Pulun hərəkəti hesabatı", "ALış-satış hesabatı", "Gəlir və xərc hesabatı", "Borclar cədvəli"],
    },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>


      {/* Header */}
      <div className={`sidebar-header ${isCollapsed ? "collapsed" : ""}`}>

        <LogoGreen />

        <div className="icons">

          <div className="arrow-icon">
            <img src="./assets/arrow-down.svg" alt="" />
          </div>

          <div className="toggle-sidebar-icon" onClick={toggleSidebar}>
            <img src="/assets/sidebar-toggle-open.svg" alt="" />
            {/* {isCollapsed ? "➡️" : "⬅️"} */}
          </div>

        </div>

      </div>

      {accordions.map((accordion) => (
        <div key={accordion.id} className="accordion-item">

          <div className="accordion-header" onClick={() => (isCollapsed ? toggleDropdown(accordion.id) : toggleAccordion(accordion.id))} >
            <img src={accordion.icon} alt="" />
            {!isCollapsed && <span className="title">{accordion.title}</span>}

            {/* Üçgen ikonu sadece geniş durumda gözükecek */}
            {!isCollapsed && (
              <span className={`arrow ${activeAccordion === accordion.id ? "open" : ""}`}>
                <img src="/assets/arrow-down.svg" alt="" />
              </span>
            )}
          </div>

          {/* Geniş durumda alt başlıklar */}
          {!isCollapsed && (
            <div className={`accordion-content ${activeAccordion === accordion.id ? "show" : ""}`}>

              {accordion.subItems.map((subItem, index) => (
                <div key={index} className="accordion-subitem">
                  <img src="/assets/tree-icon.svg" alt="" />
                  <button>
                    {subItem}

                    <img src="/assets/arrow-right-icon.svg" alt="" />
                  </button>
                </div>
              ))}

            </div>
          )}

          {/* Küçük durumda dropdown */}
          {isCollapsed && (
            <div className={`dropdown ${openDropdown === accordion.id ? "show" : ""}`}>
              {accordion.subItems.map((subItem, index) => (
                <div key={index} className="dropdown-item">
                  {subItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSidebar;
