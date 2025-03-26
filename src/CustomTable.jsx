import React, { useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    flexRender,
} from "@tanstack/react-table";

// 📌 **Özel Filtreleme Fonksiyonları**
const nameFilterFn = (row, columnId, filterValue) => {
    if (!filterValue) return true;
    return row.getValue(columnId).toLowerCase().includes(filterValue.toLowerCase());
};

const statusFilterFn = (row, columnId, filterValue) => {
    if (!filterValue || filterValue.includes("Hamısı")) return true;
    return filterValue.includes(row.getValue(columnId));
};

export default function CustomTable({ columns, data }) {
    const [columnVisibility, setColumnVisibility] = useState(
        columns.reduce((acc, col) => {
            acc[col.accessorKey] = true;
            return acc;
        }, {})
    );

    // 📌 **Filtreleme için ayrı ayrı state'ler!**
    const [activeFilters, setActiveFilters] = useState({}); 
    const [nameSearch, setNameSearch] = useState("");
    const [selectedStatus, setSelectedStatus] = useState(["Hamısı"]);

    // 📌 **TanStack Table konfigürasyonu**
    const table = useReactTable({
        data,
        columns: columns.map(col => ({
            ...col,
            filterFn: col.accessorKey === "adı" ? nameFilterFn 
                      : col.accessorKey === "vəziyyəti" ? statusFilterFn 
                      : undefined,
        })),
        state: { columnVisibility },
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div style={{ position: "relative", padding: "20px" }}>
            {/* 📌 **Tablo Bileşeni** */}
            <table className="table table-bordered">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                const column = header.column;
                                const filterOptions = column.columnDef.filterOptions || null;
                                const isActive = activeFilters[column.id] ?? false;

                                return (
                                    <th key={header.id} style={{ position: "relative" }}>
                                        <span
                                            style={{
                                                cursor: filterOptions ? "pointer" : "default",
                                                color: filterOptions ? "blue" : "black",
                                                textDecoration: filterOptions ? "underline" : "none",
                                            }}
                                            onClick={() => {
                                                if (filterOptions) {
                                                    setActiveFilters(prev => ({
                                                        ...prev,
                                                        [column.id]: !prev[column.id],
                                                    }));
                                                }
                                            }}
                                        >
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </span>

                                        {/* 📌 **Kolona Özel Filtre Menüsü** */}
                                        {isActive && filterOptions && (
                                            <div className="dropdown-menu show" style={{
                                                display: "block",
                                                position: "absolute",
                                                top: "100%",
                                                left: 0,
                                                zIndex: 9999,
                                                background: "#fff",
                                                border: "1px solid #ccc",
                                                padding: "10px",
                                                minWidth: "200px",
                                            }}>
                                                {/* 📌 **İsim Kolonu İçin Arama ve Sıralama** */}
                                                {column.id === "adı" && (
                                                    <div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                                            <span role="img" aria-label="search">🔍</span>
                                                            <input
                                                                type="text"
                                                                placeholder="İsme göre ara..."
                                                                value={nameSearch}
                                                                onChange={(e) => {
                                                                    setNameSearch(e.target.value);
                                                                    column.setFilterValue(e.target.value);
                                                                }}
                                                                style={{ width: "100%", padding: "5px" }}
                                                            />
                                                        </div>

                                                        {filterOptions.options && (
                                                            filterOptions.options.map((option, index) => (
                                                                <label key={index} className="d-flex align-items-center" style={{ cursor: "pointer", gap: "5px" }}>
                                                                    <input
                                                                        type="checkbox"
                                                                        onChange={() => column.toggleSorting(option === "A-dan Z-yə")}
                                                                    />
                                                                    <span role="img" aria-label="sort">{option === "A-dan Z-yə" ? "🔼" : "🔽"}</span>
                                                                    {option}
                                                                </label>
                                                            ))
                                                        )}
                                                    </div>
                                                )}

                                                {/* 📌 **Vəziyyəti Kolonu İçin Checkbox'lar** */}
                                                {column.id === "vəziyyəti" && (
                                                    <div>
                                                        {filterOptions.options.map((option) => (
                                                            <label key={option} className="d-flex align-items-center" style={{ cursor: "pointer", gap: "5px" }}>
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedStatus.includes(option)}
                                                                    onChange={() => {
                                                                        let updatedStatus;

                                                                        if (option === "Hamısı") {
                                                                            updatedStatus = ["Hamısı"];
                                                                        } else {
                                                                            updatedStatus = selectedStatus.includes("Hamısı")
                                                                                ? [option]
                                                                                : selectedStatus.includes(option)
                                                                                    ? selectedStatus.filter((item) => item !== option)
                                                                                    : [...selectedStatus, option];

                                                                            if (updatedStatus.length === 0) {
                                                                                updatedStatus = ["Hamısı"];
                                                                            }
                                                                        }

                                                                        setSelectedStatus(updatedStatus);
                                                                        column.setFilterValue(updatedStatus.includes("Hamısı") ? undefined : updatedStatus);
                                                                    }}
                                                                />
                                                                {option}
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}

                                                <button onClick={() => setActiveFilters(prev => ({ ...prev, [column.id]: false }))}>
                                                    Kapat
                                                </button>
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
