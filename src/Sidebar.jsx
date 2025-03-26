// Sidebar.jsx
import React from "react";

// Bootstrap için ekleyebilirsin:
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div
      style={{
        width: 200,
        borderRight: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        padding: 10
      }}
    >
      <button
        className={`btn mb-2 ${activePage === "Qaimeler" ? "btn-primary" : "btn-light"}`}
        onClick={() => setActivePage("Qaimeler")}
      >
        Qaimeler
      </button>

      <button
        className={`btn mb-2 ${activePage === "Analizler" ? "btn-primary" : "btn-light"}`}
        onClick={() => setActivePage("Analizler")}
      >
        Analizler
      </button>
    </div>
  );
};

export default Sidebar;
