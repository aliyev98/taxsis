import React from 'react';

const ReportsFooter = () => {
    const labels = [
        { id: 1, content: "Dövr üzrə cəmi alış:" },
        { id: 2, content: "Dövr üzrə cəmi ödəniş əsas:" },
        { id: 3, content: "Dövr üzrə cəmi geri qaytarma:" },
        { id: 4, content: "Dövr üzrə cəmi pul geri qaytarma:" },
    ];

    const data = [
        { base: 600, vat: 72, total: 672 },
        { base: 700, vat: 126, total: 826 },
        { base: 100, vat: 18, total: 118 },
        { base: 200, vat: 36, total: 236 },
    ];

    return (
        <div className="reports-footer">

            <div className="reports-table d-flex flex-column">

                {/* Header */}
                <div className="table-header row fw-bold">
                    <div className="col-3"></div>
                    <div className="col-1">Əsas</div>
                    <div className="col-1">ƏDV</div>
                    <div className="col-1">Cəmi</div>
                </div>

                {/* Body */}
                {labels.map((label, index) => (
                    <div className="table-body row align-items-center" key={label.id}>
                        <div className="col-3">{label.content}</div>
                        <div className="col-1">{data[index]?.base}</div>
                        <div className="col-1">{data[index]?.vat}</div>
                        <div className="col-1">{data[index]?.total}</div>
                    </div>
                ))}
            </div>

            <div className='footer-infos'>

                <div className="info">
                    19.02.2023-ci il tarixinə "HZR GROUP"MMC  şirkətinin "GÜVƏN LUX"MMC olan borcun məbləği əsas 8000, ƏDV 1380, cəmi 9380 AZN təşkil edir.
                </div>

                <div className="under-info row">

                    <div className="left-side col-6 d-flex flex-column">
                        <span>"GÜVƏN LUX" MMC</span>

                        <div className="director d-flex">
                            <span>Rəhbər:</span>
                            <span>Elmar Həmidov</span>
                        </div>
                    </div>

                    <div className="right-side col-6 d-flex flex-column">
                        <span>"HZR GROUP"MMC</span>

                        <div className="director d-flex">
                            <span>Rəhbər:</span>
                            <span>Ceyhun Kalaycı</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ReportsFooter;
