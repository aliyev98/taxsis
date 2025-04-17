
/// qaimələr

export const purchaseColumns = [
    { id: "no", accessorKey: "no", header: "No" },
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
    { id: "type", accessorKey: "type", header: "Tipi" },
    {
        id: "status",
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

//əvəzləşmə reyestri

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

// depozit cizarislari

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

//kassa əməliyyatları

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


// üzləşmə aktları

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
        id: "debet_total", accessorKey: "debet_total", header: "Cəmi",
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
        id: "credit_total", accessorKey: "credit_total", header: "Cəmi",
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

/// qaimələr üzrə hesabat

export const onPurchasesColumns = [
    { id: "no", accessorKey: "no", header: "No" },
    {
        id: "date",
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
        id: "invoice_vat", accessorKey: "invoice_vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "invoice_total", accessorKey: "invoice_total", header: "Cəmi",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "closed_main", accessorKey: "closed_main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "closed_vat", accessorKey: "closed_vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "closed_total", accessorKey: "closed_total", header: "Cəmi",
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

export const cashFlowColumns = [
    { id: "no", accessorKey: "no", header: "No" },
    {
        id: "name",
        accessorKey: "name",
        header: "Adı",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "vat", accessorKey: "vat", header: "VÖEN",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "bank_main", accessorKey: "bank_main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "bank_vat", accessorKey: "bank_vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "bank_final", accessorKey: "bank_final", header: "Yekun",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "vat_main", accessorKey: "vat_main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "vat_vat", accessorKey: "vat_vat", header: "Ədv",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "vat_final", accessorKey: "vat_final", header: "Yekun",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "safe_main", accessorKey: "safe_main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "safe_vat", accessorKey: "safe_vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "safe_final", accessorKey: "safe_final", header: "Yekun",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "total_main", accessorKey: "total_main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "total_vat", accessorKey: "total_vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "total_final", accessorKey: "total_final", header: "Yekun",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "should_main", accessorKey: "should_main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "should_vat", accessorKey: "should_vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "should_final", accessorKey: "should_final", header: "Yekun",
        filterOptions: {
            type: "search",
            search: true,
        },
    }, {
        id: "distinction_main", accessorKey: "distinction_main", header: "Əsas",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "distinction_vat", accessorKey: "distinction_vat", header: "ƏDV",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
    {
        id: "distinction_final", accessorKey: "distinction_final", header: "Yekun",
        filterOptions: {
            type: "search",
            search: true,
        },
    },
];

// gömrük sənədləri

export const ImportDocsColumns = [
    { id: "no", accessorKey: "no", header: "No" },
    { id: "date", accessorKey: "date", header: "Tarix", filterOptions: { search: true, type: "search" }, },
    { id: "ygb_num", accessorKey: "ygb_num", header: "YGB nömrəsi", filterOptions: { search: true, type: "search" }, },
    { id: "exporter", accessorKey: "exporter", header: "İxracatçı", filterOptions: { search: true, type: "search" }, },
    { id: "usd_price", accessorKey: "usd_price", header: "USD məzənnə", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_currency", accessorKey: "invoice_currency", header: "İnvoys valyuta", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_price", accessorKey: "invoice_price", header: "İnvoys məzənnə", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_value", accessorKey: "invoice_price", header: "İnvoys dəyəri", filterOptions: { search: true, type: "search" }, },
    {
        id: "transport_azn", accessorKey: "transport_azn", header: "Daşıma AZN", filterOptions: { search: true, type: "search" },
        cell: ({ row }) => (
            <div className="transport-azn-cell d-flex align-items-center justify-content-between">
                <span>{row.original.invoice_azn}</span>
                <button>
                    <img src="/assets/add-icon.svg" alt="" />
                </button>
            </div>
        )

    },
    { id: "invoice_azn", accessorKey: "invoice_azn", header: "İnvoys AZN", filterOptions: { search: true, type: "search" }, },
    { id: "real_custom_value", accessorKey: "real_custom_value", header: "Real Gömrük dəyəri", filterOptions: { search: true, type: "search" }, },
    { id: "statistical_value", accessorKey: "statistical_value", header: "Statistik dəyər", filterOptions: { search: true, type: "search" }, },
    { id: "two", accessorKey: "two", header: "02", filterOptions: { search: true, type: "search" }, },
    { id: "nineteen", accessorKey: "nineteen", header: "19", filterOptions: { search: true, type: "search" }, },
    { id: "thirty_two", accessorKey: "thirty_two", header: "32", filterOptions: { search: true, type: "search" }, },
    { id: "excise", accessorKey: "excise", header: "Aksiz", filterOptions: { search: true, type: "search" }, },
    { id: "seventy_five", accessorKey: "seventy_five", header: "75", filterOptions: { search: true, type: "search" }, },
    { id: "eighty_five", accessorKey: "eighty_five", header: "85", filterOptions: { search: true, type: "search" }, },
    { id: "total_fee", accessorKey: "total_fee", header: "Cəmi rüsumlar", filterOptions: { search: true, type: "search" }, },
    { id: "real_value", accessorKey: "real_value", header: "Real dəyər", filterOptions: { search: true, type: "search" }, },
    { id: "cost_statistical_value", accessorKey: "cost_statistical_value", header: "Statistik dəyər", filterOptions: { search: true, type: "search" }, },
];

export const ExportDocsColumns = [
    { id: "no", accessorKey: "no", header: "No" },
    { id: "date", accessorKey: "date", header: "Tarix", filterOptions: { search: true, type: "search" }, },
    { id: "ygb_num", accessorKey: "ygb_num", header: "YGB nömrəsi", filterOptions: { search: true, type: "search" }, },
    { id: "importer", accessorKey: "importer", header: "İdxalçı", filterOptions: { search: true, type: "search" }, },
    { id: "usd_price", accessorKey: "usd_price", header: "USD məzənnə", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_currency", accessorKey: "invoice_currency", header: "İnvoys valyuta", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_price", accessorKey: "invoice_price", header: "İnvoys məzənnə", filterOptions: { search: true, type: "search" }, },
    { id: "invoice_value", accessorKey: "invoice_price", header: "İnvoys dəyəri", filterOptions: { search: true, type: "search" }, },
    { id: "transport_azn", accessorKey: "transport_azn", header: "Daşıma AZN", filterOptions: { search: true, type: "search" }, },
    {
        id: "invoice_azn", accessorKey: "invoice_azn", header: "İnvoys AZN", filterOptions: { search: true, type: "search" },
        cell: ({ row }) => (
            <div className="invoice-azn-cell d-flex align-items-center justify-content-between">
                <span>{row.original.invoice_azn}</span>
                <button>
                    <img src="/assets/add-icon.svg" alt="" />
                </button>
            </div>
        )

    },
    { id: "real_custom_value", accessorKey: "real_custom_value", header: "Real Gömrük dəyəri", filterOptions: { search: true, type: "search" }, },
    { id: "statistical_value", accessorKey: "statistical_value", header: "Statistik dəyər", filterOptions: { search: true, type: "search" }, },
    { id: "two", accessorKey: "two", header: "02", filterOptions: { search: true, type: "search" }, },
    { id: "nineteen", accessorKey: "nineteen", header: "19", filterOptions: { search: true, type: "search" }, },
    { id: "thirty_two", accessorKey: "thirty_two", header: "32", filterOptions: { search: true, type: "search" }, },
    { id: "excise", accessorKey: "excise", header: "Aksiz", filterOptions: { search: true, type: "search" }, },
    { id: "seventy_five", accessorKey: "seventy_five", header: "75", filterOptions: { search: true, type: "search" }, },
    { id: "eighty_five", accessorKey: "eighty_five", header: "85", filterOptions: { search: true, type: "search" }, },
    { id: "real_value", accessorKey: "real_value", header: "Real dəyər", filterOptions: { search: true, type: "search" }, },
    { id: "cost_statistical_value", accessorKey: "cost_statistical_value", header: "Statistik dəyər", filterOptions: { search: true, type: "search" }, },
];

export const TransportExpensesColumns = [
    { id: "no", accessorKey: "no", header: "No" },
    { id: "date", accessorKey: "date", header: "Tarix", filterOptions: { search: true, type: "search" }, },
    { id: "ygb_num", accessorKey: "ygb_num", header: "YGB nömrəsi", filterOptions: { search: true, type: "search" }, },
    { id: "counterparty", accessorKey: "counterparty", header: "Kontragent adı", filterOptions: { search: true, type: "search" }, },
    { id: "expense_type", accessorKey: "expense_type", header: "Xərc növü", filterOptions: { search: true, type: "search" }, },
    { id: "currency_type", accessorKey: "currency_type", header: "Valyuta növü", filterOptions: { search: true, type: "search" }, },
    { id: "currency_price", accessorKey: "currency_price", header: "Valyuta məzənnəsi", filterOptions: { search: true, type: "search" }, },
    { id: "amount_currency", accessorKey: "amount_currency", header: "Məbləğ valyuta ilə", filterOptions: { search: true, type: "search" }, },
    { id: "amount_azn", accessorKey: "amount_azn", header: "Məbləğ AZN", filterOptions: { search: true, type: "search" }, },
    { id: "omv_percent", accessorKey: "omv_percent", header: "ÖMV faizi", filterOptions: { search: true, type: "search" }, },
    { id: "omv", accessorKey: "omv", header: "ÖMV", filterOptions: { search: true, type: "search" }, },
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
        id: "no", accessorKey: "no", header: "NO",
    },
    {
        id: "date", accessorKey: "date", header: "Tarix",
        filterOptions: { search: true, type: "search" },
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
        id: "sale_amount", accessorKey: "sale_amount", header: "Satış məbləği",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "amount_azn", accessorKey: "amount_azn", header: "Məbləğ AZN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat_amount", accessorKey: "vat_amount", header: "ƏDV məbləği",
        filterOptions: { search: true, type: "search" },
    },

]

////daxili qalıqlar

export const internalCreditorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        filterOptions: { search: true, type: "search" },
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
        id: "main", accessorKey: "main", header: "Əsas",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi",
        filterOptions: { search: true, type: "search" },
    },
]

export const internalDebitorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        filterOptions: { search: true, type: "search" },
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
        id: "main", accessorKey: "main", header: "Əsas",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi",
        filterOptions: { search: true, type: "search" },
    },
]

export const internalGivenAdvanceColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        id: "vat", accessorKey: "vat", header: "ƏDV",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi",
        filterOptions: { search: true, type: "search" },
    },
]

export const internalReceivedAdvanceColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        id: "vat", accessorKey: "vat", header: "ƏDV",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi",
        filterOptions: { search: true, type: "search" },
    },
]


/// xarici qalıqlar


export const externalCreditorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        filterOptions: { search: true, type: "search" },
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
        id: "currency_amount", accessorKey: "currency_amount", header: "Valyuta məbləği",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "azn", accessorKey: "azn", header: "AZN",
        filterOptions: { search: true, type: "search" },
    },
]

export const externalDebitorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        filterOptions: { search: true, type: "search" },
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
        id: "currency_amount", accessorKey: "currency_amount", header: "Valyuta məbləği",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "azn", accessorKey: "azn", header: "AZN",
        filterOptions: { search: true, type: "search" },
    },
]

export const externalGivenAdvanceColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        id: "currency_amount", accessorKey: "currency_amount", header: "Valyuta məbləği",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "azn", accessorKey: "azn", header: "AZN",
        filterOptions: { search: true, type: "search" },
    },
]

export const externalReceivedAdvanceColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        id: "vat", accessorKey: "vat", header: "ƏDV",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "total", accessorKey: "total", header: "Cəmi",
        filterOptions: { search: true, type: "search" },
    },
]

/// qeyri rezidentlər

export const serviceImportColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        id: "pay_amount", accessorKey: "pay_amount", header: "Ödəniş məbləği",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "omv_percent", accessorKey: "omv_percent", header: "ÖMV faizi",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_amount", accessorKey: "purchase_amount", header: "Alış məbləği",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "omv", accessorKey: "omv", header: "ÖMV",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat_amount", accessorKey: "vat_amount", header: "ƏDV məbləği",
        filterOptions: { search: true, type: "search" },
    },
]

export const serviceExportColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        id: "sale_amount", accessorKey: "sale_amount", header: "Satış məbləği",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "amount_azn", accessorKey: "amount_azn", header: "Məbləğ AZN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat", accessorKey: "vat", header: "ƏDV",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "vat_amount", accessorKey: "vat_amount", header: "ƏDV məbləği",
        filterOptions: { search: true, type: "search" },
    },
]

/// alış satış hesabatları

export const receiptPurchaseColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        id: "purchase_total_price_without_vat", accessorKey: "purchase_total_price_without_vat", header: "Malın ƏDV-siz ümumi dəyəri",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_vat_amount", accessorKey: "purchase_vat_amount", header: "Malın ƏDV məbləği",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_not_involved_vat", accessorKey: "purchase_not_involved_vat", header: "ƏDV-yə cəlb olunmayan",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_free_from_vat", accessorKey: "purchase_free_from_vat", header: "ƏDV-dən azan olan",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_final", accessorKey: "purchase_final", header: "Yekun",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_total_price_without_vat", accessorKey: "return_total_price_without_vat", header: "Malın ƏDV-siz ümumi dəyəri",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_vat_amount", accessorKey: "return_vat_amount", header: "Malın ƏDV məbləği",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_not_involved_vat", accessorKey: "return_not_involved_vat", header: "ƏDV-yə cəlb olunmayan",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_free_from_vat", accessorKey: "return_free_from_vat", header: "ƏDV-dən azan olan",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_involved_zero_percent", accessorKey: "return_involved_zero_percent", header: "ƏDV-yə “0”dərəcə ilə cəlb edilən",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_final", accessorKey: "return_final", header: "Yekun",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_sales_main", accessorKey: "net_sales_main", header: "Xalis satış əsas",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_sales_vat", accessorKey: "net_sales_vat", header: "ƏDV",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_sales_final", accessorKey: "net_sales_final", header: "Yekun",
        filterOptions: { search: true, type: "search" },
    },
]

export const receiptSalesColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        id: "sales_total_price_without_vat", accessorKey: "sales_total_price_without_vat", header: "Malın ƏDV-siz ümumi dəyəri",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "sales_vat_amount", accessorKey: "sales_vat_amount", header: "Malın ƏDV məbləği",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "sales_not_involved_vat", accessorKey: "sales_not_involved_vat", header: "ƏDV-yə cəlb olunmayan",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "sales_free_from_vat", accessorKey: "sales_free_from_vat", header: "ƏDV-dən azan olan",
        filterOptions: { search: true, type: "search" },
    },
]

export const externalPurchaseColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        id: "purchase_currency", accessorKey: "purchase_currency", header: "Valyutada",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_azn", accessorKey: "purchase_azn", header: "AZN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_currency", accessorKey: "return_currency", header: "Valyutada",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_azn", accessorKey: "return_azn", header: "AZN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_purchase_currency", accessorKey: "net_purchase_currency", header: "Valyutada",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_purchase_azn", accessorKey: "net_purchase_azn", header: "AZN",
        filterOptions: { search: true, type: "search" },
    },
]

export const externalSalesColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        id: "purchase_currency", accessorKey: "purchase_currency", header: "Valyutada",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "purchase_azn", accessorKey: "purchase_azn", header: "AZN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_currency", accessorKey: "return_currency", header: "Valyutada",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "return_azn", accessorKey: "return_azn", header: "AZN",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_purchase_currency", accessorKey: "net_purchase_currency", header: "Valyutada",
        filterOptions: { search: true, type: "search" },
    },
    {
        id: "net_purchase_azn", accessorKey: "net_purchase_azn", header: "AZN",
        filterOptions: { search: true, type: "search" },
    },
]

/// borclar cədvəli

export const creditorDebtsColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
    },
    {
        id: "kontragen", accessorKey: "kontragen", header: "Kontragen",
    },
    {
        id: "voen", accessorKey: "voen", header: "Vöen",
    },
    {
        id: "before_debt_balance_main", accessorKey: "before_debt_balance_main", header: "Əsas",
    },
    {
        id: "before_debt_balance_vat", accessorKey: "before_debt_balance_vat", header: "ƏDV",
    },
    {
        id: "before_debt_balance_total", accessorKey: "before_debt_balance_total", header: "Cəmi",
    },
    {
        id: "before_advance_balance_main", accessorKey: "before_advance_balance_main", header: "Əsas",
    },
    {
        id: "before_advance_balance_vat", accessorKey: "before_advance_balance_vat", header: "ƏDV",
    },
    {
        id: "before_advance_balance_total", accessorKey: "before_advance_balance_total", header: "Cəmi",
    },

    {
        id: "paid_money_main", accessorKey: "paid_money_main", header: "Əsas",
    },
    {
        id: "paid_money_vat", accessorKey: "paid_money_vat", header: "ƏDV",
    },
    {
        id: "paid_money_total", accessorKey: "paid_money_total", header: "Cəmi",
    },

    {
        id: "return_main", accessorKey: "return_main", header: "Əsas",
    },
    {
        id: "return_vat", accessorKey: "return_vat", header: "ƏDV",
    },
    {
        id: "return_total", accessorKey: "return_total", header: "Cəmi",
    },

    {
        id: "total_expense_main", accessorKey: "total_expense_main", header: "Əsas",
    },
    {
        id: "total_expense_vat", accessorKey: "total_expense_vat", header: "ƏDV",
    },
    {
        id: "total_expense_total", accessorKey: "total_expense_total", header: "Cəmi",
    },

    {
        id: "purchase_main", accessorKey: "purchase_main", header: "Əsas",
    },
    {
        id: "purchase_vat", accessorKey: "purchase_vat", header: "ƏDV",
    },
    {
        id: "purchase_total", accessorKey: "purchase_total", header: "Cəmi",
    },

    {
        id: "supplier_return_main", accessorKey: "supplier_return_main", header: "Əsas",
    },
    {
        id: "supplier_return_vat", accessorKey: "supplier_return_vat", header: "ƏDV",
    },
    {
        id: "supplier_return_total", accessorKey: "supplier_return_total", header: "Cəmi",
    },

    {
        id: "total_income_main", accessorKey: "total_income_main", header: "Əsas",
    },
    {
        id: "total_income_vat", accessorKey: "total_income_vat", header: "ƏDV",
    },
    {
        id: "total_income_total", accessorKey: "total_income_total", header: "Cəmi",
    },

    {
        id: "end_debt_balance_main", accessorKey: "end_debt_balance_main", header: "Əsas",
    },
    {
        id: "end_debt_balance_vat", accessorKey: "end_debt_balance_vat", header: "ƏDV",
    },
    {
        id: "end_debt_balance_total", accessorKey: "end_debt_balance_total", header: "Cəmi",
    },

    {
        id: "end_advance_balance_main", accessorKey: "end_advance_balance_main", header: "Əsas",
    },
    {
        id: "end_advance_balance_vat", accessorKey: "end_advance_balance_vat", header: "ƏDV",
    },
    {
        id: "end_advance_balance_total", accessorKey: "end_advance_balance_total", header: "Cəmi",
    },
]

export const debitorDebtColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
    },
    {
        id: "kontragen", accessorKey: "kontragen", header: "Kontragen",
    },
    {
        id: "voen", accessorKey: "voen", header: "Vöen",
    },

    {
        id: "before_debt_balance_main", accessorKey: "before_debt_balance_main", header: "Əsas",
    },
    {
        id: "before_debt_balance_vat", accessorKey: "before_debt_balance_vat", header: "ƏDV",
    },
    {
        id: "before_debt_balance_total", accessorKey: "before_debt_balance_total", header: "Cəmi",
    },

    {
        id: "before_advance_balance_main", accessorKey: "before_advance_balance_main", header: "Əsas",
    },
    {
        id: "before_advance_balance_vat", accessorKey: "before_advance_balance_vat", header: "ƏDV",
    },
    {
        id: "before_advance_balance_total", accessorKey: "before_advance_balance_total", header: "Cəmi",
    },

    {
        id: "paid_money_main", accessorKey: "paid_money_main", header: "Əsas",
    },
    {
        id: "paid_money_vat", accessorKey: "paid_money_vat", header: "ƏDV",
    },
    {
        id: "paid_money_total", accessorKey: "paid_money_total", header: "Cəmi",
    },

    {
        id: "return_main", accessorKey: "return_main", header: "Əsas",
    },
    {
        id: "return_vat", accessorKey: "return_vat", header: "ƏDV",
    },
    {
        id: "return_total", accessorKey: "return_total", header: "Cəmi",
    },

    {
        id: "total_expense_main", accessorKey: "total_expense_main", header: "Əsas",
    },
    {
        id: "total_expense_vat", accessorKey: "total_expense_vat", header: "ƏDV",
    },
    {
        id: "total_expense_total", accessorKey: "total_expense_total", header: "Cəmi",
    },

    {
        id: "sales_main", accessorKey: "sales_main", header: "Əsas",
    },
    {
        id: "sales_vat", accessorKey: "sales_vat", header: "ƏDV",
    },
    {
        id: "sales_total", accessorKey: "sales_total", header: "Cəmi",
    },

    {
        id: "supplier_return_main", accessorKey: "supplier_return_main", header: "Əsas",
    },
    {
        id: "supplier_return_vat", accessorKey: "supplier_return_vat", header: "ƏDV",
    },
    {
        id: "supplier_return_total", accessorKey: "supplier_return_total", header: "Cəmi",
    },

    {
        id: "refund_money_customer_main", accessorKey: "refund_money_customer_main", header: "Əsas",
    },
    {
        id: "refund_money_customer_vat", accessorKey: "refund_money_customer_vat", header: "ƏDV",
    },
    {
        id: "refund_money_customer_total", accessorKey: "refund_money_customer_total", header: "Cəmi",
    },

    {
        id: "total_income_main", accessorKey: "total_income_main", header: "Əsas",
    },
    {
        id: "total_income_vat", accessorKey: "total_income_vat", header: "ƏDV",
    },
    {
        id: "total_income_total", accessorKey: "total_income_total", header: "Cəmi",
    },

    {
        id: "end_debt_balance_main", accessorKey: "end_debt_balance_main", header: "Əsas",
    },
    {
        id: "end_debt_balance_vat", accessorKey: "end_debt_balance_vat", header: "ƏDV",
    },
    {
        id: "end_debt_balance_total", accessorKey: "end_debt_balance_total", header: "Cəmi",
    },

    {
        id: "end_advance_balance_main", accessorKey: "end_advance_balance_main", header: "Əsas",
    },
    {
        id: "end_advance_balance_vat", accessorKey: "end_advance_balance_vat", header: "ƏDV",
    },
    {
        id: "end_advance_balance_total", accessorKey: "end_advance_balance_total", header: "Cəmi",
    },
]

export const foreignCreditorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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

    {
        id: "before_debt_balance_currency", accessorKey: "before_debt_balance_currency", header: "Valyuta",
    },
    {
        id: "before_debt_balance_azn", accessorKey: "before_debt_balance_azn", header: "AZN",
    },

    {
        id: "before_advance_balance_currency", accessorKey: "before_advance_balance_currency", header: "Valyuta",
    },
    {
        id: "before_advance_balance_azn", accessorKey: "before_advance_balance_azn", header: "AZN",
    },

    {
        id: "paid_money_currency", accessorKey: "paid_money_currency", header: "Valyuta",
    },
    {
        id: "paid_money_azn", accessorKey: "paid_money_azn", header: "AZN",
    },

    {
        id: "return_currency", accessorKey: "return_currency", header: "Valyuta",
    },
    {
        id: "return_azn", accessorKey: "return_azn", header: "AZN",
    },

    {
        id: "payment_debt_total_expense_currency", accessorKey: "payment_debt_total_expense_currency", header: "Valyuta",
    },
    {
        id: "payment_debt_total_expense_azn", accessorKey: "payment_debt_total_expense_azn", header: "AZN",
    },

    {
        id: "incurring_debt_purchase_currency", accessorKey: "incurring_debt_purchase_currency", header: "Valyuta",
    },
    {
        id: "incurring_debt_purchase_azn", accessorKey: "incurring_debt_purchase_azn", header: "AZN",
    },

    {
        id: "incurring_debt_supplier_return_currency", accessorKey: "incurring_debt_supplier_return_currency", header: "Valyuta",
    },
    {
        id: "incurring_debt_supplier_return_azn", accessorKey: "incurring_debt_supplier_return_azn", header: "AZN",
    },

    {
        id: "incurring_debt_total_income_currency", accessorKey: "incurring_debt_total_income_currency", header: "Valyuta",
    },
    {
        id: "incurring_debt_total_income_azn", accessorKey: "incurring_debt_total_income_azn", header: "AZN",
    },

    {
        id: "incurring_debt_total_expense_currency", accessorKey: "incurring_debt_total_expense_currency", header: "Valyuta",
    },
    {
        id: "incurring_debt_total_expense_azn", accessorKey: "incurring_debt_total_expense_azn", header: "AZN",
    },


    {
        id: "end_debt_balance_currency", accessorKey: "end_debt_balance_currency", header: "Valyuta",
    },
    {
        id: "end_debt_balance_azn", accessorKey: "end_debt_balance_azn", header: "AZN",
    },

    {
        id: "end_advance_balance_currency", accessorKey: "end_advance_balance_currency", header: "Valyuta",
    },
    {
        id: "end_advance_balance_azn", accessorKey: "end_advance_balance_azn", header: "AZN",
    },
]

export const foreignDebitorColumns = [
    {
        id: "no", accessorKey: "no", header: "NO",
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
        id: "before_debt_balance_currency", accessorKey: "before_debt_balance_currency", header: "Valyuta",
    },
    {
        id: "before_debt_balance_azn", accessorKey: "before_debt_balance_azn", header: "AZN",
    },

    {
        id: "before_advance_balance_currency", accessorKey: "before_advance_balance_currency", header: "Valyuta",
    },
    {
        id: "before_advance_balance_azn", accessorKey: "before_advance_balance_azn", header: "AZN",
    },
    ////
    {
        id: "paid_money_currency", accessorKey: "paid_money_currency", header: "Valyuta",
    },
    {
        id: "paid_money_azn", accessorKey: "paid_money_azn", header: "AZN",
    },

    {
        id: "return_currency", accessorKey: "return_currency", header: "Valyuta",
    },
    {
        id: "return_azn", accessorKey: "return_azn", header: "AZN",
    },

    {
        id: "peyment_debt_total_expense_currency", accessorKey: "peyment_debt_total_expense_currency", header: "Valyuta",
    },
    {
        id: "peyment_debt_total_expense_azn", accessorKey: "peyment_debt_total_expense_azn", header: "AZN",
    },



    {
        id: "payment_debt_total_expense_currency", accessorKey: "payment_debt_total_expense_currency", header: "Valyuta",
    },
    {
        id: "payment_debt_total_expense_azn", accessorKey: "payment_debt_total_expense_azn", header: "AZN",
    },

    {
        id: "incurring_debt_purchase_currency", accessorKey: "incurring_debt_purchase_currency", header: "Valyuta",
    },
    {
        id: "incurring_debt_purchase_azn", accessorKey: "incurring_debt_purchase_azn", header: "AZN",
    },

    {
        id: "incurring_debt_return_customer_currency", accessorKey: "incurring_debt_return_customer_currency", header: "Valyuta",
    },
    {
        id: "incurring_debt_return_customer_azn", accessorKey: "incurring_debt_return_customer_azn", header: "AZN",
    },

    {
        id: "incurring_debt_incoming_currency", accessorKey: "incurring_debt_incoming_currency", header: "Valyuta",
    },
    {
        id: "incurring_debt_incoming_azn", accessorKey: "incurring_debt_incoming_azn", header: "AZN",
    },

    {
        id: "end_debt_balance_currency", accessorKey: "end_debt_balance_currency", header: "Valyuta",
    },
    {
        id: "end_debt_balance_azn", accessorKey: "end_debt_balance_azn", header: "AZN",
    },

    {
        id: "end_advance_balance_currency", accessorKey: "end_advance_balance_currency", header: "Valyuta",
    },
    {
        id: "end_advance_balance_azn", accessorKey: "end_advance_balance_azn", header: "AZN",
    },

]