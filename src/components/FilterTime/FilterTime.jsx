import { useState } from 'react'
import './FilterTime.css'
import Time from './Time'

const FilterTime = ({ route, title }) => {
    const [show, setShow] = useState('hide')
    const onClick = () => {
        show === 'show' ? setShow('hide') : setShow('show')
    }
    return (
        <div className={`filter-time time-there ${route}`}>
            <div className="time-head">
                <div className={`time-img ${route}`}></div>
                <h3 className="time-title title-there">{title}</h3> 
                <button className={`time-button ${show}`} onClick={onClick} ></button>
            </div>
            <Time name={'отбытия'} route={'leave'} show={show}/>
            <Time name={'прибытия'} route={'arrival'} show={show}/>
        </div>
    )
}

export default FilterTime