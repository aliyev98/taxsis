import React, { useState, useRef, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const ReportsHeader = ({ isEditing }) => {

    const [reportHeaderValues, setReportHeaderValues] = useState({
        dateText: "'GÜVƏN LUX MMC' və 'HZR GROUP'MMC arasında 17 noyabr 2022 - ci il tarixinə",
        location: "Bakı şəhəri",
        period: `${format(new Date(), 'dd.MM.yyyy')} - ${format(new Date(new Date().setDate(new Date().getDate() + 1)), 'dd.MM.yyyy')}`,
        description: "'GÜVƏN LUX' MMC (VÖEN 1405867401), təmsil edən direktor Elmar Həmidov, bir tərəfdən, və 'HZR GROUP'MMC (VÖEN 1503752091 ), təmsil edən Ceyhan Kalaycı, digər tərəfdən, 17.11.2022-ci il tarixinə olan bu Üzləşmə Aktındakı aşağıdakı məlumatları imzalarımızla təsdiqləyirik:"
    });


    const [showCalendar, setShowCalendar] = useState(false);
    const calendarRef = useRef();

    const [range, setRange] = useState([
        {
            startDate: new Date(), // bugün
            endDate: new Date(new Date().setDate(new Date().getDate() + 1)), // yarın
            key: "selection"
        }
    ]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (calendarRef.current && !calendarRef.current.contains(e.target)) {
                setShowCalendar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleReportHeaderChange = (field, value) => {
        setReportHeaderValues(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleCalendarChange = (ranges) => {
        const { startDate, endDate } = ranges.selection;
        const formatted = `${format(startDate, 'dd.MM.yyyy')} - ${format(endDate, 'dd.MM.yyyy')}`;
        setRange([ranges.selection]);
        handleReportHeaderChange('period', formatted);
        setShowCalendar(false);
    };

    return (
        <div className="reports-header d-flex flex-column position-relative">
            <input
                type="text"
                className="date"
                value={reportHeaderValues.dateText}
                onChange={(e) => handleReportHeaderChange("dateText", e.target.value)}
                readOnly={!isEditing}
            />

            <div className='d-flex align-items-center justify-content-between'>

                <input
                    type="text"
                    className="location"
                    value={reportHeaderValues.location}
                    onChange={(e) => handleReportHeaderChange("location", e.target.value)}
                    readOnly={!isEditing}
                />

                <div className="period d-flex align-items-center position-relative">
                    <span>ÜZLƏŞMƏ DÖVRÜ:</span>
                    <input
                        type="text"
                        value={reportHeaderValues.period}
                        onClick={() => isEditing && setShowCalendar(!showCalendar)}
                        readOnly
                    />
                    {showCalendar && (
                        <div className="calendar-popup" ref={calendarRef}>
                            <DateRange
                                editableDateInputs={true}
                                onChange={handleCalendarChange}
                                moveRangeOnFirstSelection={false}
                                ranges={range}
                            />
                        </div>
                    )}
                </div>

            </div>

            <textarea
                value={reportHeaderValues.description}
                onChange={(e) => handleReportHeaderChange("description", e.target.value)}
                readOnly={!isEditing}
            />
        </div>
    );
};

export default ReportsHeader;
