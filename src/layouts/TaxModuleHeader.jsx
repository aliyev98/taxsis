import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarSelection } from "../redux/slices/taxModuleSlice";
import AddRowModal from "../components/modals/AddRowModal";
import AddBankModal from "../components/modals/AddBankModal"; // ✅ Yeni modalı import ediyoruz
import { openModal } from '../redux/slices/postSlice';
import AddAccountModal from "../components/modals/AddAccountModal";
import AddRowDropdown from "../components/dropdwons/AddRowDropdown";

const TaxModuleHeader = ({ title, headerBtns, columns, navBtns }) => {
    const dispatch = useDispatch();
    const activeNav = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const [showDropdown, setShowDropdown] = useState(false);
    const [showProfileFropdown, setShowProfileDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false); // AddRowModal için
    const [showBankModal, setShowBankModal] = useState(false); // ✅ AddBankModal için
    const [showAccountModal, setShowAccountModal] = useState(false); // ✅ AddAccountModal için state
    const [selectedNavForModal, setSelectedNavForModal] = useState("");
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
        <div className='tax-module-header d-flex justify-content-between align-items-center'>

            <div className="header-btns d-flex justify-content-between">

                <div className="title">{title}</div>

                <div className="btns d-flex align-items-center">
                    {headerBtns?.map((btn) => {
                        if (btn.className === "add") {
                            return (
                                <div key={btn.id} className="position-relative">
                                    <button
                                        className={`d-flex align-items-center ${btn.className}`}
                                        onClick={() => setShowDropdown(!showDropdown)}
                                    >
                                        {btn.content}
                                    </button>

                                    {showDropdown && (
                                        <AddRowDropdown
                                            navBtns={navBtns}
                                            setNavbarSelection={(id) => dispatch(setNavbarSelection(id))}
                                            setSelectedNavForModal={setSelectedNavForModal}
                                            setShowModal={setShowModal}
                                            setShowDropdown={setShowDropdown}
                                            dropdownRef={dropdownRef}
                                        />
                                    )}
                                </div>
                            );
                        }

                        else if (btn.className === "add-bank") {
                            return (
                                <button
                                    key={btn.id}
                                    className={`d-flex align-items-center ${btn.className}`}
                                    onClick={() => setShowBankModal(true)} // ✅ Yeni modalı açıyoruz
                                >
                                    {btn.content}
                                </button>
                            );
                        }

                        else if (btn.className === "add-account") {
                            return (
                                <button
                                    key={btn.id}
                                    className={`d-flex align-items-center ${btn.className}`}
                                    onClick={() => setShowAccountModal(true)} // ✅ AddAccountModal açılıyor
                                >
                                    {btn.content}
                                </button>
                            );
                        }


                        else {
                            return (
                                <button key={btn.id} className={`d-flex align-items-center ${btn.className}`}>
                                    {btn.className === "filter" && (
                                        <img
                                            src="/assets/filter-light-icon.svg"
                                            alt="filter icon"
                                            style={{ width: 16, height: 16, marginRight: 6 }}
                                        />
                                    )}
                                    {btn.content}
                                </button>
                            );
                        }
                    })}
                </div>

            </div>

            <div className="line"></div>

            <div className="topbar d-flex justify-content-between">
                <div className="search-input d-flex align-items-lg-center">
                    <div className="search-icon">
                        <img src="/assets/search-icon.svg" alt="" />
                    </div>
                    <input type="text" placeholder='Axtar' />
                </div>

                <div className='header-nav d-flex align-items-center'>

                    {/* <button className="messages">
                        <img src="/assets/messages-icon.svg" alt="" />
                        <div className="red-dot"></div>
                    </button> */}

                    <button className="notifications">
                        <img src="/assets/notification-icon.svg" alt="" />
                        <div className="red-dot"></div>
                    </button>

                    <div className="profile-picture pointer" onClick={() => dispatch(openModal())}>
                        <img src="/assets/profile-picture.png" alt="" />
                    </div>

                </div>
            </div>

            {/* ✅ Modal bileşenleri */}
            <AddRowModal
                show={showModal}
                onClose={() => setShowModal(false)}
                title={`${selectedNavForModal} - Əlavə et`}
                columns={columns}
            />

            <AddBankModal
                show={showBankModal}
                onClose={() => setShowBankModal(false)}
            />

            <AddAccountModal
                show={showAccountModal}
                onClose={() => setShowAccountModal(false)}
                title="Yeni Hesab Əlavə Et"
                columns={columns}
            />

        </div>
    )
}

export default TaxModuleHeader;
