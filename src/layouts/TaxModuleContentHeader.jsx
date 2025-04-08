import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarSelection } from "../redux/slices/taxModuleSlice";
import AddRowModal from "../components/modals/AddRowModal"; // ✅ Modal import

const TaxModuleContentHeader = ({ navBtns, title, headerBtns, columns, }) => {
  const dispatch = useDispatch();
  const activeNav = useSelector((state) => state.taxModuleSelection.navbarSelection);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false); // ✅ Modal görünürlüğü
  const [selectedNavForModal, setSelectedNavForModal] = useState(""); // ✅ Modal için seçim
  const dropdownRef = useRef();

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="content-header bg-danger d-flex flex-column position-relative">
      {/* 📌 HEADER */}
      <div className="header d-flex justify-content-between align-items-center">
        <div className="title">{title}</div>

        <div className="header-actions d-flex align-items-center gap-2 position-relative">

          {headerBtns?.map((btn) =>
            btn.className === "add" ? (
              <div key={btn.id} className="position-relative">
                <button
                  className={`d-flex align-items-center ${btn.className}`}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {btn.content}
                </button>

                {showDropdown && (
                  <div
                    className="dropdown-menu add-dropdown show d-flex flex-column"
                    ref={dropdownRef}
                  >
                    <div className="dropdown-title">Hansı menuya əlavə edilsin?</div>
                    {navBtns.map((item) => (
                      <button
                        key={item.id}
                        className="dropdown-item"
                        onClick={() => {
                          dispatch(setNavbarSelection(item.id));
                          setSelectedNavForModal(item.content);
                          setShowDropdown(false);
                          setShowModal(true);
                        }}
                      >
                        {item.content}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button key={btn.id} className={`d-flex align-items-center ${btn.className}`}>
                {btn.className === "filter" && (
                  <img
                    src="/assets/huni-icon.svg"
                    alt="filter icon"
                    style={{ width: 16, height: 16, marginRight: 6 }}
                  />
                )}
                {btn.content}
              </button>
            )
          )}


        </div>
      </div>

      {/* 📌 NAVBAR */}
      <div className="nav-links d-flex mt-3">
        {navBtns.map((btn) => (
          <button
            key={btn.id}
            className={activeNav === btn.id ? "active" : ""}
            onClick={() => dispatch(setNavbarSelection(btn.id))}
          >
            {btn.content}
          </button>
        ))}
      </div>

      {/* ✅ Modal bileşeni */}
      <AddRowModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={`${selectedNavForModal} - Əlavə et`}
        columns={columns}
      />
    </div>
  );
};

export default TaxModuleContentHeader;
