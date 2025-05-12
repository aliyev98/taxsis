import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import LogoGreen from '../components/ui/LogoGreen';
// import 'react-pro-sidebar/dist/css/styles.css';

const TaxModuleSidebar2 = ({ onSelect }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeBtn, setActiveBtn] = useState(null);

    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleSubMenuClick = (id) => {
        setActiveSubMenu(activeSubMenu === id ? null : id);
    };

    const handleSelect = (id, payload) => {
        setActiveBtn(id);
        onSelect?.(payload);
    };

    const databaseMenuItems = [
        { id: 'db1', content: 'Qaimələr' },
        { id: 'db2', content: 'Əvəzləşmə reyestri' },
        { id: 'db3', content: 'Depozit çıxarışları' },
        { id: 'db4', content: 'Bank çıxarışları' },
        { id: 'db5', content: 'Kassa əməliyyatları' },
        { id: 'db6', content: 'Şirkət bazası' },
        { id: 'db7', content: 'Vergi hesabatları' }
    ];

    const initialBalancesItems = [
        { id: 'ib1', content: 'Daxili qalıqlar' },
        { id: 'ib2', content: 'Xarici qalıqlar' }
    ];

    const reportsMenuItems = [
        { id: 'rp1', content: 'Üzləşmə aktları' },
        { id: 'rp2', content: 'Qaimələr üzrə hesabat' },
        { id: 'rp3', content: 'Pulun hərəkəti hesabatı' },
        { id: 'rp4', content: 'Alış-satış hesabatı' },
        { id: 'rp5', content: 'Gəlir və xərc hesabatı' },
        { id: 'rp6', content: 'Borclar cədvəli' }
    ];

    const taxAccountingMenuItems = [
        { id: 'ta1', content: 'Əvəzləşmə' },
        { id: 'ta2', content: 'ƏDV bildirişi' },
        { id: 'ta3', content: 'Müqayisəli təhlil' }
    ];

    const analysesMenuItems = [
        // doldurun
    ];

    const parametersMenuItems = [
        { id: 'pr1', content: 'Bank hesabı' },
        { id: 'pr2', content: 'Xərc maddəsi' },
        { id: 'pr3', content: 'Aktiv maddəsi' },
        { id: 'pr4', content: 'Gəlir maddəsi' }
    ];

    return (
        <div className='tax-module-sidebar-2' style={{ display: 'flex' }}>
            <Sidebar className='custom-sidebar' collapsed={collapsed}>


                <div className='sidebar-header d-flex align-items-center justify-content-between'>
                    <LogoGreen />
                    <div className="icons d-flex align-items-center">
                        <div className="arrow-icon">
                            <img src="./assets/arrow-down.svg" alt="toggle" />
                        </div>
                        <div className="toogle-sidebar-icon" onClick={() => setCollapsed(p => !p)}>
                            <img src="/assets/sidebar-toggle.svg" alt="toggle" />
                        </div>
                    </div>
                </div>

                <Menu className='sidebar-menu' iconShape="circle">

                    {/* Məlumat bazası */}
                    <SubMenu
                       className="submenu activ "
                        label="Məlumat bazası"
                        icon={<img src="/assets/database-icon.svg" alt="db" />}
                        onClick={()=>handleSubMenuClick("reports")}
                    >
                        {databaseMenuItems.map((item, idx) => {
                            const isLast = idx === databaseMenuItems.length - 1;
                            const isActive = activeBtn === item.id;
                            return (
                                <button
                                    key={item.id}
                                    className={`btn-menu-item ${isActive ? 'active' : ''}`}
                                    onClick={() => handleSelect(item.id, item.content)}
                                >
                                    <img
                                        src={`/assets/${isLast ? 'tree-icon.svg' : 'tree-icon.svg'}`}
                                        alt={item.content}
                                    />
                                    <MenuItem className="menu-item">
                                        {item.content}
                                    </MenuItem>

                                </button>
                            );
                        })}

                        <SubMenu
                            className="submenu submenu-nested"
                            label="İlkin qalıqlar"
                            icon={<img src="/assets/tree-icon.svg" alt="ib" />}
                        >
                            {initialBalancesItems.map((item, idx) => {
                                const isLastNested = idx === initialBalancesItems.length - 1;
                                const isActive = activeBtn === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        className={`btn-menu-item ${isActive ? 'active' : ''}`}
                                        onClick={() => handleSelect(item.id, item.content)}
                                    >
                                        <img
                                            src={`/assets/${isLastNested ? 'tree-end.svg' : 'tree-icon.svg'}`}
                                            alt={item.content}
                                        />
                                        <MenuItem className="menu-item" >
                                            {item.content}
                                        </MenuItem>
                                    </button>
                                );
                            })}
                        </SubMenu>

                        <button
                            className={`btn-menu-item ${activeBtn === 'nr' ? 'active' : ''}`}
                            onClick={() => handleSelect('nr', 'Qeyri-rezidentlər')}
                        >
                            <img src="/assets/tree-end.svg" alt="nr" />
                            <MenuItem className="menu-item">Qeyri-rezidentlər</MenuItem>
                        </button>
                    </SubMenu>

                    {/* Hesabatlar */}
                    <SubMenu
                        className="submenu"
                        label="Hesabatlar"
                        icon={<img src="/assets/document-icon.svg" alt="rep" />}
                    >
                        {reportsMenuItems.map((item, idx) => {
                            const isLast = idx === reportsMenuItems.length - 1;
                            const isActive = activeBtn === item.id;
                            return (
                                <button
                                    key={item.id}
                                    className={`btn-menu-item ${isActive ? 'active' : ''}`}
                                    onClick={() => handleSelect(item.id, item.content)}
                                >
                                    <img
                                        src={`/assets/${isLast ? 'tree-end.svg' : 'tree-icon.svg'}`}
                                        alt={item.content}
                                    />
                                    <MenuItem className="menu-item">
                                        {item.content}
                                    </MenuItem>
                                </button>
                            );
                        })}
                    </SubMenu>

                    {/* Vergi uçotu */}
                    <SubMenu
                        className="submenu"
                        label="Vergi uçotu"
                        icon={<img src="/assets/percent-icon.svg" alt="tax" />}
                    >
                        {taxAccountingMenuItems.map((item, idx) => {
                            const isLast = idx === taxAccountingMenuItems.length - 1;
                            const isActive = activeBtn === item.id;
                            return (
                                <button
                                    key={item.id}
                                    className={`btn-menu-item ${isActive ? 'active' : ''}`}
                                    onClick={() => handleSelect(item.id, item.content)}
                                >
                                    <img
                                        src={`/assets/${isLast ? 'tree-end.svg' : 'tree-icon.svg'}`}
                                        alt={item.content}
                                    />
                                    <MenuItem className="menu-item">
                                        {item.content}
                                    </MenuItem>
                                </button>
                            );
                        })}
                    </SubMenu>

                    {/* Analizlər */}
                    <SubMenu
                        className="submenu"
                        label="Analizlər"
                        icon={<img src="/assets/bar-icon.svg" alt="an" />}
                    >
                        {analysesMenuItems.map((item, idx) => {
                            const isLast = idx === analysesMenuItems.length - 1;
                            const isActive = activeBtn === item.id;
                            return (
                                <button
                                    key={item.id}
                                    className={`btn-menu-item ${isActive ? 'active' : ''}`}
                                    onClick={() => handleSelect(item.id, item.content)}
                                >
                                    <img
                                        src={`/assets/${isLast ? 'tree-end.svg' : 'tree-icon.svg'}`}
                                        alt={item.content}
                                    />
                                    <MenuItem className="menu-item">
                                        {item.content}
                                    </MenuItem>
                                </button>
                            );
                        })}
                    </SubMenu>

                    {/* Parametrlər */}
                    <SubMenu
                        className="submenu"
                        label="Parametrlər"
                        icon={<img src="/assets/settings-icon.svg" alt="pr" />}
                    >
                        {parametersMenuItems.map((item, idx) => {
                            const isLast = idx === parametersMenuItems.length - 1;
                            const isActive = activeBtn === item.id;
                            return (
                                <button
                                    key={item.id}
                                    className={`btn-menu-item ${isActive ? 'active' : ''}`}
                                    onClick={() => handleSelect(item.id, item.content)}
                                >
                                    <img
                                        src={`/assets/${isLast ? 'tree-end.svg' : 'tree-icon.svg'}`}
                                        alt={item.content}
                                    />
                                    <MenuItem className="menu-item">
                                        {item.content}
                                    </MenuItem>
                                </button>
                            );
                        })}
                    </SubMenu>

                </Menu>
            </Sidebar>
        </div>
    );
};

export default TaxModuleSidebar2;
