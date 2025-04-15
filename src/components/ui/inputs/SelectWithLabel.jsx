import React from 'react';

const SelectWithLabel = ({ options = [], name, label, onChange, value }) => {
    return (
        <div className="select-group">
            <div className="select-div">
                <label htmlFor={name}>{label}</label>
                <select
                    name={name}
                    id={name}
                    onChange={onChange}
                    value={value}
                >
                    {value === "default" && (
                        <option value="default" hidden>Maliyyə</option>
                    )}
                    {options.map((opt, index) => (
                        <option key={index} value={opt.value || opt}>
                            {opt.label || opt}
                        </option>
                    ))}
                </select>

            </div>

            <img src="/assets/arrow-down.svg" className="select-icon" alt="select-icon" />
        </div>
    );
};

export default SelectWithLabel;
