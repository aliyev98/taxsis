import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNavbarSelection } from "../redux/slices/taxModuleSlice";
import AddRowModal from "../components/modals/AddRowModal";
import { openModal } from '../redux/slices/postSlice';
import ProfileDropdown from '../components/dropdwons/ProfileDropdown';

const TaxModuleHeader = ({ title, headerBtns, columns, navBtns }) => {

    const dispatch = useDispatch();
    const activeNav = useSelector((state) => state.taxModuleSelection.navbarSelection);

    const [showDropdown, setShowDropdown] = useState(false);
    const [showProfileFropdown, setShowProfileDropdown] = useState(false)
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
        <div className='module-header d-flex justify-content-between align-items-center'>


            <div className="header-btns d-flex justify-content-between">

                <div className="title">{title}</div>

                <div className="btns d-flex align-items-center">
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
                                        {navBtns?.map((item) => (
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
                                        src="/assets/filter-light-icon.svg"
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

            <div className="line"></div>

            <div className="topbar d-flex justify-content-between">
                <div className="search-input d-flex align-items-lg-center">
                    <div className="search-icon">
                        <img src="/assets/search-icon.svg" alt="" />
                    </div>
                    <input type="text" placeholder='Axtar' />
                </div>

                <div className='header-nav d-flex align-items-center'>

                    <button className="messages">
                        <img src="/assets/messages-icon.svg" alt="" />
                        <div className="red-dot"></div>
                    </button>

                    <button className="notifications">
                        <img src="/assets/notification-icon.svg" alt="" />
                        <div className="red-dot"></div>
                    </button>

                    <div className="profile-picture pointer" onClick={() => dispatch(openModal())}>
                        <img src="/assets/profile-picture.png" alt="" />

                    </div>

                </div>
            </div>



            {/* ✅ Modal bileşeni */}
            <AddRowModal
                show={showModal}
                onClose={() => setShowModal(false)}
                title={`${selectedNavForModal} - Əlavə et`}
                columns={columns}
            />

        </div>
    )
}

export default TaxModuleHeader