import { useState, useMemo, useEffect, useRef } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import ReportsHeader from "../../layouts/ReportsHeader";
import ReportsFooter from "../../layouts/ReportsFooter";
import ColumnFilterDropdown from "../dropdwons/ColumnFilterDropdown";
import ColumnVisibilityDropdown from "../dropdwons/ColumnVisibilityDropdown";
import TableHeader from "../../layouts/TableHeader";
import TableDataEditDropdown from "../dropdwons/TableDataEditDropdown";
import EmptyDataMessage from "../ui/EmptyDataMessage";
import EmptyReportsMessage from "../ui/EmptyReportsMessage";
import HeaderFiltersSelectionDropdown from "../dropdwons/HeaderFIltersSelectionDropwdown";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import TransportModal from "../modals/TransportModal";
import DateRangeDropdown from '../dropdwons/DateRangeDropdown'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export default function TaxModuleTable({
  columns,
  data,
  navBtns,
  reportsHeader,
  customHeaderButtons,
  showGroupedHeader,
  isEditing,
  setIsEditing,
  emptyMessageVisible,
  colSpans,
  openModal,
  colSpans2,
  headerFilters,
  showHeaderFilters,
  showReportsHeaderFilters,
  reportsHeaderFilters,
  editable,
  onRowClick = null,
  rowClickEnabled = false,
  openRowModal = false,
  rowModalComponent: RowModal = null,
}) {
  const [columnVisibility, setColumnVisibility] = useState(
    columns.reduce((acc, col) => {
      acc[col.accessorKey] = true;
      return acc;
    }, {})
  );
  const [filters, setFilters] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showColumnMenu, setShowColumnMenu] = useState(false);
  const [editingCell, setEditingCell] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState("");


  const dateDropdownRef = useRef(null);


  const [openHeaderFilterId, setOpenHeaderFilterId] = useState(null); //////////

  // sadece dövr filtresi (id===2 diyelim) için
  const [openFromCalendar, setOpenFromCalendar] = useState(false);
  const [openToCalendar, setOpenToCalendar] = useState(false);

  // başlangıç / bitiş tarihlerini ayrı tut:
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  // Hangi hücre için modal açılsın, onun bilgisini tutuyoruz:
  const [cellModalContext, setCellModalContext] = useState(null);

  // Modal’ı kapatmak için bir yardımcı:
  const closeCellModal = () => setCellModalContext(null);

  ////////////////////

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const filterDropdownRef = useRef();
  const columnDropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      // 1) column filter dropdown dışında tıklandıysa kapat
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
      // 2) sütun menüsü dışında tıklandıysa kapat
      if (
        columnDropdownRef.current &&
        !columnDropdownRef.current.contains(e.target)
      ) {
        setShowColumnMenu(false);
      }
      // 3) date-range dropdown dışında tıklandıysa kapat
      if (
        dateDropdownRef.current &&
        !dateDropdownRef.current.contains(e.target)
      ) {
        setOpenFromCalendar(false);
        setOpenToCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const processedColumns = useMemo(() => {
    return columns.map((col) => {
      const hasHeader = !!col.header;
      const hasFilter = !!col.filterOptions;

      return {
        ...col,
        cell: col.cell || ((info) => info.getValue()),
        header: () => {
          if (!hasHeader) return null;

          return (
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ cursor: hasFilter ? "pointer" : "default" }}
              onClick={() => {
                if (hasFilter) {
                  setOpenDropdown((prev) =>
                    prev === col.accessorKey ? null : col.accessorKey
                  );
                  setShowColumnMenu(false);
                }
              }}
            >
              <span>{col.header}</span>

              {hasFilter && (
                <img
                  src="/assets/huni-icon.svg"
                  alt="filter"
                  style={{ width: 16, marginLeft: 6 }}
                />
              )}
            </div>
          );
        },
      };
    });
  }, [columns]);

  const finalData = useMemo(() => {
    let currentData = [...data];

    // 1) Satır bazlı filtreleme
    currentData = currentData.filter((row) => {
      return Object.entries(filters).every(([colKey, filterVal]) => {
        const cellValue = row[colKey];
        const cellValueStr = String(cellValue ?? "").toLowerCase();

        // — text/search filtresi —
        if (filterVal.search && filterVal.search.length > 0) {
          if (!cellValueStr.includes(filterVal.search.toLowerCase())) {
            return false;
          }
        }

        // — checkbox/options filtresi —
        const normalCheck = filterVal.options?.filter(
          (opt) => opt !== "A-dan Z-yə" && opt !== "Z-dən A-ya"
        );
        if (
          normalCheck &&
          normalCheck.length > 0 &&
          !normalCheck.includes("Hamısı") &&
          !normalCheck.includes(cellValue)
        ) {
          return false;
        }

        // — numeric between filtresi —
        // filterVal.value may hold { min, max } for sayısal kolonlar
        if (
          filterVal.value?.min != null ||
          filterVal.value?.max != null
        ) {
          const num = Number(cellValue);
          if (
            filterVal.value.min != null &&
            (isNaN(num) || num < filterVal.value.min)
          ) {
            return false;
          }
          if (
            filterVal.value.max != null &&
            (isNaN(num) || num > filterVal.value.max)
          ) {
            return false;
          }
        }

        // — tarih aralığı filtresi yalnız "date" kolonunda —
        if (
          colKey === "date" &&
          filterVal.value?.startDate instanceof Date &&
          filterVal.value?.endDate instanceof Date
        ) {
          const cellDate = new Date(row[colKey]);
          const { startDate, endDate } = filterVal.value;
          if (cellDate < startDate || cellDate > endDate) {
            return false;
          }
        }

        return true;
      });
    });

    // 2) Sıralama (eski kodunuzdan birebir)
    for (const [colKey, filterVal] of Object.entries(filters)) {
      if (filterVal.options?.includes("A-dan Z-yə")) {
        currentData.sort((a, b) =>
          String(a[colKey] ?? "").localeCompare(String(b[colKey] ?? ""), "az")
        );
      }
      if (filterVal.options?.includes("Z-dən A-ya")) {
        currentData.sort((a, b) =>
          String(b[colKey] ?? "").localeCompare(String(a[colKey] ?? ""), "az")
        );
      }
    }

    return currentData;
  }, [data, filters]);


  const footerTotals = useMemo(() => {
    const totals = {};
    columns.forEach((col) => {
      const key = col.accessorKey;
      if (!key || col.enableFooterTotal !== true) return;

      if (key === "no") {
        totals[key] = finalData.length;
      } else {
        totals[key] = finalData.reduce((sum, row) => {
          const raw = row[key];

          // Sayısal format düzeltmesi
          const parsed =
            typeof raw === "string"
              ? parseFloat(raw.replace(/\./g, "").replace(",", "."))
              : Number(raw);

          return sum + (isNaN(parsed) ? 0 : parsed);
        }, 0);
      }
    });
    return totals;
  }, [columns, finalData]);

  const showHeaderTotals = columns.some(
    (col) => col.enableHeaderTotal || col.headerContent
  );

  // Footer totals’un hemen altında:///////////////////////////////////////////////////////////////////////////
  const headerTotals = useMemo(() => {
    const totals = {};
    columns.forEach((col) => {
      const key = col.accessorKey;
      if (!key || col.enableHeaderTotal !== true) return;
      // aynen footer’da olduğu gibi sayıları topla:
      totals[key] = finalData.reduce((sum, row) => {
        const raw = row[key];
        const parsed =
          typeof raw === "string"
            ? parseFloat(raw.replace(/\./g, "").replace(",", "."))
            : Number(raw);
        return sum + (isNaN(parsed) ? 0 : parsed);
      }, 0);
    });
    return totals;
  }, [columns, finalData]);

  const table = useReactTable({
    data: finalData,
    columns: processedColumns,
    state: { columnVisibility },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      // mevcut setCellModalContext’in yanına:
      setCellModalContext,
      // transport butonuna basınca çalışacak fonksiyon:
      onTransportClick: (row) => {
        setCellModalContext({
          row,
          columnKey: 'transport_azn',
          cellValue: null,
          ModalComponent: TransportModal    // ← burayı ekle
        });
      },
    },
  });



  const handleSearchChange = (colKey, val) => {
    setFilters((prev) => ({
      ...prev,
      [colKey]: {
        ...prev[colKey],
        search: val,
      },
    }));
  };

  const handleCheckboxChange = (colKey, option) => {
    setFilters((prev) => ({
      ...prev,
      [colKey]: {
        ...prev[colKey],
        options: [option],
      },
    }));
  };

  const handleNumberMinChange = (colKey, min) => {
    setFilters(prev => ({
      ...prev,
      [colKey]: {
        ...prev[colKey],
        value: {
          ...prev[colKey]?.value,
          min,
        },
      },
    }));
  };

  const handleNumberMaxChange = (colKey, max) => {
    setFilters(prev => ({
      ...prev,
      [colKey]: {
        ...prev[colKey],
        value: {
          ...prev[colKey]?.value,
          max,
        },
      },
    }));
  };

  const clearAllFilters = () => {
    setFilters({});
    setFromDate(null);
    setToDate(null);
    setOpenHeaderFilterId(null);
    setOpenFromCalendar(false);
    setOpenToCalendar(false);
    setOpenDropdown(null);
  };

  return (
    <div className="position-relative table-container">

      <TableHeader
        ColumnVisibilityDropdown={ColumnVisibilityDropdown}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        columnDropdownRef={columnDropdownRef}
        setShowColumnMenu={setShowColumnMenu}
        showColumnMenu={showColumnMenu}
        customHeaderButtons={customHeaderButtons}
        ColumnVisibilityDropdow={ColumnVisibilityDropdown}
        table={table}
        clearAllFilters={clearAllFilters}
        columns={columns}
        navBtns={navBtns}
        colSpans={colSpans}
      />

      {showHeaderFilters && (
        <div className="header-filters d-flex">
          {headerFilters.map(filter => (
          <div className="header-filter d-flex align-items-center position-relative" key={filter.id}>
            <span className="filter-title">{filter.title}:</span>
            <div
              className="filter-toggle"
              onClick={() => {
                setOpenHeaderFilterId(openHeaderFilterId === filter.id ? null : filter.id)
                // takvimi otomatik kapat
                setOpenFromCalendar(false)
                setOpenToCalendar(false)
              }}
            >
              <span className="filter-content">
                {filters[filter.id]?.label ?? filter.content}
              </span>
              <img
                src="/assets/arrow-down.svg"
                className={openHeaderFilterId === filter.id ? 'rotated' : ''}
              />
            </div>

            {openHeaderFilterId === filter.id && filter.id === 2 && (
              <DateRangeDropdown
                ref={dateDropdownRef}
                fromDate={fromDate}
                toDate={toDate}
                openFrom={openFromCalendar}
                openTo={openToCalendar}
                // columnHeader={columns.find(c => c.accessorKey === colKey)?.header}
                onClickFrom={() => {
                  setOpenFromCalendar(true)
                  setOpenToCalendar(false)
                }}
                onClickTo={() => {
                  setOpenToCalendar(true)
                  setOpenFromCalendar(false)
                }}
                onChangeFrom={d => {
                  setFromDate(d)
                  /* filtre state’in varsa güncelle */
                  setOpenFromCalendar(false)
                }}
                onChangeTo={d => {
                  setToDate(d)
                  /* filtre state’in varsa güncelle */
                  setOpenToCalendar(false)
                }}
              />
            )}

            {openHeaderFilterId === filter.id && filter.id !== 2 && (
              <HeaderFiltersSelectionDropdown
                options={filter.options}
                onSelect={value => {
                  const opt = filter.options.find(o => o.value === value)
                  setFilters(prev => ({
                    ...prev,
                    [filter.id]: { value: opt.value, label: opt.label }
                  }))
                  setOpenHeaderFilterId(null)
                }}
              />
            )}

          </div>
          ))}
        </div>
      )}

      {reportsHeader && <ReportsHeader showReportsHeaderFilters={showReportsHeaderFilters} reportsHeaderFilters={reportsHeaderFilters} isEditing={isEditing} filters={filters} openHeaderFilterId={openHeaderFilterId} setOpenHeaderFilterId={setOpenHeaderFilterId} />}

      <div className="table-div my-scrollable">

        <table className=" custom-table">

          <thead>
            {colSpans2 && (
              <tr className="top-header">
                {colSpans2.map((span) => (
                  <th
                    key={`colspans2-${span.id}`}
                    colSpan={span.col}
                    className="top-header-title"
                    style={{ visibility: span.content ? "visible" : "hidden" }}
                  >
                    <div>{span.content}</div>
                  </th>
                ))}
              </tr>
            )}

            {showGroupedHeader && colSpans && (
              <tr className="group-header">
                {colSpans.map((span) => (
                  <th
                    key={`colspans-${span.id}`}
                    colSpan={span.col}
                    className="group-title"
                    style={{ visibility: span.content ? "visible" : "hidden" }}
                  >
                    <div className="w-100">{span.content}</div>
                  </th>
                ))}
              </tr>
            )}

            {/* 3) HEADER TOTALS ROW (sütunların üzerinde) */}
            {columns.some(c => c.enableHeaderTotal || c.headerContent) && (
              <tr className="header-totals-row">
                {columns.map((col) => {
                  if (col.headerContent) {
                    // sabit metin varsa göster
                    return <th key={col.id}>{col.headerContent}</th>;
                  }
                  if (col.enableHeaderTotal) {
                    // toplam hesaplandıysa göster
                    const total = headerTotals[col.accessorKey];
                    return (
                      <th key={col.id}>
                        {Number.isInteger(total) ? total : total.toFixed(2)}
                      </th>
                    );
                  }
                  // aksi halde boş hücre
                  return <th key={col.id}></th>;
                })}
              </tr>
            )}

            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => {
                  const colKey = header.column.columnDef.accessorKey;
                  const filterOpts = columns.find((c) => c.accessorKey === colKey)?.filterOptions;

                  return (
                    <th key={header.id} style={{ position: "relative" }}>
                      <div className="th d-flex">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </div>

                      {openDropdown === colKey && filterOpts && (
                        filterOpts.type === 'date-range'
                          ? (
                            <DateRangeDropdown
                              ref={filterDropdownRef}
                              fromDate={fromDate}
                              toDate={toDate}
                              openFrom={openFromCalendar}
                              openTo={openToCalendar}
                              onClickFrom={() => {
                                setOpenFromCalendar(true)
                                setOpenToCalendar(false)
                              }}
                              onClickTo={() => {
                                setOpenToCalendar(true)
                                setOpenFromCalendar(false)
                              }}
                              onChangeFrom={(date) => {
                                setFromDate(date)
                                // filtre değerini de güncelle:
                                setFilters(prev => ({
                                  ...prev,
                                  [colKey]: {
                                    value: { startDate: date, endDate: toDate },
                                    label: `${format(date, 'dd.MM.yyyy')} – ${toDate ? format(toDate, 'dd.MM.yyyy') : '...'}`
                                  }
                                }))
                                setOpenFromCalendar(false);
                              }}
                              onChangeTo={(date) => {
                                setToDate(date)
                                setFilters(prev => ({
                                  ...prev,
                                  [colKey]: {
                                    value: { startDate: fromDate, endDate: date },
                                    label: `${fromDate ? format(fromDate, 'dd.MM.yyyy') : '...'} – ${format(date, 'dd.MM.yyyy')}`
                                  }
                                }))
                              }}
                            />
                          )
                          : (
                            <ColumnFilterDropdown
                              colKey={colKey}
                              filterOpts={filterOpts}
                              filters={filters}
                              columns={columns}
                              handleSearchChange={handleSearchChange}
                              handleCheckboxChange={handleCheckboxChange}
                              handleNumberMinChange={handleNumberMinChange}
                              handleNumberMaxChange={handleNumberMaxChange}
                              ref={filterDropdownRef}
                            />
                          )
                      )}




                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>


          <tbody>
            {/* fdfd////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {finalData.length > 0 ? (
              finalData.map((row, rowIndex) => {
                if (row.isGroupHeader) {
                  return (
                    <tr key={`group-${rowIndex}`} className="group-header-row">
                      <td colSpan={columns.length} className="group-name-cell">
                        {row.groupName}
                      </td>
                    </tr>
                  );
                }

                const tableRow = table.getRowModel().rows.find(r =>
                  r.original === row
                );

                if (!tableRow) return null;

                return (
                  <tr
                    key={tableRow.id}
                    onClick={(e) => {
                      // 1) Eğer satır modal’ı açmak isteniyorsa:
                      if (openRowModal && RowModal) {
                        e.stopPropagation();
                        setCellModalContext({
                          row: tableRow.original,
                          ModalComponent: RowModal,
                        });
                        return;
                      }

                      // 2) Aksi halde eski rowClickEnabled davranışı:
                      if (rowClickEnabled && onRowClick) {
                        onRowClick(tableRow.original);
                      }
                    }}
                    style={{ cursor: (openRowModal || rowClickEnabled) ? "pointer" : "default" }}
                  >
                    {tableRow.getVisibleCells().map((cell) => (

                      <td
                        key={cell.id}

                        onClick={(e) => {
                          const colDef = cell.column.columnDef;
                          // const enableCellModal = colDef.enableCellModal ?? false;
                          const { enableCellModal = false, openOnCellClick = true } = cell.column.columnDef;
                          const ModalComponent = colDef.modalComponent ?? null;

                          // 1) openModal=true ve enableCellModal=true ve bir ModalComponent var ise...
                          if (openModal && enableCellModal && openOnCellClick) {
                            e.stopPropagation();
                            setCellModalContext({
                              row: tableRow.original,
                              columnKey: cell.column.id,
                              cellValue: cell.getValue(),
                              ModalComponent: colDef.modalComponent   // ← burayı ekle
                            });
                            return;
                          }

                          // 2) Aksi halde eski editable mantığı:
                          if (!editable) return;
                          e.stopPropagation();
                          if (editingCell !== `${tableRow.id}-${cell.column.id}`) {
                            setEditingCell(`${tableRow.id}-${cell.column.id}`);
                            setEditMode(false);
                          }
                        }}

                      >
                        <div style={{ position: "relative" }}>
                          {editingCell === `${tableRow.id}-${cell.column.id}` ? (
                            editMode ? (
                              <input
                                className="column-edit-input"
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                onBlur={() => {
                                  tableRow.original[cell.column.id] = editValue;
                                  setEditingCell(null);
                                  setEditMode(false);
                                }}
                                autoFocus
                              />
                            ) : (
                              <>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                <div style={{ position: "absolute", top: "100%", left: 0, zIndex: 10 }}>
                                  <TableDataEditDropdown
                                    onEdit={() => {
                                      setEditMode(true);
                                      setEditValue(cell.getValue());
                                    }}
                                    onDelete={() => {
                                      console.log("Silinecek:", tableRow.original);
                                      setEditingCell(null);
                                    }}
                                    closeDropdown={() => setEditingCell(null)}
                                  />
                                </div>
                              </>
                            )
                          ) : (
                            flexRender(cell.column.columnDef.cell, cell.getContext())
                          )}
                        </div>
                      </td>



                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  {emptyMessageVisible ? <EmptyReportsMessage /> : <EmptyDataMessage />}
                </td>
              </tr>
            )}
          </tbody>

          <tfoot>
            <tr>
              {columns.map((col) => {
                const total = footerTotals[col.accessorKey];
                const isTotal = col.enableFooterTotal;
                const customText = col.footerContent;

                return (
                  <td key={col.id}>
                    {customText
                      ? customText
                      : isTotal
                        ? !isNaN(total)
                          ? Number.isInteger(total)
                            ? total
                            : total.toFixed(2)
                          : ''
                        : null}
                  </td>
                );
              })}
            </tr>
          </tfoot>

        </table>

        {cellModalContext?.ModalComponent && (
          (() => {
            const { ModalComponent, row, columnKey, cellValue } = cellModalContext;
            return (
              <ModalComponent
                isOpen={true}
                onClose={closeCellModal}
                row={row}
                columnKey={columnKey}
                cellValue={cellValue}
              />
            );
          })()
        )}


      </div>

      {reportsHeader && (
        <ReportsFooter footerTotals={footerTotals} columns={columns} />
      )}
    </div>
  );
}
