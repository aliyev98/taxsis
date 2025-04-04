import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import ReportsFilterModal from "../modals/ReportsFilterModal";
import ReportsHeader from "../../layouts/ReportsHeader";
import ReportsFooter from "../../layouts/ReportsFooter";
import { useDispatch } from "react-redux";
import { setNavbarSelection } from "../../redux/slices/taxModuleSlice";
import ColumnFilterDropdown from "../dropdwons/ColumnFilterDropdown";
import ColumnVisibilityDropdown from "../dropdwons/ColumnVisibilityDropdown";
import TableHeader from "../../layouts/TableHeader";


export default function TaxModuleTable({ columns, data, title, navBtns, reportsHeader, customHeaderButtons, showGroupedHeader, isEditing, setIsEditing, emptyMessageVisible, colSpans, infos, infosHeader }) {
  const [showFilterModal, setShowFilterModal] = useState(false);
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

    return columns.map((col) => ({
      ...col,
      cell: col.cell || ((info) => info.getValue()),
      header: () => (
        <div className="d-flex align-items-center justify-content-between" style={{ cursor: "pointer" }}
          onClick={() => {
            if (col.filterOptions) {
              setOpenDropdown((prev) => (prev === col.accessorKey ? null : col.accessorKey));
              setShowColumnMenu(false);
            }
          }}
        >
          <span>{col.header}</span>
          <img src="/assets/huni-icon.svg" alt="filter" style={{ width: 16, marginLeft: 6 }} />
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


      {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

      {finalData.length > 0 && (

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
      )}



      {infosHeader === true &&

        (
          <div className="infos d-flex">

            {infos?.map((info) => (
              <div className="info d-flex" key={info.id}>
                <span>{info.title}</span>
                <span>{info.content}</span>
              </div>
            ))}

          </div>
        )
      }


      {reportsHeader && (
        <ReportsHeader isEditing={isEditing} />
      )}


      <div className="table-div">
        <table className="tables custom-table">

          <thead>
            {showGroupedHeader && (
              <tr className="group-header">
                {colSpans?.map((span) => (
                  <th key={span.id} colSpan={span.col} className="group-title"><div>{span.content}</div></th>
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
                        <ColumnFilterDropdown colKey={colKey} columns={columns} filterOpts={filterOpts} filters={filters} handleSearchChange={handleSearchChange}
                          handleCheckboxChange={handleCheckboxChange}
                          filterDropdownRef={filterDropdownRef}
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
              finalData.map((row, rowIndex) => {
                if (row.isGroupHeader) {
                  const colCount = table.getAllLeafColumns().length;
                  const remainingCols = colCount - 2;

                  return (
                    <tr key={`group-${rowIndex}`} className="group-header-row">
                      <td colSpan={2}>
                        <strong>{row.groupName}</strong>
                      </td>
                      {Array.from({ length: remainingCols }).map((_, i) => (
                        <td key={`empty-${i}`} />
                      ))}
                    </tr>
                  );
                }

                // Normal veri satırı
                const tableRow = table.getRowModel().rows.find((r) => r.original === row);
                if (!tableRow) return null;

                return (
                  <tr key={tableRow.id}>
                    {tableRow.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : emptyMessageVisible ? (
              <tr>
                <td colSpan={table.getAllLeafColumns().length}>

                  <div className="empty-message d-flex flex-column align-items-center py-5">
                    <div className="icon"><span>🧮</span></div>
                    <div className="message d-flex flex-column align-items-center">
                      <span>Oops!</span>
                      <span>Hal-hazırda hər hansı bir hesabatınız yoxdur.</span>
                      <span>
                        Hesabatlar üzrə məlumatların göstərilməsi üçün “Hesabatları filterlə” <br />
                        düyməsinə klik edib uyğun parametrləri seçin
                      </span>
                    </div>
                    <button onClick={() => setShowFilterModal(true)} className="btn btn-primary filter">
                      Hesabatları filterlə
                    </button>
                  </div>

                </td>
              </tr>
            ) : null}

          </tbody>


        </table>

        {/* <div className="total">
          jdjdjddj
        </div> */}

      </div>

      {showFilterModal && <ReportsFilterModal onClose={() => setShowFilterModal(false)} />}

      {reportsHeader && (
        <ReportsFooter />
      )}




    </div >
  );
}
