// src/components/dropdwons/ColumnFilterDropdown.jsx
import React from "react";
import InputWithLabel from "../ui/inputs/InputWithLabel";

const ColumnFilterDropdown = React.forwardRef(({
  colKey,
  columns,
  filterOpts,
  filters,
  handleSearchChange,
  handleCheckboxChange,
  handleNumberMinChange,
  handleNumberMaxChange,
}, ref) => {
  const columnDef = columns.find((c) => c.accessorKey === colKey);
  const columnHeader = columnDef?.header || colKey;

  const currentFilter = filters[colKey] || {};
  const searchVal = currentFilter.search || "";
  const opts = currentFilter.options || [];
  const { min = "", max = "" } = currentFilter.value || {};

  // switch ile tip seçimi
  switch (filterOpts.type) {
    case "search":
      return (
        <div
          ref={ref}
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
          <div className="dropdown-title text-capitalize">
            {columnHeader}
          </div>

          {/* 1) Metin arama input’u */}
          {filterOpts.search && (
            <div className="search-input d-flex align-items-center mb-2">
              <img src="/assets/search-icon.svg" alt="search" />
              <input
                type="text"
                placeholder="Axtar..."
                value={searchVal}
                onChange={(e) =>
                  handleSearchChange(colKey, e.target.value)
                }
              />
            </div>
          )}

          {/* 2) Eğer options varsa (alfabetik sıralama kutucukları) */}
          {filterOpts.options?.map((option) => (
            <div className="checkbox-div d-flex" key={option}>
              <input
                type="checkbox"
                className="form-check-input"
                id={`${colKey}-${option}`}
                checked={opts.includes(option)}
                onChange={() => handleCheckboxChange(colKey, option)}
              />
              <label
                className="form-check-label d-flex align-items-center"
                htmlFor={`${colKey}-${option}`}
              >
                {(option === "A-dan Z-yə" || option === "Z-dən A-ya") && (
                  <img
                    src="/assets/atoz.svg"
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

    case "checkbox":
      return (
        <div
          ref={ref}
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
          <div className="dropdown-title text-capitalize">
            {columnHeader}
          </div>
          {filterOpts.options.map((option) => (
            <div className="checkbox-div d-flex" key={option}>
              <input
                type="checkbox"
                className="form-check-input"
                id={`${colKey}-${option}`}
                checked={opts.includes(option)}
                onChange={() => handleCheckboxChange(colKey, option)}
              />
              <label
                className="form-check-label d-flex align-items-center"
                htmlFor={`${colKey}-${option}`}
              >
                {(option === "A-dan Z-yə" || option === "Z-dən A-ya") && (
                  <img
                    src="/assets/atoz.svg"
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

    case "number-range":
      return (
        <div
          ref={ref}
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
          <div className="dropdown-title text-capitalize">
            {columnHeader}
          </div>
          {filterOpts.search && (
            <div className="search-input d-flex align-items-center mb-2">
              <img src="/assets/search-icon.svg" alt="search" />
              <input
                type="text"
                placeholder="Axtar..."
                value={searchVal}
                onChange={(e) =>
                  handleSearchChange(colKey, e.target.value)
                }
              />
            </div>
          )}
          <div className="d-flex flex-column min-max-inputs">
            <div>
              <InputWithLabel
                label="Min"
                placeholder="Min"
                value={min}
                onChange={(e) =>
                  handleNumberMinChange(
                    colKey,
                    e.target.value === "" ? null : Number(e.target.value)
                  )
                }
              />
            </div>
            <div>
              <InputWithLabel
                label="Max"
                placeholder="Max"
                value={max}
                onChange={(e) =>
                  handleNumberMaxChange(
                    colKey,
                    e.target.value === "" ? null : Number(e.target.value)
                  )
                }
              />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
});

export default ColumnFilterDropdown;
