import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TaxModuleTable({ columns, data, title }) {

  const [columnVisibility, setColumnVisibility] = useState(
    columns.reduce((acc, col) => {
      acc[col.accessorKey] = true;
      return acc;
    }, {})
  );

  const [filters, setFilters] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showColumnMenu, setShowColumnMenu] = useState(false);

  const filterDropdownRef = useRef();
  const columnDropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
      }

      if (
        columnDropdownRef.current &&
        !columnDropdownRef.current.contains(e.target)
      ) {
        setShowColumnMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const processedColumns = useMemo(() => {
    return columns.map((col) => ({
      ...col,
      cell: col.cell || ((info) => info.getValue()),
      header: () => (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (col.filterOptions) {
              setOpenDropdown((prev) =>
                prev === col.accessorKey ? null : col.accessorKey
              );
              setShowColumnMenu(false);
            }
          }}
        >
          <span>{col.header}</span>
          <img
            src="/assets/huni-icon.svg"
            alt="filter"
            style={{ width: 16, marginLeft: 6 }}
          />
        </div>
      ),
    }));
  }, [columns]);

  const finalData = useMemo(() => {
    let currentData = [...data];

    currentData = currentData.filter((row) => {
      return Object.entries(filters).every(([colKey, filterVal]) => {
        const cellValue = String(row[colKey] ?? "").toLowerCase();

        if (filterVal.search && filterVal.search.length > 0) {
          if (!cellValue.includes(filterVal.search.toLowerCase())) {
            return false;
          }
        }

        const normalCheck = filterVal.options?.filter(
          (opt) => opt !== "A-dan Z-yə" && opt !== "Z-dən A-ya"
        );

        if (normalCheck && normalCheck.length > 0 && !normalCheck.includes("Hamısı")) {
          if (!normalCheck.includes(row[colKey])) {
            return false;
          }
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
    setFilters((prev) => {
      return {
        ...prev,
        [colKey]: {
          ...prev[colKey],
          options: [option],
        },
      };
    });
  };

  return (
    <div className="position-relative table-container">

      <div className="table-header d-flex align-items-center justify-content-between">
        <div className="left-side d-flex align-items-center">
          <div className="color"></div>
          <div className="title">{title}</div>
        </div>

        <div className="right-side d-flex position-relative" ref={columnDropdownRef}>
          <button
            className="btn-columns d-flex align-items-center"
            onClick={() => setShowColumnMenu((p) => !p)}
          >
            <span>Sütunlar</span>
            <img src="./assets/layout-icon.svg" alt="" />
          </button>
          <button className="export">Export</button>

          {showColumnMenu && (
            <div
              className="column-dropdown-menu dropend show d-flex flex-column"
              style={{
                display: "block",
                position: "absolute",
                zIndex: 999,
              }}
            >
              <div className="dropdown-title">Sütunları seçin</div>

              {table.getAllLeafColumns().map((col) => {
                const colDef = columns.find(c => c.accessorKey === col.id);
                const labelText = colDef?.header || col.id;

                return (
                  <div className="column-inputs d-flex flex-column" key={col.id}>
                    <label className="dropdown-item">
                      <input
                        type="checkbox"
                        checked={col.getIsVisible?.() ?? true}
                        onChange={col.getToggleVisibilityHandler()}
                      />
                      {labelText}
                    </label>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="table-div">
        <table className="tables custom-table">
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => {
                  const colKey = header.column.columnDef.accessorKey;
                  const filterOpts = columns.find((c) => c.accessorKey === colKey)
                    ?.filterOptions;

                  return (
                    <th key={header.id} style={{ position: "relative" }}>
                      <div className="th d-flex">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>

                      {openDropdown === colKey && filterOpts && (
                        <div
                          ref={filterDropdownRef}
                          className="dropdown-menu filter-dropdown show"
                          style={{
                            display: "block",
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            zIndex: 1000,
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="dropdown-title">
                            {columns.find((c) => c.accessorKey === colKey)?.header || colKey}
                          </div>

                          {filterOpts.search && (
                            <div className="search-input d-flex align-items-center">
                              <img src="./assets/search-icon.svg" alt="" />
                              <input
                                type="text"
                                placeholder="Axtar..."
                                value={filters[colKey]?.search || ""}
                                onChange={(e) =>
                                  handleSearchChange(colKey, e.target.value)
                                }
                              />
                            </div>
                          )}

                          {filterOpts.options?.map((option) => (
                            <div className="checkbox-div d-flex" key={option}>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id={`${colKey}-${option}`}
                                checked={
                                  filters[colKey]?.options?.includes(option) ||
                                  false
                                }
                                onChange={() =>
                                  handleCheckboxChange(colKey, option)
                                }
                              />
                              <label
                                className="form-check-label d-flex align-items-center"
                                htmlFor={`${colKey}-${option}`}
                              >
                                {(option === "A-dan Z-yə" ||
                                  option === "Z-dən A-ya") && (
                                    <img
                                      src="./assets/alphabet-filter.png"
                                      alt=""
                                      style={{
                                        width: 14,
                                        height: 14,
                                        marginRight: 6,
                                      }}
                                    />
                                  )}
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>



    </div>
  );
}
