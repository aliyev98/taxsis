import React, { useState } from 'react';
import TaxModuleTable from '../tables/TaxModuleTable';

export default function CellModal({ isOpen, onClose, row, columnKey, cellValue }) {
  // Modal içindeki input değerini bu state’te tutuyoruz
  const [inputValue, setInputValue] = useState(cellValue ?? '');

  if (!isOpen) return null;

  const modalColumns = [
    { id: "no", accessorKey: "no", header: "No", footerContent: "Yekun" },
    {
      id: "date", accessorKey: "date", header: "Tarix",
      filterOptions: {
        type: "search",
        search: true,
      },
    },
    {
      id: "bank_name",
      accessorKey: "bank_name",
      header: "Bank və Hesab adı",
      filterOptions: {
        search: true,
        type: "search",
        options: ["A-dan Z-yə", "Z-dən A-ya"],
      },
    },
    {
      id: "currency", accessorKey: "currency", header: "Valyuta",
      filterOptions: {
        type: "search",
        search: true,
      },
    },
    {
      id: "price", accessorKey: "price", header: "Məbləğ", enableFooterTotal: true,
      filterOptions: {
        type: "search",
        search: true,
      },
    },
  ]

  const modalData = [
    {
      no: 1,
      date: "10.05.2025",
      bank_name: "Kapital Bank - Hesab #1234",
      currency: "AZN",
      price: 1500.00,
    },
    {
      no: 2,
      date: "11.05.2025",
      bank_name: "Access Bank - Hesab #5678",
      currency: "USD",
      price: 2500.75,
    },
    {
      no: 3,
      date: "12.05.2025",
      bank_name: "Paşa Bank - Hesab #9012",
      currency: "EUR",
      price: 1750.50,
    },
  ];


  let colSpans = [
    { id: 1, content: "ALFA MMC", col: 5 },
  ]

  return (
    <>
      {/* Modal */}
      <div
        className="modal cell-modal fade show"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="cellModalLabel"
        aria-modal="true"
        style={{ display: 'block' }}
      >
        <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose} />
            </div>

            <div className="modal-body">

              <TaxModuleTable columns={modalColumns} data={modalData}showGroupedHeader={true} colSpans={[
                { id: 1, content: "ALFA MMC", col: 5 },
              ]} />

            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
}
