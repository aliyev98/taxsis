// Module.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Qaimeler from "./Qaimeler";
import Analizler from "./Analizler";

const Module = () => {
    const [activePage, setActivePage] = useState("Qaimeler"); // "Qaimeler" veya "Analizler"

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* SOL TARAF: Sidebar */}
            <Sidebar activePage={activePage} setActivePage={setActivePage} />

            {/* SAĞ TARAF: İçerik (Qaimeler veya Analizler) */}
            <div style={{ flex: 1, padding: 20 }}>
                {activePage === "Qaimeler" ? <Qaimeler /> : <Analizler />}
            </div>
        </div>
    );
};

export default Module;
