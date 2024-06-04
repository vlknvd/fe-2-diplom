import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import './SuccessOrderPage.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { selectSelectedSeat } from "../../store/getSeatsSlice"
import { totalSum } from "../../utils/selectionWagon"

const SuccessOrderPage = () => {
    const { passanger } = useSelector(state => state.passanger)
    const seatsDep = useSelector(selectSelectedSeat).departure;
    const seatsArr = useSelector(selectSelectedSeat).arrival;
    const [ activeStar, setActiveStar ] = useState({
        one: '',
        two: '',
        three: '',
        four: '',
        five: ''
    })
    const navigate = useNavigate()
    const onClick = ()=> {
        navigate('/main')
    }
    const onClickStar = (e) => {
        const { id } = e.target
        setActiveStar((prevState) => ({
            ...prevState,
            [id]: 'check'
        }))
        if(activeStar[id] === 'check') {
            setActiveStar((prevState) => ({
                ...prevState,
                [id]: ''
            }))
        }
    }
    console.log()
    return (
        <>
            <Header/>
            <Banner name={'trains'} link={'./img/banner3.png'} />
            <main className='main success'>
                <section className="section success">
                    <h2 className="succsess-title">Благодарим Вас за заказ!</h2>
                    <div className="succsess-content">
                        <div className="content-head">
                            <p>№Заказа 285АА</p>
                            <div className="head-sum">
                                <p className="head-text">сумма</p>
                                <p className="head-number">{totalSum(seatsDep) + totalSum(seatsArr)}</p>
                            </div>
                        </div>
                        <div className="content-information">
                            <div className="info">
                                <div className="info-image fir"></div>
                                <p>билеты будут отправлены на ваш <strong>e-mail</strong></p>
                            </div>
                            <div className="info">
                                <div className="info-image sec"></div>
                                <p><strong>распечатайте</strong> и сохраняйте билеты до даты поездки</p>
                            </div>
                            <div className="info">
                                <div className="info-image th"></div>
                                <p><strong>предьявите</strong> распечатанные билеты при посадке</p>
                            </div>
                        </div>
                        <div className="content-status">
                            <h3>{passanger[0].name} {passanger[0].surname}</h3>
                            <p className='status-text'>Ваш заказ успешно оформлен.</p>
                            <p className='status-text'>В ближайшее время с вами свяжется наш оператор для подтверждения.</p>
                            <p className='status-text strong'>
                                Благодарим Вас за оказанное доверие и желаем приятного путешествия!   
                            </p>
                        </div>
                        <div className="content-footer">
                            <div className="rating">
                                <p>Оцените заказ</p>
                                <div className="rating-stars">
                                    <button className={`star ${activeStar.one}`} id='one' onClick={onClickStar} ></button>
                                    <button className={`star ${activeStar.two}`}  id='two' onClick={onClickStar}></button>
                                    <button className={`star ${activeStar.three}`} id='three' onClick={onClickStar}></button>
                                    <button className={`star ${activeStar.four}`} id='four' onClick={onClickStar}></button>
                                    <button className={`star ${activeStar.five}`} id='five'onClick={onClickStar}></button>
                                </div>
                            </div>
                            <div className="return">
                                <button className="return-button" onClick={onClick}>Вернуться на главную</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SuccessOrderPage