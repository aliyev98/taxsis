import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default function DateRangeDropdown({
  fromDate,
  toDate,
  openFrom,
  openTo,
  onClickFrom,
  onClickTo,
  onChangeFrom,
  onChangeTo,
}) {

  
  return (
    <div className="filter-dropdown date-range-dropdown">
      <div className="filter-dropdown-title">Dövr</div>
      <div className="date-inputs d-flex flex-column">
        {/* Tarixdən */}
        <div className="date-input-group position-relative" onClick={e => { e.stopPropagation(); onClickFrom() }}>
          <label>Tarixdən:</label>
          <input readOnly value={fromDate ? format(fromDate, 'dd.MM.yyyy') : ''} />
          {openFrom && (
            <div className="calendar-popover position-absolute">
              <DateRange
                ranges={[{
                  startDate: fromDate || new Date(),
                  endDate: fromDate || new Date(),
                  key: 'selection'
                }]}
                onChange={({ selection }) => {
                  onChangeFrom(selection.startDate)
                }}
                editableDateInputs
                moveRangeOnFirstSelection={false}
                showSelectionPreview
              />
            </div>
          )}
          <img src="/assets/calendar-light.svg" alt="" />
        </div>

        {/* Tarixə */}
        <div className="date-input-group position-relative" onClick={e => { e.stopPropagation(); onClickTo() }}>
          <label>Tarixə:</label>
          <input readOnly value={toDate ? format(toDate, 'dd.MM.yyyy') : ''} />
          {openTo && (
            <div className="calendar-popover position-absolute">
              <DateRange
                ranges={[{
                  startDate: toDate || new Date(),
                  endDate: toDate || new Date(),
                  key: 'selection'
                }]}
                onChange={({ selection }) => {
                  onChangeTo(selection.startDate)
                }}
                editableDateInputs
                moveRangeOnFirstSelection={false}
                showSelectionPreview
              />
            </div>
          )}
          <img src="/assets/calendar-light.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
