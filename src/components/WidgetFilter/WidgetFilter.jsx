import FilterTime from '../FilterTime/FilterTime'
import LastTickets from '../LastTickets/LastTickets'
import './WidgetFilter.css'
import Checkbox from './components/Checkbox'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import CalendarForm from '../CalendarForm/CalendarForm'
import { getOptions } from '../../store/getWidgetFilterSlice'
import RangeSlider from 'react-range-slider-input';


const WidgetFilter = () => {
    const [calendar, setCalendar] = useState({direction: '', open: false})
    const { fromDate, toDate } = useSelector((state) => state.choice)
    // const dispatch = useDispatch()
    // const item = JSON.parse(localStorage.getItem('trains'))

    const onClick = (e) => {
        setCalendar((prev) => ({ ...prev, direction: e.target.id}))
        calendar.open === false ? setCalendar((prev) => ({ ...prev, open: true})) : setCalendar((prev) => ({ ...prev, open: false}))
    }

    return (
        <aside className="aside-widgets">
            <div className="widget-filter">
                <div className="filter-dates">
                    <div className='date date-from'>
                        <h3 className='date-title from'>Дата поездки</h3>
                        <input 
                        type="date"
                        className='date-input from' 
                        id='from'
                        placeholder="ДД/ММ/ГГ"
                        onClick={onClick}
                        defaultValue={fromDate}
                        defaultChecked/>
                    </div>
                    <div className='date date-to'>
                        <h3 className='date-title to'>Дата возвращения</h3>
                        <input 
                        type="date"
                        className='date-input to' 
                        id='to'
                        placeholder="ДД/ММ/ГГ"
                        onClick={onClick}
                        defaultValue={toDate}
                        defaultChecked/>
                    </div>
                    {calendar.open && <CalendarForm name={`main-page train ${calendar.direction}` } direction={calendar.direction}/>}
                </div>
                <div className="filter-checkboxes">
                    <Checkbox link={"./img/widget-filter/filter-1.png"} alt={"купе"} name={'Купе'} id={'coupe'}/>
                    <Checkbox link={"./img/widget-filter/filter-2.png"} alt={"плацкарт"} name={'Плацкарт'} id={'reserved'}/>
                    <Checkbox link={"./img/widget-filter/filter-3.png"} alt={"сидячий"} name={'Сидячий'} id={'seated'}/>
                    <Checkbox link={"./img/widget-filter/filter-4.png"} alt={"люкс"} name={'Люкс'} id={'lux'}/>
                    <Checkbox link={"./img/widget-filter/filter-5.png"} alt={"wi-fi"} name={'Wi-Fi'} id={'wifi'}/>
                    <Checkbox link={"./img/widget-filter/filter-6.png"} alt={"экспресс"} name={'Экспресс'} id={'express'}/>
                </div>
                <div className="filter-price">
                    <h3 className="price-title">Cтоимость</h3>
                    <div className='price-range'>
                        <div className='range-text'>
                            <p>от</p>
                            <p>до</p>
                        </div>
                        <RangeSlider className={'range-input-in'} min={0} max={8000}/>
                    </div>
                    <div className='range-number'>
                        <p className='price-start'>0</p>
                        <p className='price-end'>100</p>
                    </div>
                </div>
                <FilterTime title={'Туда'} route={'to'} />
                <FilterTime title={'Обратно'} route={'back'}/>
            </div>
            <div className="widget-last-tickets">
                <h3 className="last-tickets-title">Последние билеты</h3>
                <div className="last-tickets">
                    <LastTickets />
                </div>
            </div>
        </aside>
    )
}

export default WidgetFilter