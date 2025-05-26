import React from 'react'
import CellModal from '../components/modals/CellModal';
import TransportModal from '../components/modals/TransportModal';
import DateRangeDropdown from '../components/dropdwons/DateRangeDropdown'



/// qaimələr

export const purchaseColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "name",
        accessorKey: "name",
        header: "Adı",
        filterOptions: {
            search: true,
            type: "search",
            options: ["A-dan Z-yə", "Z-dən A-ya"],
        },
    },

    {
        id: "type", accessorKey: "type", header: "Tipi",
        filterOptions: { search: true, type: "search" },

    },

    ///status column
    {
        id: "status",
        accessorKey: "status",
        header: "Status",
        filterOptions: {
            type: "checkbox",
            options: ["Hamısı", "Təsdiqləndi", "Təsdiqlənmədi", "Boş"],
        },
        cell: ({ row, getValue }) => {
            const value = getValue();
            const isApproved = value === "Təsdiqləndi";

            const handleChange = (e) => {
                const newStatus = e.target.value;
                row.original.status = newStatus;
            };

            return (
                <div className="status-cell d-flex" >
                    <select className={`status-cell-select ${isApproved ? "approved" : "unapproved"}`}
                        value={value}
                        onChange={handleChange}

                    >
                        <option value="Təsdiqləndi">Təsdiqləndi</option>
                        <option value="Təsdiqlənmədi">Təsdiqlənmədi</option>
                        <option value="Boş">Boş</option>
                    </select>

                    <img src="/assets/arrow-down.svg" alt="" />
                </div>

            );
        },
    },

    //tarix

    {
        id: "date",
        accessorKey: "date",
        header: "Qaimə Tarixi",
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


    ///valyuta
    // {
    //     id: "currency", accessorKey: "currency", header: "Valyuta",
    //     filterOptions: {
    //         options: ["Hamısı", "AZN", "USD", "EUR"],
    //     },
    // },


    {
        id: "invoice_serie", accessorKey: "invoice_serie", header: "Qaimə seriyası",
        filterOptions: { search: true, type: "search" },

    },
    {
        id: "invoice_num", accessorKey: "invoice_num", header: "Qaimə nömrəsi",
        filterOptions: { search: true, type: "search" },

    },
    {
        id: "main_note", accessorKey: "main_note", header: "Əsas qeyd",
        filterOptions: { search: true, type: "search" },

    },
    {
        id: "extra_note", accessorKey: "extra_note", header: "Əlavə qeyd",
        filterOptions: { search: true, type: "search" },

    },

    /// Malın ƏDV - siz ümumi dəyəri
    // {
    //     id: "amount_without_vat", accessorKey: "amount_without_vat", header: "Malın ƏDV - siz ümumi dəyəri",
    //     filterOptions: { search: true, type: "search" },
    //     enableFooterTotal: true,

    // },

    {
        id: "amount_without_vat",
        accessorKey: "amount_without_vat",
        header: "Malın ƏDV-siz ümumi dəyəri",

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
    },

    {
        id: "amount_with_vat", accessorKey: "amount_with_vat", header: "Malın ƏDV məbləği", enableFooterTotal: true,
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

    },

    {
        id: "involve_vat", accessorKey: "involve_vat", header: "ƏDV - yə cəlb edilən", enableFooterTotal: true,
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
    },

    {
        id: "not_involve_vat", accessorKey: "not_involve_vat", header: "ƏDV - yə cəlb edilməyən", enableFooterTotal: true,
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
    },

    {
        id: "free_vat", accessorKey: "free_vat", header: "ƏDV -dən azad olan", enableFooterTotal: true,
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
    },

    {
        id: "zero_involve_vat", accessorKey: "zero_involve_vat", header: "ƏDV - yə “0” dərəcə ilə cəlb edilən", enableFooterTotal: true,
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
    },

    {
        id: "road_tax", accessorKey: "road_tax", header: "Yol vergisi", enableFooterTotal: true,
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
    },

    {
        id: "axsiz_amount", accessorKey: "axsiz_amount", header: "Aksiz məbləği", enableFooterTotal: true,
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
    },

    {
        id: "act_type", accessorKey: "act_type", header: "Qaimə / Akt növləri",
        filterOptions: { search: true, type: "search" },
    },

    //növ
    {
        id: "kind",
        accessorKey: "kind",
        header: "Növ",
        filterOptions: {
            type: "checkbox",
            options: ["Hamısı", "Aktiv", "Xidmət", "Satış"],
        },
        cell: ({ row, getValue }) => {
            const value = getValue();

            // Değere göre sınıf adını seçiyoruz
            const classMap = {
                Aktiv: "active",
                "Xidmət": "service",
                Satış: "sale",
            };
            const kindClass = classMap[value] || "";

            const handleChange = (e) => {
                const newKind = e.target.value;
                row.original.kind = newKind;
                // Eğer tablon bir state'e bağlı değilse, forceUpdate vs. gerekebilir
            };

            return (
                <div className="kind-cell d-flex">
                    <select
                        className={`kind-cell-select ${kindClass}`}
                        value={value}
                        onChange={handleChange}
                    >
                        <option value="Aktiv">Aktiv</option>
                        <option value="Xidmət">Xidmət</option>
                        <option value="Satış">Satış</option>
                    </select>
                    <img src="/assets/arrow-down.svg" alt="" />
                </div>
            );
        },
    },

    //təsnifat
    {
        id: "classification",
        accessorKey: "classification",
        header: "Təsnifat",
        filterOptions: {
            type: "checkbox",
            options: ["Hamısı", "Aktiv", "Xərc"],
        },
        cell: ({ row, getValue }) => {
            const value = getValue();

            // değere göre sınıf adını seçiyoruz
            const classMap = {
                Aktiv: "active",
                Xərc: "expense",
            };
            const classificationClass = classMap[value] || "";

            const handleChange = (e) => {
                const newVal = e.target.value;
                // yerel state ya da doğrudan original üzerinde güncelle
                row.original.classification = newVal;
                // eğer tablo state'inize bağlı değilse, forceUpdate gerekebilir
            };

            return (
                <div className="classification-cell d-flex">
                    <select
                        className={`classification-cell-select ${classificationClass}`}
                        value={value}
                        onChange={handleChange}
                    >
                        <option value="Aktiv">Aktiv</option>
                        <option value="Xərc">Xərc</option>
                    </select>
                    <img src="/assets/arrow-down.svg" alt="" />
                </div>
            );
        },
    },

];

export const actsColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "infos",
        accessorKey: "infos",
        header: "Satıcının adı, soyadı, ata adı",
        // filterOptions: {
        //     type: "search",
        //     search: true,
        //     options: ["A-dan Z-yə", "Z-dən A-ya"],
        // },
    },
    {
        id: "series", accessorKey: "series", header: "Seriya",
        // filterOptions: { search: true, type: "search" },

    },
    {
        id: "number", accessorKey: "number", header: "Nömrə",
        // filterOptions: { search: true, type: "search" },

    },
    {
        id: "situation", accessorKey: "situation", header: "Vəziyyəti",
        // filterOptions: { search: true, type: "search" },

    },
    {
        id: "status",
        accessorKey: "status",
        header: "Status",
        filterOptions: {
            type: "checkbox",
            options: ["Hamısı", "Təsdiqləndi", "Təsdiqlənmədi", "Boş"],
        },
        cell: ({ row, getValue }) => {
            const value = getValue();
            const isApproved = value === "Təsdiqləndi";

            const handleChange = (e) => {
                const newStatus = e.target.value;
                row.original.status = newStatus;
            };

            return (
                <div className="status-cell d-flex" >
                    <select className={`${isApproved ? "approved" : "unapproved"}`}
                        value={value}
                        onChange={handleChange}

                    >
                        <option value="Təsdiqləndi">Təsdiqləndi</option>
                        <option value="Təsdiqlənmədi">Təsdiqlənmədi</option>
                        <option value="Boş">Boş</option>
                    </select>

                    <img src="/assets/arrow-down.svg" alt="" />
                </div>

            );
        },
    },
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
];

//əvəzləşmə reyestri

export const replacedColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "series", accessorKey: "series", header: "Seriya",
        filterOptions: {
            search: true, // input arama
            type: "search",
        },
    },
    {
        accessorKey: "number",
        header: "Nömrə",
        filterOptions: {
            search: true, // input arama
            type: "search",
        },
    },
    {
        id: "date", accessorKey: "date", header: "Tarix",
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
    {
        accessorKey: "line_code",
        header: "Sətir kodu",
        filterOptions: {
            search: true, // input arama
            type: "search",
        },
    },
    {
        id: "voen", accessorKey: "voen", header: "Vöen",
        filterOptions: {
            search: true,
            type: "search",
        },
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: {
            search: true,
            type: "search",
            options: ["A-dan Z-yə", "Z-dən A-ya"], // belki sıralama opsiyonları
        },
    },
    {
        id: "total_cost", accessorKey: "total_cost", header: "Malın ümumi dəyəri",
        filterOptions: {
            search: true,
            type: "search",
        },
        enableFooterTotal: true,
    },
    {
        id: "vat_cost", accessorKey: "vat_cost", header: "Malın ƏDV dəyəri",
        filterOptions: {
            search: true,
            type: "search",
        },
        enableFooterTotal: true,
    },
    {
        id: "paid_value", accessorKey: "paid_value", header: "Ödənilmiş ümumi dəyər",
        filterOptions: {
            search: true,
            type: "search",
        },
        enableFooterTotal: true,
    },
    {
        id: "paid_vat", accessorKey: "paid_vat", header: "Ödənilmiş ƏDV",
        filterOptions: {
            search: true,
            type: "search",
        },
        enableFooterTotal: true,
    },
    {
        id: "replacement_period", accessorKey: "replacement_period", header: "Əvəzləşmə dövrü",
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
];

export const initialsColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "voen",
        accessorKey: "voen",
        header: "Vöen",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "date", accessorKey: "date", header: "Qaimə tarixi",
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
    {
        id: "invoice_series", accessorKey: "invoice_series", header: "Qaimə seriyası",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "invoice_number", accessorKey: "invoice_number", header: "Qaimə nömrəsi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "main", accessorKey: "main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
];

export const advanceColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "voen",
        accessorKey: "voen",
        header: "Vöen",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "kind",
        accessorKey: "kind",
        header: "Növ",
        filterOptions: {
            type: "checkbox",
            options: ["Hamısı", "Avans", "İmtiyaz",],
        },
        cell: ({ row, getValue }) => {
            const value = getValue();

            // Değere göre sınıf adını seçiyoruz
            const classMap = {
                "Avans": "advance",
                "İmtiyaz": "privilege",
            };
            const kindClass = classMap[value] || "";

            const handleChange = (e) => {
                const newKind = e.target.value;
                row.original.kind = newKind;
                // Eğer tablon bir state'e bağlı değilse, forceUpdate vs. gerekebilir
            };

            return (
                <div className="kind-cell d-flex">
                    <select
                        className={`kind-cell-select ${kindClass}`}
                        value={value}
                        onChange={handleChange}
                    >
                        <option value="Avans">Avans</option>
                        <option value="İmtiyaz">İmtiyaz</option>
                    </select>
                    <img src="/assets/arrow-down.svg" alt="" />
                </div>
            );
        },
    },
    {
        id: "type",
        accessorKey: "type",
        header: "Tipi",
        filterOptions: {
            type: "checkbox",
            options: ["Hamısı", "Giriş", "Çıxış",],
        },
        cell: ({ row, getValue }) => {
            const value = getValue();

            // Değere göre sınıf adını seçiyoruz
            const classMap = {
                "Giriş": "advance",
                "Çıxış": "privilege",
            };
            const kindClass = classMap[value] || "";

            const handleChange = (e) => {
                const newKind = e.target.value;
                row.original.kind = newKind;
                // Eğer tablon bir state'e bağlı değilse, forceUpdate vs. gerekebilir
            };

            return (
                <div className="kind-cell d-flex">
                    <select
                        className={`kind-cell-select ${kindClass}`}
                        value={value}
                        onChange={handleChange}
                    >
                        <option value="Giriş">Giriş</option>
                        <option value="Çıxış">Çıxış</option>
                    </select>
                    <img src="/assets/arrow-down.svg" alt="" />
                </div>
            );
        },
    },
    {
        id: "amount", accessorKey: "amount", header: "Məbləğ",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
];

// depozit cizarislari

export const depositsColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "voen",
        accessorKey: "voen",
        header: "Vöen",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "name", accessorKey: "name", header: "Vergi ödəyicisinin adı",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "date", accessorKey: "date", header: "Əməliyyat tarixi",
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
    {
        id: "income", accessorKey: "income", header: "Mədaxil(AZN)",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "expense", accessorKey: "expense", header: "Məxaric(AZN)",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "account_type", accessorKey: "account_type", header: "Hesabın növü",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "opr_type", accessorKey: "opr_type", header: "Əməliyyatın növü",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "document_num", accessorKey: "document_num", header: "Sənədin nömrəsi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "opr_purpose", accessorKey: "opr_purpose", header: "Əməliyyatın təyinatı",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "budget_code", accessorKey: "budget_code", header: "Büdcə təsnifat kodu",
        filterOptions: {
            type: "search",
            search: true,
        },
    },


    {
        id: "classification",
        accessorKey: "classification",
        header: "Təsnifat",
        filterOptions: {
            type: "checkbox",
            options: ["Hamısı", "Geri", "İrəli",],
        },
        cell: ({ row, getValue }) => {
            const value = getValue();

            // Değere göre sınıf adını seçiyoruz
            const classMap = {
                "Avans": "advance",
                "İmtiyaz": "privilege",
            };
            const kindClass = classMap[value] || "";

            const handleChange = (e) => {
                const newKind = e.target.value;
                row.original.kind = newKind;
                // Eğer tablon bir state'e bağlı değilse, forceUpdate vs. gerekebilir
            };

            return (
                <div className="kind-cell d-flex">
                    <select
                        className={`kind-cell-select ${kindClass}`}
                        value={value}
                        onChange={handleChange}
                    >
                        <option value="Avans">Gerı</option>
                        <option value="İmtiyaz">İrəli</option>
                    </select>
                    <img src="/assets/arrow-down.svg" alt="" />
                </div>
            );
        },



        // id: "classification",
        // accessorKey: "classification",
        // header: "Təsnifat",
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },

        // cell: ({ getValue, row, column }) => {
        //     const ref = React.useRef();
        //     const [isEditing, setIsEditing] = React.useState(false);
        //     const [tempValue, setTempValue] = React.useState(getValue());
        //     const colId = column.id;

        //     const handleSave = () => {
        //         row.original[colId] = tempValue; // geçici yerel güncelleme
        //         setIsEditing(false);
        //     };

        //     const handleKeyDown = (e) => {
        //         if (e.key === "Enter") handleSave();
        //         if (e.key === "Escape") setIsEditing(false);
        //     };

        //     React.useEffect(() => {
        //         // input dışına tıklanınca kapansın istersen buraya ekleyebilirsin
        //         const handleClickOutside = (e) => {
        //             if (ref.current && !ref.current.contains(e.target)) {
        //                 setIsEditing(false);
        //             }
        //         };
        //         if (isEditing) {
        //             document.addEventListener("mousedown", handleClickOutside);
        //         }
        //         return () => {
        //             document.removeEventListener("mousedown", handleClickOutside);
        //         };
        //     }, [isEditing]);

        //     return (
        //         <div
        //             ref={ref}
        //             className="d-flex align-items-center justify-content-between"
        //         >
        //             {isEditing ? (
        //                 <>
        //                     <input
        //                         type="text"
        //                         value={tempValue}
        //                         onChange={(e) => setTempValue(e.target.value)}
        //                         onKeyDown={handleKeyDown}
        //                         autoFocus
        //                         className="form-control"
        //                         style={{
        //                             width: `${tempValue.length + 1}ch`,
        //                             minWidth: "60px",
        //                         }}
        //                     />
        //                     <img
        //                         src="/assets/check-icon.svg"
        //                         alt="save"
        //                         title="Yadda saxla"
        //                         style={{
        //                             width: 20,
        //                             height: 20,
        //                             cursor: "pointer",
        //                             marginLeft: 6,
        //                         }}
        //                         onClick={handleSave}
        //                     />
        //                 </>
        //             ) : (
        //                 <>
        //                     <span>{getValue()}</span>
        //                     <img
        //                         src="/assets/edit-pen.svg"
        //                         alt="edit"
        //                         title="Dəyiş"
        //                         style={{
        //                             width: 16,
        //                             height: 16,
        //                             cursor: "pointer",
        //                             marginLeft: 8,
        //                         }}
        //                         onClick={() => setIsEditing(true)}
        //                     />
        //                 </>
        //             )}
        //         </div>
        //     );
        // }


    }

];

// bank çıxarışları

export const bankStatementsColumns = [
    {
        id: "no", accessorKey: "no", header: "no", enableFooterTotal: true,
    },
    {
        id: "opr_date", accessorKey: "opr_date", header: "Əməliyyat tarixi",
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
    {
        id: "opr_num", accessorKey: "opr_num", header: "Əməliyyat nömrəsi",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "taxpayer_name", accessorKey: "taxpayer_name", header: "Vergi ödəyicisinin adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "income_azn", accessorKey: "income_azn", header: "Mədaxil (AZN)",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "expense_azn", accessorKey: "expense_azn", header: "Məxaric (AZN)",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "payment_dest", accessorKey: "payment_dest", header: "Ödəniş təyinatı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "money_flow", accessorKey: "money_flow", header: "Pulun hərəkət maddəsi",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "form",
        accessorKey: "form",
        header: "Forması",
        filterOptions: { search: true, type: "search" },
        cell: ({ getValue, row, column }) => {
            const value = getValue();
            const rowIndex = row.index;
            const colId = column.id;

            const getColorClass = (val) => {
                switch (val) {
                    case "əsas":
                        return "form-main";
                    case "ədv":
                        return "form-vat";
                    case "qarışıq":
                        return "form-mixed";
                    default:
                        return "";
                }
            };

            return (
                <select
                    className={`form-select ${getColorClass(value)}`}
                    value={value}
                    onChange={(e) => {
                        row.original[colId] = e.target.value;
                    }}
                >
                    <option value="əsas">əsas</option>
                    <option value="ədv">ədv</option>
                    <option value="qarışıq">qarışıq</option>
                </select>
            );
        }
    }

]

//kassa əməliyyatları

export const onlineCashColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "code",
        accessorKey: "code",
        header: "Obyektin kodu",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "name", accessorKey: "name", header: "Obyektin adı",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "date", accessorKey: "date", header: "Tarix",
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
    {
        id: "total_sales", accessorKey: "total_sales", header: "Cəmi satış",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "return", accessorKey: "return", header: "Geri qaytarma",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "cancel", accessorKey: "cancel", header: "Ləğv etmə",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "net_sale", accessorKey: "net_sale", header: "Xalis satış",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "cash", accessorKey: "cash", header: "Nağd",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "cashless", accessorKey: "cashless", header: "Nağdsız",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "vat_exempt", accessorKey: "vat_exempt", header: "ƏDV-dən azad",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "eighteen_percent", accessorKey: "eighteen_percent", header: "18%",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "tax", accessorKey: "tax", header: "Vergi",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
];

export const physicalCashColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "date",
        accessorKey: "date",
        header: "Əməliyyat tarixi",
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
    {
        id: "voen", accessorKey: "voen", header: "Vöen",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "name", accessorKey: "name", header: "Vergi ödəyicisinin adı",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "income", accessorKey: "income", header: "Mədaxil(AZN)",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "expense", accessorKey: "expense", header: "Məxaric(AZN)",
        filterOptions: {
            type: "search",
            search: true,
        },
        enableFooterTotal: true,
    },
    {
        id: "payment_destination", accessorKey: "payment_destination", header: "Ödəniş təyinatı",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "money_action", accessorKey: "money_action", header: "Pulun hərəkət təyinatı",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "type",
        accessorKey: "type",
        header: "Növü",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
];

// gömrük sənədləri

export const ImportDocsColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, modalComponent: TransportModal },
    {
        id: "date", accessorKey: "date", header: "Tarix",
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
    { id: "ygb_num", accessorKey: "ygb_num", header: "YGB nömrəsi", filterOptions: { search: true, type: "search" }, },
    { id: "exporter", accessorKey: "exporter", header: "İxracatçı", filterOptions: { search: true, type: "search" }, },
    { id: "usd_price", accessorKey: "usd_price", header: "USD məzənnə", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_currency", accessorKey: "invoice_currency", header: "İnvoys valyuta", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_price", accessorKey: "invoice_price", header: "İnvoys məzənnə", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_value", accessorKey: "invoice_value", header: "İnvoys dəyəri", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    {
        id: "transport_azn",
        accessorKey: "transport_azn",
        header: "Daşıma AZN",
        filterOptions: { search: true, type: "search" },
        enableFooterTotal: true,

        // artık hücre tıklayınca değil, yalnızca butona tıklanınca modal açılsın:
        openOnCellClick: false,

        // butondan çağıracağımız custom modal bileşeni
        modalComponent: TransportModal,

        // hücrenin kendisi
        cell: ({ row, table }) => {
            // table.options.meta içine yazacağımız callback’i alıyoruz
            const { onTransportClick } = table.options.meta;
            return (
                <div className="transport-azn-cell d-flex align-items-center justify-content-between">
                    <span>{row.original.invoice_azn}</span>
                    <button
                        onClick={e => {
                            e.stopPropagation();
                            // butona tıklanınca callback’i çağır:
                            onTransportClick(row.original);
                        }}
                    >
                        <img src="/assets/add-icon.svg" alt="Add" />
                    </button>
                </div>
            );
        },
    },


    { id: "invoice_azn", accessorKey: "invoice_azn", header: "İnvoys AZN", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "real_custom_value", accessorKey: "real_custom_value", header: "Real Gömrük dəyəri", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "statistical_value", accessorKey: "statistical_value", header: "Statistik dəyər", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "two", accessorKey: "two", header: "Gömrük yığımları-02", filterOptions: { search: true, type: "search" }, },
    { id: "nineteen", accessorKey: "nineteen", header: "Gömrük yığımları-19", filterOptions: { search: true, type: "search" }, },
    { id: "thirty_two", accessorKey: "thirty_two", header: "Gömrük yığımları-32", filterOptions: { search: true, type: "search" }, },
    { id: "excise", accessorKey: "excise", header: "Aksiz", filterOptions: { search: true, type: "search" }, },
    { id: "seventy_five", accessorKey: "seventy_five", header: "Gömrük yığımları-75", filterOptions: { search: true, type: "search" }, },
    { id: "eighty_five", accessorKey: "eighty_five", header: "Gömrük yığımları-85", filterOptions: { search: true, type: "search" }, },
    { id: "total_fee", accessorKey: "total_fee", header: "Cəmi rüsumlar", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "real_value", accessorKey: "real_value", header: "Real dəyər", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "cost_statistical_value", accessorKey: "cost_statistical_value", header: "Statistik dəyər", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
];

export const ExportDocsColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true },
    {
        id: "date", accessorKey: "date", header: "Tarix",
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
    { id: "ygb_num", accessorKey: "ygb_num", header: "YGB nömrəsi", filterOptions: { search: true, type: "search" }, },
    { id: "importer", accessorKey: "importer", header: "İdxalçı", filterOptions: { search: true, type: "search" }, },
    { id: "usd_price", accessorKey: "usd_price", header: "USD məzənnə", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_currency", accessorKey: "invoice_currency", header: "İnvoys valyuta", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_price", accessorKey: "invoice_price", header: "İnvoys məzənnə", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_value", accessorKey: "invoice_price", header: "İnvoys dəyəri", filterOptions: { search: true, type: "search" }, },
    { id: "transport_azn", accessorKey: "transport_azn", header: "Daşıma AZN", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    {
        id: "invoice_azn", accessorKey: "invoice_azn", header: "İnvoys AZN", filterOptions: { search: true, type: "search" }, enableFooterTotal: true,
        cell: ({ row }) => (
            <div className="invoice-azn-cell d-flex align-items-center justify-content-between">
                <span>{row.original.invoice_azn}</span>
                <button>
                    <img src="/assets/add-icon.svg" alt="" />
                </button>
            </div>
        )

    },
    { id: "real_custom_value", accessorKey: "real_custom_value", header: "Real Gömrük dəyəri", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "statistical_value", accessorKey: "statistical_value", header: "Statistik dəyər", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "two", accessorKey: "two", header: "02", filterOptions: { search: true, type: "search" }, },
    { id: "nineteen", accessorKey: "nineteen", header: "19", filterOptions: { search: true, type: "search" }, },
    { id: "thirty_two", accessorKey: "thirty_two", header: "32", filterOptions: { search: true, type: "search" }, },
    { id: "excise", accessorKey: "excise", header: "Aksiz", filterOptions: { search: true, type: "search" }, },
    { id: "seventy_five", accessorKey: "seventy_five", header: "75", filterOptions: { search: true, type: "search" }, },
    { id: "eighty_five", accessorKey: "eighty_five", header: "85", filterOptions: { search: true, type: "search" }, },
    { id: "real_value", accessorKey: "real_value", header: "Real dəyər", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "cost_statistical_value", accessorKey: "cost_statistical_value", header: "Statistik dəyər", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
];

export const TransportExpensesColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true },
    {
        id: "date", accessorKey: "date", header: "Tarix",
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
    { id: "ygb_num", accessorKey: "ygb_num", header: "YGB nömrəsi", filterOptions: { search: true, type: "search" }, },
    { id: "counterparty", accessorKey: "counterparty", header: "Kontragent adı", filterOptions: { search: true, type: "search" }, },
    { id: "expense_type", accessorKey: "expense_type", header: "Xərc növü", filterOptions: { search: true, type: "search" }, },
    { id: "currency_type", accessorKey: "currency_type", header: "Valyuta növü", filterOptions: { search: true, type: "search" }, },
    { id: "currency_price", accessorKey: "currency_price", header: "Valyuta məzənnəsi", filterOptions: { search: true, type: "search" }, },
    { id: "amount_currency", accessorKey: "amount_currency", header: "Məbləğ valyuta ilə", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "amount_azn", accessorKey: "amount_azn", header: "Məbləğ AZN", filterOptions: { search: true, type: "search" }, },
    { id: "omv_percent", accessorKey: "omv_percent", header: "ÖMV faizi", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "omv", accessorKey: "omv", header: "ÖMV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    {
        id: "type", accessorKey: "type", header: "Tipi", filterOptions: { search: true, type: "search" },
        cell: (info) => {
            return <div className="type">{info.getValue()}</div>;
        }

    },
];

// vergi hesabatları

export const vatColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true
    },
    {
        id: "date", accessorKey: "date", header: "Tarix",
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
    {
        id: "counterparty", accessorKey: "counterparty", header: "Kontragentin adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "income_type", accessorKey: "income_type", header: "Gəlir növü",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency_type", accessorKey: "currency_type", header: "Valyuta növü",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency_price", accessorKey: "currency_price", header: "Valyuta məzənnəsi",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "sale_amount", accessorKey: "sale_amount", header: "Satış məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "amount_azn", accessorKey: "amount_azn", header: "Məbləğ AZN", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat_amount", accessorKey: "vat_amount", header: "ƏDV məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },

]

////daxili qalıqlar

export const internalCreditorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "invoice_date", accessorKey: "invoice_date", header: "Qaimə tarixi",
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
    {
        id: "invoice_series", accessorKey: "invoice_series", header: "Qaimə seriası",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "invoice_num", accessorKey: "invoice_num", header: "Qaimə nömrəsi",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "main", accessorKey: "main", header: "Əsas", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

export const internalDebitorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "invoice_date", accessorKey: "invoice_date", header: "Qaimə tarixi",
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
    {
        id: "invoice_series", accessorKey: "invoice_series", header: "Qaimə seriası",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "invoice_num", accessorKey: "invoice_num", header: "Qaimə nömrəsi",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "main", accessorKey: "main", header: "Əsas", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

export const internalGivenAdvanceColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "main", accessorKey: "main", header: "Əsas", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

export const internalReceivedAdvanceColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "main", accessorKey: "main", header: "Əsas", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]


/// xarici qalıqlar


export const externalCreditorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "ygb_date", accessorKey: "ygb_date", header: "YGB tarixi",
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
    {
        id: "ygb_num", accessorKey: "ygb_num", header: "YGB nömrəsi",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency", accessorKey: "currency", header: "Valyuta",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "price", accessorKey: "price", header: "Məzənnə",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency_amount", accessorKey: "currency_amount", header: "Valyuta məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "azn", accessorKey: "azn", header: "AZN", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

export const externalDebitorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "ygb_date", accessorKey: "ygb_date", header: "YGB tarixi",
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
    {
        id: "ygb_num", accessorKey: "ygb_num", header: "YGB nömrəsi",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency", accessorKey: "currency", header: "Valyuta",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "price", accessorKey: "price", header: "Məzənnə",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency_amount", accessorKey: "currency_amount", header: "Valyuta məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "azn", accessorKey: "azn", header: "AZN", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

export const externalGivenAdvanceColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency", accessorKey: "currency", header: "Valyuta",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "price", accessorKey: "price", header: "Məzənnə",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency_amount", accessorKey: "currency_amount", header: "Valyuta məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "azn", accessorKey: "azn", header: "AZN", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

export const externalReceivedAdvanceColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "main", accessorKey: "main", header: "Əsas",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

/// qeyri rezidentlər

export const serviceImportColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "date", accessorKey: "date", header: "Tarix",
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
    {
        id: "kontragent_name", accessorKey: "kontragent_name", header: "Kontragent adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "expense_type", accessorKey: "expense_type", header: "Xərc növü",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency_type", accessorKey: "currency_type", header: "Valyuta növü",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency_price", accessorKey: "currency_price", header: "Valyuta məzənnə",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "pay_amount", accessorKey: "pay_amount", header: "Ödəniş məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "omv_percent", accessorKey: "omv_percent", header: "ÖMV faizi", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_amount", accessorKey: "purchase_amount", header: "Alış məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "omv", accessorKey: "omv", header: "ÖMV", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat_amount", accessorKey: "vat_amount", header: "ƏDV məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

export const serviceExportColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "date", accessorKey: "date", header: "Tarix",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "kontragent_name", accessorKey: "kontragent_name", header: "Kontragent adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "income_type", accessorKey: "income_type", header: "Gəlir növü",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency_type", accessorKey: "currency_type", header: "Valyuta növü",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "currency_price", accessorKey: "currency_price", header: "Valyuta məzənnə",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "sale_amount", accessorKey: "sale_amount", header: "Satış məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "amount_azn", accessorKey: "amount_azn", header: "Məbləğ AZN", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat_amount", accessorKey: "vat_amount", header: "ƏDV məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

// üzləşmə aktları

export const confrontationActsColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "date",
        accessorKey: "date",
        header: "Tarix",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "opr_type", accessorKey: "opr_type", header: "Əməliyyat növü",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "doc_num", accessorKey: "doc_num", header: "Sənəd nömrəsi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "debet_main", accessorKey: "debet_main", header: "Əsas", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "debet_vat", accessorKey: "debet_vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "debet_total", accessorKey: "debet_total", header: "Cəmi", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_main", accessorKey: "credit_main", header: "Əsas", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_vat", accessorKey: "credit_vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_total", accessorKey: "credit_total", header: "Cəmi", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_main", accessorKey: "residue_main", header: "Əsas", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_vat", accessorKey: "residue_vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_total", accessorKey: "residue_total", header: "Cəmi", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
];

export const creditorColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "date",
        accessorKey: "date",
        header: "Tarix",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "opr_type", accessorKey: "opr_type", header: "Əməliyyat növü",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "doc_num", accessorKey: "doc_num", header: "Sənəd nömrəsi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "debet_main", accessorKey: "debet_main", header: "Əsas", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "debet_vat", accessorKey: "debet_vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "debet_total", accessorKey: "debet_total", header: "Cəmi", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_main", accessorKey: "credit_main", header: "Əsas", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_vat", accessorKey: "credit_vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_total", accessorKey: "credit_total", header: "Cəmi", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_main", accessorKey: "residue_main", header: "Əsas", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_vat", accessorKey: "residue_vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_total", accessorKey: "residue_total", header: "Cəmi", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
]

// export const debitorColumns = [
//     { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
//     {
//         id: "date",
//         accessorKey: "date",
//         header: "Tarix",
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
//     {
//         id: "opr_type", accessorKey: "opr_type", header: "Əməliyyat növü",
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
//     {
//         id: "doc_num", accessorKey: "doc_num", header: "Sənəd nömrəsi",
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
//     {
//         id: "debet_main", accessorKey: "debet_main", header: "Əsas", enableFooterTotal: true,
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
//     {
//         id: "debet_vat", accessorKey: "debet_vat", header: "ƏDV", enableFooterTotal: true,
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
//     {
//         id: "debet_total", accessorKey: "debet_total", header: "Cəmi", enableFooterTotal: true,
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
//     {
//         id: "credit_main", accessorKey: "credit_main", header: "Əsas", enableFooterTotal: true,
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
//     {
//         id: "credit_vat", accessorKey: "credit_vat", header: "ƏDV", enableFooterTotal: true,
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
//     {
//         id: "credit_total", accessorKey: "credit_total", header: "Cəmi", enableFooterTotal: true,
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
//     {
//         id: "residue_main", accessorKey: "residue_main", header: "Əsas", enableFooterTotal: true,
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
//     {
//         id: "residue_vat", accessorKey: "residue_vat", header: "ƏDV", enableFooterTotal: true,
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
//     {
//         id: "residue_total", accessorKey: "residue_total", header: "Cəmi", enableFooterTotal: true,
//         filterOptions: {
//             type: "search",
//             search: true,
//         },
//     },
// ]

export const frgnCreditorColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "date",
        accessorKey: "date",
        header: "Tarix",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "opr_type", accessorKey: "opr_type", header: "Əməliyyat növü",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "doc_num", accessorKey: "doc_num", header: "Sənəd nömrəsi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "debet_currency", accessorKey: "debet_currency", header: "Valyuta", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "debet_exchange", accessorKey: "debet_exchange", header: "Məzənnə", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "debet_azn", accessorKey: "debet_azn", header: "AZN", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_currency", accessorKey: "credit_currency", header: "Valyuta", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_exchange", accessorKey: "credit_exchange", header: "Məzənnə", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_azn", accessorKey: "credit_azn", header: "AZN", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_currency", accessorKey: "residue_currency", header: "Valyuta", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_exchange", accessorKey: "residue_exchange", header: "Məzənnə", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_azn", accessorKey: "residue_azn", header: "AZN", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
]

// qaimələr üzrə hesabat

export const onPurchasesColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, headerContent: "1", },
    {
        id: "date",
        headerContent: "ACCFIN GROUP",
        accessorKey: "date",
        header: "Qaimə tarixi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "ivoice_num", accessorKey: "ivoice_num", header: "Qaimə nömrəsi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    //////
    {
        id: "invoice_main", accessorKey: "invoice_main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "invoice_vat", accessorKey: "invoice_vat", header: "ƏDV", enableFooterTotal: true, enableHeaderTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "invoice_total", accessorKey: "invoice_total", header: "Cəmi", enableFooterTotal: true, enableHeaderTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "closed_main", accessorKey: "closed_main", header: "Əsas", enableFooterTotal: true, enableHeaderTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "closed_vat", accessorKey: "closed_vat", header: "ƏDV", enableFooterTotal: true, enableHeaderTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "closed_total", accessorKey: "closed_total", header: "Cəmi", enableFooterTotal: true, enableHeaderTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_main", accessorKey: "residue_main", header: "Əsas", enableFooterTotal: true, enableHeaderTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_vat", accessorKey: "residue_vat", header: "ƏDV", enableFooterTotal: true, enableHeaderTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_total", accessorKey: "residue_total", header: "Cəmi", enableFooterTotal: true, enableHeaderTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
];

// xarici alışlar və satışlar sütunları eynidir
export const byForeignPurchasesColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, headerContent: "1" },
    {
        id: "date",
        accessorKey: "date",
        header: "Qaimə tarixi",
        headerContent: "ACCFIN GROUP",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "ivoice_num", accessorKey: "ivoice_num", header: "İnvoys nömrəsi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "ygb_num", accessorKey: "ygb_num", header: "YGB nömrəsi",
        filterOptions: {
            type: "search",
            search: true,
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
    {
        id: "closed", accessorKey: "closed", header: "Bağlanıb",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "left", accessorKey: "left", header: "Qalıb", enableFooterTotal: true,
        filterOptions: {
            type: "search",
            search: true,
        },
    },
]



/// pulun hərəkəti hesabatı
export const internalDKColumns = [
    { id: "no", accessorKey: "no", header: "No", footerContent: "Yekun", },
    {
        id: "name",
        accessorKey: "name",
        header: "Adı",
        // filterOptions: {
        //     search: true,
        //     type: "search",
        //     options: ["A-dan Z-yə", "Z-dən A-ya"],
        // },
    },
    {
        id: "vat", accessorKey: "vat", header: "VÖEN",
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },

    {
        id: "bank_main", accessorKey: "bank_main", header: "Əsas", enableFooterTotal: true, enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "bank_vat", accessorKey: "bank_vat", header: "ƏDV", enableFooterTotal: true, enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "bank_final", accessorKey: "bank_final", header: "Yekun", enableFooterTotal: true, enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },

    {
        id: "vat_deposit_main", accessorKey: "vat_deposit_main", header: "Əsas", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "vat_deposit_vat", accessorKey: "vat_deposit_vat", header: "Ədv", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "vat_deposit_final", accessorKey: "vat_deposit_final", header: "Yekun", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },

    {
        id: "safe_main", accessorKey: "safe_main", header: "Əsas", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "safe_vat", accessorKey: "safe_vat", header: "ƏDV", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "safe_final", accessorKey: "safe_final", header: "Yekun", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },

    {
        id: "total_main", accessorKey: "total_main", header: "Əsas", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "total_vat", accessorKey: "total_vat", header: "ƏDV", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "total_final", accessorKey: "total_final", header: "Yekun", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },

    {
        id: "should_main", accessorKey: "should_main", header: "Əsas", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "should_vat", accessorKey: "should_vat", header: "ƏDV", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "distinction_main", accessorKey: "distinction_main", header: "Əsas", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "distinction_vat", accessorKey: "distinction_vat", header: "ƏDV", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
];

export const externalDKColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true },
    {
        id: "name",
        accessorKey: "name",
        header: "Adı",
        // filterOptions: {
        //     search: true,
        //     type: "search",
        //     options: ["A-dan Z-yə", "Z-dən A-ya"],
        // },
    },
    {
        id: "vat", accessorKey: "vat", header: "VÖEN",
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "currency", accessorKey: "currency", header: "Valyuta",
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },

    {
        id: "capital_bank", accessorKey: "capital_bank", header: "Kapital Bank", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "access_bank", accessorKey: "access_bank", header: "Access Bank", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: { 
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "pasha_bank", accessorKey: "pasha_bank", header: "Paşa Bank", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "main", accessorKey: "main", header: "Əsas", enableFooterTotal: true, enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
]

export const cashFlowsbyItemsColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true },
    {
        id: "name",
        accessorKey: "name",
        header: "Adı",
        // filterOptions: {
        //     search: true,
        //     type: "search",
        //     options: ["A-dan Z-yə", "Z-dən A-ya"],
        // },
    },
    {
        id: "vat", accessorKey: "vat", header: "VÖEN",
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "currency", accessorKey: "currency", header: "Valyuta", enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "capital_bank", accessorKey: "capital_bank", header: "Kapital Bank", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "access_bank", accessorKey: "access_bank", header: "Access Bank", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "pasha_bank", accessorKey: "pasha_bank", header: "Paşa Bank", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "destination_money", accessorKey: "destination_money", header: "Pulun gəlmə təyinatı", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
]

export const cashFlowsbyItemsCurrencyColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true },
    {
        id: "name",
        accessorKey: "name",
        header: "Adı",
        // filterOptions: {
        //     search: true,
        //     type: "search",
        //     options: ["A-dan Z-yə", "Z-dən A-ya"],
        // },
    },
    {
        id: "vat", accessorKey: "vat", header: "VÖEN",
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "currency", accessorKey: "currency", header: "Valyuta", enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "capital_bank", accessorKey: "capital_bank", header: "Kapital Bank", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "access_bank", accessorKey: "access_bank", header: "Access Bank", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "pasha_bank", accessorKey: "pasha_bank", header: "Paşa Bank", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi", enableFooterTotal: true,
        enableCellModal: true, modalComponent: CellModal
        // filterOptions: {
        //     type: "search",
        //     search: true,
        // },
    },
]


/// alış satış hesabatları

export const receiptPurchaseColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_total_price_without_vat", accessorKey: "purchase_total_price_without_vat", header: "Malın ƏDV-siz ümumi dəyəri", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_vat_amount", accessorKey: "purchase_vat_amount", header: "Malın ƏDV məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_not_involved_vat", accessorKey: "purchase_not_involved_vat", header: "ƏDV-yə cəlb olunmayan", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_free_from_vat", accessorKey: "purchase_free_from_vat", header: "ƏDV-dən azan olan", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_final", accessorKey: "purchase_final", header: "Yekun", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_total_price_without_vat", accessorKey: "return_total_price_without_vat", header: "Malın ƏDV-siz ümumi dəyəri", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_vat_amount", accessorKey: "return_vat_amount", header: "Malın ƏDV məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_not_involved_vat", accessorKey: "return_not_involved_vat", header: "ƏDV-yə cəlb olunmayan", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_free_from_vat", accessorKey: "return_free_from_vat", header: "ƏDV-dən azan olan", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_involved_zero_percent", accessorKey: "return_involved_zero_percent", header: "ƏDV-yə “0”dərəcə ilə cəlb edilən", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_final", accessorKey: "return_final", header: "Yekun", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_sales_main", accessorKey: "net_sales_main", header: "Xalis satış əsas", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_sales_vat", accessorKey: "net_sales_vat", header: "ƏDV", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_sales_final", accessorKey: "net_sales_final", header: "Yekun", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

export const receiptSalesColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "sales_total_price_without_vat", accessorKey: "sales_total_price_without_vat", header: "Malın ƏDV-siz ümumi dəyəri", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "sales_vat_amount", accessorKey: "sales_vat_amount", header: "Malın ƏDV məbləği", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "sales_not_involved_vat", accessorKey: "sales_not_involved_vat", header: "ƏDV-yə cəlb olunmayan", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "sales_free_from_vat", accessorKey: "sales_free_from_vat", header: "ƏDV-dən azan olan", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

export const externalPurchaseColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "type", accessorKey: "type", header: "Növü",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "organization_currency", accessorKey: "organization_currency", header: "Valyuta",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_currency", accessorKey: "purchase_currency", header: "Valyutada", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_azn", accessorKey: "purchase_azn", header: "AZN", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_currency", accessorKey: "return_currency", header: "Valyutada", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_azn", accessorKey: "return_azn", header: "AZN", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_purchase_currency", accessorKey: "net_purchase_currency", header: "Valyutada", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_purchase_azn", accessorKey: "net_purchase_azn", header: "AZN", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

export const externalSalesColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "type", accessorKey: "type", header: "Növü",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "organization_currency", accessorKey: "organization_currency", header: "Valyuta",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_currency", accessorKey: "purchase_currency", header: "Valyutada", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_azn", accessorKey: "purchase_azn", header: "AZN", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_currency", accessorKey: "return_currency", header: "Valyutada", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_azn", accessorKey: "return_azn", header: "AZN", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_purchase_currency", accessorKey: "net_purchase_currency", header: "Valyutada", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_purchase_azn", accessorKey: "net_purchase_azn", header: "AZN", enableFooterTotal: true,
        filterOptions: { search: true, type: "search" },
    },
]

/// borclar cədvəli

export const creditorDebtsColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "kontragen", accessorKey: "kontragen", header: "Kontragen",
    },
    {
        id: "voen", accessorKey: "voen", header: "Vöen",
    },
    {
        id: "before_debt_balance_main", accessorKey: "before_debt_balance_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "before_debt_balance_vat", accessorKey: "before_debt_balance_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "before_debt_balance_total", accessorKey: "before_debt_balance_total", header: "Cəmi", enableFooterTotal: true,
    },
    ///
    {
        id: "before_advance_balance_main", accessorKey: "before_advance_balance_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "before_advance_balance_vat", accessorKey: "before_advance_balance_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "before_advance_balance_total", accessorKey: "before_advance_balance_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "paid_money_main", accessorKey: "paid_money_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "paid_money_vat", accessorKey: "paid_money_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "paid_money_total", accessorKey: "paid_money_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "return_main", accessorKey: "return_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "return_vat", accessorKey: "return_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "return_total", accessorKey: "return_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "total_expense_main", accessorKey: "total_expense_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "total_expense_vat", accessorKey: "total_expense_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "total_expense_total", accessorKey: "total_expense_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "purchase_main", accessorKey: "purchase_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "purchase_vat", accessorKey: "purchase_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "purchase_total", accessorKey: "purchase_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "supplier_return_main", accessorKey: "supplier_return_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "supplier_return_vat", accessorKey: "supplier_return_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "supplier_return_total", accessorKey: "supplier_return_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "total_income_main", accessorKey: "total_income_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "total_income_vat", accessorKey: "total_income_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "total_income_total", accessorKey: "total_income_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "end_debt_balance_main", accessorKey: "end_debt_balance_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "end_debt_balance_vat", accessorKey: "end_debt_balance_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "end_debt_balance_total", accessorKey: "end_debt_balance_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "end_advance_balance_main", accessorKey: "end_advance_balance_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "end_advance_balance_vat", accessorKey: "end_advance_balance_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "end_advance_balance_total", accessorKey: "end_advance_balance_total", header: "Cəmi", enableFooterTotal: true,
    },
]

export const debitorDebtColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "kontragen", accessorKey: "kontragen", header: "Kontragen",
    },
    {
        id: "voen", accessorKey: "voen", header: "Vöen",
    },

    {
        id: "before_debt_balance_main", accessorKey: "before_debt_balance_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "before_debt_balance_vat", accessorKey: "before_debt_balance_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "before_debt_balance_total", accessorKey: "before_debt_balance_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "before_advance_balance_main", accessorKey: "before_advance_balance_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "before_advance_balance_vat", accessorKey: "before_advance_balance_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "before_advance_balance_total", accessorKey: "before_advance_balance_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "paid_money_main", accessorKey: "paid_money_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "paid_money_vat", accessorKey: "paid_money_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "paid_money_total", accessorKey: "paid_money_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "return_main", accessorKey: "return_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "return_vat", accessorKey: "return_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "return_total", accessorKey: "return_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "total_expense_main", accessorKey: "total_expense_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "total_expense_vat", accessorKey: "total_expense_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "total_expense_total", accessorKey: "total_expense_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "sales_main", accessorKey: "sales_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "sales_vat", accessorKey: "sales_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "sales_total", accessorKey: "sales_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "supplier_return_main", accessorKey: "supplier_return_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "supplier_return_vat", accessorKey: "supplier_return_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "supplier_return_total", accessorKey: "supplier_return_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "refund_money_customer_main", accessorKey: "refund_money_customer_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "refund_money_customer_vat", accessorKey: "refund_money_customer_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "refund_money_customer_total", accessorKey: "refund_money_customer_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "total_income_main", accessorKey: "total_income_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "total_income_vat", accessorKey: "total_income_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "total_income_total", accessorKey: "total_income_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "end_debt_balance_main", accessorKey: "end_debt_balance_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "end_debt_balance_vat", accessorKey: "end_debt_balance_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "end_debt_balance_total", accessorKey: "end_debt_balance_total", header: "Cəmi", enableFooterTotal: true,
    },

    {
        id: "end_advance_balance_main", accessorKey: "end_advance_balance_main", header: "Əsas", enableFooterTotal: true,
    },
    {
        id: "end_advance_balance_vat", accessorKey: "end_advance_balance_vat", header: "ƏDV", enableFooterTotal: true,
    },
    {
        id: "end_advance_balance_total", accessorKey: "end_advance_balance_total", header: "Cəmi", enableFooterTotal: true,
    },
]

export const foreignCreditorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "kontragen", accessorKey: "kontragen", header: "Kontragen",
    },
    {
        id: "voen", accessorKey: "voen", header: "Vöen",
    },

    {
        id: "currency", accessorKey: "currency", header: "Valyuta",
    },
    /////
    {
        id: "before_debt_balance_currency", accessorKey: "before_debt_balance_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "before_debt_balance_azn", accessorKey: "before_debt_balance_azn", header: "AZN", enableFooterTotal: true,
    },
    ///

    {
        id: "before_advance_balance_currency", accessorKey: "before_advance_balance_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "before_advance_balance_azn", accessorKey: "before_advance_balance_azn", header: "AZN", enableFooterTotal: true,
    },
    ////

    {
        id: "paid_money_currency", accessorKey: "paid_money_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "paid_money_azn", accessorKey: "paid_money_azn", header: "AZN", enableFooterTotal: true,
    },
    ///
    {
        id: "return_currency", accessorKey: "return_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "return_azn", accessorKey: "return_azn", header: "AZN", enableFooterTotal: true,
    },
    ////
    {
        id: "payment_debt_total_expense_currency", accessorKey: "payment_debt_total_expense_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "payment_debt_total_expense_azn", accessorKey: "payment_debt_total_expense_azn", header: "AZN", enableFooterTotal: true,
    },
    ////
    {
        id: "incurring_debt_purchase_currency", accessorKey: "incurring_debt_purchase_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "incurring_debt_purchase_azn", accessorKey: "incurring_debt_purchase_azn", header: "AZN", enableFooterTotal: true,
    },
    ////
    {
        id: "incurring_debt_supplier_return_currency", accessorKey: "incurring_debt_supplier_return_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "incurring_debt_supplier_return_azn", accessorKey: "incurring_debt_supplier_return_azn", header: "AZN", enableFooterTotal: true,
    },
    ////
    {
        id: "incurring_debt_total_income_currency", accessorKey: "incurring_debt_total_income_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "incurring_debt_total_income_azn", accessorKey: "incurring_debt_total_income_azn", header: "AZN", enableFooterTotal: true,
    },
    ////

    {
        id: "end_debt_balance_currency", accessorKey: "end_debt_balance_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "end_debt_balance_azn", accessorKey: "end_debt_balance_azn", header: "AZN", enableFooterTotal: true,
    },
    /////
    {
        id: "end_advance_balance_currency", accessorKey: "end_advance_balance_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "end_advance_balance_azn", accessorKey: "end_advance_balance_azn", header: "AZN", enableFooterTotal: true,
    },
]

export const foreignDebitorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO", enableFooterTotal: true,
    },
    {
        id: "kontragen", accessorKey: "kontragen", header: "Kontragen",
    },
    {
        id: "voen", accessorKey: "voen", header: "Vöen",
    },

    {
        id: "currency", accessorKey: "currency", header: "Valyuta",
    },
    /////
    {
        id: "before_debt_balance_currency", accessorKey: "before_debt_balance_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "before_debt_balance_azn", accessorKey: "before_debt_balance_azn", header: "AZN", enableFooterTotal: true,
    },
    ////
    {
        id: "before_advance_balance_currency", accessorKey: "before_advance_balance_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "before_advance_balance_azn", accessorKey: "before_advance_balance_azn", header: "AZN", enableFooterTotal: true,
    },
    ////
    {
        id: "paid_money_currency", accessorKey: "paid_money_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "paid_money_azn", accessorKey: "paid_money_azn", header: "AZN", enableFooterTotal: true,
    },
    ////
    {
        id: "return_currency", accessorKey: "return_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "return_azn", accessorKey: "return_azn", header: "AZN", enableFooterTotal: true,
    },
    ////
    {
        id: "peyment_debt_total_expense_currency", accessorKey: "peyment_debt_total_expense_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "peyment_debt_total_expense_azn", accessorKey: "peyment_debt_total_expense_azn", header: "AZN", enableFooterTotal: true,
    },
    ////
    {
        id: "incurring_debt_purchase_currency", accessorKey: "incurring_debt_purchase_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "incurring_debt_purchase_azn", accessorKey: "incurring_debt_purchase_azn", header: "AZN", enableFooterTotal: true,
    },

    {
        id: "incurring_debt_return_customer_currency", accessorKey: "incurring_debt_return_customer_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "incurring_debt_return_customer_azn", accessorKey: "incurring_debt_return_customer_azn", header: "AZN", enableFooterTotal: true,
    },

    {
        id: "incurring_debt_incoming_currency", accessorKey: "incurring_debt_incoming_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "incurring_debt_incoming_azn", accessorKey: "incurring_debt_incoming_azn", header: "AZN", enableFooterTotal: true,
    },

    {
        id: "end_debt_balance_currency", accessorKey: "end_debt_balance_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "end_debt_balance_azn", accessorKey: "end_debt_balance_azn", header: "AZN", enableFooterTotal: true,
    },

    {
        id: "end_advance_balance_currency", accessorKey: "end_advance_balance_currency", header: "Valyuta", enableFooterTotal: true,
    },
    {
        id: "end_advance_balance_azn", accessorKey: "end_advance_balance_azn", header: "AZN", enableFooterTotal: true,
    },

]

////////////// vergi uçotu

// (əvəzləşmə)

export const tableJoinColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    { id: "doc_id", accessorKey: "doc_id", header: "Sənəd ID", filterOptions: { search: true, type: "search" }, },
    {
        id: "kontr_name", accessorKey: "kontr_name", header: "Kontrgent adı",
        filterOptions: {
            search: true,
            type: "search",
            options: ["A-dan Z-yə", "Z-dən A-ya"],
        },
    },
    { id: "voen", accessorKey: "voen", header: "VÖEN", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_serie", accessorKey: "invoice_serie", header: "Qaimə seriyası", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_num", accessorKey: "invoice_num", header: "Qaimə nömrəsi", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_date", accessorKey: "invoice_date", header: "Qaimə tarixi", filterOptions: { search: true, type: "search" }, },
    { id: "main", accessorKey: "main", header: "Əsas", enableFooterTotal: true, filterOptions: { search: true, type: "search" }, },
    { id: "vat", accessorKey: "vat", header: "ƏDV", enableFooterTotal: true, filterOptions: { search: true, type: "search" }, },
    { id: "replaced_amount", accessorKey: "replaced_amount", header: "Əvəzləşən məbləğ", enableFooterTotal: true, filterOptions: { search: true, type: "search" }, },
    { id: "remaining_amount", accessorKey: "remaining_amount", header: "Qalan məbləğ", enableFooterTotal: true, filterOptions: { search: true, type: "search" }, },
    { id: "privilege_amount", accessorKey: "privilege_amount", header: "İmtiyaz məbləği", enableFooterTotal: true, filterOptions: { search: true, type: "search" }, },

]

export const substitutionReportColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: {
            search: true,
            type: "search",
            options: ["A-dan Z-yə", "Z-dən A-ya"],
        },
    },
    { id: "voen", accessorKey: "voen", header: "VÖEN", filterOptions: { search: true, type: "search" }, },
    { id: "date", accessorKey: "date", header: "Qaimə tarixi", filterOptions: { search: true, type: "search" }, },
    { id: "serie_num", accessorKey: "serie_num", header: "Qaimə seriyası və nömrəsi", filterOptions: { search: true, type: "search" }, },
    { id: "main", accessorKey: "main", header: "Əsas", filterOptions: { search: true, type: "search" }, },
    { id: "vat", accessorKey: "vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, },
    { id: "total", accessorKey: "total", header: "Cəmi", filterOptions: { search: true, type: "search" }, },
    {
        id: "substitution_vat_amount",
        accessorKey: "substitution_vat_amount",
        header: "Əvəzləşən ƏDV məbləği",
        filterOptions: { search: true, type: "search" },
        cell: ({ getValue }) => (
            <div className="d-flex align-items-center gap-2">
                <span>{getValue()}</span>
                <img src="/assets/info-icon-light.svg" alt="icon" style={{ width: 24, height: 24 }} />
            </div>
        )
    },
    {
        id: "returned_amount", accessorKey: "returned_amount", header: "Geri qayıdan məbləğ",
        filterOptions: { search: true, type: "search" },
        cell: ({ getValue }) => (
            <div className="d-flex align-items-center gap-2">
                <span>{getValue()}</span>
                <img src="/assets/info-icon-light.svg" alt="icon" style={{ width: 24, height: 24 }} />
            </div>
        )
    },
    { id: "remaining_vat_amount", accessorKey: "remaining_vat_amount", header: "Qalan ƏDV məbləği", filterOptions: { search: true, type: "search" }, },
    {
        id: "status",
        accessorKey: "status",
        header: "Status",
        filterOptions: { search: true, type: "search" },
        cell: ({ getValue }) => {
            const value = getValue();

            let className = "status-badge";

            if (value === "Artıq əvəzləşib") {
                className += " status-exceeded"; // kırmızı
            } else if (value === "Tam əvəzləşib") {
                className += " status-complete"; // yeşil
            } else if (value === "Qismən əvəzləşib") {
                className += " status-partial"; // sarı
            }

            return <div className={className}>{value}</div>;
        },
    }
]

export const substitutionRestorationColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    { id: "voen", accessorKey: "voen", header: "VÖEN", filterOptions: { search: true, type: "search" }, },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: {
            search: true,
            type: "search",
            options: ["A-dan Z-yə", "Z-dən A-ya"],
        },
    },

    { id: "initial_residue_main", accessorKey: "initial_residue_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "initial_residue_vat", accessorKey: "initial_residue_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "total_purchase_main", accessorKey: "total_purchase_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "total_purchase_vat", accessorKey: "total_purchase_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "replaced_main", accessorKey: "replaced_main", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "replaced_vat", accessorKey: "replaced_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "return_main", accessorKey: "return_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "return_vat", accessorKey: "return_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "last_residue_main", accessorKey: "last_residue_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "last_residue_vat", accessorKey: "last_residue_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "payment_period_main", accessorKey: "payment_period_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "payment_period_vat", accessorKey: "payment_period_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "return_period_main", accessorKey: "return_period_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "return_period_vat", accessorKey: "return_period_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "before_privilege_main", accessorKey: "before_privilege_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "before_privilege_vat", accessorKey: "before_privilege_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "before_advance_main", accessorKey: "before_advance_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "before_advance_vat", accessorKey: "before_advance_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "total_main", accessorKey: "total_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "total_vat", accessorKey: "total_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "should_main", accessorKey: "should_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "should_vat", accessorKey: "should_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "difference_main", accessorKey: "difference_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "difference_vat", accessorKey: "difference_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "should_substitution_vat", accessorKey: "should_substitution_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "not_substitution_vat", accessorKey: "not_substitution_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },


    { id: "divided_vat", accessorKey: "divided_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "privileged_main", accessorKey: "privileged_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "privileged_vat", accessorKey: "privileged_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },


    { id: "advance_main", accessorKey: "advance_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },
    { id: "advance_vat", accessorKey: "advance_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },



]

export const substitutionCurrentColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    { id: "voen", accessorKey: "voen", header: "VÖEN", filterOptions: { search: true, type: "search" }, },
    {
        id: "name", accessorKey: "name", header: "Adı",
        filterOptions: {
            search: true,
            type: "search",
            options: ["A-dan Z-yə", "Z-dən A-ya"],
        },
    },

    { id: "opening_balance_main", accessorKey: "opening_balance_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "opening_balance_vat", accessorKey: "opening_balance_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "total_purchase_main", accessorKey: "total_purchase_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "total_purchase_vat", accessorKey: "total_purchase_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },


    { id: "refund_main", accessorKey: "refund_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "refund_vat", accessorKey: "refund_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "ending_balance_main", accessorKey: "ending_balance_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "ending_balance_vat", accessorKey: "ending_balance_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "payment_period_main", accessorKey: "payment_period_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "payment_period_vat", accessorKey: "payment_period_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "refund_period_main", accessorKey: "refund_period_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "refund_period_vat", accessorKey: "refund_period_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "privileged_balance_main", accessorKey: "privileged_balance_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "privileged_balance_vat", accessorKey: "privileged_balance_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "advance_bf_main", accessorKey: "advance_bf_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "advance_bf_vat", accessorKey: "advance_bf_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "total_main", accessorKey: "total_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "total_vat", accessorKey: "total_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "should_main", accessorKey: "should_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "should_vat", accessorKey: "should_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "difference_main", accessorKey: "difference_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "difference_vat", accessorKey: "difference_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "should_substitute_main", accessorKey: "should_substitute_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    // { id: "should_substitute_vat", accessorKey: "should_substitute_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "divided_main", accessorKey: "divided_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    // { id: "divided_vat", accessorKey: "divided_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "privileged_main", accessorKey: "privileged_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "privileged_vat", accessorKey: "privileged_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

    { id: "advance_main", accessorKey: "advance_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "advance_vat", accessorKey: "advance_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true, },

]

export const substitutionListColumns = [
    { id: "no", accessorKey: "no", header: "No" },
    { id: "doc_num", accessorKey: "doc_num", header: "Sənəd nömrəsi" },
    { id: "period", accessorKey: "period", header: "Dövr" },
    { id: "main_amount", accessorKey: "main_amount", header: "Əvəzləşən əsas məbləğ" },
    { id: "vat_amount", accessorKey: "vat_amount", header: "Əvəzləşən ƏDV məbləğ" },
    { id: "total_amount", accessorKey: "total_amount", header: "Əvəzləşən cəmi məbləğ" },
    { id: "invoice_num", accessorKey: "invoice_num", header: "Qaimə sayı" },
]

// (ədv bildirişi)

// (topdan satış)

export const wholesaleColumns = [
    { id: "no", accessorKey: "no", header: "No", footerContent: "#" },
    { id: "wholesale", accessorKey: "wholesale", header: "Topdan satış", filterOptions: { search: true, type: "search" }, footerContent: "CƏMİ SATIŞLAR" },

    { id: "sale_main", accessorKey: "sale_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "sale_vat", accessorKey: "sale_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_main", accessorKey: "cash_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "cash_vat", accessorKey: "cash_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_total", accessorKey: "cash_total", header: "Cəmi", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "cash_main_vat", accessorKey: "cash_main_vat", header: "Əsasın ƏDV-si", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_vat_main", accessorKey: "cash_vat_main", header: "ƏDV-nin əsası", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
]

// (geri qaytarma)

export const returnColumns = [
    { id: "no", accessorKey: "no", header: "No", footerContent: "#" },
    { id: "return", accessorKey: "return", header: "Geri qaytarma", filterOptions: { search: true, type: "search" }, footerContent: "CƏMİ SATIŞLAR" },

    { id: "sale_main", accessorKey: "sale_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "sale_vat", accessorKey: "sale_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_main", accessorKey: "cash_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "cash_vat", accessorKey: "cash_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_total", accessorKey: "cash_total", header: "Cəmi", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "cash_main_vat", accessorKey: "cash_main_vat", header: "Əsasın ƏDV-si", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_vat_main", accessorKey: "cash_vat_main", header: "ƏDV-nin əsası", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
]

// (xalis satış)

export const netSalesColumns = [
    { id: "no", accessorKey: "no", header: "No", footerContent: "#" },
    { id: "net_sales", accessorKey: "net_sales", header: "Xalis satış", filterOptions: { search: true, type: "search" }, footerContent: "CƏMİ SATIŞLAR" },

    { id: "sale_main", accessorKey: "sale_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "sale_vat", accessorKey: "sale_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_main", accessorKey: "cash_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "cash_vat", accessorKey: "cash_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_total", accessorKey: "cash_total", header: "Cəmi", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_main_vat", accessorKey: "cash_main_vat", header: "Əsasın ƏDV-si", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "cash_vat_main", accessorKey: "cash_vat_main", header: "ƏDV-nin əsası", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
]

// (pərakəndə satış)

export const retailSalesColumns = [
    { id: "no", accessorKey: "no", header: "No", footerContent: "#" },
    { id: "retail_sales", accessorKey: "retail_sales", header: "Pərakəndə satış", filterOptions: { search: true, type: "search" }, footerContent: "CƏMİ SATIŞLAR" },

    { id: "sale_main", accessorKey: "sale_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "sale_vat", accessorKey: "sale_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_main", accessorKey: "cash_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "cash_vat", accessorKey: "cash_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_total", accessorKey: "cash_total", header: "Cəmi", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
]

// (yeku satışlar)

export const finalSalesColumns = [
    { id: "no", accessorKey: "no", header: "No", footerContent: "#" },
    { id: "final_sales", accessorKey: "final_sales", header: "Yekun satışlar", filterOptions: { search: true, type: "search" }, footerContent: "CƏMİ SATIŞLAR" },

    { id: "sale_main", accessorKey: "sale_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "sale_vat", accessorKey: "sale_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_main", accessorKey: "cash_main", header: "Əsas", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "cash_vat", accessorKey: "cash_vat", header: "ƏDV", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_total", accessorKey: "cash_total", header: "Cəmi", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_main_vat", accessorKey: "cash_main_vat", header: "Əsasın ƏDV-si", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },

    { id: "cash_vat_main", accessorKey: "cash_vat_main", header: "ƏDV-nin əsası", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
]

// ygb əvəzləşmə

export const ygbSubstitutionColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    { id: "line_code", accessorKey: "line_code", header: "Sətir kodu", filterOptions: { search: true, type: "search" } },
    { id: "ygb", accessorKey: "ygb", header: "YGB", filterOptions: { search: true, type: "search" } },
    { id: "ygb_date", accessorKey: "ygb_date", header: "YGB-nin tarixi", filterOptions: { search: true, type: "search" } },
    { id: "ygb_without_vat_azn", accessorKey: "ygb_without_vat_azn", header: "YGB üzrə alınmış malın ƏDV-siz dəyəri, (AZN)", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "ygb_with_vat_azn", accessorKey: "ygb_with_vat_azn", header: "YGB üzrə alınmış malın ƏDV məbləği, (AZN)", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
]

// qaimə əvəzləmə

export const invoiceSubstitutionColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    { id: "line_code", accessorKey: "line_code", header: "Sətir kodu", filterOptions: { search: true, type: "search" } },
    { id: "name", accessorKey: "name", header: "VÖEN/Adı", filterOptions: { search: true, type: "search" } },
    { id: "date", accessorKey: "date", header: "Tarix", filterOptions: { search: true, type: "search" } },
    { id: "invoice_serie", accessorKey: "invoice_serie", header: "Qaimə seriyası", filterOptions: { search: true, type: "search" } },
    { id: "invoice_num", accessorKey: "invoice_num", header: "Qaimə nömrəsi", filterOptions: { search: true, type: "search" } },
    { id: "total_amount_azn", accessorKey: "total_amount_azn", header: "Ümumi məbləğ (AZN)", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "vat_amount_azn", accessorKey: "vat_amount_azn", header: "ƏDV məbləği (AZN)", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "total_amount_paid_azn", accessorKey: "total_amount_paid_azn", header: "Ödənilmiş ümumi məbləğ (AZN)", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "vat_amount_paid_azn", accessorKey: "vat_amount_paid_azn", header: "Ödənilmiş ƏDV məbləği (AZN)", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
]

// debitor hərəkəti

// (Əsasa görə)

export const debtorTransactionsColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    { id: "indicators", accessorKey: "indicators", header: "Göstəricilər", filterOptions: { search: true, type: "search" } },
    { id: "debtor_balance_start", accessorKey: "debtor_balance_start", header: "Hesabat dövrünün əvvəlinə debitor borc", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "debtor_incurred_month", accessorKey: "debtor_incurred_month", header: "Hesabat dövrü (ay) üzrə yaranan debitor borc", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "debtor_settled_month", accessorKey: "debtor_settled_month", header: "Hesabat dövrü (ay) ərzində silinən debitor borc", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "debtor_balance_end", accessorKey: "debtor_balance_end", header: "Hesabat dövrünün sonuna debitor borc", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
]

// (ədvyə görə)

// export const basedVatColumns = [
//     { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
//     { id: "indicators", accessorKey: "indicators", header: "Göstəricilər", filterOptions: { search: true, type: "search" } },
//     { id: "debtor_balance_start", accessorKey: "debtor_balance_start", header: "Hesabat dövrünün əvvəlinə debitor borc", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
//     { id: "debtor_incurred_month", accessorKey: "debtor_incurred_month", header: "Hesabat dövrü (ay) üzrə yaranan debitor borc", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
//     { id: "debtor_settled_month", accessorKey: "debtor_settled_month", header: "Hesabat dövrü (ay) ərzində silinən debitor borc", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
//     { id: "debtor_balance_end", accessorKey: "debtor_balance_end", header: "Hesabat dövrünün sonuna debitor borc", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
// ]

// (digərləri eynidir, fərqlilik olsa yaradılacaq)


// dəqiqləşən bölmə

export const adjustedSectionColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    { id: "turnover_amount", accessorKey: "turnover_amount", header: "Dövriyyə məbləği (ƏDV-siz))", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
    { id: "paid_amount", accessorKey: "paid_amount", header: "Ödənilmiş məbləğ (ƏDV-siz)", filterOptions: { search: true, type: "search" } },
    { id: "vat_amount", accessorKey: "vat_amount", header: "ƏDV məbləği", filterOptions: { search: true, type: "search" }, enableFooterTotal: true },
]

/////////////////params

export const banksColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    { id: "name", accessorKey: "name", header: "Bankın adı" },
    { id: "branch", accessorKey: "branch", header: "Filialı" },
    {
        id: "account_list",
        accessorKey: "account_list",
        header: "Hesab sayı",
        cell: ({ getValue }) => (
            <div className="account-count-cell">
                {getValue()}
            </div>
        )
    },
    { id: "currency", accessorKey: "currency", header: "Valyuta növü" },
]

export const accountsColumns = [
    { id: "no", accessorKey: "no", header: "No", enableFooterTotal: true, },
    { id: "name", accessorKey: "name", header: "Şirkətin adı" },
    { id: "branch", accessorKey: "branch", header: "Filialı" },
    { id: "voen", accessorKey: "voen", header: "VÖEN" },
    { id: "banks_voen", accessorKey: "banks_voen", header: "Bankın VÖEN-i" },
    { id: "currency", accessorKey: "currency", header: "Valyuta növü" },
    { id: "code", accessorKey: "code", header: "Kod" },
    { id: "swift", accessorKey: "swift", header: "SWIFT" },
    { id: "correspondent_account", accessorKey: "correspondent_account", header: "Müxbir hesab" },




]