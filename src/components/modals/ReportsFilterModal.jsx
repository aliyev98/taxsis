import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const ReportsFilterModal = ({ onClose }) => {

    const [selectedValue, setSelectedValue] = useState("vat");
    const [inputValue, setInputValue] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const calendarRef = useRef(null);

    const handleInputChange = (e) => {
        let value = e.target.value;

        if (selectedValue === "name") {
            value = value.replace(/[^A-Za-zƏəĞğİıÖöŞşÜüÇç\s]/g, "");
        } else if (selectedValue === "vat") {
            value = value.replace(/\D/g, "");
        }

        setInputValue(value);
    };

    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const handleSelect = (ranges) => {
        setRange([ranges.selection]);
        setShowCalendar(false);
    };

    const formatRange = () => {
        return `${format(range[0].startDate, "dd.MM.yyyy")} - ${format(
            range[0].endDate,
            "dd.MM.yyyy"
        )}`;
    };

    // 📌 Takvim dışına tıklanınca kapatma
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(e.target)
            ) {
                setShowCalendar(false);
            }
        };

        if (showCalendar) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showCalendar]);

    return (
        <div className="modal show overflow-hidden d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>

            <div className="modal-dialog w-50" role="document">

                <div className="modal-content">

                    <div className="modal-header">
                        <div className="modal-title">Hesabatlar filter</div>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body d-flex flex-column">

                        <div className="select-div d-flex justify-content-between">
                            <div className="select">
                                <label htmlFor="">Növü</label>
                                <select>
                                    <option value="creditor">Kreditor</option>
                                    <option value="debtor">Debitor</option>
                                    <option value="foregin_creditor">Xarici kreditor</option>
                                    <option value="foregin_debtor">Xarici debitor</option>
                                </select>
                            </div>
                            <div className="icon">
                                <img src="/assets/arrow-down.svg" alt="" />
                            </div>
                        </div>

                        <div className="select-div d-flex justify-content-between">
                            <div className="select">
                                <label htmlFor="">Kontragent</label>
                                <select
                                    value={selectedValue}
                                    onChange={(e) => {
                                        setSelectedValue(e.target.value);
                                        setInputValue("");
                                    }}
                                >
                                    <option value="vat">VÖEN</option>
                                    <option value="name">Ad</option>
                                </select>
                            </div>
                            <div className="icon">
                                <img src="/assets/arrow-down.svg" alt="" />
                            </div>
                        </div>

                        <div className="input-div">
                            <label htmlFor={selectedValue}>
                                {selectedValue === "vat" ? "VÖEN" : "Ad"}
                            </label>
                            <input
                                type="text"
                                id={selectedValue}
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder={
                                    selectedValue === "vat"
                                        ? "VÖEN daxil edin"
                                        : "Ad daxil edin"
                                }
                            />
                        </div>

                        <div className="input-div position-relative">

                            <div className="calendar-input d-flex align-items-center" onClick={() => setShowCalendar((p) => !p)}
                            >
                                <div className="input d-flex flex-column">
                                    <label htmlFor="">Tarix aralığı</label>
                                    <input type="text" value={formatRange()} readOnly />
                                </div>
                                <div className="icon">
                                    <img src="/assets/calendar-icon.svg" alt="calendar" />
                                </div>
                            </div>

                            {showCalendar && (
                                <div ref={calendarRef} className="calendar-popup position-absolute" >
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={handleSelect}
                                        moveRangeOnFirstSelection={false}
                                        ranges={range}
                                        locale={undefined}
                                    />
                                </div>
                            )}
                        </div>

                    </div>

                    <div className="modal-footer">

                        <button className="btn btn-primary">Axtar</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReportsFilterModal;
