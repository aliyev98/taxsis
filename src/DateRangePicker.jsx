import React, { useState, useRef } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangePicker = () => {
    
  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const inputRef = useRef();

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

  return (
    <div className="date-picker-wrapper" style={{ position: "relative" }}>

      <div
        className="calendar-input d-flex align-items-center"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <div className="input d-flex flex-column">
          <label>Tarix aralığı</label>
          <input
            ref={inputRef}
            type="text"
            readOnly
            value={formatRange()}
            placeholder="Tarix seçin"
          />
        </div>

        <div className="icon">
          <img src="./assets/calendar-icon.svg" alt="calendar" />
        </div>
      </div>

      {showCalendar && (
        <div className="calendar-popup" style={{ position: "absolute", top: "100%", zIndex: 100 }}>
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
  );
};

export default DateRangePicker;
