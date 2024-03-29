const SeatCarriage = () => {
    return (
        <div className="seat-carriage-description">
            <div className="carriage-number select-carriage">
                <h2 className="carriage-num">07</h2>
                <p className="carriage-num-text">вагон</p>
            </div>
            <div className="carriage-seats">
                <h3 className="seats-subtitle">Места: <strong>1</strong></h3>
                <p className="seat-text top">Верхние <strong>3</strong></p>
                <p className="seat-text bottom">Нижние <strong>3</strong></p>
            </div>
            <div className="carriage-amounts">
                <h3 className="amount-subtitle">Стоимость</h3>
                <div className="amount-text">
                    <p className="amount-num top">2520</p>
                    <div className="amount-currency"></div>
                </div>
                <div className="amount-text">
                    <p className="amount-num bottom">2520</p>
                    <div className="amount-currency"></div>
                </div>
            </div>
            <div className="carriage-services">
                <h3 className="services-subtitle">Обслуживание ФПК</h3>
                <div className="services-images">
                    <div className="service-img serv1 active"></div>
                    <div className="service-img serv2"></div>
                    <div className="service-img serv3"></div>
                    <div className="service-img serv4"></div>
                </div>
            </div>
        </div>
    )
}

export default SeatCarriage