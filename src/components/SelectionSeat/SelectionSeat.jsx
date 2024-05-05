import { useDispatch, useSelector } from "react-redux"
import SeatAmount from "./components/SeatAmount"
import SeatCarriage from "./components/SeatCarriage"
import SeatCarriageNumber from "./components/SeatCarriageNumber"
import SeatCarriageType from "./components/SeatCarriageType"
import SeatHeader from "./components/SeatHeader"
import SeatTrainName from "./components/SeatTrainName"

import './SelectionSeat.css'
import { getSeat } from "../../store/getTrainSeatSlice"


const SelectionSeat = ({ train, route, direction }) => {
    // const { train } = JSON.parse(localStorage.getItem('train'))
    const { seat } = useSelector(state => state.trainSeat)
    const dispatch = useDispatch()

    console.log()
    const onClick = () => {
        direction === 'departure' ?
        dispatch(getSeat(train.departure._id))
        : dispatch(getSeat(train.arrival._id))
    }
    return (
        <div className={`select-seat ${route}`}>
            <SeatHeader route={route}/>
            {direction === 'departure' ? 
            <SeatTrainName 
            route={route}
            number = {train.departure?.train.name}
            cityFrom = {train.departure?.from?.city?.name}
            cityTo = {train.departure?.to?.city?.name}
            stationFrom = {train.departure?.from.railway_station_name}
            stationTo = {train.departure?.to.railway_station_name}
            depFrom={train.departure?.from.datetime}
            depTo={train.departure?.to.datetime}
            duration = {train.departure?.duration}
            /> : 
            <SeatTrainName 
            route={route}
            number = {train.arrival.train.name}
            cityFrom = {train.arrival?.from?.city?.name}
            cityTo = {train.arrival?.to?.city?.name}
            stationFrom = {train.arrival?.from.railway_station_name}
            stationTo = {train.arrival?.to.railway_station_name}
            depFrom={train.arrival?.from.datetime}
            depTo={train.arrival?.to.datetime}
            duration = {train.arrival?.duration}
            /> }
            <SeatAmount />
            {direction === 'departure' ? 
            <SeatCarriageType 
            seat={train.departure.available_seats_info}
            onClick={onClick}
            /> :
            <SeatCarriageType 
            seat={train.arrival.available_seats_info}
            onClick={onClick}
            />
            }
            <SeatCarriageNumber 
            number = {seat.coach?.name}
            />
            <SeatCarriage />
        </div>
        
    )
}

export default SelectionSeat