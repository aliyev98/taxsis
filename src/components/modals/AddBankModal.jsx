import React, { useEffect } from "react";
import SelectWithLabel from '../ui/inputs/SelectWithLabel'
import FormButton from '../ui/buttons/FormButton'

const AddBankModal = ({ show, onClose }) => {

    const [selectedValue, setSelectedValue] = React.useState("default");

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };


    const bankOptions = [
        { value: "atb", label: "Azər Türk Bank" },
        { value: "abb", label: "Azərbaycan Beynəlxalq Bankı" },
        { value: "kapital", label: "Kapital Bank" },
    ];

    const branchOptions = [
        { value: "1", label: "KapitalBank ASC Bravo 3 filiali" },
        { value: "2", label: "Nərimanov filialı" },
        { value: "3", label: "Nəsimi filialı" },
    ];

    useEffect(() => {
        if (show) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [show]);

    if (!show) return null;

    return (
        <>
            {/* Modal backdrop */}
            <div className="modal-backdrop fade show"></div>

            {/* Modal */}
            <div className="add-bank-modal modal fade show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">

                    <div className="modal-content">

                        {/* Modal Header */}
                        <div className="modal-header d-flex flex-column justify-content-center">
                            <span>Yeni Bank</span>
                            <span>Formu doldur və əlavə et</span>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body d-flex flex-column">
                            <SelectWithLabel
                                options={bankOptions}
                                name="bank"
                                label="Bank adı"
                                onChange={handleSelectChange}
                                value={selectedValue}
                            />

                            <SelectWithLabel
                                options={branchOptions}
                                name="branch"
                                label="Filialı"
                                onChange={handleSelectChange}
                                value={selectedValue}
                            />
                        </div>

                        {/* Modal Footer */}
                        <div className="modal-footer">
                            <FormButton content={"Əlavə et"} isActive={true} onClick={onClose}/>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default AddBankModal;
