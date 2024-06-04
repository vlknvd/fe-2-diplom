import { useSelector } from "react-redux";
import { selectSelectedSeat } from "../../../store/getSeatsSlice";
import { totalSum } from "../../../utils/selectionWagon"

const WidgetDetailsPass = ({ depPass, arrPass }) => {
    const adult = depPass.adult + arrPass.adult
    const child = depPass.child + arrPass.child

    const seatsDep = useSelector(selectSelectedSeat).departure;
    const seatsArr = useSelector(selectSelectedSeat).arrival;

    console.log(seatsDep)
    return (
        <div className="widget-details-pass">
            <div className="pass-head">
                <div className="head-img"></div>
                <h4 className="head-title">Пассажиры</h4>
                <div className="head-hide show"></div>
            </div>
            {adult !== 0 && 
            <div className="pass-age-price">
                <h4 className="age-count">{adult} Взрослых</h4>
                <div className="price">
                    <p>{totalSum(seatsDep) + totalSum(seatsArr)}</p>
                    <div></div>
                </div>
            </div>}
            {child !== 0 &&
            <div className="pass-age-price">
                <h4 className="age-count">{child} Ребенок</h4>
                <div className="price">
                    <p>1920</p>
                    <div></div>
                </div>
            </div>}
        </div> 
    )
}

export default WidgetDetailsPass