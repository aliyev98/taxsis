// src/layouts/TableHeader.jsx

import React, { useState, useRef, useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarSelection } from "../redux/slices/taxModuleSlice";
import ColumnVisibilityDropdown from "../components/dropdwons/ColumnVisibilityDropdown";
import ConfrontationActsModal from "../components/modals/ConfrontationActsModal";
import SentModal from "../components/modals/SentModal";
// (eğer SentModal’ı sonraki aşamada kullanacaksanız import edebilirsiniz)
// import SentModal from "../components/modals/SentModal";

const TableHeader = ({
    isEditing,
    setIsEditing,
    columnDropdownRef,
    setShowColumnMenu,
    showColumnMenu,
    customHeaderButtons,
    table,
    columns,
    colSpans,
    navBtns,
}) => {
    const dispatch = useDispatch();
    const activeNav = useSelector(
        (state) => state.taxModuleSelection.navbarSelection
    );

    const [showConfrontationModal, setShowConfrontationModal] = useState(false);
    const [showSentModal, setShowSentModal] = useState(false);

    const dropdownRef = useRef();



    // Dropdown dışında tıklanınca sütun menüsünü kapat
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setShowColumnMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [setShowColumnMenu]);

    // Sağ taraftaki butonlar
    const customButtons = [
        {
            id: 1,
            content: "Düzəliş et",
            className: "btn custom-btn",
            onClick: () => setIsEditing(true),
        },
        {
            id: 2,
            content: "Çap et",
            className: "btn custom-btn",
        },
        {
            id: 3,
            content: "Göndər",
            className: "btn-send btn custom-btn",
            onClick: () => setShowConfrontationModal(true)
        },
    ];

    return (
        <>
            <div className="table-header d-flex align-items-center justify-content-between">
                {/* NAV BUTTONS */}
                <div className="left-side d-flex align-items-center">
                    <div className="nav-links d-flex">
                        {navBtns?.map((btn) => (
                            <button
                                key={btn.id}
                                className={activeNav === btn.id ? "active" : ""}
                                onClick={() => dispatch(setNavbarSelection(btn.id))}
                            >
                                {btn.content}
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT-SIDE BUTTONS */}
                <div
                    className="right-side d-flex position-relative"
                    ref={columnDropdownRef}
                >
                    {isEditing ? (
                        <button
                            className="btn btn-primary save"
                            onClick={() => setIsEditing(false)}
                        >
                            Dəyişiklikləri yadda saxla
                        </button>
                    ) : (
                        <div className="buttons d-flex align-items-center" ref={dropdownRef}>
                            {/* Columns toggle */}
                            <button
                                className="btn-columns d-flex align-items-center"
                                onClick={() => setShowColumnMenu((p) => !p)}
                            >
                                <span>Sütunlar</span>
                                <img src="/assets/layout-icon.svg" alt="" />
                                {showColumnMenu && (
                                    <ColumnVisibilityDropdown
                                        table={table}
                                        columns={columns}
                                        colSpans={colSpans}
                                    />
                                )}
                            </button>

                            {customHeaderButtons && customButtons.map((btn) => (
                                <button
                                    key={btn.id}
                                    className={btn.className}
                                    onClick={btn.onClick}
                                >
                                    {btn.content}
                                </button>
                            ))}

                            <button className="export">Export</button>
                        </div>
                    )}
                </div>
            </div>

            {showConfrontationModal && (
                <ConfrontationActsModal
                    isOpen={showConfrontationModal}
                    onClose={() => setShowConfrontationModal(false)}
                    onSend={() => {
                        setShowConfrontationModal(false);
                        setShowSentModal(true);
                    }}
                />
            )}
            {showSentModal && (
                <SentModal
                    isOpen={showSentModal}
                    onClose={() => setShowSentModal(false)}
                />
            )}


        </>
    );
};

export default TableHeader;
