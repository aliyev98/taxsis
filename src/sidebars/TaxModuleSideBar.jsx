import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSidebarSelection } from '../redux/slices/taxModuleSlice'; // 🔁 path’i kendi yapına göre güncelle

const labelToPageKeyMap = {
  'Qaimələr': 'invoices',
  'Əvəzləşmə reyestri': 'substitution_register',
  'Deopzit çıxarışları': 'deposits_extracts',
  'Bank çıxarışları': 'bank_statements',
  'Kassa əməliyyatları': 'cash_opr',
  'Gömrük sənədləri': 'customs',
  'Şirkət bazası': 'company_base',
  'Vergi hesabatları': 'tax_reports',
  'İlkin qalıqlar': 'initial_balances',
  'Daxili qalıqlar': 'internal_balances',
  'Xarici qalıqlar': 'external_balances',
  'Qeyri rezidentlər': 'non_residents',
  'Hesabatlar': 'reports',
  'Üzləşmə aktları': 'confrontation_acts',
  'Qaimələr üzrə hesabat': 'invoice_reports',
  'Pulun hərəkəti hesabatı': 'cash_flow',
  'Alış-satış hesabatı': 'sales_report',
  'Gəlir və xərc hesabatı': 'profit_loss',
  'Borclar cədvəli': 'debt_table',
  'Vergi uçotu': 'tax_accounting',
  'Əvəzləşmə': 'substitution',
  'ƏDV bildirişi': 'vat_statement',
  'Müqayisəli təhlil': 'comparison_analysis',
  'Analizlər': 'analyses',
  'Parametrlər': 'parameters',
  'Bank hesabı': 'bank_account',
  'Xərc maddəsi': 'expense_item',
  'Aktiv maddəsi': 'asset_item',
  'Gəlir maddəsi': 'income_item',
};

const accordionMap = {
  database: [
    'Qaimələr', 'Əvəzləşmə reyestri', 'Deopzit çıxarışları', 'Bank çıxarışları',
    'Kassa əməliyyatları', 'Gömrük sənədləri', 'Şirkət bazası',
    'Vergi hesabatları', 'İlkin qalıqlar', 'Daxili qalıqlar', 'Xarici qalıqlar', 'Qeyri rezidentlər'
  ],
  reports: [
    'Üzləşmə aktları', 'Qaimələr üzrə hesabat', 'Pulun hərəkəti hesabatı',
    'Alış-satış hesabatı', 'Gəlir və xərc hesabatı', 'Borclar cədvəli'
  ],
  accounting: ['Əvəzləşmə', 'ƏDV bildirişi', 'Müqayisəli təhlil'],
  analyses: ['Analizlər'],
  params: ['Bank hesabı', 'Xərc maddəsi', 'Aktiv maddəsi', 'Gəlir maddəsi'],
};

const getAccordionIdForLabel = (label) => {
  for (const [id, items] of Object.entries(accordionMap)) {
    if (items.includes(label)) return id;
  }
  return null;
};

const TaxModuleSideBar = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState('Qaimələr');

  useEffect(() => {
    const stored = localStorage.getItem('taxModuleSidebarSelection');
    if (stored) {
      setActiveButton(stored);
      const selectedKey = labelToPageKeyMap[stored];
      if (selectedKey) dispatch(setSidebarSelection(selectedKey));

      const accordionId = getAccordionIdForLabel(stored);
      if (accordionId) {
        const element = document.getElementById(accordionId);
        if (element && !element.classList.contains('show')) {
          setTimeout(() => {
            const collapse = new window.bootstrap.Collapse(element, { toggle: true });
            collapse.show();
          }, 0);
        }
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('taxModuleSidebarSelection', activeButton);
  }, [activeButton]);

  const handleButtonClick = (label) => {
    setActiveButton(label);
    localStorage.setItem('taxModuleSidebarSelection', label);

    const selectedKey = labelToPageKeyMap[label];
    if (selectedKey) dispatch(setSidebarSelection(selectedKey));

    const accordionId = getAccordionIdForLabel(label);
    if (accordionId) {
      const element = document.getElementById(accordionId);
      if (element && !element.classList.contains('show')) {
        const collapse = new window.bootstrap.Collapse(element, { toggle: true });
        collapse.show();
      }
    }
  };

  return (
    <div className="tax-module-sidebar d-flex flex-column">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {/* Logo alanı */}
        <div
          className="sidebar-header d-flex align-items-center"
          data-bs-toggle="collapse"
          data-bs-target="#general"
          aria-expanded="true"
          aria-controls="general"
        >
          <div className="logo d-flex align-items-center gap-3">
            <div className="logo-img">
              <img src="./assets/logo.svg" alt="" />
              <div className="lines">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
            <span className="logo-text">TAXSIS</span>
          </div>
          <div className="icon">
            <img src="./assets/arrow-down.svg" alt="" />
          </div>
        </div>

        <div id="general" className="accordion-collapse collapse show">
          {/* Məlumat bazası */}
          <button
            className={`accordion-button collapsed ${activeButton === 'Məlumat bazası' ? 'active' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#database"
            aria-expanded="false"
            aria-controls="database"
            onClick={() => handleButtonClick('Məlumat bazası')}
          >
            <img src="./assets/database-icon.svg" alt="" />
            <span>Məlumat bazası</span>
          </button>

          <div id="database" className="accordion-collapse collapse">
            <div className="menu">
              {[
                'Qaimələr',
                'Əvəzləşmə reyestri',
                'Deopzit çıxarışları',
                'Bank çıxarışları',
                'Kassa əməliyyatları',
                'Gömrük sənədləri',
                'Şirkət bazası',
                'Vergi hesabatları'
              ].map((item, i) => (
                <div key={i}>
                  <img src="./assets/tree-icon.svg" alt="" />
                  <button
                    className={activeButton === item ? 'active' : ''}
                    onClick={() => handleButtonClick(item)}
                  >
                    {item}
                  </button>
                </div>
              ))}

              {/* İlkin qalıqlar */}
              <div
                className="accordion-butto collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#remains"
                aria-expanded="false"
                aria-controls="remains"
              >
                <img src="./assets/tree-icon.svg" alt="" />
                <button
                  className={activeButton === 'İlkin qalıqlar' ? 'active' : ''}
                  onClick={() => handleButtonClick('İlkin qalıqlar')}
                >
                  İlkin qalıqlar
                </button>
              </div>
            </div>

            <div id="remains" className="accordion-collapse collapse submenu">
              <div className="menu">
                {['Daxili qalıqlar', 'Xarici qalıqlar'].map((sub, i) => (
                  <div key={i}>
                    <img src="./assets/tree-icon.svg" alt="" />
                    <button
                      className={activeButton === sub ? 'active' : ''}
                      onClick={() => handleButtonClick(sub)}
                    >
                      {sub}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Qeyri rezidentlər */}
            <div className="menu">
              <div>
                <img src="./assets/tree-icon.svg" alt="" />
                <button
                  className={activeButton === 'Qeyri rezidentlər' ? 'active' : ''}
                  onClick={() => handleButtonClick('Qeyri rezidentlər')}
                >
                  Qeyri rezidentlər
                </button>
              </div>
            </div>
          </div>

          {/* Hesabatlar */}
          <button
            className={`accordion-button collapsed ${activeButton === 'Hesabatlar' ? 'active' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#reports"
            aria-expanded="false"
            aria-controls="reports"
            onClick={() => handleButtonClick('Hesabatlar')}
          >
            <img src="./assets/document-icon.svg" alt="" />
            <span>Hesabatlar</span>
          </button>

          <div id="reports" className="accordion-collapse collapse">
            <div className="menu">
              {[
                'Üzləşmə aktları',
                'Qaimələr üzrə hesabat',
                'Pulun hərəkəti hesabatı',
                'Alış-satış hesabatı',
                'Gəlir və xərc hesabatı',
                'Borclar cədvəli'
              ].map((item, i) => (
                <div key={i}>
                  <img src="./assets/tree-icon.svg" alt="" />
                  <button
                    className={activeButton === item ? 'active' : ''}
                    onClick={() => handleButtonClick(item)}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Vergi uçotu */}
          <button
            className={`accordion-button collapsed ${activeButton === 'Vergi uçotu' ? 'active' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#accounting"
            aria-expanded="false"
            aria-controls="accounting"
            onClick={() => handleButtonClick('Vergi uçotu')}
          >
            <img src="./assets/percent-icon.svg" alt="" />
            <span>Vergi uçotu</span>
          </button>

          <div id="accounting" className="accordion-collapse collapse">
            <div className="menu">
              {['Əvəzləşmə', 'ƏDV bildirişi', 'Müqayisəli təhlil'].map((item, i) => (
                <div key={i}>
                  <img src="./assets/tree-icon.svg" alt="" />
                  <button
                    className={activeButton === item ? 'active' : ''}
                    onClick={() => handleButtonClick(item)}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Analizlər */}
          <button
            className={`accordion-button collapsed ${activeButton === 'Analizlər' ? 'active' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#analyses"
            aria-expanded="false"
            aria-controls="analyses"
            onClick={() => handleButtonClick('Analizlər')}
          >
            <img src="./assets/bar-icon.svg" alt="" />
            <span>Analizlər</span>
          </button>

          <div id="analyses" className="accordion-collapse collapse">
            <div className="menu" />
          </div>

          {/* Parametrlər */}
          <button
            className={`accordion-button collapsed ${activeButton === 'Parametrlər' ? 'active' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#params"
            aria-expanded="false"
            aria-controls="params"
            onClick={() => handleButtonClick('Parametrlər')}
          >
            <img src="./assets/settings-icon.svg" alt="" />
            <span>Parametrlər</span>
          </button>

          <div id="params" className="accordion-collapse collapse">
            <div className="menu">
              {[
                'Bank hesabı',
                'Xərc maddəsi',
                'Aktiv maddəsi',
                'Gəlir maddəsi'
              ].map((item, i) => (
                <div key={i}>
                  <img src="./assets/tree-icon.svg" alt="" />
                  <button
                    className={activeButton === item ? 'active' : ''}
                    onClick={() => handleButtonClick(item)}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxModuleSideBar;