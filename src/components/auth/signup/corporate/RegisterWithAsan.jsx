import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormButton from '../../../ui/buttons/FormButton';
import InputWithLabel from '../../../ui/inputs/InputWithLabel';
import Input from '../../../ui/inputs/Input';
import { setStep } from "../../../../redux/slices/stepSlice";
import { formatPhoneNumber, allowOnlyNumbers } from "../../../../utils/InputUtils";

const RegisterWithAsan = () => {
    const [phone, setPhone] = useState("");
    const [userId, setUserId] = useState("");
    const [isCodeAcceptVisible, setIsCodeAcceptVisible] = useState(false); // Code accept div'inin görünürlüğünü kontrol eden state

    const isFormValid = phone.length > 0 && userId.length > 0;

    const handleButtonClick = () => {
        if (isFormValid) {
            setIsCodeAcceptVisible(true);
        }
    };

    const dispatch = useDispatch();

    const handleContinue = () => {
        dispatch(setStep(4))
    }

    return (
        <div className="asan-register-container d-flex flex-column col-md-8 col-lg-7 col-xl-5 col-xxl-5 col-11">
            <div className="corporate-icon">
                <img src="/assets/corporateProfile-icon.svg" alt="ico" />
            </div>

            <div className="asan-register-type">Korporativ hesab</div>
            <div className="asan-register-info">Asan İmza ilə qeydiyyat</div>

            {/* Eğer `isCodeAcceptVisible` false ise formu göster, true ise gizle */}
            {!isCodeAcceptVisible && (

                <div className="asan-register-form d-flex flex-column">

                    <InputWithLabel label={"Mobil nömrə"} id={"phone"} htmlFor={"phone"} name={"phone"} value={phone} onChange={(e) => setPhone(formatPhoneNumber(e.target.value))} />

                    <Input name={"id"} id={"id"} placeholder={"İstifadəçi ID-si"} value={userId} onChange={(e)=> setUserId(allowOnlyNumbers(e.target.value)) }  />

                    <FormButton content={"Davam et"} isActive={isFormValid} handleContinue={handleButtonClick} />

                </div>
            )}

            {/* Eğer `isCodeAcceptVisible` true ise `code-accept` div'ini göster */}

            {isCodeAcceptVisible && (
                <div className="code-accept d-flex flex-column">
                    <div className="info">
                        Lütfən, telefonunuza göndərilmiş sorğunu qəbul <br /> edin. Sorğunun yoxlama kodunun aşağıdakı kod ilə eyni olmasını müqayisə edin.
                    </div>

                    <div className="timer">00:01:48</div>

                    <button onClick={handleContinue} className="code">Yoxlama kodu: <span>2212</span></button>
                </div>
            )}

        </div>
    );
};

export default RegisterWithAsan;
