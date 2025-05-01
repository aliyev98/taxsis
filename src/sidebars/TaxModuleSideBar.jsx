/* TaxModuleSideBar.jsx – Tüm kod eksiksiz */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSidebarSelection } from '../redux/slices/taxModuleSlice'; // 🔁 path’i kendi yapına göre güncelle

const labelToPageKeyMap = {
  'Qaimələr': 'invoices',
  'Əvəzləşmə reyestri': 'substitution_register',
  'Deopzit çıxarışları': 'deposits_extracts',
  'Bank çıxarışları': 'bank_statements',
  'Kassa əməliyyatları': 'cash_opr',
  'Gömrük sənədləri': 'custom_documents',
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
  'Alış-satış hesabatı': 'purchase_and_sales_reports',
  'Gəlir və xərc hesabatı': 'profit_loss',
  'Borclar cədvəli': 'debts_table',
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
    'Qaimələr',
    'Əvəzləşmə reyestri',
    'Deopzit çıxarışları',
    'Bank çıxarışları',
    'Kassa əməliyyatları',
    'Gömrük sənədləri',
    'Şirkət bazası',
    'Vergi hesabatları',
  ],
  remains: ['Daxili qalıqlar', 'Xarici qalıqlar'],
  reports: [
    'Üzləşmə aktları',
    'Qaimələr üzrə hesabat',
    'Pulun hərəkəti hesabatı',
    'Alış-satış hesabatı',
    'Gəlir və xərc hesabatı',
    'Borclar cədvəli',
  ],
  accounting: ['Əvəzləşmə', 'ƏDV bildirişi', 'Müqayisəli təhlil'],
  analyses: ['Analizlər'],
  params: ['Bank hesabı', 'Xərc maddəsi', 'Aktiv maddəsi', 'Gəlir maddəsi'],
};

const collapsedGroups = [
  {
    id: 'database',
    label: 'Məlumat bazası',
    icon: 'database-icon.svg',
    items: [
      ...accordionMap.database,
      'İlkin qalıqlar',
      ...accordionMap.remains,
      'Qeyri rezidentlər',
    ],
  },
  {
    id: 'reports',
    label: 'Hesabatlar',
    icon: 'document-icon.svg',
    items: accordionMap.reports,
  },
  {
    id: 'accounting',
    label: 'Vergi uçotu',
    icon: 'percent-icon.svg',
    items: accordionMap.accounting,
  },
  {
    id: 'analyses',
    label: 'Analizlər',
    icon: 'bar-icon.svg',
    items: accordionMap.analyses,
  },
  {
    id: 'params',
    label: 'Parametrlər',
    icon: 'settings-icon.svg',
    items: accordionMap.params,
  },
];

const getAccordionIdForLabel = (label) => {
  for (const [id, items] of Object.entries(accordionMap)) {
    if (items.includes(label)) return id;
  }
  return null;
};

const TaxModuleSideBar = () => {
  const dispatch = useDispatch();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);
  const [openSections, setOpenSections] = useState({
    database: true,
    remains: false,
    reports: false,
    accounting: false,
    analyses: false,
    params: false,
  });

  const toggleSection = (section) =>
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));

  const [activeButton, setActiveButton] = useState(
    () => localStorage.getItem('taxModuleSidebarSelection') || 'Qaimələr'
  );

  useEffect(() => {
    localStorage.setItem('taxModuleSidebarSelection', activeButton);
    const pageKey = labelToPageKeyMap[activeButton];
    if (pageKey) dispatch(setSidebarSelection(pageKey));
  }, [activeButton, dispatch]);

  useEffect(() => {
    const accordionId = getAccordionIdForLabel(activeButton);
    if (accordionId) {
      const elem = document.getElementById(accordionId);
      if (elem && !elem.classList.contains('show')) {
        new window.bootstrap.Collapse(elem, { toggle: true }).show();
      }
    }
    if (['Daxili qalıqlar', 'Xarici qalıqlar'].includes(activeButton)) {
      const rem = document.getElementById('remains');
      if (rem && !rem.classList.contains('show')) {
        new window.bootstrap.Collapse(rem, { toggle: true }).show();
      }
    }
  }, [activeButton]);

  const handleButtonClick = (label) => {
    setActiveButton(label);
    if (label === 'İlkin qalıqlar') {
      const rem = document.getElementById('remains');
      if (rem) new window.bootstrap.Collapse(rem, { toggle: true }).toggle();
    }
  };

  return (
    <div
      className={`tax-module-sidebar d-flex flex-column ${
        isCollapsed ? 'collapsed' : ''
      }`}
    >
      {!isCollapsed ? (
        <div className="accordion" id="accordionPanelsStayOpenExample">
          {/* Logo */}
          <div className="sidebar-header d-flex align-items-center">
            <div className="logo d-flex align-items-center gap-3">
              <div className="logo-img">
                <img src="./assets/logo.svg" alt="" />
                <div className="lines">
                  <div className="line1" />
                  <div className="line2" />
                  <div className="line3" />
                </div>
              </div>
              <span className="logo-text">TAXSIS</span>
            </div>

            <div className="arrow-icon">
              <img src="./assets/arrow-down.svg" alt="" />
            </div>

            <div
              className="toggle-sidebar-icon"
              onClick={() => setIsCollapsed((p) => !p)}
            >
              <img src="/assets/sidebar-toggle.svg" alt="" />
            </div>
          </div>

          <div id="general" className="accordion-collapse collapse show">
            {/* ---------- Məlumat bazası ---------- */}
            <button
              className={`accordion-button ${
                activeButton === 'Məlumat bazası' ? 'active' : ''
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#database"
              aria-expanded={accordionMap.database.includes(activeButton)}
              aria-controls="database"
              onClick={() => handleButtonClick('Məlumat bazası')}
            >
              <img src="./assets/database-icon.svg" alt="" />
              <span>Məlumat bazası</span>
            </button>

            <div
              id="database"
              className={`accordion-collapse collapse ${
                accordionMap.database.includes(activeButton) ||
                ['İlkin qalıqlar', 'Daxili qalıqlar', 'Xarici qalıqlar'].includes(
                  activeButton
                )
                  ? 'show'
                  : ''
              }`}
              data-bs-parent="#general"
            >
              <div className="menu">
                {accordionMap.database.map((item) => (
                  <div key={item} className="d-flex align-items-center">
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
                <div className="d-flex align-items-center">
                  <img src="./assets/tree-icon.svg" alt="" />
                  <button
                    className={activeButton === 'İlkin qalıqlar' ? 'active' : ''}
                    onClick={() => handleButtonClick('İlkin qalıqlar')}
                    data-bs-toggle="collapse"
                    data-bs-target="#remains"
                    aria-expanded={[
                      'İlkin qalıqlar',
                      'Daxili qalıqlar',
                      'Xarici qalıqlar',
                    ].includes(activeButton)}
                    aria-controls="remains"
                  >
                    İlkin qalıqlar
                  </button>
                </div>
              </div>

              {/* ---------- İlkin qalıqlar alt ---------- */}
              <div
                id="remains"
                className={`accordion-collapse collapse submenu ${
                  ['Daxili qalıqlar', 'Xarici qalıqlar'].includes(activeButton)
                    ? 'show'
                    : ''
                }`}
              >
                <div className="menu">
                  {accordionMap.remains.map((sub) => (
                    <div key={sub} className="d-flex align-items-center ps-4">
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
                <div className="d-flex align-items-center">
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

            {/* ---------- Hesabatlar ---------- */}
            <button
              className={`accordion-button collapsed ${
                activeButton === 'Hesabatlar' ? 'active' : ''
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#reports"
              aria-expanded={false}
              aria-controls="reports"
              onClick={() => handleButtonClick('Hesabatlar')}
            >
              <img src="./assets/document-icon.svg" alt="" />
              <span>Hesabatlar</span>
            </button>
            <div
              id="reports"
              className="accordion-collapse collapse"
              data-bs-parent="#general"
            >
              <div className="menu">
                {accordionMap.reports.map((item) => (
                  <div key={item} className="d-flex align-items-center">
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

            {/* ---------- Vergi uçotu ---------- */}
            <button
              className={`accordion-button collapsed ${
                activeButton === 'Vergi uçotu' ? 'active' : ''
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accounting"
              aria-expanded={false}
              aria-controls="accounting"
              onClick={() => handleButtonClick('Vergi uçotu')}
            >
              <img src="./assets/percent-icon.svg" alt="" />
              <span>Vergi uçotu</span>
            </button>
            <div
              id="accounting"
              className="accordion-collapse collapse"
              data-bs-parent="#general"
            >
              <div className="menu">
                {accordionMap.accounting.map((item) => (
                  <div key={item} className="d-flex align-items-center">
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

            {/* ---------- Analizlər ---------- */}
            <button
              className={`accordion-button collapsed ${
                activeButton === 'Analizlər' ? 'active' : ''
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#analyses"
              aria-expanded={false}
              aria-controls="analyses"
              onClick={() => handleButtonClick('Analizlər')}
            >
              <img src="./assets/bar-icon.svg" alt="" />
              <span>Analizlər</span>
            </button>
            <div
              id="analyses"
              className="accordion-collapse collapse"
              data-bs-parent="#general"
            >
              <div className="menu" />
            </div>

            {/* ---------- Parametrlər ---------- */}
            <button
              className={`accordion-button collapsed ${
                activeButton === 'Parametrlər' ? 'active' : ''
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#params"
              aria-expanded={false}
              aria-controls="params"
              onClick={() => handleButtonClick('Parametrlər')}
            >
              <img src="./assets/settings-icon.svg" alt="" />
              <span>Parametrlər</span>
            </button>
            <div
              id="params"
              className="accordion-collapse collapse"
              data-bs-parent="#general"
            >
              <div className="menu">
                {accordionMap.params.map((item) => (
                  <div key={item} className="d-flex align-items-center">
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
      ) : (
        /* ---------- Collapsed görünüm ---------- */
        <div className="collapsed-icons d-flex flex-column">
          <div className="sidebar-header-collapsed d-flex flex-column align-items-center">
            <div className="logo d-flex align-items-center gap-3">
              <div className="logo-img">
                <img src="./assets/logo.svg" alt="" />
                <div className="lines">
                  <div className="line1" />
                  <div className="line2" />
                  <div className="line3" />
                </div>
              </div>
            </div>

            <div className="arrow-icon">
              <img src="./assets/arrow-down.svg" alt="" />
            </div>

            <div
              className="toggle-sidebar-icon"
              onClick={() => setIsCollapsed((p) => !p)}
            >
              <img src="/assets/sidebar-toggle-open.svg" alt="" />
            </div>
          </div>

          {collapsedGroups.map((group) => (
            <div className="icon-wrapper position-relative" key={group.id}>
              <img
                src={`./assets/${group.icon}`}
                alt={group.label}
                className={`sidebar-icon ${
                  openSections[group.id] && activeGroup === group.id ? 'active' : ''
                }`}
                onClick={() => {
                  toggleSection(group.id);
                  setActiveGroup(group.id);
                }}
              />
              {openSections[group.id] && (
                <div className="icon-dropdown position-absolute">
                  {group.items.map((item) => (
                    <div
                      className="dropdown-button position-relative d-flex align-items-center"
                      key={item}
                    >
                      <img src="/assets/tree-icon.svg" alt="" />
                      <button
                        className={`dropdown-item ${activeButton === item ? 'active' : ''}`}
                        onClick={() => setActiveButton(item)}
                      >
                        <span>{item}</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaxModuleSideBar;
