import React from "react";

const ColumnVisibilityDropdown = ({ table, columns }) => {
    return (
        <div
            className="column-visibility-dropdown-menu dropend show d-flex flex-column"
            style={{
                display: "block",
                position: "absolute",
                zIndex: 999,
            }}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="dropdown-title">Sütunları seçin</div>
            {table.getAllLeafColumns().map((col) => {
                const colDef = columns.find((c) => c.accessorKey === col.id);
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
    );
};

export default ColumnVisibilityDropdown;