import React, { useState } from 'react'

const EventsNavbar = () => {

    const [activeId, setActiveId] = useState(1);

    const navbar = [
        { id: 1, content: "Bütün" },
        { id: 2, content: "Maraqlı olanlar" },
        { id: 3, content: "Gedəcəklərim" },
    ]

    return (
        <div className='events-navbar d-flex justify-content-between'>

            <div>
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


            <div className="select-div">
                <select name="" id="">
                    <option value="">Ən son</option>
                </select>
            </div>

        </div>
    )
}

export default EventsNavbar