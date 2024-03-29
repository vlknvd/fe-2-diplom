const SeatCarriageType = () => {
    return (
        <div className="seat-carriage-type">
            <h3 className="carriage-type-title">Тип вагона</h3>
            <div className="carriage-types">
                <div className="carriage-type">
                    <div className="carriage-type-img sed"></div>
                    <p className="carriage-type-subtitle">Сидячий</p>
                </div>
                <div className="carriage-type">
                    <div className="carriage-type-img res"></div>
                    <p className="carriage-type-subtitle">Плацкарт</p>
                </div>
                <div className="carriage-type">
                    <div className="carriage-type-img coupe"></div>
                    <p className="carriage-type-subtitle">Купе</p>
                </div>
                <div className="carriage-type">
                    <div className="carriage-type-img lux active"></div>
                    <p className="carriage-type-subtitle active">Люкс</p>
                </div>
            </div>
        </div>
    )
}

export default SeatCarriageType