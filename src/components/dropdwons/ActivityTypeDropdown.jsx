import React from 'react';

const ActivityTypeDropdown = ({ selectedOptions, onChange }) => {

    const activityOptions = [
        { id: 1, label: "Aqro-texniki" },
        { id: 2, label: "Maliyyə və investisiya" },
        { id: 3, label: "Mühasibatlıq uçotu" },
        { id: 4, label: "Satınalma" },
        { id: 5, label: "Mətbəə və nəşriyyat" },
        { id: 6, label: "Tədbir təşkilatçılıq" },
    ];

    return (
        <div className="activity-dropdown position-absolute d-flex flex-column">

            <div className="menu d-flex flex-column">
                <div className="title">Filterlə</div>

                <div className='selections d-flex flex-column'>
                    {
                        activityOptions.map((option) => (
                            <label key={option.id} className="d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes(option.id)}
                                    onChange={() => onChange(option.id)}
                                />
                                <span className="">{option.label}</span>
                            </label>
                        ))
                    }

                </div>



            </div>

        </div>
    );
};

export default ActivityTypeDropdown;
