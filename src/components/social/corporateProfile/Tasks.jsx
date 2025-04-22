import React, { useState } from 'react'
import TaxModuleTable from '../../tables/TaxModuleTable'
import AddButton from '../../ui/buttons/AddButton';
import AddTaskModal from '../../modals/AddTaskModal';


const Tasks = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const columns = [
        { id: "no", accessorKey: "no", header: "No", filterOptions: { search: true, type: "search" }, },
        {
            id: "task_name", accessorKey: "task_name", header: "Vəzifənin adı",
            filterOptions: {
                search: true,
                type: "search",
                options: ["A-dan Z-yə", "Z-dən A-ya"],
            },
        },
        {
            id: "task_date", accessorKey: "task_date", header: "Yaradılma tarixi",
            filterOptions: { search: true, type: "search" },
        },
    ];

    const data = [
        {
            no: "1",
            task_name: "Mühasibatlıq uçotunun idarə edilməsi",
            task_date: "23.12.2024"
        },
        {
            no: "2",
            task_name: "Mühasibatlıq uçotunun idarə edilməsi",
            task_date: "23.12.2024"
        },
        {
            no: "3",
            task_name: "Mühasibatlıq uçotunun idarə edilməsi",
            task_date: "23.12.2024"
        }
    ]


    return (
        <div className='tasks-container d-flex flex-column'>

            <div className="tasks-header d-flex justify-content-between align-items-center">
                <div className="tasks-title">Vəzifələr</div>
                <AddButton content={"Vəzifə yarat"} onClick={openModal} />
            </div>

            <div className="table">
                <TaxModuleTable columns={columns} data={data} />
                <AddTaskModal isOpen={isModalOpen} onClose={closeModal} />
            </div>


        </div>
    )
}

export default Tasks