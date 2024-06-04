import { useSelector } from 'react-redux'
import './ValidatePayment.css'
import { useNavigate } from 'react-router-dom'

const ValidatePayment = () => {
    const { paymentMethod } = useSelector(state => state.passanger)
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/payment')
    }
    return (
        <div className="validate-form pay">
            <div className="validate-form-head pay">
                <h3 className="form-title pay">Способ оплаты</h3>
            </div>
            <div className="validate-form-body pay">
                <div className="form-block-right pay">
                    <p className="method-title pay">
                        {paymentMethod === 'online' ? 'Онлайн' : 'Наличные' }
                    </p>
                </div>
                <div className="form-block-left pay">
                    <button className="change-button" onClick={onClick}>Изменить</button>
                </div>
            </div>
        </div>
    )
}

export default ValidatePayment