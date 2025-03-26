// import React, { useState } from 'react';
// import DataBaseTable from './DataBaseTable';


// const Database = () => {
//     // Seçili (aktif) butonun id’sini tutacak state
//     const [activeBtnId, setActiveBtnId] = useState(1);

//     const navBtns = [
//         { id: 1, content: 'Alış qaimələri' },
//         { id: 2, content: 'Satış qaimələri' },
//         { id: 3, content: 'Alıcıdan geri qaytarmalar' },
//         { id: 4, content: 'Satıcıdan geri qaytarmalar' },
//         { id: 5, content: 'Alış aktları' },
//     ];

//     // Bir butona tıklandığında o butonun id’sini kaydet
//     const handleButtonClick = (id) => {
//         setActiveBtnId(id);
//     };

//     return (
//         <div className="database-container d-flex flex-column">

//             <div className="database-header d-flex justify-content-between">
//                 <div className="title">Qaimələr</div>

//                 <div className="header-actions d-flex align-items-center">
//                     <button className="download">Şablonu yüklə</button>
//                     <button className="btn btn-primary import">İmport et</button>
//                 </div>
//             </div>

//             <div className="database-nav d-flex">
//                 {navBtns.map((btn) => (
//                     <button
//                         key={btn.id}
//                         // activeBtnId butonun id’sine eşitse, 'active' class’ı ekle
//                         className={activeBtnId === btn.id ? 'active' : ''}
//                         onClick={() => handleButtonClick(btn.id)}
//                     >
//                         {btn.content}
//                     </button>
//                 ))}
//             </div>

//             <div className="database-table">
//                 <DataBaseTable />
//             </div>

//         </div>
//     );
// };

// export default Database;
