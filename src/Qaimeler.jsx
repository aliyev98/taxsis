import React, { useState } from "react";
import CustomTable from "./CustomTable"; // Yolunu ayarla

const Qaimeler = () => {
  const [activeNav, setActiveNav] = useState("alis"); // "alis" veya "satis"

  // Alış Qaimeleri kolonları
  const alisColumns = [
    { accessorKey: "no", header: "No" },
    {
      accessorKey: "adı",
      header: "Adı",
      filterOptions: {
          search: true, // 📌 **İsim arama inputu olacak**
          options: ["A-dan Z-yə", "Z-dən A-ya"], // 📌 **Alfabetik sıralama**
      },
  },
    { accessorKey: "tarih", header: "Tarih" },
    { accessorKey: "durum", header: "Durum" },
    {
      accessorKey: "vəziyyəti",
      header: "Vəziyyəti",
      filterOptions: {
        options: ["Hamısı", "Təsdiqləndi", "Təsdiqlənmədi", "Boş"] // Checkbox'larla seçim yapabileceğimiz filtreler
      },
    },
  ];

  const alisData = [
    { no: 1, adı: "Ali", tarih: "2024-03-20", durum: "Bekliyor", vəziyyəti: 'Təsdiqləndi' },
    { no: 2, adı: "Veli", tarih: "2024-03-18", durum: "Onaylandı", vəziyyəti: 'Təsdiqlənmədi' },
    { no: 3, adı: "Ayşe", tarih: "2024-03-15", durum: "Reddedildi", vəziyyəti: 'Boş' },
  ];

  // Satış Qaimeleri kolonları
  const satisColumns = [
    { accessorKey: "no", header: "No" },
    { accessorKey: "valyuta", header: "Valyuta" },
    { accessorKey: "hesabNovi", header: "Hesabın növü" },
    { accessorKey: "voen", header: "Voen numarası" },
  ];

  const satisData = [
    { no: 1, valyuta: "AZN", hesabNovi: "Gəlir", voen: "12345" },
    { no: 2, valyuta: "USD", hesabNovi: "Gəlir", voen: "98765" },
  ];

  // Hangi tablo seçiliyse o tablo kolonları & verisi
  const columns = activeNav === "alis" ? alisColumns : satisColumns;
  const data = activeNav === "alis" ? alisData : satisData;

  return (
    <div>
      {/* NAVBAR */}
      <div className="d-flex justify-content-between mb-3">
        <div>
          <button
            className={`btn me-2 ${activeNav === "alis" ? "btn-primary" : "btn-light"}`}
            onClick={() => setActiveNav("alis")}
          >
            Alış qaimələri
          </button>
          <button
            className={`btn ${activeNav === "satis" ? "btn-primary" : "btn-light"}`}
            onClick={() => setActiveNav("satis")}
          >
            Satış qaimələri
          </button>
        </div>
      </div>

      {/* CustomTable */}
      <CustomTable data={data} columns={columns} />
    </div>
  );
};

export default Qaimeler;
