import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TaxModuleTable({ columns, data }) {
  // Kolon görünürlüğü
  const [columnVisibility, setColumnVisibility] = useState(
    columns.reduce((acc, col) => {
      acc[col.accessorKey] = true; // Başlangıçta tümü açık
      return acc;
    }, {})
  );

  // Filtre & sıralama durumu
  const [filters, setFilters] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showColumnMenu, setShowColumnMenu] = useState(false);

  // 1) Columns - header fonksiyonları
  const processedColumns = useMemo(() => {
    return columns.map((col) => ({
      ...col,
      cell: col.cell || ((info) => info.getValue()),
      header: () => (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ cursor: col.filterOptions ? "pointer" : "default" }}
          onClick={() => {
            if (col.filterOptions) {
              // Menü aç/kapa
              setOpenDropdown((prev) =>
                prev === col.accessorKey ? null : col.accessorKey
              );
              // “Sütunlar” menüsünü kapat
              setShowColumnMenu(false);
            }
          }}
        >
          <span>{col.header}</span>
          {col.filterOptions && (
            <img
              src="/assets/huni-icon.svg"
              alt="filter"
              style={{ width: 14, marginLeft: 6 }}
            />
          )}
        </div>
      ),
    }));
  }, [columns]);

  // 2) Data’yı sıralama + filtre ile işliyoruz
  const finalData = useMemo(() => {
    let currentData = [...data];

    // Önce arama + normal checkbox filtrelerini uygula
    currentData = currentData.filter((row) => {
      return Object.entries(filters).every(([colKey, filterVal]) => {
        const cellValue = String(row[colKey] ?? "").toLowerCase();

        // (A) Search filtresi
        if (filterVal.search && filterVal.search.length > 0) {
          if (!cellValue.includes(filterVal.search.toLowerCase())) {
            return false;
          }
        }

        // (B) Normal checkbox filtresi (Hepsi, Təsdiqləndi, Təsdiqlənmədi vb.)
        const normalCheck = filterVal.options?.filter(
          (opt) => opt !== "A-dan Z-yə" && opt !== "Z-dən A-ya"
        );
        if (normalCheck && normalCheck.length > 0 && !normalCheck.includes("Hepsi")) {
          if (!normalCheck.includes(row[colKey])) {
            return false;
          }
        }

        return true;
      });
    });

    // Sonra "A-dan Z-yə" / "Z-dən A-ya" seçeneklerini uygula
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

  // 3) TanStack table
  const table = useReactTable({
    data: finalData,
    columns: processedColumns,
    state: { columnVisibility },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
  });

  // 4) Filtre mantığı
  const handleSearchChange = (colKey, val) => {
    setFilters((prev) => ({
      ...prev,
      [colKey]: {
        ...prev[colKey],
        search: val,
      },
    }));
  };

  const handleCheckboxChange = (colKey, opt) => {
    setFilters((prev) => {
      const oldOpt = prev[colKey]?.options || [];
      const updated = oldOpt.includes(opt)
        ? oldOpt.filter((v) => v !== opt)
        : [...oldOpt, opt];
      return {
        ...prev,
        [colKey]: { ...prev[colKey], options: updated },
      };
    });
  };

  // Küçük fonksiyon: ilk harfi büyük harf, gerisi küçük
  const capitalize = (text) => {
    if (typeof text !== "string" || !text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <div className="position-relative p-3">
      {/* Sütunlar butonu */}
      <button
        className="btn btn-secondary mb-2"
        onClick={() => setShowColumnMenu((p) => !p)}
      >
        Sütunlar
      </button>

      {/* Sütunlar menüsü */}
      {showColumnMenu && (
        <div
          className="dropdown-menu show p-2"
          style={{
            display: "block",
            position: "absolute",
            zIndex: 999,
          }}
        >
          {table.getAllLeafColumns().map((col) => {
            // (A) label’da sadece text, ilk harf büyük
            let labelText;
            if (typeof col.columnDef.header === "string") {
              labelText = capitalize(col.columnDef.header);
            } else {
              labelText = capitalize(col.id);
            }

            return (
              <label key={col.id} className="dropdown-item">
                <input
                  type="checkbox"
                  className="me-2"
                  checked={col.getIsVisible?.() ?? true}
                  onChange={col.getToggleVisibilityHandler()}
                />
                {labelText}
              </label>
            );
          })}
        </div>
      )}

      {/* Asıl tablo */}
      <table className="table table-bordered">
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => {
                const colKey = header.column.columnDef.accessorKey;
                const filterOpts = columns.find(
                  (c) => c.accessorKey === colKey
                )?.filterOptions;

                return (
                  <th key={header.id} style={{ position: "relative" }}>
                    {flexRender(header.column.columnDef.header, header.getContext())}

                    {openDropdown === colKey && filterOpts && (
                      <div
                        className="dropdown-menu show p-2"
                        style={{
                          display: "block",
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          zIndex: 1000,
                          minWidth: "250px",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Search Input */}
                        {filterOpts.search && (
                          <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Axtar..."
                            value={filters[colKey]?.search || ""}
                            onChange={(e) =>
                              handleSearchChange(colKey, e.target.value)
                            }
                          />
                        )}

                        {/* Checkbox Options */}
                        {filterOpts.options?.map((option) => (
                          <div className="form-check" key={option}>
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id={`${colKey}-${option}`}
                              checked={
                                filters[colKey]?.options?.includes(option) ||
                                false
                              }
                              onChange={() => handleCheckboxChange(colKey, option)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`${colKey}-${option}`}
                            >
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
  );
}
