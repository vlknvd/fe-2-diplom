import './CalendarForm.css'
import Calendar from 'react-calendar'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { choiceDateFrom, choiceDateTo } from '../../store/choiceSlice'
import { format } from "date-fns";

const CalendarForm = ({ name, direction }) => {
    const [value, changeValue] = useState(new Date())
    const dispatch = useDispatch()
    useEffect(() => {
        const date = format(value, "yyyy-MM-dd")
        if(direction === 'there' || direction === 'from' ) {
           dispatch(choiceDateFrom(date)) 

        } else if ( direction === 'back' || direction === 'to') {
            dispatch(choiceDateTo(date)) 
        }
    }, [value, dispatch])

    return (
        <Calendar className={`calendar ${name}`} 
        onChange={changeValue} 
        value={value}
        nextLabel='&#9658;'
        next2Label=''
        prevLabel='&#9668;'
        prev2Label=''/>
    )
}

export default CalendarForm