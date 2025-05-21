import React, { useState, useEffect, useRef } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import HeaderFiltersSelectionDropdown from '../components/dropdwons/HeaderFIltersSelectionDropwdown';
import DateRangeDropdown from '../components/dropdwons/DateRangeDropdown';

const ReportsHeader = ({
    isEditing,
    showReportsHeaderFilters,
    reportsHeaderFilters,
}) => {

    const [reportHeaderValues, setReportHeaderValues] = useState({
        dateText:
            "'GÜVƏN LUX MMC' və 'HZR GROUP'MMC arasında 17 noyabr 2022 - ci il tarixinə",
        location: 'Bakı şəhəri',
        description:
            "'GÜVƏN LUX' MMC (VÖEN 1405867401), təmsil edən direktor Elmar Həmidov, bir tərəfdən, və 'HZR GROUP'MMC (VÖEN 1503752091 ), təmsil edən Ceyhan Kalaycı, digər tərəfdən, 17.11.2022-ci il tarixinə olan bu Üzləşmə Aktındakı aşağıdakı məlumatları imzalarımızla təsdiqləyirik:",
    });

    // ---------- Başlık filtreleri için state’ler ----------
    const [openFilterId, setOpenFilterId] = useState(null);
    const [filterValues, setFilterValues] = useState(
        reportsHeaderFilters.reduce((acc, f) => {
            acc[f.id] = { value: f.options?.[0]?.value ?? null, label: f.content };
            return acc;
        }, {})
    );

    const [filters, setFilters] = useState({});


    const [openFromCalendar, setOpenFromCalendar] = useState(false);
    const [openToCalendar, setOpenToCalendar] = useState(false);

    // başlangıç / bitiş tarihlerini ayrı tut:
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    // Tarih filtresi için takvim state’i
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const calendarRef = useRef();

    const toggleFilter = (id) => {
        setOpenFilterId((prev) => (prev === id ? null : id));
    };
    const onFilterSelect = (id, value) => {
        const f = reportsHeaderFilters.find((f) => f.id === id);
        const opt = f?.options.find((o) => o.value === value);
        setFilterValues((prev) => ({
            ...prev,
            [id]: {
                value: opt.value,
                label: opt.label,
            },
        }));
        setOpenFilterId(null);
    };
    // -------------------------------------------------------------

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                openFilterId !== null &&
                e.target.closest('.header-filters') === null
            ) {
                setOpenFilterId(null);
            }
            if (
                calendarRef.current &&
                !calendarRef.current.contains(e.target) &&
                openFilterId === 'period' // period id’niz buysa ona göre değiştirin
            ) {
                setOpenFilterId(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [openFilterId]);

    const handleReportHeaderChange = (field, value) => {
        setReportHeaderValues((prev) => ({ ...prev, [field]: value }));
    };

    const handleCalendarChange = ({ selection }) => {
        const { startDate, endDate } = selection;
        // 1) Aralığı state’e yaz
        setDateRange([selection]);
        const label = `${format(startDate, 'dd.MM.yyyy')} – ${format(
            endDate,
            'dd.MM.yyyy'
        )}`;
        setFilterValues((prev) => ({
            ...prev,
            [openFilterId]: { value: selection, label },
        }));

        // 2) Sadece farklı tarihler seçildiğinde (yani ikinci tıklamada) dropdown’u kapat
        if (startDate.getTime() !== endDate.getTime()) {
            setOpenFilterId(null);
        }
    };


    return (
        <div className="reports-header-container d-flex flex-column justify-content-center">

            <div className="reports-header d-flex flex-column position-relative">

                {/* Başlık filtreleri */}
                <input
                    type="text"
                    className="date"
                    value={reportHeaderValues.dateText}
                    onChange={(e) =>
                        handleReportHeaderChange('dateText', e.target.value)
                    }
                    readOnly={!isEditing}
                />

                <div className="filters-div d-flex justify-content-between">

                    <input
                        type="text"
                        className="location"
                        value={reportHeaderValues.location}
                        onChange={(e) =>
                            handleReportHeaderChange('location', e.target.value)
                        }
                        readOnly={!isEditing}
                    />

                    <div className="filters d-flex">
                        {showReportsHeaderFilters && (
                            <div className="header-filters d-flex position-relative">
                                {reportsHeaderFilters.map((f) => (
                                    <div key={f.id} className="header-filter position-relative d-flex align-items-center">
                                        <span className="filter-title">{f.title}:</span>

                                        <div
                                            className="filter-toggle d-flex align-items-center"
                                            onClick={() => {
                                                toggleFilter(f.id)
                                                // takvim lambda kapatılması:
                                                if (f.id === 2) {
                                                    setOpenFromCalendar(false)
                                                    setOpenToCalendar(false)
                                                }
                                            }}

                                        >
                                            <span className="filter-content">
                                                {filterValues[f.id]?.label ?? f.content}
                                            </span>
                                            <img
                                                src={f.icon}
                                                alt=""
                                                className={openFilterId === f.id ? 'rotated' : ''}
                                            />
                                        </div>

                                        {/* ——— “DÖVR” filtresi (ID === 2) için özel tarih-range dropdown ——— */}
                                        {openFilterId === f.id && f.id === 2 && (
                                            <div className="filter-dropdown date-range-dropdown">
                                                <div className="filter-dropdown-title">Dövr</div>

                                                <div className="date-inputs d-flex flex-column">
                                                    {/* Tarihten */}
                                                    <div
                                                        className="date-input-group position-relative"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            setOpenFromCalendar(true)
                                                            setOpenToCalendar(false)
                                                        }}
                                                    >
                                                        <label>Tarihten:</label>
                                                        <input
                                                            readOnly
                                                            value={fromDate ? format(fromDate, 'dd.MM.yyyy') : ''}
                                                            placeholder="Başlangıç tarihi"
                                                        />
                                                        {openFromCalendar && (
                                                            <div
                                                                className="calendar-popover position-absolute"
                                                                style={{ zIndex: 1000 }}
                                                            >
                                                                <DateRange
                                                                    editableDateInputs
                                                                    moveRangeOnFirstSelection={false}
                                                                    ranges={[
                                                                        {
                                                                            startDate: fromDate || new Date(),
                                                                            endDate: fromDate || new Date(),
                                                                            key: 'selection',
                                                                        },
                                                                    ]}
                                                                    onChange={({ selection }) => {
                                                                        setFromDate(selection.startDate)
                                                                        setFilters((prev) => ({
                                                                            ...prev,
                                                                            [f.id]: {
                                                                                value: {
                                                                                    startDate: selection.startDate,
                                                                                    endDate: toDate,
                                                                                },
                                                                                label: `${format(selection.startDate, 'dd.MM.yyyy')} – ${toDate ? format(toDate, 'dd.MM.yyyy') : '...'
                                                                                    }`,
                                                                            },
                                                                        }))
                                                                        setOpenFromCalendar(false)
                                                                    }}
                                                                    showSelectionPreview
                                                                />
                                                            </div>
                                                        )}
                                                        <img src="/assets/calendar-light.svg" alt="" />
                                                    </div>

                                                    {/* Tarihe */}
                                                    <div
                                                        className="date-input-group position-relative"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            setOpenToCalendar(true)
                                                            setOpenFromCalendar(false)
                                                        }}
                                                    >
                                                        <label>Tarihe:</label>
                                                        <input
                                                            readOnly
                                                            value={toDate ? format(toDate, 'dd.MM.yyyy') : ''}
                                                            placeholder="Bitiş tarihi"
                                                        />
                                                        {openToCalendar && (
                                                            <div
                                                                className="calendar-popover position-absolute"
                                                                style={{ zIndex: 1000 }}
                                                            >
                                                                <DateRange
                                                                    editableDateInputs
                                                                    moveRangeOnFirstSelection={false}
                                                                    ranges={[
                                                                        {
                                                                            startDate: toDate || new Date(),
                                                                            endDate: toDate || new Date(),
                                                                            key: 'selection',
                                                                        },
                                                                    ]}
                                                                    onChange={({ selection }) => {
                                                                        setToDate(selection.startDate)
                                                                        setFilters((prev) => ({
                                                                            ...prev,
                                                                            [f.id]: {
                                                                                value: {
                                                                                    startDate: fromDate,
                                                                                    endDate: selection.startDate,
                                                                                },
                                                                                label: `${fromDate
                                                                                    ? format(fromDate, 'dd.MM.yyyy')
                                                                                    : '...'
                                                                                    } – ${format(selection.startDate, 'dd.MM.yyyy')}`,
                                                                            },
                                                                        }))
                                                                        setOpenToCalendar(false)
                                                                    }}
                                                                    showSelectionPreview
                                                                />
                                                            </div>
                                                        )}
                                                        <img src="/assets/calendar-light.svg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* ——— Diğer filtreler için normal dropdown ——— */}

                                        {openFilterId === f.id && f.id !== 2 &&  (
                                            <HeaderFiltersSelectionDropdown
                                                options={f.options}
                                                onSelect={(v) => onFilterSelect(f.id, v)}
                                            />
                                        )}

                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>



                <textarea
                    className="description"
                    value={reportHeaderValues.description}
                    onChange={(e) =>
                        handleReportHeaderChange('description', e.target.value)
                    }
                    readOnly={!isEditing}
                />

            </div>

        </div>
    );
};

export default ReportsHeader;
