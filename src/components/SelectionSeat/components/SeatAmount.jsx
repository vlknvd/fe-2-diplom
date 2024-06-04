import { useDispatch } from "react-redux"
import { addAmountPassanger } from "../../../store/getSeatsSlice"

const SeatAmount = ({ direction }) => {
    const dispatch = useDispatch()
    const onChange = (e) => {
        if(Number(e.target.value)) {
            const { value } = e.target
            const { type } = e.target.dataset
            dispatch(addAmountPassanger({value, type, direction}))
        }
        
    }
    return (
        <div className='seat-amount_ticket'>
            <h4 className='ticket-title seat'>Количество билетов</h4>
            <div className='ticket-ages'>
                <div className='age-inputs adult'>
                    <input className='age-input adult' type="number" placeholder='Взрослых - 2' data-type='adult' onChange={onChange} />
                    <p className='input-desc adult'>Можно добавить еще 3 пассажиров</p>
                </div>
                <div className='age-inputs children'>
                    <input className='age-input children' type="number" placeholder="Детских - 1" data-type='child' onChange={onChange}/>
                    <p className='input-desc children'>
                        Можно добавить еще детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле
                        в среднем на 50-65%
                    </p>
                </div>
                <div className='age-inputs no-place'>
                    <input className='age-input no-place' type="number" placeholder='Детских "без места" - 0' data-type='noPlace' onChange={onChange}/>
                    <p className='input-desc no-place'>Доступно только для взрослого места. Можно добавить еще 2 детей.</p>
                </div>
            </div>
        </div>
    )
}

export default SeatAmount