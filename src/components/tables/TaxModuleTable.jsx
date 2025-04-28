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

export default function TaxModuleTable({
  columns,
  data,
  title,
  navBtns,
  reportsHeader,
  customHeaderButtons,
  showGroupedHeader,
  isEditing,
  setIsEditing,
  emptyMessageVisible,
  colSpans,
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
      const total = finalData.reduce((sum, row) => sum + Number(row[key] ?? 0), 0);
      totals[key] = total;
    });
    return totals;
  }, [columns, finalData]);

  const table = useReactTable({
    data: finalData,
    columns: processedColumns,
    state: { columnVisibility },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
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
      />

      {infosHeader && (
        <div className="infos d-flex">
          {infos?.map((info) => (
            <div className="info d-flex" key={info.id}>
              <span>{info.title}</span>
              <span>{info.content}</span>
            </div>
          ))}
        </div>
      )}

      {reportsHeader && <ReportsHeader isEditing={isEditing} />}

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
            {finalData.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => {
                    if (rowClickEnabled && onRowClick) {
                      onRowClick(row.original);
                    }
                  }}
                  style={{ cursor: rowClickEnabled ? "pointer" : "default" }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      onClick={(e) => {
                        if (!editable) return;
                        e.stopPropagation(); // sadece düzenleme modundaysa satır tıklamasını engelle
                        if (editingCell !== `${row.id}-${cell.column.id}`) {
                          setEditingCell(`${row.id}-${cell.column.id}`);
                          setEditMode(false);
                        }
                      }}
                    >
                      <div style={{ position: "relative" }}>
                        {editingCell === `${row.id}-${cell.column.id}` ? (
                          editMode ? (
                            <input
                            className="column-edit-input"
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={() => {
                                row.original[cell.column.id] = editValue;
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
                                    console.log("Silinecek:", row.original);
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
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  Heç bir məlumat tapılmadı
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {reportsHeader && (
        <ReportsFooter footerTotals={footerTotals} columns={columns} />
      )}
    </div>
  );
}
