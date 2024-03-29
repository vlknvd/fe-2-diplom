import './HowItWork.css'

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
                        <div className="hiw-item">
                            <img src="./img/hiw/hiw-1.png" alt="" className="hiw-item_img" />
                            <p className="hiw-item_content">
                                Удобный заказ
                                на сайте
                            </p>
                        </div>
                        <div className="hiw-item">
                            <img src="./img/hiw/hiw-2.png" alt="" className="hiw-item_img" />
                            <p className="hiw-item_content">
                                Нет необходимости
                                ехать в офис
                            </p>
                        </div>
                        <div className="hiw-item">
                            <img src="./img/hiw/hiw-3.png" alt="" className="hiw-item_img" />
                            <p className="hiw-item_content">
                                Огромный выбор
                                направлений
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork