import React, { useState } from 'react'

const VacanciesNavbar = () => {

    const [activeId, setActiveId] = useState(1);

    const navbar = [
        { id: 1, content: "Bütün" },
        { id: 2, content: "Remote" },
        { id: 3, content: "Frilans" },
        { id: 4, content: "Ofis daxili" },
    ]

    return (
        <div className='vacancies-navbar'>

            {
                navbar.map((nav) => (
                    <button
                    key={nav.id}
                    onClick={() => setActiveId(nav.id)}
                    className={activeId === nav.id ? 'active' : ''}
                    >
                        {nav.content}
                    </button>
                ))
            }

        </div>
    )
}

export default VacanciesNavbar