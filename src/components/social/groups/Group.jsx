import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GroupDropdown from '../../dropdwons/GroupDropdown';

const Group = () => {

    const dropdownRef = useRef(null);

    const navigate = useNavigate();

    const handleGroupClick = (id) => {
        navigate(`/groups/${id}`);
    };


    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdownId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const groups = [
        { id: 1, img: "/assets/group-img2.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 2, img: "/assets/group-img3.jpg", name: "Framer Developerlər" },
        { id: 3, img: "/assets/group-img4.jpg", name: "Logo Design Az" },
        { id: 4, img: "/assets/group-img2.jpg", name: "Audit Consulting" },
        { id: 5, img: "/assets/group-img5.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 6, img: "/assets/group-img2.jpg", name: "Baku Expat Property" },
        { id: 7, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 8, img: "/assets/group-img6.jpg", name: "Vergi və Hesabatlar" },
        { id: 9, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 10, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 11, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 12, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 13, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 14, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 16, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 17, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 18, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 19, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 20, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 21, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
        { id: 22, img: "/assets/group-img6.jpg", name: "Mühasibatlıq uçotu və audit" },
    ]

    const [openDropdownId, setOpenDropdownId] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdownId(prev => (prev === id ? null : id));
    };


    return (
        <>
            {groups.map((group) => (
                <div key={group.id} className='group d-flex align-items-center'>

                    <div className="group-img" onClick={() => handleGroupClick(group.id)}>
                        <img src={group.img} alt="" />
                    </div>

                    <div className="group-infos d-flex flex-column" onClick={() => handleGroupClick(group.id)}>
                        <span>{group.name}</span>
                        <button className='btn-join'>Qrupa qoşul</button>
                    </div>

                    <button className="btn-more" ref={dropdownRef} onClick={() => toggleDropdown(group.id)}>
                        <img src="/assets/more-icon.svg" alt="" />


                        {openDropdownId === group.id && (
                            <GroupDropdown />
                        )}

                    </button>

                </div>
            ))}
        </>
    )
}

export default Group