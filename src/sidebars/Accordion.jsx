import React, { useState } from "react";
import LogoGreen from "../components/ui/LogoGreen";

const AccordionSidebar = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openInitial, setOpenInitial] = useState(false);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
      setOpenInitial(false);
    } else {
      setOpenSection(section);
      setOpenInitial(false);
    }
  };

  const toggleInitial = (e) => {
    e.stopPropagation();
    setOpenInitial((prev) => !prev);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <LogoGreen />
        {/* Sənin collapse düymən buraya, lazımdırsa əlavə et */}
      </div>

      <ul className="accordion">
        {/* — Məlumat bazası bölməsi */}
        <li className="accordion-section">

          <button className="section-button" onClick={() => toggleSection("database")} >
            <img src="/assets/database-icon.svg" alt="" />
            <span>Məlumat bazası</span>
            <img className={`arrow ${openSection === "database" ? "open" : ""}`} src="/assets/arrow-down.svg" alt="" />
          </button>

          {openSection === "database" && (
            <ul className="accordion-list">
              <li> <img src="/assets/tree-icon.svg" alt="" /> <button>Qaimələr</button></li>
              <li><img src="/assets/tree-icon.svg" alt="" /> <button>Əvəzləşmə reyestri</button></li>
              <li><img src="/assets/tree-icon.svg" alt="" /> <button>Depozit çıxarışları</button></li>
              <li><img src="/assets/tree-icon.svg" alt="" /> <button>Bank çıxarışları</button></li>
              <li><img src="/assets/tree-icon.svg" alt="" /> <button>Kassa əməliyyatları</button></li>
              <li><img src="/assets/tree-icon.svg" alt="" /> <button>Gömrük sənədləri</button></li>
              <li><img src="/assets/tree-icon.svg" alt="" /> <button>Şirkət bazası</button></li>
              <li><img src="/assets/tree-icon.svg" alt="" /> <button>Vergi hesabatları</button></li>

              {/* İlkin qalıqlar */}
              <li className="nested-section">
              <img src="/assets/tree-icon.svg" alt="" />
                <button
                  className="section-button initial"
                  onClick={toggleInitial}
                >
                  <span>İlkin qalıqlar</span>
                  <img
                    className={`arrow ${openInitial ? "open" : ""}`}
                    src="/assets/arrow-down.svg"
                    alt=""
                  />
                </button>

                {openInitial && (
                  <ul className="nested-list">
                    <li><button>Daxili qalıqlar</button></li>
                    <li><button>Xarici qalıqlar</button></li>
                  </ul>
                )}
              </li>

              <li><button>Qeyri rezidentlər</button></li>
            </ul>
          )}
        </li>

        {/* — Hesabatlar bölməsi */}
        <li className="accordion-section">
          <button
            className="section-button"
            onClick={() => toggleSection("reports")}
          >
            <img src="/assets/document-icon.svg" alt="" />
            <span>Hesabatlar</span>
            <img
              className={`arrow ${openSection === "reports" ? "open" : ""}`}
              src="/assets/arrow-down.svg"
              alt=""
            />
          </button>

          {openSection === "reports" && (
            <ul className="accordion-list">
              <li><button>Üzləşmə aktları</button></li>
              <li><button>Qaimələr üzrə hesabat</button></li>
              <li><button>Pulun hərəkəti hesabatı</button></li>
              <li><button>Alış-satış hesabatı</button></li>
              <li><button>Gəlir və xərc hesabatı</button></li>
              <li><button>Borclar cədvəli</button></li>
            </ul>
          )}
        </li>

      </ul>
    </aside>
  );
};

export default AccordionSidebar;
