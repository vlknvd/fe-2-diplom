import { useEffect, useState } from "react"
import PassangerInput from "../../PassangerCard/components/PassangerInput"
import { useDispatch } from "react-redux"
import { addOrderPassanger } from "../../../store/passangersSlice"
import { validatePhoneNumber, validateEmail } from "../../../utils/validators"

const PersonalDataInfo = ({ el }) => {
    const [inputValue, setInputValue] = useState({
        name: el.name,
        surname: el.surname,
        father: el.father,
        phone: '',
        mail: '',
    })
    const dispatch = useDispatch()
    const onChange = (e) => {
        const { id, value } = e.target
        if (id === "surname") 
            setInputValue((prevState) => ({
                ...prevState,
                surname: value,
            }));
        if (id === "name")
            setInputValue((prevState) => ({
                ...prevState,
                name: value,
            }));
        if (id === "father")
            setInputValue((prevState) => ({
                ...prevState,
                father: value,
            }));
        if (id === "phone") 
            setInputValue((prevState) => ({
                ...prevState,
                phone: value,
            })); 
        if (id === "mail") {
            setInputValue((prevState) => ({
                ...prevState,
                mail: value,
            }));
        }
    }
    useEffect(() => {
        if(validatePhoneNumber(inputValue.phone) && validateEmail(inputValue.mail)) {
            dispatch(addOrderPassanger(inputValue))
        }
    }, [inputValue, dispatch])
    return (
        <div className="personal-data-main">
            <div className="personal-data-info">
                <PassangerInput name={'Фамилия'} 
                id={'surname'}
                ph={'Фамилия'}
                type={'text'}
                labelClassName={'data-info'}
                pClassName={'surname'}
                inputClassName={'surname-input'}
                value={el.surname}
                onChange={onChange}
                />
                <PassangerInput name={'Имя'} 
                id={'name'}
                ph={'Имя'}
                type={'text'}
                labelClassName={'data-info'}
                pClassName={'name'}
                inputClassName={'name-input'}
                value={el.name}
                onChange={onChange}
                />
                <PassangerInput name={'Отчество'} 
                id={'father'}
                ph={'Отчество'}
                type={'text'}
                labelClassName={'data-info'}
                pClassName={'father'}
                inputClassName={'father-input'}
                value={el.father}
                onChange={onChange}
                />
                
            </div>
            <div className="personal-data-phone">
                <PassangerInput name={'Контактный телефон'} 
                id={'phone'}
                ph={'+7 ___ ___ __ __'}
                type={'text'}
                pClassName={'phone'}
                inputClassName={'phone-input'}
                onChange={onChange}
                />
            </div>
            <div className="personal-data-mail">
                <PassangerInput name={'Email'} 
                id={'mail'}
                ph={'inbox@gmail.ru'}
                type={'text'}
                labelClassName={'personal-data-mail'}
                pClassName={'mail'}
                inputClassName={'mail-input'}
                onChange={onChange}
                />
            </div>
        </div>
    )
}

export default PersonalDataInfo