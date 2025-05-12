import React, { useState } from 'react';
import LogoGreen from '../components/ui/LogoGreen';

const ManualSidebar = () => {
    // State for toggling sections
    const [showDatabase, setShowDatabase] = useState(false);
    const [showInitial, setShowInitial] = useState(false);
    const [showReports, setShowReports] = useState(false);
    const [showTaxAccounting, setShowTaxAccounting] = useState(false);
    const [showAnalyses, setShowAnalyses] = useState(false);
    const [showParameters, setShowParameters] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(prev => !prev);
    };

    const databaseMenuItems = [
        { id: 'db1', content: 'Qaimələr' },
        { id: 'db2', content: 'Əvəzləşmə reyestri' },
        { id: 'db3', content: 'Depozit çıxarışları' },
        { id: 'db4', content: 'Bank çıxarışları' },
        { id: 'db5', content: 'Kassa əməliyyatları' },
        { id: 'db6', content: 'Şirkət bazası' },
        { id: 'db7', content: 'Vergi hesabatları' },
    ];

    const initialBalancesItems = [
        { id: 'ib1', content: 'Daxili qalıqlar' },
        { id: 'ib2', content: 'Xarici qalıqlar' },
    ];

    const reportsMenuItems = [
        { id: 'rp1', content: 'Üzləşmə aktları' },
        { id: 'rp2', content: 'Qaimələr üzrə hesabat' },
        { id: 'rp3', content: 'Pulun hərəkəti hesabatı' },
        { id: 'rp4', content: 'Alış-satış hesabatı' },
        { id: 'rp5', content: 'Gəlir və xərc hesabatı' },
        { id: 'rp6', content: 'Borclar cədvəli' },
    ];

    const taxAccountingMenuItems = [
        { id: 'ta1', content: 'Əvəzləşmə' },
        { id: 'ta2', content: 'ƏDV bildirişi' },
        { id: 'ta3', content: 'Müqayisəli təhlil' },
    ];

    const analysesMenuItems = [
        { id: 'an1', content: 'Satış analizi' },
        { id: 'an2', content: 'Xərc analizi' },
        { id: 'an3', content: 'Mənfəət analizi' },
    ];

    const parametersMenuItems = [
        { id: 'pr1', content: 'Bank hesabı' },
        { id: 'pr2', content: 'Xərc maddəsi' },
        { id: 'pr3', content: 'Aktiv maddəsi' },
        { id: 'pr4', content: 'Gəlir maddəsi' },
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
                    <div className=''>

                        <button className="sidebar-section"
                            onClick={() => {
                                if (isCollapsed) {
                                    // kiçik halda təkcə dropdown toggle et
                                    setShowDatabase(d => !d);
                                } else {
                                    // geniş halda inline menyunu açıb-bağla
                                    setShowDatabase(d => !d);
                                    setShowInitial(false);
                                    setShowReports(false);
                                    setShowTaxAccounting(false);
                                    setShowAnalyses(false);
                                    setShowParameters(false);
                                }
                            }}
                        >
                            <img src="/assets/database-icon.svg" alt="" />

                            {!isCollapsed && <span>Məlumat bazası</span>}

                        </button>

                        {showDatabase && !isCollapsed && (
                            <ul className="sidebar-list">

                                {databaseMenuItems.map(item => (
                                    <li key={item.id} className="sidebar-item">
                                        <img src="/assets/tree-icon.svg" alt="" />
                                        <span>
                                            {item.content}
                                        </span>
                                    </li>
                                ))}
                                <li className="sidebar-item has-sublist">

                                    <button
                                        className="sidebar-section sidebar-section-nested p-0"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setShowInitial(prev => !prev);
                                        }}
                                    >
                                        <img src="/assets/tree-icon.svg" alt="" />
                                        İlkin qalıqlar
                                    </button>

                                    {showInitial && (
                                        <ul className="sidebar-sublist">
                                            {initialBalancesItems.map(item => (
                                                <li key={item.id} className="sidebar-subitem">
                                                    <img src="/assets/tree-icon.svg" alt="" />
                                                    <span>
                                                        {item.content}
                                                    </span>
                                                </li>

                                            ))}
                                        </ul>
                                    )}

                                </li>
                                <li className="sidebar-item">
                                    <img src="/assets/tree-icon.svg" alt="" />
                                    <span>Qeyri-rezidentlər</span>
                                </li>
                            </ul>
                        )}

                        {showDatabase && isCollapsed && (
                            <div className="sidebar-dropdown position-absolute">
                                {databaseMenuItems.map(item => (
                                    <div key={item.id} className="dropdown-item">
                                        {item.content}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                    {/* Hesabatlar */}
                    <div className="">
                        <button className="sidebar-section"
                            onClick={() => {
                                setShowReports(prev => {
                                    const next = !prev;
                                    if (next) {
                                        // açılırkən digər bölmələri bağla
                                        setShowDatabase(false);
                                        setShowTaxAccounting(false);
                                        setShowAnalyses(false);
                                        setShowParameters(false);
                                        setShowInitial(false);
                                    }
                                    return next; // ikinci klikdə false olacaq
                                });
                            }}
                        >
                            <img src="/assets/document-icon.svg" alt="" />
                            <span>Hesabatlar</span>
                        </button>

                        {showReports && (
                            <ul className="sidebar-list">
                                {reportsMenuItems.map(item => (
                                    <li key={item.id} className="sidebar-item">
                                        <img src="/assets/tree-icon.svg" alt="" />
                                        <span>
                                            {item.content}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Vergi uçotu */}
                    <div className="">
                        <button className="sidebar-section"
                            onClick={() => {
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
                            }}
                        >
                            <img src="/assets/percent-icon.svg" alt="" />
                            <span>Vergi uçotu</span>
                        </button>

                        {showTaxAccounting && (
                            <ul className="sidebar-list">
                                {taxAccountingMenuItems.map(item => (
                                    <li key={item.id} className="sidebar-item">
                                        <img src="/assets/tree-icon.svg" alt="" />
                                        <span>
                                            {item.content}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Analizlər */}
                    <div className="">
                        <button className="sidebar-section"
                            onClick={() => {
                                setShowAnalyses(prev => {
                                    const next = !prev;
                                    if (next) {
                                        // açılırkən digər bölmələri bağla
                                        setShowDatabase(false);
                                        setShowReports(false);
                                        setShowTaxAccounting(false);
                                        setShowParameters(false);
                                        setShowInitial(false);
                                    }
                                    return next; // toggle edir: true → açılır, false → bağlanır
                                });
                            }}
                        >
                            <img src="/assets/bar-icon.svg" alt="" />
                            <span>Analizlər</span>
                        </button>

                        {showAnalyses && (
                            <ul className="sidebar-list">
                                {analysesMenuItems.map(item => (
                                    <li key={item.id} className="sidebar-item">
                                        <img src="/assets/tree-icon.svg" alt="" />
                                        <span>
                                            {item.content}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Parametrlər */}
                    <div className="">
                        <button className="sidebar-section"
                            onClick={() => {
                                setShowParameters(prev => {
                                    const next = !prev;
                                    if (next) {
                                        // Açılarkən digər bölmələri bağla
                                        setShowDatabase(false);
                                        setShowReports(false);
                                        setShowTaxAccounting(false);
                                        setShowAnalyses(false);
                                        setShowInitial(false);
                                    }
                                    return next; // toggle: true → aç, false → bağla
                                });
                            }}
                        >
                            <img src="/assets/settings-icon.svg" alt="" />
                            <span>Parametrlər</span>
                        </button>

                        {showParameters && (
                            <ul className="sidebar-list">
                                {parametersMenuItems.map(item => (
                                    <li key={item.id} className="sidebar-item">
                                        <img src="/assets/tree-icon.svg" alt="" />
                                        <span>
                                            {item.content}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ManualSidebar;
