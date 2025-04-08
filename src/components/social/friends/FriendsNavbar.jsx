import React, { useState } from 'react'

const FirendsNavbar = () => {

    const [activeId, setActiveId] = useState(1);

    const navbar = [
        { id: 1, content: "Bütün dostlar" },
        { id: 2, content: "Son əlavə olunanlar" },
        { id: 3, content: "Həmkarlar" },
        { id: 4, content: "İzlənənlər" },
        { id: 5, content: "İzlədiklərim" },
    ]

    return (
        <div className="friends-navbar d-flex">

            {navbar.map((nav) => (
                <button
                    key={nav.id}
                    className={`nav-btn ${activeId === nav.id ? 'active' : ''}`}
                    onClick={() => setActiveId(nav.id)}>{nav.content}
                </button>
            ))}

        </div>
    )
}

export default FirendsNavbar