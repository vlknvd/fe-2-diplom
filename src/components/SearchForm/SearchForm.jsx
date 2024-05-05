import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import './SearchForm.css'
import { clearCity, getCity } from '../../store/getCitySlice'
import { choiceCityFrom, choiceCityTo } from '../../store/choiceSlice'
import CalendarForm from '../CalendarForm/CalendarForm'
import { getTrains } from '../../store/getTrainsSlice'
import { useNavigate } from 'react-router-dom'

const SearchForm = ({ name }) => {
    const [city, setCity] = useState({from: '', to: ''})
    const [show, setShow] = useState('none')
    const [calendar, setCalendar] = useState({direction: '', open: false})

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const { items } = useSelector((state) => state.city)
    const choice = useSelector(state => state.choice)
    const { fromDate, toDate, fromCity, toCity } = useSelector((state) => state.choice)

    useEffect(() => {
        if(city.from.trim() !== '') {
            dispatch(getCity(city.from))
        }
        if(city.to.trim() !== '') {
            dispatch(getCity(city.to))
        }
    }, [city.from, city.to, dispatch])

    const onChange = (e) => {
        if(e.target.id === 'from' ) {
            setCity((prev) => ({ ...prev, from: e.target.value }));
            if(show === 'none') {
                setShow('city-from')
            }
        }
        if(e.target.id === 'to') {
            setCity((prev) => ({ ...prev, to: e.target.value }));
        }
    }

    const onClick = (e) => {
        dispatch(clearCity());
        show !== 'city-from' && e.target.id === 'from' ? setShow('city-from'): setShow('none')
        show !== 'city-to' && e.target.id === 'to' ? setShow('city-to'): setShow('none')
        if(city.from) {
            dispatch(getCity(city.from))
        }
        if(city.to) {
            dispatch(getCity(city.to))
        }
    }

    const checkCity = (city) => {
        if (show === 'city-from') {
            dispatch(choiceCityFrom(city));
            setCity((prev) => ({ ...prev, from: city.name }));
        };
        if (show === 'city-to') {
            dispatch(choiceCityTo(city));
            setCity((prev) => ({ ...prev, to: city.name }));
        };
        setShow('none');
    }

    const openCalendar = (e) => {
        setCalendar((prev) => ({ ...prev, direction: e.target.id}))
        calendar.open === false ? setCalendar((prev) => ({ ...prev, open: true})) : setCalendar((prev) => ({ ...prev, open: false}))
    }

    const buttonClick = () => {
        if(fromCity && toCity) {
            dispatch(getTrains(choice))
            navigate('/trains') 
        }
    }

    return (
        <div className={`search-form ${name}`}>
            <div className={`search-form-container ${name}`}>
                <div className={`search-form-block block-route ${name}`}>
                    <h2 className="form-title form-title_route">Направление</h2>
                    <div className="form-input-container form-input-container_route">
                        <input value={city.from} 
                        id='from'
                        type="text" 
                        placeholder="Откуда" 
                        className={`form-input-route form-input-route_there ${name}`} 
                        onChange={onChange}
                        onClick={onClick}
                        defaultChecked />    
                        <div className="form-img-route"></div>
                        <input value={city.to} 
                        id='to'
                        type="text" 
                        placeholder="Куда" 
                        className="form-input-route form-input-route_back" 
                        onChange={onChange}
                        onClick={onClick}
                        defaultChecked />
                    </div>
                    <div className={`${show} ${name}`}>
                        <div className='city-list'>
                            {items.length === 0 ?
                            <div className='dots-list'>
                                <div className='dots-list-absolute'>
                                    <div className='loader'></div>
                                </div>
                            </div> :
                            items.map((el) => <p key={el._id} onClick={() => checkCity(el)}>{el.name}</p>)}
                        </div>    
                    </div>
                </div>
                <div className={`search-form-block block-date ${name}`}>
                    <h2 className="form-title form-title_date">Дата</h2>
                    <div className="form-input-container form-input-container_date">
                        <input 
                        type="date" 
                        id='there' 
                        placeholder="ДД/ММ/ГГ" 
                        className={`form-input-date form-input-date_there ${name}`} 
                        defaultChecked 
                        onClick={openCalendar} 
                        defaultValue={fromDate}/>

                        <input 
                        type="date" 
                        id='back' 
                        placeholder="ДД/ММ/ГГ" 
                        className="form-input-date form-input-date_back" 
                        defaultChecked 
                        onClick={openCalendar} 
                        defaultValue={toDate}/>
                    </div>
                    {calendar.open && <CalendarForm name={`main-page ${calendar.direction} ${name}`} direction={calendar.direction}/>}
                </div>
                <div className={`search-form-block block-controls ${name}`}>
                    <div className="form-controls">
                        <button className="form-controls_button" onClick={buttonClick}>Найти билеты</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default SearchForm