import React from 'react';

const sidebarData = [/* yukarıdaki JSON verisi buraya gelecek */];

const TreeItem = ({ title }) => (
  <div className="tree-item d-flex align-items-center">
    <img src="/assets/tree-icon.svg" alt="" />
    <button>{title}</button>
  </div>
);

const AccordionSection = ({ id, icon, title, children }) => (
  <>
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#${id}`}
      aria-expanded="false"
      aria-controls={id}
    >
      <div className="d-flex align-items-center gap-2">
        <img src={icon} alt="" />
        <span>{title}</span>
      </div>
    </button>

    <div id={id} className="accordion-collapse collapse">
      <div className="menu">
        {children.map((item, i) =>
          typeof item === 'string' ? (
            <TreeItem key={i} title={item} />
          ) : (
            <div key={i}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${id}-child-${i}`}
                aria-expanded="false"
                aria-controls={`${id}-child-${i}`}
              >
                <img src="/assets/tree-icon.svg" alt="" />
                <span>{item.title}</span>
              </button>

              <div id={`${id}-child-${i}`} className="accordion-collapse collapse">
                <div className="menu ps-3">
                  {item.children.map((child, j) => (
                    <TreeItem key={j} title={child} />
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  </>
);

const TaxModuleSideBar = () => {
  return (
    <div className="tax-module-sidebar d-flex flex-column">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {/* Üst Logo */}
        <div
          className="sidebar-header d-flex align-items-center"
          data-bs-toggle="collapse"
          data-bs-target="#general"
          aria-expanded="true"
          aria-controls="general"
        >
          <div className="logo d-flex align-items-center gap-3">
            <div className="logo-img">
              <img src="/assets/logo.svg" alt="" />
              <div className="lines">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
            <span className="logo-text">TAXSIS</span>
          </div>
          <div className="icon">
            <img src="/assets/arrow-down.svg" alt="" />
          </div>
        </div>

        {/* İçerik Accordionları */}
        <div id="general" className="accordion-collapse collapse show">
          {sidebarData.map((section) => (
            <AccordionSection
              key={section.id}
              id={section.id}
              icon={section.icon}
              title={section.title}
              children={section.children}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaxModuleSideBar;
