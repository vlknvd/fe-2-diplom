import './HowItWork.css'
import HowItWorkItem from './HowItWorkItem'

const HowItWork = () => {
    return (
        <section className="section-hiw" id='hiw'>
            <div className="hiw-container">
                <div className="hiw-head">
                    <h2 className="hiw-title">Как это работает</h2>
                    <button className="hiw-btn">Узнать больше</button>
                </div>  
                <div className="hiw-content">
                    <div className="hiw-list">
                        <HowItWorkItem link='./img/hiw/hiw-1.png' text='Удобный заказ на сайте' />
                        <HowItWorkItem link='./img/hiw/hiw-2.png' text='Нет необходимости ехать в офис' />
                        <HowItWorkItem link='./img/hiw/hiw-3.png' text='Огромный выбор направлений' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork