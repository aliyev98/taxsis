import React from "react";

const ColumnVisibilityDropdown = ({ table, columns, colSpans }) => {
    // 1) Tüm yaprak sütunları al
    const leafCols = table.getAllLeafColumns();

    // 2) colSpans varsa grupları oluştur, yoksa tek grup
    const groups = [];
    if (colSpans && colSpans.length) {
        let start = 0;
        colSpans.forEach((span) => {
            const groupCols = leafCols.slice(start, start + span.col);
            groups.push({ title: span.content, cols: groupCols });
            start += span.col;
        });
        if (start < leafCols.length) {
            groups.push({ title: null, cols: leafCols.slice(start) });
        }
    } else {
        groups.push({ title: null, cols: leafCols });
    }

    return (
        <div
            className="column-visibility-dropdown-menu dropend show d-flex flex-column"
            style={{ display: "block", position: "absolute", zIndex: 999 }}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="dropdown-title">Sütunları seçin</div>

            {groups.map((group, gi) => (
                <React.Fragment key={gi}>
                    {/* Grup başlığı */}
                    {group.title && (
                        <div className="column-inputs dropdown-group-title">
                            <div>
                                {group.title}
                            </div>
                        </div>
                    )}

                    {group.cols.map((col) => {
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
                </React.Fragment>
            ))}
        </div>
    );
};

export default ColumnVisibilityDropdown;
