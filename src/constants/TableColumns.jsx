

export const purchaseColumns = [
    { id: "no", accessorKey: "no", header: "No" },
    {
        id: "voen", accessorKey: "voen", header: "VÖEN",
        filterOptions: { search: true, type: "search" },
    },
    {
        accessorKey: "name",
        header: "Adı",
        filterOptions: {
            search: true,
            type: "search",
            options: ["A-dan Z-yə", "Z-dən A-ya"],
        },
    },
    { id: "type", accessorKey: "type", header: "Tipi" },
    {
        accessorKey: "status",
        header: "Vəziyyəti",
        filterOptions: {
            type: "checkbox",
            options: ["Hamısı", "Təsdiqləndi", "Təsdiqlənmədi", "Boş"],
        },
        cell: ({ getValue }) => {
            const value = getValue();
            const isApproved = value === "Təsdiqləndi";
            return (
                <div className={`status-cell ${isApproved ? "approved" : "unapproved"}`}>
                    {value}
                </div>
            );
        },
    },
    { id: "date", accessorKey: "date", header: "Qaimə Tarixi" },
    {
        id: "currency", accessorKey: "currency", header: "Valyuta",
        filterOptions: {
            options: ["Hamısı", "AZN", "USD", "EUR"],
        },
    }
];

export const actsColumns = [
    { id: "no", accessorKey: "no", header: "No" },
    {
        id: "infos",
        accessorKey: "infos",
        header: "Satıcının adı, soyadı, ata adı",
        filterOptions: {
            type: "search",
            search: true,
            options: ["A-dan Z-yə", "Z-dən A-ya"],
        },
    },
    { id: "series", accessorKey: "series", header: "Seriya" },
    { id: "number", accessorKey: "number", header: "Nömrə" },
    { id: "situation", accessorKey: "situation", header: "Vəziyyəti" },
    { id: "status", accessorKey: "status", header: "Status" },
    { id: "date", accessorKey: "date", header: "Tarix" },
];

export const replacedColumns = [
    { id: "no", accessorKey: "no", header: "No" },
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
        filterOptions: {
            search: true, // input arama
            type: "search",
        },
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
    },
    {
        id: "vat_cost", accessorKey: "vat_cost", header: "Malın ƏDV dəyəri",
        filterOptions: {
            search: true,
            type: "search",
        },
    },
    {
        id: "paid_value", accessorKey: "paid_value", header: "Ödənilmiş ümumi dəyər",
        filterOptions: {
            search: true,
            type: "search",
        },
    },
    {
        id: "paid_vat", accessorKey: "paid_vat", header: "Ödənilmiş ƏDV",
        filterOptions: {
            search: true,
            type: "search",
        },
    },
    {
        id: "replacement_period", accessorKey: "replacement_period", header: "Əvəzləşmə dövrü",
        filterOptions: {
            search: true,
            type: "search",
        },
    },
];

export const initialsColumns = [
    { id: "no", accessorKey: "no", header: "No" },
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
        filterOptions: {
            type: "search",
            search: true,
        },
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
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
];

export const advanceColumns = [
    { id: "no", accessorKey: "no", header: "No" },
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
        id: "kind", accessorKey: "kind", header: "Növü",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "type", accessorKey: "type", header: "Tipi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "amount", accessorKey: "amount", header: "Məbləğ",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
];

export const depositsColumns = [
    { id: "no", accessorKey: "no", header: "No" },
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
    },
    {
        id: "expense", accessorKey: "expense", header: "Məxaric(AZN)",
        filterOptions: {
            type: "search",
            search: true,
        },
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
        id: "classification", accessorKey: "classification", header: "Təsnifat",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
];

export const onlineCashColumns = [
    { id: "no", accessorKey: "no", header: "No" },
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
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "total_sales", accessorKey: "total_sales", header: "Cəmi satış",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "return", accessorKey: "return", header: "Geri qaytarma",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "cancel", accessorKey: "cancel", header: "Ləğv etmə",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "net_sale", accessorKey: "net_sale", header: "Xalis satış",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "cash", accessorKey: "cash", header: "Nağd",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "cashless", accessorKey: "cashless", header: "Nağdsız",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "vat_exempt", accessorKey: "vat_exempt", header: "ƏDV-dən azad",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "eighteen_percent", accessorKey: "eighteen_percent", header: "18%",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "tax", accessorKey: "tax", header: "Vergi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
];

export const physicalCashColumns = [
    { id: "no", accessorKey: "no", header: "No" },
    {
        id: "date",
        accessorKey: "date",
        header: "Əməliyyat tarixi",
        filterOptions: {
            type: "search",
            search: true,
        },
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
    },
    {
        id: "expense", accessorKey: "expense", header: "Məxaric(AZN)",
        filterOptions: {
            type: "search",
            search: true,
        },
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

export const confrontationActsColumns = [
    { id: "no", accessorKey: "no", header: "No" },
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
        id: "debet_main", accessorKey: "debet_main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "debet_vat", accessorKey: "debet_vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "debet_total", accessorKey: "debet_total", header: "CƏmi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_main", accessorKey: "credit_main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_vat", accessorKey: "credit_vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "credit_total", accessorKey: "credit_total", header: "CƏmi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_main", accessorKey: "residue_main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_vat", accessorKey: "residue_vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "residue_total", accessorKey: "residue_total", header: "Cəmi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
];