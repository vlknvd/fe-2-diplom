const SeatHeader = ({ route }) => {
    return (
        <div className={`seat-header ${route}`}>
            <div className={`seat-header-direction ${route}`}></div>
            <button className="seat-header-button">Выбрать другой поезд</button>
        </div>
    )
}

export default SeatHeader