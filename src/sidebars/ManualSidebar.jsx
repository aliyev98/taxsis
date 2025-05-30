import React, { useState } from 'react';
import LogoGreen from '../components/ui/LogoGreen';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarSelection } from '../redux/slices/taxModuleSlice';




const ManualSidebar = () => {
    // State for toggling sections
    const [showDatabase, setShowDatabase] = useState(false);
    const [showInitial, setShowInitial] = useState(false);
    const [showReports, setShowReports] = useState(false);
    const [showTaxAccounting, setShowTaxAccounting] = useState(false);
    const [showAnalyses, setShowAnalyses] = useState(false);
    const [showParameters, setShowParameters] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const [activeSubItem, setActiveSubItem] = useState(null);

    const dispatch = useDispatch();

    // const sidebar = useSelector((state) => ))

    const handleSectionSelect = (section) => {
        dispatch(setSidebarSelection(section));
    };

    const handleItemSelect = (itemId) => {
        setActiveSubItem(itemId);
        dispatch(setSidebarSelection(itemId));
    };



    const toggleSidebar = () => {
        setIsCollapsed(prev => !prev);
    };

    const databaseMenuItems = [
        { id: 'invoices', content: 'Qaimələr' },
        { id: 'substitution_register', content: 'Əvəzləşmə reyestri' },
        { id: 'deposits_extracts', content: 'Depozit çıxarışları' },
        { id: 'bank_statements', content: 'Bank çıxarışları' },
        { id: 'cash_opr', content: 'Kassa əməliyyatları' },
        { id: 'custom_documents', content: 'Gömrük sənədləri' },
        { id: 'company_base', content: 'Şirkət bazası' },
        { id: 'tax_reports', content: 'Vergi hesabatları' },
    ];

    const initialBalancesItems = [
        { id: 'internal_balances', content: 'Daxili qalıqlar' },
        { id: 'external_balances', content: 'Xarici qalıqlar' },
    ];

    const reportsMenuItems = [
        { id: 'confrontation_acts', content: 'Üzləşmə aktları' },
        { id: 'invoice_reports', content: 'Qaimələr üzrə hesabat' },
        { id: 'cash_flow', content: 'Pulun hərəkəti hesabatı' },
        { id: 'purchase_and_sales_reports', content: 'Alış-satış hesabatı' },
        { id: 'profit_loss', content: 'Gəlir və xərc hesabatı' },
        { id: 'debts_table', content: 'Borclar cədvəli' },
    ];

    const taxAccountingMenuItems = [
        { id: 'substitution', content: 'Əvəzləşmə' },
        { id: 'vat_return', content: 'ƏDV bildirişi' },
        { id: 'comparison_analysis', content: 'Müqayisəli təhlil' },
    ];

    const analysesMenuItems = [
        // { id: 'an1', content: 'Satış analizi' },
        // { id: 'an2', content: 'Xərc analizi' },
        // { id: 'an3', content: 'Mənfəət analizi' },
    ];

    const parametersMenuItems = [
        { id: 'bank_account', content: 'Bank hesabı' },
        { id: 'expense_item', content: 'Xərc maddəsi' },
        { id: 'asset_item', content: 'Aktiv maddəsi' },
        { id: 'income_item', content: 'Gəlir maddəsi' },
    ];

    // Helper to close all except one
    const closeAll = (exceptSetter) => {
        setShowDatabase(false);
        setShowInitial(false);
        setShowReports(false);
        setShowTaxAccounting(false);
        setShowAnalyses(false);
        setShowParameters(false);
        exceptSetter(true);
    };

    return (
        <div className={`manual-sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="tax-module-sidebar">

                <div className={`sidebar-header ${isCollapsed ? 'collapsed' : ''}`}>
                    <LogoGreen />

                    <div className="icons">

                        <div className="arrow-icon">
                            <img src="./assets/arrow-down.svg" alt="" />
                        </div>

                        <div
                            className="toggle-sidebar-icon"
                            onClick={toggleSidebar}
                        >
                            <img src="/assets/sidebar-toggle.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className={`sidebar-body ${isCollapsed ? 'collapsed' : ''}`}>

                    {/* Məlumat bazası */}
                    <div>
                        <button
                            className={`sidebar-section ${isCollapsed ? 'collapsed' : ''} ${isCollapsed && showDatabase ? 'active' : ''} ${showDatabase ? 'open' : ''} `}
                            onClick={() => {
                                if (isCollapsed) {
                                    // collapsed halda toggle et: əgər açıqdırsa bağla, bağlıdırsa aç
                                    setShowDatabase(prev => {
                                        const next = !prev;
                                        // digər bölmələri hər zaman bağla
                                        setShowReports(false);
                                        setShowTaxAccounting(false);
                                        setShowAnalyses(false);
                                        setShowParameters(false);
                                        setShowInitial(false);
                                        return next;
                                    });
                                } else {
                                    // geniş halda inline siyahını aç-bağla
                                    setShowDatabase(d => {
                                        const next = !d;
                                        if (next) {
                                            setShowReports(false);
                                            setShowTaxAccounting(false);
                                            setShowAnalyses(false);
                                            setShowParameters(false);
                                            setShowInitial(false);
                                        }
                                        return next;
                                    });
                                }
                            }}

                        >
                            <img src="/assets/database-icon.svg" alt="" />
                            {!isCollapsed && <span>Məlumat bazası</span>}
                        </button>

                        {/* ——————————————————————————————————————————— */}
                        {/* Geniş halda inline siyahı */}
                        {showDatabase && !isCollapsed && (
                            <ul className="sidebar-list">
                                {databaseMenuItems.map(item => (
                                    <li
                                        key={item.id}
                                        className="sidebar-item"
                                        onClick={() => handleItemSelect(item.id)}
                                    >
                                        <img src="/assets/tree-icon.svg" alt="" />
                                        <span className={`${activeSubItem === item.id ? 'active' : ''}`}>{item.content}</span>
                                    </li>
                                ))}

                                {/* İlkin qalıqlar */}
                                <li className="sidebar-item has-sublist">
                                    <button
                                        className="sidebar-section sidebar-section-nested"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setShowInitial(i => !i);
                                        }}
                                    >
                                        <img src="/assets/tree-icon.svg" alt="" />
                                        <span>İlkin qalıqlar</span>
                                    </button>
                                    {showInitial && (
                                        <ul className="sidebar-sublist">
                                            {initialBalancesItems.map((item, idx) => {
                                                const isLast = idx === initialBalancesItems.length - 1;
                                                return (
                                                    <li
                                                        key={item.id}
                                                        className={`sidebar-subitem ${activeSubItem === item.id ? 'subactive' : ''}`}
                                                        onClick={() => handleItemSelect(item.id)}
                                                    >
                                                        <img
                                                            src={isLast ? "/assets/tree-end.svg" : "/assets/tree-icon.svg"}
                                                            alt=""
                                                        />
                                                        <span>{item.content}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>


                                <li className='sidebar-item'>
                                    <img src="/assets/tree-end.svg" alt="" />
                                    <span
                                        className={`sidebar-item ${activeSubItem === 'non_residents' ? 'active' : ''}`}
                                        onClick={() => handleItemSelect("non_residents")}
                                    >
                                        Qeyri-rezidentlər
                                    </span>
                                </li>
                            </ul>
                        )}

                        {/* ——————————————————————————————————————————— */}
                        {/* Collapsed halda tam nested dropdown */}
                        {showDatabase && isCollapsed && (
                            <div className="sidebar-dropdown position-absolute">
                                <ul className="dropdown-list">
                                    {databaseMenuItems.map(item => (
                                        <li
                                            key={item.id}
                                            className={`dropdown-item ${activeSubItem === item.id ? 'active' : ''}`}
                                            onClick={() => handleItemSelect(item.id)}
                                        >
                                            <img src="/assets/tree-icon.svg" alt="" />
                                            <span>{item.content}</span>
                                        </li>
                                    ))}

                                    {/* İlkin qalıqlar dropdown içində */}
                                    <li className="dropdown-item has-sublist">
                                        <button
                                            className="sidebar-section sidebar-section-nested"
                                            onClick={e => {
                                                e.stopPropagation();
                                                setShowInitial(i => !i);
                                            }}
                                        >
                                            <img src="/assets/tree-icon.svg" alt="" />
                                            <span>İlkin qalıqlar</span>
                                        </button>
                                        {showInitial && (
                                            <ul className="dropdown-sublist">
                                                {initialBalancesItems.map((item, idx) => {
                                                    const isLast = idx === initialBalancesItems.length - 1;
                                                    return (
                                                        <li
                                                            key={item.id}
                                                            className={`dropdown-subitem ${activeSubItem === item.id ? 'active' : ''}`}
                                                            onClick={() => handleItemSelect(item.id)}
                                                        >
                                                            <img
                                                                src={isLast ? "/assets/tree-end.svg" : "/assets/tree-icon.svg"}
                                                                alt=""
                                                            />
                                                            <span>{item.content}</span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </li>

                                    <li className={`dropdown-item ${activeSubItem === 'non_residents' ? 'active' : ''}`}
                                        onClick={() => handleItemSelect("non_residents")}>
                                        <img src="/assets/tree-end.svg" alt="" />
                                        <span>
                                            Qeyri-rezidentlər
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Hesabatlar */}
                    <div>
                        <button
                            className={`sidebar-section ${isCollapsed ? 'collapsed' : ''} ${isCollapsed && showReports ? 'active' : ''} ${showReports ? 'open' : ''}`}
                            onClick={() => {
                                if (isCollapsed) {
                                    setShowReports(prev => {
                                        const next = !prev;
                                        setShowDatabase(false);
                                        setShowTaxAccounting(false);
                                        setShowAnalyses(false);
                                        setShowParameters(false);
                                        setShowInitial(false);
                                        return next;
                                    });
                                } else {
                                    setShowReports(r => {
                                        const next = !r;
                                        if (next) {
                                            setShowDatabase(false);
                                            setShowTaxAccounting(false);
                                            setShowAnalyses(false);
                                            setShowParameters(false);
                                            setShowInitial(false);
                                        }
                                        return next;
                                    });
                                }
                            }}
                        >
                            <img src="/assets/document-icon.svg" alt="" />
                            {!isCollapsed && <span>Hesabatlar</span>}
                        </button>

                        {/* Geniş halda inline siyahı */}
                        {showReports && !isCollapsed && (
                            <ul className="sidebar-list">
                                {reportsMenuItems.map((item, idx) => {
                                    const isLast = idx === reportsMenuItems.length - 1;
                                    return (
                                        <li
                                            key={item.id}
                                            className="sidebar-item"
                                            onClick={() => handleItemSelect(item.id)}
                                        >
                                            <img
                                                src={isLast ? "/assets/tree-end.svg" : "/assets/tree-icon.svg"}
                                                alt=""
                                            />
                                            <span className={`${activeSubItem === item.id ? 'active' : ''}`}>
                                                {item.content}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        {/* Collapsed halda tam nested dropdown */}
                        {showReports && isCollapsed && (
                            <div className="sidebar-dropdown position-absolute">
                                <ul className="dropdown-list">
                                    {reportsMenuItems.map((item, idx) => {
                                        const isLast = idx === reportsMenuItems.length - 1;
                                        return (
                                            <li
                                                key={item.id}
                                                className={`dropdown-item ${activeSubItem === item.id ? 'active' : ''}`}
                                                onClick={() => handleItemSelect(item.id)}
                                            >
                                                <img
                                                    src={isLast ? "/assets/tree-end.svg" : "/assets/tree-icon.svg"}
                                                    alt=""
                                                />
                                                <span>{item.content}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Vergi uçotu */}
                    <div>
                        <button
                            className={`sidebar-section ${isCollapsed ? 'collapsed' : ''} ${isCollapsed && showTaxAccounting ? 'active' : ''} ${showTaxAccounting ? 'open' : ''}`}
                            onClick={() => {
                                if (isCollapsed) {
                                    // collapsed halda dropdown-u toggle elə və digər bölmələri bağla
                                    setShowTaxAccounting(prev => {
                                        const next = !prev;
                                        if (next) {
                                            setShowDatabase(false);
                                            setShowReports(false);
                                            setShowAnalyses(false);
                                            setShowParameters(false);
                                            setShowInitial(false);
                                        }
                                        return next;
                                    });
                                } else {
                                    // geniş halda inline menyunu aç-bağla və digər bölmələri bağla
                                    setShowTaxAccounting(prev => {
                                        const next = !prev;
                                        if (next) {
                                            setShowDatabase(false);
                                            setShowReports(false);
                                            setShowAnalyses(false);
                                            setShowParameters(false);
                                            setShowInitial(false);
                                        }
                                        return next;
                                    });
                                }
                            }}
                        >
                            <img src="/assets/percent-icon.svg" alt="" />
                            {!isCollapsed && <span>Vergi uçotu</span>}
                        </button>

                        {/* geniş inline */}
                        {showTaxAccounting && !isCollapsed && (
                            <ul className="sidebar-list">
                                {taxAccountingMenuItems.map((item, idx) => {
                                    const isLast = idx === taxAccountingMenuItems.length - 1;
                                    return (
                                        <li
                                            key={item.id}
                                            className='sidebar-item'
                                            onClick={() => handleItemSelect(item.id)}
                                        >
                                            <img
                                                src={isLast ? "/assets/tree-end.svg" : "/assets/tree-icon.svg"}
                                                alt=""
                                            />
                                            <span className={`${activeSubItem === item.id ? 'active' : ''}`}>{item.content}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        {/* collapsed dropdown */}
                        {showTaxAccounting && isCollapsed && (
                            <div className="sidebar-dropdown position-absolute">
                                <ul className="dropdown-list">
                                    {taxAccountingMenuItems.map((item, idx) => {
                                        const isLast = idx === taxAccountingMenuItems.length - 1;
                                        return (
                                            <li
                                                key={item.id}
                                                className={`dropdown-item ${activeSubItem === item.id ? 'active' : ''}`}
                                                onClick={() => handleItemSelect(item.id)}
                                            >
                                                <img
                                                    src={isLast ? "/assets/tree-end.svg" : "/assets/tree-icon.svg"}
                                                    alt=""
                                                />
                                                <span>{item.content}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Analizlər */}
                    <div>
                        <button
                            className={`sidebar-section ${isCollapsed ? 'collapsed' : ''} ${isCollapsed && showAnalyses ? 'active' : ''} ${showAnalyses ? 'open' : ''}`}
                            onClick={() => {
                                // həm collapsed, həm geniş halda toggle eləyərkən eyni məntiqi işlət
                                setShowAnalyses(prev => {
                                    const next = !prev;
                                    if (next) {
                                        // açılarkən digər bütün bölmələri bağla
                                        setShowDatabase(false);
                                        setShowReports(false);
                                        setShowTaxAccounting(false);
                                        setShowParameters(false);
                                        setShowInitial(false);
                                    }
                                    return next;
                                });
                            }}

                        >
                            <img src="/assets/bar-icon.svg" alt="" />
                            {!isCollapsed && <span>Analizlər</span>}
                        </button>

                        {/* geniş inline */}
                        {showAnalyses && !isCollapsed && (
                            <ul className="sidebar-list">
                                {analysesMenuItems.map((item, idx) => {
                                    const isLast = idx === analysesMenuItems.length - 1;
                                    return (
                                        <li
                                            key={item.id}
                                            className='sidebar-item'
                                            onClick={() => handleItemSelect(item.id)}
                                        >
                                            <img
                                                src={isLast ? "/assets/tree-end.svg" : "/assets/tree-icon.svg"}
                                                alt=""
                                            />
                                            <span className={`${activeSubItem === item.id ? 'active' : ''}`}>{item.content}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        {/* collapsed dropdown */}
                        {showAnalyses && isCollapsed && (
                            <div className="sidebar-dropdown position-absolute">
                                <ul className="dropdown-list">
                                    {analysesMenuItems.map((item, idx) => {
                                        const isLast = idx === analysesMenuItems.length - 1;
                                        return (
                                            <li
                                                key={item.id}
                                                className={`dropdown-item ${activeSubItem === item.id ? 'active' : ''}`}
                                                onClick={() => handleItemSelect(item.id)}
                                            >
                                                <img
                                                    src={isLast ? "/assets/tree-end.svg" : "/assets/tree-icon.svg"}
                                                    alt=""
                                                />
                                                <span>{item.content}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Parametrlər */}
                    <div>
                        <button
                            className={`sidebar-section ${isCollapsed ? 'collapsed' : ''} ${isCollapsed && showParameters ? 'active' : ''} ${showParameters ? 'open' : ''}`}
                            onClick={() => {
                                setShowParameters(prev => {
                                    const next = !prev;
                                    if (next) {
                                        // açılarkən digər bütün bölmələri bağla
                                        setShowDatabase(false);
                                        setShowReports(false);
                                        setShowTaxAccounting(false);
                                        setShowAnalyses(false);
                                        setShowInitial(false);
                                    }
                                    return next;
                                });
                            }}

                        >
                            <img src="/assets/settings-icon.svg" alt="" />
                            {!isCollapsed && <span>Parametrlər</span>}
                        </button>

                        {/* geniş inline siyahı */}
                        {showParameters && !isCollapsed && (
                            <ul className="sidebar-list">
                                {parametersMenuItems.map((item, idx) => {
                                    const isLast = idx === parametersMenuItems.length - 1;
                                    return (
                                        <li
                                            key={item.id}
                                            className="sidebar-item"
                                            onClick={() => handleItemSelect(item.id)}
                                        >
                                            <img
                                                src={isLast ? "/assets/tree-end.svg" : "/assets/tree-icon.svg"}
                                                alt=""
                                            />
                                            <span className={`${activeSubItem === item.id ? 'active' : ''}`}>{item.content}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        {/* collapsed halda tam nested dropdown */}
                        {showParameters && isCollapsed && (
                            <div className="sidebar-dropdown position-absolute">
                                <ul className="dropdown-list">
                                    {parametersMenuItems.map((item, idx) => {
                                        const isLast = idx === parametersMenuItems.length - 1;
                                        return (
                                            <li
                                                key={item.id}
                                                className={`dropdown-item ${activeSubItem === item.id ? 'active' : ''}`}
                                                onClick={() => handleItemSelect(item.id)}
                                            >
                                                <img
                                                    src={isLast ? "/assets/tree-end.svg" : "/assets/tree-icon.svg"}
                                                    alt=""
                                                />
                                                <span>{item.content}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>

                </div>

                <div className="sidebar-footer d-flex flex-column">

                    <button className="refresh-btn">
                        Məlumat bazasını yenilə
                    </button>

                    <div className="sidebar-footer-actions d-flex flex-column">
                        <a className='action' href="#">Məxfilik siyasəti</a>
                        <a className='action' href="#">Qaydalar və şərtlər</a>
                        <a className='action' href="#">
                            <img src="/assets/copyright-icon.svg" alt="" />
                            <span>Bütün hüquqlar qorunur</span>
                        </a>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default ManualSidebar;
