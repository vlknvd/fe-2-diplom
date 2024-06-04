import { useSelector } from "react-redux";
import { selectSelectedSeat } from "../../../store/getSeatsSlice";
import { totalSum } from "../../../utils/selectionWagon"

const WidgetDetailsTotal = () => {
    const seatsDep = useSelector(selectSelectedSeat).departure;
    const seatsArr = useSelector(selectSelectedSeat).arrival;
    
    return (
        <div className="widget-details-total">
            <h4 className="total-title">Итог</h4>
            <div className="total">
                <p className="total-price">{totalSum(seatsDep) + totalSum(seatsArr)}</p>
                <div className="total-currency"></div>
            </div>
        </div>
    )
}

export default WidgetDetailsTotal