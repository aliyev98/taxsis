import React, { useState } from 'react'
import TaxModuleTable from '../../../components/tables/TaxModuleTable'
import AddButton from '../../ui/buttons/AddButton';
import AddTaskModal from '../../../components/modals/AddTaskModal';
import AuthorieModal from '../../modals/AuthorizeModal';


const Authority = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const columns = [
        { id: "no", accessorKey: "no", header: "No", filterOptions: { search: true, type: "search" }, },
        {
            id: "account_name", accessorKey: "account_name", header: "Fərdi hesabın adı, soyadı",
            filterOptions: {
                search: true,
                type: "search",
                options: ["A-dan Z-yə", "Z-dən A-ya"],
            },
        },
        {
            id: "id_num", accessorKey: "id_num", header: "Fərdi hesabın ID nömrəsi",
            filterOptions: { search: true, type: "search" },
        },
        {
            id: "account_duty", accessorKey: "account_duty", header: "Fərdi hesabın vəzifəsi",
            filterOptions: {
                search: true,
                type: "search",
                options: ["A-dan Z-yə", "Z-dən A-ya"],
            },
        },
    ];

    const data = [
        {
            no: 1,
            account_name: "Famil Rəhmətov",
            id_num: "30529424",
            account_duty: "Mühasibatlıq uçotunun idarə edilməsi"
        },
        {
            no: "2",
            account_name: "Famil Rəhmətov",
            id_num: "30529424",
            account_duty: "Mühasibatlıq uçotunun idarə edilməsi"
        },
        {
            no: "3",
            account_name: "Famil Rəhmətov",
            id_num: "30529424",
            account_duty: "Mühasibatlıq uçotunun idarə edilməsi"
        },
    ]


    return (
        <div className='authority-container d-flex flex-column'>

            <div className="authority-header d-flex justify-content-between align-items-center">
                <div className="authority-title">Səlahiyyətlər</div>
                <AddButton content={"Fərdi hesaba səlahiyyət ver"} onClick={openModal} />
            </div>

            <div className="table">
                <TaxModuleTable columns={columns} data={data} editable={true} />
                <AuthorieModal isOpen={isModalOpen} onClose={closeModal} />
            </div>


        </div>
    )
}

export default Authority