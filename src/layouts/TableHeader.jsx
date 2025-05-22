import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarSelection } from "../redux/slices/taxModuleSlice";
import ConfrontationActsModal from "../components/modals/COnfrontationActsModal";
import SentModal from "../components/modals/SentModal";

const TableHeader = ({
    isEditing,
    setIsEditing,
    columnDropdownRef,
    setShowColumnMenu,
    showColumnMenu,
    customHeaderButtons,
    ColumnVisibilityDropdown,
    table,
    columns,
    colSpans,
    navBtns
}) => {
    const dispatch = useDispatch();
    const activeNav = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const [showSendModal, setShowSendModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNextModal, setShowNextModal] = useState(false);
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

    // event delegation: eğer tıklanan element veya içindeki bir parent .btn-send ise modal aç
    const handleButtonsClick = (e) => {
        if (e.target.closest(".btn-send")) {
            setShowSendModal(true);
        }
    };

    return (
        <>
            <div className="table-header d-flex align-items-center justify-content-between">
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

                <div className="right-side d-flex position-relative" ref={columnDropdownRef}>
                    {isEditing ? (
                        <button
                            className="btn btn-primary save"
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            Dəyişiklikləri yadda saxla
                        </button>
                    ) : (
                        <div
                            className="buttons d-flex align-items-center"
                            onClick={handleButtonsClick}
                        >
                            <button
                                className="btn-columns d-flex align-items-center"
                                onClick={() => setShowColumnMenu((p) => !p)}
                            >
                                <span>Sütunlar</span>
                                <img src="/assets/layout-icon.svg" alt="" />
                                {showColumnMenu && (
                                    <ColumnVisibilityDropdown
                                        colSpans={colSpans}
                                        table={table}
                                        columns={columns}
                                    />
                                )}
                            </button>

                            {customHeaderButtons}

                            <button className="export">Export</button>
                        </div>
                    )}
                </div>
            </div>

            {showSendModal && (
                <ConfrontationActsModal
                    isOpen={showSendModal}
                    onClose={() => setShowSendModal(false)}
                    onSend={() => {
                        setShowSendModal(false);
                        setShowNextModal(true);
                    }}
                />
            )}

            {showNextModal && (
                <SentModal
                    isOpen={showNextModal}
                    onClose={() => setShowNextModal(false)}
                />
            )}
        </>
    );
};

export default TableHeader;
