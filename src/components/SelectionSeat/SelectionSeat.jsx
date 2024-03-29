import SeatAmount from "./components/SeatAmount"
import SeatCarriage from "./components/SeatCarriage"
import SeatCarriageNumber from "./components/SeatCarriageNumber"
import SeatCarriageType from "./components/SeatCarriageType"
import SeatHeader from "./components/SeatHeader"
import SeatTrainName from "./components/SeatTrainName"

import './SelectionSeat.css'

const SelectionSeat = ({ route }) => {
    return (
        <div className="select-seat">
            <SeatHeader route={route}/>
            <SeatTrainName route={route}/>
            <SeatAmount />
            <SeatCarriageType />
            <SeatCarriageNumber />
            <SeatCarriage />
        </div>
        
    )
}

export default SelectionSeat