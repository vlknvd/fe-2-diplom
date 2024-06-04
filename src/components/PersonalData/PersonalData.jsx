import { useDispatch, useSelector } from 'react-redux'
import './PersonalData.css'
import PersonalDataInfo from './components/PersonalDataInfo'
import { useEffect, useState } from 'react'
import { addPaymentMethod } from '../../store/passangersSlice'

const PersonalData = () => {
    const { passanger } = useSelector(state => state.passanger)
    const [method, setMethod] = useState('')
    const dispatch = useDispatch()
    const onClick = (e) => {
        setMethod(e.target.id)
    }
    useEffect(() => {
        if(method !== '') {
            dispatch(addPaymentMethod(method))
        }
    }, [method, dispatch])

    return (
        <div className="personal-data">
            <div className="personal-data-head">
                <h3>Персональные данные</h3>
            </div>
            {passanger.map(el => 
                <PersonalDataInfo el={el} />
            )}
            <div className="personal-data-footer">
                <div className="footer-title">
                    <h3>Способ оплаты</h3>
                </div>
                <div className="methods">
                    <div className="method-online">
                        <div className='online-checkbox'>
                            <input type="checkbox" className="input-checkbox" id='online' onClick={onClick} />
                            <label htmlFor='online' className="checkbox-text">Онлайн</label>
                        </div>
                        <div className="online-variation">
                            <p className="variant card">Банковской картой</p>
                            <p className="variant">PayPal</p>
                            <p className="variant">Visa QIWI Wallet</p>
                        </div>
                    </div>
                    <div className="method-cash">
                        <div className='cash-checkbox' >
                            <input type="checkbox" className="input-checkbox" id='cash' onClick={onClick} />
                            <label htmlFor='cash' className="checkbox-text">Наличными</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalData