// import React, { useState } from "react";

// export default function DataBaseTable() {
//   // 1) Sütun tanımları (her sütunun id, label, sıralama ve filtre durumu)
//   const [columns, setColumns] = useState([
//     { id: "no", label: "No", sortDirection: null, filterText: "" },
//     { id: "voen", label: "VÖEN", sortDirection: null, filterText: "" },
//     { id: "name", label: "Adı", sortDirection: null, filterText: "" },
//     { id: "type", label: "Tipi", sortDirection: null, filterText: "" },
//     { id: "status", label: "Vəziyyəti", sortDirection: null, filterText: "" },
//     { id: "date", label: "Qaimə tarixi", sortDirection: null, filterText: "" },
//   ]);

//   // 2) Asıl tablo verisi (satırlar)
//   const [tableData, setTableData] = useState([
//     { no: 1, voen: "1406129621", name: "A", type: "Cari", status: "Təstiqləndi", date: "01.12.2024" },
//     { no: 2, voen: "1406129621", name: "B", type: "Cari", status: "Təstiqləndi", date: "01.12.2024" },
//     { no: 3, voen: "1406129621", name: "ATS FOOD MMC", type: "Cari", status: "Təstiqləndi", date: "01.12.2024" },
//     { no: 4, voen: "1406129621", name: "ATS FOOD MMC", type: "Cari", status: "Təstiqləndi", date: "02.12.2024" },
//     { no: 5, voen: "987654321",  name: "W",    type: "Cari", status: "Gözləyir",   date: "05.12.2024" },
//   ]);

//   // 3) Hangi sütun dropdown'ının açık olduğunu izlemek için
//   const [openDropdownCol, setOpenDropdownCol] = useState(null);

//   // 4) Tek sütun sıralaması için hangi sütun sort'a sahip?
//   // (Opsiyonel, eğer birden çok sütun aynı anda sort etmek istersen her col'da saklarsın, ama basitlik için tek kolonda)
//   // Burada her kolonda sortDirection saklıyoruz. "asc" | "desc" | null

//   // 5) Sütun dropdown'ını açma/kapama
//   const handleColumnMenuToggle = (colId) => {
//     // Aynı sütuna tıklarsak kapat, farklıysa yeni aç
//     setOpenDropdownCol(openDropdownCol === colId ? null : colId);
//   };

//   // 6) Kullanıcı A->Z veya Z->A'yi seçtiğinde
//   const handleSort = (colId, direction) => {
//     // columns'u güncelle
//     setColumns(prev => prev.map(c => {
//       if (c.id === colId) {
//         return { ...c, sortDirection: direction };
//       } else {
//         // tek kolonda sort'u etkin tutmak için diğer kolonların sortDirection'ını sıfırlayalım
//         return { ...c, sortDirection: null };
//       }
//     }));

//     // menüyü kapat
//     setOpenDropdownCol(null);
//   };

//   // 7) Filtre metni girildiğinde
//   const handleFilterChange = (colId, value) => {
//     setColumns(prev => prev.map(c => c.id === colId ? { ...c, filterText: value } : c));
//   };

//   // 8) Filtre ve sıralamayı uygulayan fonksiyon
//   const getProcessedData = () => {
//     let processed = [...tableData];

//     // a) Filtre uygulama (tüm kolonların filterText'ini uygula)
//     columns.forEach(col => {
//       if (col.filterText) {
//         processed = processed.filter(row => {
//           // satırdaki kolId değerini string'e çevirip, filtreText var mı diye bak
//           const cellValue = String(row[col.id] ?? "").toLowerCase();
//           const search = col.filterText.toLowerCase();
//           return cellValue.includes(search);
//         });
//       }
//     });

//     // b) Sıralama (tek kolon)
//     const activeSortCol = columns.find(c => c.sortDirection !== null);
//     if (activeSortCol) {
//       processed.sort((a, b) => {
//         const valA = String(a[activeSortCol.id] ?? "").toLowerCase();
//         const valB = String(b[activeSortCol.id] ?? "").toLowerCase();

//         if (valA < valB) return activeSortCol.sortDirection === "asc" ? -1 : 1;
//         if (valA > valB) return activeSortCol.sortDirection === "asc" ? 1 : -1;
//         return 0;
//       });
//     }

//     return processed;
//   };

//   const processedData = getProcessedData();

//   return (
//     <div className="database-table">
//       {/* Üst kısım */}
//       <div className="table-header d-flex justify-content-between">
//         <div className="title d-flex align-items-center">
//           <div className='color'></div>
//           <span>Alış qaimələri</span>
//         </div>

//         <div className="header-actions d-flex align-items-center">
//           {/* Diğer butonlar (Export vs.) */}
//           <button className='export'>Export</button>
//         </div>
//       </div>

//       {/* Tablo */}
//       <div className="table-body">
//         <table className="table table-striped custom-table">
//           <thead className="thead">
//             <tr>
//               {columns.map(col => (
//                 <th key={col.id} scope="col" style={{ position: 'relative' }}>
//                   {/* Kolon adı */}
//                   <div
//                     className='d-flex align-items-center'
//                     style={{ cursor: 'pointer' }}
//                     onClick={() => handleColumnMenuToggle(col.id)}
//                   >
//                     <span>{col.label}</span>
//                     {/* basit sort indicator */}
//                     {col.sortDirection === "asc" ? " 🔼" : col.sortDirection === "desc" ? " 🔽" : null}
//                   </div>

//                   {/* Eğer bu sütunun dropdown'ı açıksa */}
//                   {openDropdownCol === col.id && (
//                     <div
//                       className="dropdown-menu"
//                       style={{
//                         display: 'block',
//                         position: 'absolute',
//                         top: '100%',
//                         left: 0,
//                         backgroundColor: '#fff',
//                         border: '1px solid #ccc',
//                         padding: '8px',
//                         zIndex: 999,
//                         width: '180px'
//                       }}
//                     >
//                       {/* Filtre inputu */}
//                       <div style={{ marginBottom: '8px' }}>
//                         <label style={{ fontSize: '14px' }}>Axtarış:</label>
//                         <input
//                           type="text"
//                           value={col.filterText}
//                           onChange={e => handleFilterChange(col.id, e.target.value)}
//                           style={{ width: '100%', marginTop: '4px' }}
//                         />
//                       </div>

//                       {/* Sıralama butonları */}
//                       <button
//                         style={{ width: '100%', marginBottom: '4px' }}
//                         onClick={() => handleSort(col.id, 'asc')}
//                       >
//                         A → Z
//                       </button>
                      
//                       <button
//                         style={{ width: '100%' }}
//                         onClick={() => handleSort(col.id, 'desc')}
//                       >
//                         Z → A
//                       </button>
//                     </div>
//                   )}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {processedData.map((row, idx) => (
//               <tr key={idx}>
//                 {columns.map(col => (
//                   <td key={col.id}>
//                     {row[col.id]}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
