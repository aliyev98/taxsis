import React from 'react'
import { useDispatch } from 'react-redux';
import { setColleagueNavigate } from '../../../redux/slices/colleagueSlice';
import Input from '../../ui/inputs/Input';
import Select from '../../ui/inputs/Select';
import FormButton from '../../ui/buttons/FormButton';


const AddColleagues = () => {

    const dispatch = useDispatch();

    return (
        <div className='add-colleagues-container d-flex flex-column align-items-center'>

            <div className="add-colleagues-header">

                <div className="add-colleagues-title d-flex align-items-center">
                    <img
                        src="/assets/arrow-left.svg"
                        alt=""
                        onClick={() => dispatch(setColleagueNavigate("colleagueList"))}
                    />

                    <span>Yeni əməkdaş əlavə et</span>
                </div>


            </div>

            <div className="add-colleagues-form d-flex flex-column justify-content-center align-items-center">

                <Input placeholder={"Əməkdaşın adı, soyadı"} />
                <Input placeholder={"Əməkdaşın emaili"} />
                <Select
                    placeholder={"Departament"}
                    options={[
                        { value: "1", label: "Maliyyə" },
                        { value: "2", label: "IT" },
                    ]} />
                <Select
                    placeholder={"Vəzifəsi"}
                    options={[
                        { value: "1", label: "Frontend" },
                        { value: "2", label: "Backend" },
                    ]} />

            </div>

            <FormButton isActive={true} content={"Əlavə et"} />

        </div>
    )
}

export default AddColleagues