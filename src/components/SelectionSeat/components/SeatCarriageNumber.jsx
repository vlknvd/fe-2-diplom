const SeatCarriageNumber = ({ number }) => {
    console.log(number)
    return (
        <div className='seat-carriage-numbers'>
            <div className='carriage-number'>
                <p className='number-text carriage'>Вагоны</p>
                <button className='carriage-button'>
                    <div className='number-current'>{number}</div>
                </button>
                {/* <div className="number-text">09</div> */}
            </div>
            <p className='carriage-numbering-text'>Нумерация вагонов начинается с головы поезда</p>
        </div>
    )
}

export default SeatCarriageNumber