import './About.css'

const About = () => {
    return (
        <section className="section-about" id='about'>
            <div className="about-container">
                <h2 className="about-title">О нас</h2>
                <div className="about-content">
                    <p className="about-text">
                        Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 
                        14 лет мы наблюдаем, как с каждым днем
                        все больше людей заказывают жд билеты через интернет.
                    </p>
                    <p className="about-text">
                        Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?
                        Мы расскажем о преимуществах заказа через интернет.
                    </p>
                    <p className="about-text">
                        <strong>
                            Покупать жд билеты дешево можно за 90 суток до отправления поезда.
                            Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
                        </strong>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;