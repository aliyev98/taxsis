// src/components/dropdwons/DateRangeDropdown.jsx
import React, { forwardRef } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateRangeDropdown = forwardRef(({
  fromDate = null,
  toDate   = null,
  openFrom = false,
  openTo   = false,
  onClickFrom  = () => {}, 
  onClickTo    = () => {},
  onChangeFrom = () => {},
  onChangeTo   = () => {},
}, ref) => {


  return (
    <div
      ref={ref}
      className="filter-dropdown date-range-dropdown"
      onClick={e => e.stopPropagation()}
    >
      <div className="filter-dropdown-title">Bir tarix aralığı seçin</div>
      <div className="date-inputs d-flex flex-column">

        {/* Tarixdən */}
        <div
          className="date-input-group position-relative"
          onClick={e => { e.stopPropagation(); onClickFrom(); }}
        >
          <label>Tarixdən:</label>
          <input
            readOnly
            value={fromDate ? format(fromDate, 'dd.MM.yyyy') : ''}
          />
          <img src="/assets/calendar-light.svg" alt="calendar icon" />
          {openFrom && (
            <div className="calendar-popover position-absolute">
              <DateRange
                ranges={[{
                  startDate: fromDate || new Date(),
                  endDate:   fromDate || new Date(),
                  key: 'selection',
                }]}
                onChange={({ selection }) => onChangeFrom(selection.startDate)}
                editableDateInputs
                moveRangeOnFirstSelection={false}
                showSelectionPreview
              />
            </div>
          )}
        </div>

        {/* Tarixə */}
        <div
          className="date-input-group position-relative"
          onClick={e => { e.stopPropagation(); onClickTo(); }}
        >
          <label>Tarixə:</label>
          <input
            readOnly
            value={toDate ? format(toDate, 'dd.MM.yyyy') : ''}
          />
          <img src="/assets/calendar-light.svg" alt="calendar icon" />
          {openTo && (
            <div className="calendar-popover position-absolute">
              <DateRange
                ranges={[{
                  startDate: toDate || new Date(),
                  endDate:   toDate || new Date(),
                  key: 'selection',
                }]}
                onChange={({ selection }) => onChangeTo(selection.startDate)}
                editableDateInputs
                moveRangeOnFirstSelection={false}
                showSelectionPreview
              />
            </div>
          )}
        </div>

      </div>
    </div>
  );
});

export default DateRangeDropdown;
