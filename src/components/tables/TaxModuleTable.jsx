import React, { useState, useMemo, useEffect, useRef } from "react";
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
import InfoSelectionDropdown from "../dropdwons/InfoSelectionDropwdown";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import CellModal from "../modals/CellModal";

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
  infos,
  infosHeader,
  editable,
  onRowClick = null,
  rowClickEnabled = false,
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

  const [openInfoId, setOpenInfoId] = useState(null); //////////

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
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
      if (columnDropdownRef.current && !columnDropdownRef.current.contains(e.target)) {
        setShowColumnMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

    currentData = currentData.filter((row) => {
      return Object.entries(filters).every(([colKey, filterVal]) => {
        const cellValue = String(row[colKey] ?? "").toLowerCase();

        if (filterVal.search && filterVal.search.length > 0) {
          if (!cellValue.includes(filterVal.search.toLowerCase())) return false;
        }

        const normalCheck = filterVal.options?.filter(
          (opt) => opt !== "A-dan Z-yə" && opt !== "Z-dən A-ya"
        );

        if (normalCheck && normalCheck.length > 0 && !normalCheck.includes("Hamısı")) {
          if (!normalCheck.includes(row[colKey])) return false;
        }

        return true;
      });
    });

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
      setEditingCell,
      setEditMode,
      setEditValue,
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
        columns={columns}
        navBtns={navBtns}
        colSpans = {colSpans}
      />

      {infosHeader && (
        <div className="infos d-flex">
          {infos?.map((info) => (
            <div
              className="info position-relative d-flex align-items-center"
              key={info.id}
            >
              <span className="info-title">{info.title}</span>

              {/* tıklanabilir alan */}
              <div
                className="info-toggle d-flex align-items-center"
                onClick={() =>
                  setOpenInfoId(openInfoId === info.id ? null : info.id)
                }
              >
                <span className="info-content">{filters[info.id]?.label ?? info.content}</span>
                <img
                  src="/assets/arrow-down.svg"
                  alt=""
                  className={openInfoId === info.id ? 'rotated' : ''}
                />
              </div>

              {/* dropdown burada açılıyor */}
              {openInfoId === info.id && (
                info.id === 2
                  ? (
                    // === Tarih picker ===
                    <div className="info-datepicker">
                      <DateRange
                        editableDateInputs
                        moveRangeOnFirstSelection={false}
                        ranges={dateRange}
                        onChange={({ selection }) => {
                          // 1) Local dateRange’i güncelle
                          setDateRange([selection]);
                          // 2) filters objesine hem value hem label ekle
                          setFilters(prev => ({
                            ...prev,
                            [info.id]: {
                              value: {
                                startDate: selection.startDate,
                                endDate: selection.endDate
                              },
                              label: `${format(selection.startDate, "dd.MM.yyyy")} – ${format(selection.endDate, "dd.MM.yyyy")}`
                            }
                          }));
                        }}
                      />
                    </div>
                  )
                  : (
                    // === Normal dropdown ===
                    <InfoSelectionDropdown
                      options={info.options}
                      onSelect={(value) => {
                        const opt = info.options.find(o => o.value === value);
                        if (!opt) return;
                        setFilters(prev => ({
                          ...prev,
                          [info.id]: { value: opt.value, label: opt.label }
                        }));
                        setOpenInfoId(null);
                      }}
                    />
                  )
              )}


            </div>
          ))}
        </div>
      )}

      {reportsHeader && <ReportsHeader infosHeader={infosHeader} infos={infos} isEditing={isEditing} filters={filters} openInfoId={openInfoId} setOpenInfoId={setOpenInfoId} />}

      <div className="table-div">

        <table className="tables custom-table">

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
                    <div>{span.content}</div>
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
                        <ColumnFilterDropdown
                          colKey={colKey}
                          filterOpts={filterOpts}
                          filters={filters}
                          columns={columns}
                          handleSearchChange={handleSearchChange}
                          handleCheckboxChange={handleCheckboxChange}
                          ref={filterDropdownRef}
                        />
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
                    onClick={() => {
                      if (rowClickEnabled && onRowClick) {
                        onRowClick(tableRow.original);
                      }
                    }}
                    style={{ cursor: rowClickEnabled ? "pointer" : "default" }}
                  >
                    {tableRow.getVisibleCells().map((cell) => (

                      // <td
                      //   key={cell.id}
                      //   onClick={(e) => {
                      //     if (!editable) return;
                      //     e.stopPropagation();
                      //     if (editingCell !== `${tableRow.id}-${cell.column.id}`) {
                      //       setEditingCell(`${tableRow.id}-${cell.column.id}`);
                      //       setEditMode(false);
                      //     }
                      //   }}
                      // >
                      //   <div style={{ position: "relative" }}>
                      //     {editingCell === `${tableRow.id}-${cell.column.id}` ? (
                      //       editMode ? (
                      //         <input
                      //           className="column-edit-input"
                      //           type="text"
                      //           value={editValue}
                      //           onChange={(e) => setEditValue(e.target.value)}
                      //           onBlur={() => {
                      //             tableRow.original[cell.column.id] = editValue;
                      //             setEditingCell(null);
                      //             setEditMode(false);
                      //           }}
                      //           autoFocus
                      //         />
                      //       ) : (
                      //         <>
                      //           {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      //           <div style={{ position: "absolute", top: "100%", left: 0, zIndex: 10 }}>
                      //             <TableDataEditDropdown
                      //               onEdit={() => {
                      //                 setEditMode(true);
                      //                 setEditValue(cell.getValue());
                      //               }}
                      //               onDelete={() => {
                      //                 console.log("Silinecek:", tableRow.original);
                      //                 setEditingCell(null);
                      //               }}
                      //               closeDropdown={() => setEditingCell(null)}
                      //             />
                      //           </div>
                      //         </>
                      //       )
                      //     ) : (
                      //       flexRender(cell.column.columnDef.cell, cell.getContext())
                      //     )}
                      //   </div>
                      // </td>

                      <td
                        key={cell.id}
                        onClick={(e) => {
                          // 0) Bu kolonda modal açma özelliği tanımlı mı?
                          const enableCellModal = cell.column.columnDef.enableCellModal ?? false;

                          // 1) Eğer openModal=true ve bu kolon için enableCellModal=true ise modal aç:
                          if (openModal && enableCellModal) {
                            e.stopPropagation();
                            setCellModalContext({
                              row: tableRow.original,
                              columnKey: cell.column.id,
                              cellValue: cell.getValue(),
                            });
                            return; // Buradan sonra editable logic çalışmaz
                          }

                          // 2) Aksi halde editable mantığına dön
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

        {cellModalContext && (
          <CellModal
            isOpen
            onClose={() => setCellModalContext(null)}
            row={cellModalContext.row}
            columnKey={cellModalContext.columnKey}
            cellValue={cellModalContext.cellValue}
          />
        )}


      </div>

      {reportsHeader && (
        <ReportsFooter footerTotals={footerTotals} columns={columns} />
      )}
    </div>
  );
}
