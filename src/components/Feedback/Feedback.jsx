import './Feedback.css'
import Review from './Review.jsx'

const Feedback = () => {
    return (
        <section className="section-feedback" id='feedback'>
            <div className="feedback-container">
                <h2 className="feedback-title">Отзывы</h2>
                <div className="feedback-content">
                    <div className="feedback-item">
                        <Review 
                        link='./img/feedback/feedback1.png'
                        title='Екатерина Вальнова'
                        text='
                        Доброжелательные подсказки на всех этапах 
                        помогут правильно заполнить поля и без затруднений 
                        купить авиа или ж/дбилет, даже если вы 
                        заказываете онлайн билет впервые' />
                    </div>
                    <div className="feedback-item">
                        <Review link='./img/feedback/feedback2.png'
                        title='Евгений Стрыкало'
                        text='
                        СМС-сопровождение до посадки
                        Сразу после оплаты ж/д билетов
                        и за 3 часа до отправления мы пришлем вам
                        СМС-напоминание о поездке.' />
                    </div>
                </div>
                <div className="feedback-footer">
                    <button className="feedback-footer-btn selected" disabled></button>
                    <button className="feedback-footer-btn"></button>
                    <button className="feedback-footer-btn"></button>
                    <button className="feedback-footer-btn"></button>
                    <button className="feedback-footer-btn"></button>
                </div>
            </div>
        </section>    
    )
}

export default Feedback