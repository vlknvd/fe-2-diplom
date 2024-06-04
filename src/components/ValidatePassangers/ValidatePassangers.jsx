import { useSelector } from 'react-redux'
import './ValidatePassangers.css'
import PassangerCard from './components/PassangerCard'
import PassangersCards from './components/PassangersCards'
import { useNavigate } from 'react-router-dom'
import { selectSelectedSeat } from '../../store/getSeatsSlice'
import { totalSum } from '../../utils/selectionWagon'

const ValidatePassangers = () => {
    const { passanger } = useSelector(state => state.passanger)
    const seatsDep = useSelector(selectSelectedSeat).departure;
    const seatsArr = useSelector(selectSelectedSeat).arrival;
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/passangers')
    }
    return (
        <div className="validate-form pass">
            <div className="validate-form-head pass">
                <h3 className="form-title pass">Пассажиры</h3>
            </div>
            <div className="validate-form-body pass">
                <PassangersCards passangers={passanger} />
                <div className="form-block-left pass">
                    <div className="result">
                        <p className="result-sum">Всего</p>
                        <p className="result-number">{totalSum(seatsDep) + totalSum(seatsArr)}</p>
                    </div>
                    <div className="change pass">
                        <button className="change-button pass" onClick={onClick}>Изменить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ValidatePassangers