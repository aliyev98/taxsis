import React, { useEffect } from 'react';
import InputWithLabel from '../../components/ui/inputs/InputWithLabel';
import FormButton from '../../components/ui/buttons/FormButton';

const AddTaskModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div className="modal add-task-modal fade show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-md modal-dialog-centered" role="document">

                    <div className="modal-content">

                        <div className="modal-header d-flex flex-column">
                            <div>Vəzifə yarat</div>
                            <div>Formu doldur və əlavə et</div>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>

                        <div className="modal-body">
                            <InputWithLabel label={"Vəzifənin adı"} />
                        </div>

                        <div className="modal-footer">
                            <FormButton content={"Yadda saxla"} />
                        </div>

                    </div>

                </div>
            </div>

            <div className="modal-backdrop fade show"></div>
        </>
    );
};

export default AddTaskModal;
