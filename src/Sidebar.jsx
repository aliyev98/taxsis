import React from 'react';

const TaxModuleSideBar = () => {
  return (
    <div className="tax-module-sidebar d-flex flex-column">
      <div className="accordion" id="accordionSidebar">

        {/* 🔽 Logo və ümumi başlıq */}
        <div
          className="sidebar-header d-flex align-items-center justify-content-between p-3"
          data-bs-toggle="collapse"
          data-bs-target="#generalCollapse"
          aria-expanded="true"
          aria-controls="generalCollapse"
          style={{ cursor: 'pointer' }}
        >
          <div className="logo d-flex align-items-center gap-2">
            {/* ✅ Burada logo şəkil olacaq */}
            <div className="logo-img">LOGO</div>
            <span className="logo-text fw-bold">TAXSIS</span>
          </div>
          <div className="icon">
            <img src="./assets/arrow-down.svg" alt="toggle" />
          </div>
        </div>

        {/* 🔽 Accordion İçeriği */}
        <div id="generalCollapse" className="accordion-collapse collapse show">
          {/* 📁 Məlumat bazası */}
          <div className="accordion-item border-0">
            <button
              className="accordion-button collapsed px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#databaseCollapse"
              aria-expanded="false"
              aria-controls="databaseCollapse"
            >
              Məlumat bazası
            </button>

            <div id="databaseCollapse" className="accordion-collapse collapse">
              <div className="accordion-body d-flex flex-column gap-1 ps-4">

                {/* Alt bölmələr */}
                {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((item) => (
                  <button key={item} className="btn btn-sm text-start">{item}</button>
                ))}

                {/* 📁 H alt başlıq */}
                <div className="accordion" id="subAccordion">
                  <button
                    className="accordion-button collapsed p-0 bg-transparent border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#subHCollapse"
                    aria-expanded="false"
                    aria-controls="subHCollapse"
                    style={{ paddingLeft: '0.75rem' }}
                  >
                    H
                  </button>

                  <div id="subHCollapse" className="accordion-collapse collapse ps-3">
                    <div className="accordion-body d-flex flex-column gap-1">
                      <button className="btn btn-sm text-start">W</button>
                      <button className="btn btn-sm text-start">Z</button>
                    </div>
                  </div>
                </div>

                {/* Q */}
                <button className="btn btn-sm text-start">Q</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TaxModuleSideBar;
