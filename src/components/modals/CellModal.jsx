// src/components/modals/CellModal.jsx
import React from 'react';
import { createPortal } from 'react-dom';
import TaxModuleTable from '../tables/TaxModuleTable';

export default function CellModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const modalColumns = [
    { id: "no", accessorKey: "no", header: "No", footerContent: "Yekun" },
    {
      id: "date", accessorKey: "date", header: "Tarix",
      // 1) Filtre tipi olarak date-range belirtiyoruz
      filterOptions: { type: "date-range" },
      // 2) Filtreleme mantığı: eğer start/end date varsa, satırın tarihini aralığa göre kontrol et
      filterFn: (row, columnId, filterValue) => {
        const { startDate, endDate } = filterValue || {}
        if (!startDate || !endDate) return true
        const cellDate = new Date(row.getValue(columnId))
        // sadece yeni satır tarih aralığındaysa göster
        return cellDate >= startDate && cellDate <= endDate
      },
      // 3) İstersen hücreyi formatlamak için cell renderer ekleyebilirsin:
      cell: info => info.getValue()
    },
    { id: "bank_name", accessorKey: "bank_name", header: "Bank və Hesab adı", filterOptions: { search: true, type: "search", options: ["A-dan Z-yə", "Z-dən A-ya"] } },
    { id: "currency", accessorKey: "currency", header: "Valyuta", filterOptions: { type: "search", search: true } },
    {
      id: "price", accessorKey: "price", header: "Məbləğ",
      filterOptions: {
        type: "number-range",
        search: true
      },
      filterFn: (row, columnId, filterValue) => {
        const { search, value } = filterValue || {};
        const { min, max } = value || {};
        const raw = row.getValue(columnId);
        const str = String(raw);
        const num = Number(raw);
        if (search && !str.includes(search)) return false;
        if (min != null && num < min) return false;
        if (max != null && num > max) return false;
        return true;
      },
      cell: info => info.getValue(),
      enableFooterTotal: true,
    },
  ];

  const modalData = [
    { no: 1, date: "10.05.2025", bank_name: "Kapital Bank - Hesab #1234", currency: "AZN", price: 1500.00 },
    { no: 2, date: "11.05.2025", bank_name: "Access Bank - Hesab #5678", currency: "USD", price: 2500.75 },
    { no: 3, date: "12.05.2025", bank_name: "Paşa Bank - Hesab #9012", currency: "EUR", price: 1750.50 },
  ];

  return createPortal(
    <>
      {/* Modal Container */}
      <div
        className="modal fade show"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        style={{
          display: 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          padding: 0,
          margin: 0,
        }}
      >
        <div className="modal-dialog modal-xl cell-modal modal-dialog-centered" role="document">
          <div className="modal-content position-relative">

            {/* Close Icon */}
            <div className="img-div" onClick={onClose} style={{
              position: 'absolute', top: '1rem', right: '1rem', cursor: 'pointer', zIndex: 2
            }}>
              <img src="/assets/close-icon.svg" alt="Kapat" />
            </div>

            {/* Modal Body */}
            <div className="modal-body p-4">
              <TaxModuleTable
                columns={modalColumns}
                data={modalData}
                showGroupedHeader={true}
                colSpans={[{ id: 1, content: "ALFA MMC", col: 5 }]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        onClick={onClose}
      />
    </>,
    document.body
  );
}
