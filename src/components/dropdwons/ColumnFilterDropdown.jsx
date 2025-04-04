import React from "react";

const ColumnFilterDropdown = ({
  colKey,
  columns,         // ✅ yeni prop: bütün sütunların siyahısı
  filterOpts,
  filters,
  handleSearchChange,
  handleCheckboxChange,
  filterDropdownRef
}) => {
  // sütunun "header" dəyərini tap
  const columnDef = columns.find((c) => c.accessorKey === colKey);
  const columnHeader = columnDef?.header || colKey;

  return (
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
      {/* Title hissəsi */}
      <div className="dropdown-title text-capitalize">
        {columnHeader}
      </div>

      {filterOpts.search && (
        <div className="search-input d-flex align-items-center">
          <img src="./assets/search-icon.svg" alt="search" />
          <input
            type="text"
            placeholder="Axtar..."
            value={filters[colKey]?.search || ""}
            onChange={(e) => handleSearchChange(colKey, e.target.value)}
          />
        </div>
      )}

      {filterOpts.options?.map((option) => (
        <div className="checkbox-div d-flex" key={option}>
          <input
            type="checkbox"
            className="form-check-input"
            id={`${colKey}-${option}`}
            checked={filters[colKey]?.options?.includes(option) || false}
            onChange={() => handleCheckboxChange(colKey, option)}
          />
          <label
            className="form-check-label d-flex align-items-center"
            htmlFor={`${colKey}-${option}`}
          >
            {(option === "A-dan Z-yə" || option === "Z-dən A-ya") && (
              <img
                src="./assets/alphabet-filter.png"
                alt=""
                style={{ width: 14, height: 14, marginRight: 6 }}
              />
            )}
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ColumnFilterDropdown;
