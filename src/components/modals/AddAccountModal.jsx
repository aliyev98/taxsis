// components/modals/AddAccountModal.jsx

import React, { useState } from "react";

const AddAccountModal = ({ show, onClose, title, columns }) => {
  const [formData, setFormData] = useState({});

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Sayfa arkasını karartan overlay */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal kutusu */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content d-flex flex-column">

            <div className="modal-header">
              <div className="modal-title">{title || "Yeni Hesab Əlavə Et"}</div>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body d-flex flex-column">
              {columns
                ?.filter((col) => col.accessorKey !== "no") // ✅ "no" kolonunu yine hariç tutuyoruz
                .map((col) => (
                  <div className="input-div" key={col.accessorKey}>
                    <label htmlFor={col.accessorKey}>
                      {col.header}
                    </label>
                    <input
                      type="text"
                      id={col.accessorKey}
                      name={col.accessorKey}
                      value={formData[col.accessorKey] || ""}
                      onChange={handleChange}
                    />
                  </div>
                ))}
            </div>

            <div className="modal-footer">
              <button onClick={onClose} type="button" className="btn btn-primary">
                Əlavə et
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AddAccountModal;
