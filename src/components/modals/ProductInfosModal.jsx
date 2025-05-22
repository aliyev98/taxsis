import React from 'react'
import { createPortal } from 'react-dom'
import TaxModuleTable from '../tables/TaxModuleTable'

const ProductInfosModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    const modalColumns = [
        { id: "no", accessorKey: "no", header: "No", footerContent: "Yekun" },
        {
            id: "date", accessorKey: "date", header: "Tarix",
        },
        {
            id: "type",
            accessorKey: "type",
            header: "Növü",
        },
        {
            id: "price_without_vat", accessorKey: "price_without_vat", header: "Malın ƏDV-siz ümumi dəyəri",
        },
        {
            id: "vat_price", accessorKey: "vat_price", header: "Malın ƏDV məbləği", enableFooterTotal: true,
        },
        {
            id: "involved_vat", accessorKey: "involved_vat", header: "ƏDV-yə cəlb edilən", enableFooterTotal: true,
        },
        {
            id: "involved_vat", accessorKey: "involved_vat", header: "ƏDV-yə cəlb edilən", enableFooterTotal: true,
        },
        {
            id: "not_involved_vat", accessorKey: "not_involved_vat", header: "ƏDV-yə cəlb edilməyən", enableFooterTotal: true,
        },
        {
            id: "free_vat", accessorKey: "free_vat", header: "ƏDV-dən azad", enableFooterTotal: true,
        },
        {
            id: "involved_with_zero", accessorKey: "involved_with_zero", header: "ƏDV-yə “0” dərəcə ilə cəlb edilən", enableFooterTotal: true,
        },
    ]

    const modalData = [
        {
            no: 1,
            date: "01.01.2023",
            type: "Alış",
            price_without_vat: 10000,
            vat_price: 1800,
            involved_vat: 8200,
            not_involved_vat: 0,
            free_vat: 0,
            involved_with_zero: 0,
        },
    ];

    return createPortal(
        <>
            <div
                className="modal cell-modal fade show"
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                style={{
                    display: 'block',
                    position: 'fixed',       // ← sabit konum
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1050,            // ← en üstte
                    overflow: 'auto',
                }}
            >
                <div
                    className="modal-dialog modal-xl modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={onClose}
                            />
                        </div>
                        <div className="modal-body">
                            <TaxModuleTable
                                columns={modalColumns}
                                data={modalData}
                                showGroupedHeader
                                colSpans={[{ id: 1, content: 'ALFA MMC', col: 10 }]}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal-backdrop fade show"
                style={{
                    position: 'fixed',       // ← sabit konum
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 1040,            // modal’ın hemen altında
                }}
            />
        </>,
        document.body
    )
}

export default ProductInfosModal
