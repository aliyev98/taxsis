import React, { useState } from 'react'

const SideBar = () => {

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedButton(id); // Seçili butonu güncelle
  };

  const dbBtns = [
    { id: 1, content: 'Qaimələr' },
    { id: 2, content: 'Əvəzləşmə reyestri' },
    { id: 3, content: 'Depozit çıxarışları' },
    { id: 4, content: 'Bank çıxarışları' },
    { id: 5, content: 'Kassa əməliyyatları' },
    { id: 6, content: 'Gömrük sənədləri' },
    { id: 7, content: 'Şirkət bazası' },
    { id: 8, content: 'Vergi hesabatları' },
    { id: 9, content: 'İlkin qalıqlar' },
    { id: 10, content: 'Qeyri-rezidentlər' },
  ]

  const rprtsBtns = [
    { id: 1, content: 'Üzləşmə aktları' },
    { id: 2, content: 'Qaimələr üzrə hesabat' },
    { id: 3, content: 'Pulun hərəkəti hesabatı' },
    { id: 4, content: 'Alış-satış hesabatı' },
    { id: 5, content: 'Gəlir və xərc hesabatı' },
    { id: 6, content: 'Borclar cədvəli' }
  ]

  const accountingBtns = [
    { id: 1, content: 'Əvəzləşmə' },
    { id: 2, content: 'ƏDV bildirişi' },
    { id: 3, content: 'Müqayisəli təhlil' },
  ]

  const paramsBtns = [
    { id: 1, content: 'Bank hesabı' },
    { id: 2, content: 'Xərc maddəsi' },
    { id: 3, content: 'Aktiv maddəsi' },
    { id: 4, content: 'Gəlir maddəsi' },
  ]

  return (
    <div className='panel-sidebar d-flex flex-column justify-content-between'>

      {/* general acan */}
      <div className="accordion general-accordion accordion-flush" id="generalAccordion">

        <button className="accordion-button general-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#generalCollaps" aria-expanded="false" aria-controls="generalCollaps">

          <div className="logo d-flex align-items-center">

            <div className="logo-img">
              <img src="./assets/logo.svg" alt="" />
              <div className="lines">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
            <span className='logo-text'>TAXSIS</span>

          </div>

          <div className="icon">
            <img src="./assets/arrow-down.svg" alt="" />
          </div>

        </button>

      </div>

      {/* general acilan */}
      <div id="generalCollaps" className="accordion-collapse general collapse show" data-bs-parent="#generalAccordion">

        {/* database acan */}
        <div className="accordion database-accordion accordion-flush" id="databaseAccordion">

          <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#databaseCollaps" aria-expanded="false" aria-controls="databaseCollaps">

            <img src="./assets/database-icon.svg" alt="" />

            <span>Məlumat bazası</span>

          </button>

        </div>

        {/* database acilan */}
        <div id="databaseCollaps" className="accordion-collapse database collapse show" data-bs-parent="#databaseAccordion">

          {
            dbBtns.map((btn) => (
              <div  key={btn.id}  className="btn-div d-flex">
                <img src="./assets/tree-icon.svg" alt="" />
                <button className={`${selectedButton === btn.id ? 'active' : ''}`} onClick={() => handleButtonClick(btn.id)} >{btn.content}</button>
              </div>
            ))
          }


        </div>

        {/* ////// */}

        {/* hesabat acan */}
        <div className="accordion reports-accordion accordion-flush" id="reportsAccordion">

          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#reportsCollaps" aria-expanded="false" aria-controls="reportsCollaps">

            <img src="./assets/document-icon.svg" alt="" />

            <span>Hesabatlar</span>

          </button>

        </div>

        {/* hesabat acilan */}
        <div id="reportsCollaps" className="accordion-collapse reports collapse" data-bs-parent="#reportsAccordion">

          {
            rprtsBtns.map((btn) => (
              <div key={btn.id} className="btn-div d-flex">
                <img src="./assets/tree-icon.svg" alt="" />
                <button>{btn.content}</button>
              </div>

            ))
          }

        </div>

        {/* ////// */}

        {/* accounting acan */}
        <div className="accordion accounting-accordion accordion-flush" id="accountingAccordion">

          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accountingCollaps" aria-expanded="false" aria-controls="accountingCollaps">

            <img src="./assets/percent-icon.svg" alt="" />

            <span>Vergi uçotu</span>

          </button>

        </div>

        {/* accounting acilan */}
        <div id="accountingCollaps" className="accordion-collapse accounting collapse" data-bs-parent="#accountingAccordion">

          {
            accountingBtns.map((btn) => (
              <div key={btn.id} className="btn-icon d-flex">
                <img src="./assets/tree-icon.svg" alt="" />
                <button >{btn.content}</button>
              </div>

            ))
          }
        </div>

        {/* ////// */}

        {/* analysis acan */}
        <div className="accordion analysis-accordion accordion-flush" id="analysisAccordion">

          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#analysisCollaps" aria-expanded="false" aria-controls="analysisCollaps">

            <img src="./assets/bar-icon.svg" alt="" />
            <span>Analizlər</span>

          </button>

        </div>

        {/* analysis acilan */}
        <div id="analysisCollaps" className="accordion-collapse analysis collapse" data-bs-parent="#analysisAccordion">

          {
            paramsBtns.map((btn) => (
              <div key={btn.id} className="btn-div d-flex">
                <img src="./assets/tree-icon.svg" alt="" />
                <button>{btn.content}</button>
              </div>

            ))
          }

        </div>

        {/* ////// */}

        {/* params acan */}
        <div className="accordion params-accordion accordion-flush" id="paramsAccordion">

          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paramsCollaps" aria-expanded="false" aria-controls="paramsCollaps">

            <img src="./assets/settings-icon.svg" alt="" />
            <span>Parametrlər</span>

          </button>

        </div>

        {/* params acilan */}
        <div id="paramsCollaps" className="accordion-collapse params collapse" data-bs-parent="#paramsAccordion">

          {
            paramsBtns.map((btn) => (
              <div key={btn.id} className="btn-div d-flex">
                <img src="./assets/tree-icon.svg" alt="" />
                <button >{btn.content}</button>
              </div>

            ))
          }

        </div>


      </div>

      <div className="sidebar-footer d-flex flex-column">

        <button className='refresh-database'>Məlumat bazasını yenilə</button>


        <div className="footer-links d-flex flex-column">

          <a href="">Məxfilik siyasəti</a>
          <a href="">Qaydalar və şərtlər</a>

          <div className="copyright d-flex align-items-center">
            <img src="./assets/copyright-icon.svg" alt="" />
            <span>Bütün hüquqlar qorunur</span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default SideBar