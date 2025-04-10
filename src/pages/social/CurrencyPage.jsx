import React, { useState } from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import FeedSideBar from '../../sidebars/FeedSideBar'
import GroupsHeader from '../../components/social/groups/GroupsHeader'
import Group from '../../components/social/groups/Group'
import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'
import CurrencyDropdown from '../../components/dropdwons/CurrencyDropdown'





const CustomCalculator = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCurrencies, setSelectedCurrencies] = useState(["USD"]); // Başlangıçta sadece USD aktif

    const handleToggleCurrency = (code) => {
        setSelectedCurrencies(prev =>
            prev.includes(code)
                ? prev.filter(c => c !== code)
                : [...prev, code]
        );
    };

    const currencyItems = [
        {
            code: "USD",
            name: "ABŞ dolları",
            flag: "/assets/america.png",
            date: "06.01.2025",
            source: "FED",
            rate: "1 USD = 1 USD"
        },
        {
            code: "EUR",
            name: "Avro",
            flag: "/assets/europa.png",
            date: "06.01.2025",
            source: "ECB",
            rate: "1 EUR = 1.1 USD"
        },
        {
            code: "AZN",
            name: "Britaniya funt sterlinqi",
            flag: "/assets/azerbaijan.png",
            date: "06.01.2025",
            source: "BoE",
            rate: "1 GBP = 1.3 USD"
        },
        {
            code: "TRY",
            name: "Türk Lirəsi",
            flag: "/assets/turkey.png",
            date: "06.01.2025",
            source: "TCMB",
            rate: "1 TRY = 0.05 USD"
        },
        {
            code: "AED",
            name: "UAE Dirhəm",
            flag: "/assets/ued.png",
            date: "06.01.2025",
            source: "CBR",
            rate: "1 RUB = 0.01 USD"
        }
    ];




    return (
        <div className='currency-page-container'>

            <FeedHeader />

            <div className="social-wrapper d-flex">

                <FeedSideBar />

                <div className="content d-flex justify-content-center align-items-center">

                    <div className="currency-container d-flex flex-column">

                        <div className="currency d-flex flex-column">

                            <div className="currency-header position-relative d-flex align-items-center justify-content-between">
                                <span>Valyuta hesabla</span>
                                <button
                                    className="btn calculate-currency d-flex align-items-center"
                                    onClick={() => setDropdownOpen(prev => !prev)}
                                >
                                    <img src="/assets/plus-icon.svg" alt="" />
                                    <span>Valyuta əlavə et</span>
                                </button>

                                {dropdownOpen && (
                                    <CurrencyDropdown
                                        items={currencyItems}
                                        selectedCodes={selectedCurrencies}
                                        onToggle={handleToggleCurrency}
                                    />
                                )}

                            </div>

                            <div className="currency-infos d-flex flex-column">
                                <span>VALYUTA KONVERTORU İLƏ BU GÜNƏ OLAN VALYUTA MƏZƏNNƏLƏRİNİ TƏQİB EDİN</span>
                                <span>Çevirmək istədiyiniz valyutanı başqa valyuta məzənnəsinə nisbətdə hesablamaq istəyirsinizsə sağ tərəfdə yer alan "+" işarəsi ilə əlavə edin, məbləği yazın və hesablayın.</span>
                            </div>

                            <div className="currencies">

                                <div className="currencies">
                                    {currencyItems
                                        .filter(item => selectedCurrencies.includes(item.code))
                                        .map((currency, index) => (
                                            <div key={index} className='a d-flex flex-column'>
                                                <div className="currency-div d-flex flex-column">

                                                    <div className="currency-div-header d-flex">
                                                        <div className="flag">
                                                            <img src={currency.flag} alt={currency.code} />
                                                        </div>
                                                        <div className="currency-name d-flex flex-column">
                                                            <span>{currency.code}</span>
                                                            <span>{currency.name}</span>
                                                        </div>
                                                    </div>

                                                    <Input placeholder={"0"} />

                                                    <div className="currency-footer d-flex justify-content-between">
                                                        <span>{currency.date} | Mənbə: {currency.source}</span>
                                                        <span>{currency.rate}</span>
                                                    </div>

                                                </div>
                                            </div>
                                        ))}

                                </div>


                            </div>


                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default CustomCalculator