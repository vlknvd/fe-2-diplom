import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import './SuccessOrderPage.css'

const SuccessOrderPage = () => {
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
                                <p className="head-number">7 760</p>
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
                            <h3>Ирина Артуровна!</h3>
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
                                    <div className="star"></div>
                                    <div className="star"></div>
                                    <div className="star"></div>
                                    <div className="star"></div>
                                    <div className="star"></div>
                                </div>
                            </div>
                            <div className="return">
                                <button className="return-button">Вернуться на главную</button>
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