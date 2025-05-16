    import React, { useState, useRef, useEffect } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { setNavbarSelection } from "../redux/slices/taxModuleSlice";

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
                        <div className="buttons d-flex align-items-center">

                            <button
                                className="btn-columns d-flex align-items-center"
                                onClick={() => setShowColumnMenu((p) => !p)}
                            >
                                <span>Sütunlar</span>
                                <img src="/assets/layout-icon.svg" alt="" />

                                {showColumnMenu && (
                                    <ColumnVisibilityDropdown colSpans={colSpans} table={table} columns={columns} />
                                )}

                            </button>

                            {customHeaderButtons && customHeaderButtons}

                            <button className="export">Export</button>



                        </div>
                    )}
                </div>
                
            </div>
        );
    };

    export default TableHeader;