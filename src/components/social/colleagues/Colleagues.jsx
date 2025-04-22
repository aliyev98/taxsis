import React from 'react'
import { setColleagueNavigate } from '../../../redux/slices/colleagueSlice';
import { useDispatch } from 'react-redux';
import AddButton from '../../ui/buttons/AddButton';
import TaxModuleTable from '../../tables/TaxModuleTable'
import FormButton from '../../ui/buttons/FormButton';


const Colluages = () => {

    const dispatch = useDispatch();

    const handleConfirm = (employee) => {
    };

    const columns = [
        {
            id: "no",
            header: "no",
            accessorKey: "no",
            cell: ({ row }) => (
                <img
                    src={row.original.no}
                    alt="Profil"
                    style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" }}
                />
            )
        },
        {
            id: "name",
            accessorKey: "name",
            header: "Əməkdaşın adı, soyadı",
            filterOptions: {
                search: true,
                type: "search",
            },
        },
        {
            id: "duty",
            accessorKey: "duty",
            header: "Vəzifəsi",
            filterOptions: {
                search: true,
                type: "search",
            },
        },
        {
            id: "actions",
            header: "", // Başlık istemiyorsan boş bırak
            cell: ({ row }) => (
                <FormButton content={"Əməkdaş kimi təsdiq et"} isActive={true} onClick={() => handleConfirm(row.original)} />
            )
        },

    ];

    const data = [
        { no: "/assets/post-img.jpg", name: "1406129621", duty: "“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ" },
        { no: "/assets/photo4.png", name: "1406129621", duty: "“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ" },
        { no: "/assets/profile-picture.jpg", name: "1406129621", duty: "“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ" },
        { no: "/assets/photo.png", name: "1406129621", duty: "“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ" },

    ];

    return (
        <div className="colleagues d-flex flex-column">

            <div className="colleagues-header d-flex justify-content-between align-items-center">
                <span className='colleagues-title'>Əməkdaşlar</span>

                <AddButton content={"Əməkdaş əlavə et"} onClick={() => dispatch(setColleagueNavigate("addColleague"))} />

            </div>

            <div className="colleagues-body">
                <TaxModuleTable columns={columns} data={data} />
            </div>

        </div>
    )
}

export default Colluages