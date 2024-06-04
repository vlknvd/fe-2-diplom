import { useState } from 'react'
import Select from 'react-select'
import Header from './components/Header'
import PassangerInput from './components/PassangerInput'
import './PassangerCard.css'
import PassangerDocs from './components/PassangerDocs'
import { validateBirthNumber, validateDate, validatePassportNumber, validatePassportSeries } from '../../utils/validators'
import { useDispatch } from 'react-redux'
import { addPassanger } from '../../store/passangersSlice'
import Error from './components/Error'

const PassangerCard = ({ show, count, onClickDelete }) => {
    const options = [
        {value: 'Взрослый', label: 'Взрослый'},
        {value: 'Детский', label: 'Детский'},
    ]
    const [passanger, setPassanger] = useState({
        age: '',
        name: '',
        surname: '',
        father: '',
        gender: '',
        check: false,
        series: 0,
        number: 0,
        birthNumber: 0,
    })
    const [validate, setValidate] = useState(null)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const onChangeAge = (e) => {
        setPassanger((prevState) => ({
            ...prevState,
            age: e.value
        }));
    }
    const onClickGender = (e) => {
        setPassanger((prevState) => ({
            ...prevState,
            gender: e.target.id === "male" ? "male" : "female",
          }));
    };
    const onClickCheckbox = (e) => {
        setPassanger((prevState) => ({
            ...prevState,
            check: e.target.checked ? true : false,
        }));
    }
    const onChangeInput = (e) => {
        const { value, id } = e.target
        if (id === "surname") 
            setPassanger((prevState) => ({
                ...prevState,
                surname: value,
            }));
        if (id === "name")
            setPassanger((prevState) => ({
                ...prevState,
                name: value,
            }));
        if (id === "father")
            setPassanger((prevState) => ({
                ...prevState,
                father: value,
            }));
        if (id === "birthday") 
            setPassanger((prevState) => ({
                ...prevState,
                date: value,
            })); 
        if (id === "series") {
            setPassanger((prevState) => ({
                ...prevState,
                series: value,
            }));
        }      
        if (id === "number") 
            setPassanger((prevState) => ({
                ...prevState,
                number: value,
            }));
        if (id === "birthNumber") 
            setPassanger((prevState) => ({
                ...prevState,
                birthNumber: value,
            })); 
    }  
    const checkEmptyFields = (passanger) => {
        if(passanger.age !== '' && passanger.name !== '' && passanger.surname !== '' &&passanger.father !=='') {
            return true
        }
    }
    const onClickButton = () => {
        console.log(validateDate(passanger.date))
        if(passanger.age === 'Взрослый') {
            if(validatePassportSeries(passanger.series) && validatePassportNumber(passanger.number) && checkEmptyFields(passanger) && validateDate(passanger.date)) {
                setValidate(false)
                setError('Готово')
                dispatch(addPassanger({ passanger })) 
            } else {
                setValidate(true)
                setError('Введенные данные некоректны')
            }
        }
        if(passanger.age === 'Детский') {
            if(validateBirthNumber(passanger.birthNumber) && checkEmptyFields(passanger) && validateDate(passanger.date)){
                setValidate(false)
                setError('Готово')
                dispatch(addPassanger(passanger)) 
            } else {
                setValidate(true)
                setError(`Номер свидетельства о рожденни указан некорректно 
                Пример: VIII-ЫП-123456`)
            }
        } 
    }
    return (
        <div className="passanger">
            <Header count={count} onClickDelete={onClickDelete} />
            {show ? 
            <div className='passanger-content'>
                <div className="passanger-main">
                    <div className="passanger-select-age">
                        <Select className='select-age' 
                        options={options}
                        defaultValue={'Взрослый'}
                        isSearchable={false}
                        onChange={onChangeAge}
                        classNamePrefix={'select-ages'}
                        />
                    </div>
                    <div className='passanger-names'>
                        <PassangerInput id='surname' 
                        name='Фамилия' 
                        onChange={onChangeInput} 
                        value={passanger.surname} 
                        type={'text'}
                        labelClassName={'passanger-names-label'}
                        pClassName={'passanger-names-title'}
                        inputClassName={'passanger-names-input'}/>
                        <PassangerInput id='name'
                        name='Имя'
                        onChange={onChangeInput} 
                        type={'text'}
                        labelClassName={'passanger-names-label'}
                        pClassName={'passanger-names-title'}
                        inputClassName={'passanger-names-input'}/>
                        <PassangerInput id='father' 
                        name='Отчество' 
                        onChange={onChangeInput}
                        type={'text'}
                        labelClassName={'passanger-names-label'}
                        pClassName={'passanger-names-title'}
                        inputClassName={'passanger-names-input'}/>
                    </div>
                    <div className='passanger-birth'>
                        <div className='passanger-select-gender'> 
                            <p className='select-gender-title'>Пол</p>
                            <div className='select-gender'>
                                <button className={passanger.gender === 'male' ? 'gender-select-color gender-man active' : 'gender-select-color gender-man'} id='male' onClick={onClickGender}>м</button>
                                <button className={passanger.gender === 'female' ? 'gender-select-color gender-man active' : 'gender-select-color gender-man'} id='female'onClick={onClickGender}>ж</button>
                            </div>
                        </div>
                        <div className='passanger-birth-date'>
                            <PassangerInput id='birthday'
                            name={'Дата рождения'} 
                            ph='ДД/ММ/ГГ' 
                            onChange={onChangeInput} 
                            type={'text'}
                            labelClassName={'passanger-birth-label'}
                            pClassName={'passanger-birth-title'}
                            inputClassName={'passanger-birth-input'}/>
                        </div>
                    </div> 
                </div>
                <div className='passanger-restric-check'>
                    <input type="checkbox" className="input-checkbox" id='cb' onClick={onClickCheckbox} />
                    <label htmlFor='cb' className="checkbox-text">ограниченная подвижность</label>
                </div>
                {passanger.age === 'Взрослый' && 
                <PassangerDocs name={'adult'} onChangeInput={onChangeInput}/>}
                {passanger.age === 'Детский' && 
                <PassangerDocs name={'child'} onChangeInput={onChangeInput} />}
                {validate === true && <Error text={error} />}
                {validate === false && <Error text={error} success={'success'}/>}
            <div className="passanger-footer">
                <button className="passanger-footer-button" onClick={onClickButton}>Следующий пассажир</button>
            </div>
            </div>
            : ''}
        </div>
    )
}

export default PassangerCard