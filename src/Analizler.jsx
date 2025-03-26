// Analizler.jsx
import React, { useState } from "react";
import CustomTable from "./CustomTable";

const Analizler = () => {
  const [activeNav, setActiveNav] = useState("onlayn"); // "onlayn" / "fiziki"
  const [showModal, setShowModal] = useState(false);

  // Tablo verileri local state’te tutuyoruz, “ekle” butonuna basınca satır ekleyeceğiz
  const [onlaynData, setOnlaynData] = useState([
    { no: 1, obyektKodu: "OBY123", cemiSatis: 1000 },
  ]);
  const [fizikiData, setFizikiData] = useState([
    { no: 1, xalisSatis: 900, geriQaytarma: 50, tarix: "2024-03-20", vergi: 18 },
  ]);

  // Onlayn kassa kolonları
  const onlaynColumns = [
    { accessorKey: "no", header: "No" },
    { accessorKey: "obyektKodu", header: "Obyektin kodu" },
    { accessorKey: "cemiSatis", header: "Cəmi satış" },
  ];

  // Fiziki kassa kolonları
  const fizikiColumns = [
    { accessorKey: "no", header: "No" },
    { accessorKey: "xalisSatis", header: "Xalis satış" },
    { accessorKey: "geriQaytarma", header: "Geri qaytarma" },
    { accessorKey: "tarix", header: "Tarix" },
    { accessorKey: "vergi", header: "Vergi" },
  ];

  const columns = activeNav === "onlayn" ? onlaynColumns : fizikiColumns;
  const data = activeNav === "onlayn" ? onlaynData : fizikiData;

  // Modal input state'leri
  const [formInputs, setFormInputs] = useState({});

  const handleInputChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleAddRow = () => {
    // Seçili nav'a göre tabloya ekle
    if (activeNav === "onlayn") {
      setOnlaynData([...onlaynData, { no: onlaynData.length + 1, ...formInputs }]);
    } else {
      setFizikiData([...fizikiData, { no: fizikiData.length + 1, ...formInputs }]);
    }
    setFormInputs({});
    setShowModal(false);
  };

  return (
    <div>
      {/* NAVBAR */}
      <div className="d-flex justify-content-between mb-3">
        <div>
          <button
            className={`btn me-2 ${activeNav === "onlayn" ? "btn-primary" : "btn-light"}`}
            onClick={() => setActiveNav("onlayn")}
          >
            onlayn kassa
          </button>
          <button
            className={`btn ${activeNav === "fiziki" ? "btn-primary" : "btn-light"}`}
            onClick={() => setActiveNav("fiziki")}
          >
            fiziki kassa
          </button>
        </div>

        {/* Ekle Butonu */}
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Ekle
        </button>
      </div>

      {/* TABLO */}
      <CustomTable data={data} columns={columns} />

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Yeni {activeNav === "onlayn" ? "Onlayn" : "Fiziki"} Kassa Satırı</h5>
                <button className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                {/* Seçili sekmeye göre inputlar */}
                {columns
                  .filter((col) => col.accessorKey !== "no")
                  .map((col) => (
                    <div key={col.accessorKey} className="mb-2">
                      <label>{col.header}</label>
                      <input
                        name={col.accessorKey}
                        className="form-control"
                        value={formInputs[col.accessorKey] || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  ))}
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleAddRow}>
                  +
                </button>
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analizler;
