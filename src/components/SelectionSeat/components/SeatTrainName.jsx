const SeatTrainName = ({ route }) => {
    return (
        <div classNameName="select-seat-train"> 
            <div className='train-name seat'>
                <div className="train-img"></div>
                <div className='train-desc'>
                    <h5 className='desc-name'>116C</h5>
                    <p className='desc-city'>Москва&#8594;</p>
                    <p className='desc-city'>Адлер&#8594;</p>
                    <p className='desc-city'>Санкт-Петербург</p>
                </div>
            </div>
            <div className='train-direction-time'>
                <div className='train-direction-city'>
                    <h5 className='direction-time'>00:10</h5>
                    <p className='direction-name'>Москва</p>
                    <p className='direction-station'>Курский вокзал</p>
                </div>
                <div className={`direction-arrow ${route}`}></div>
                <div className='train-direction-city'>
                <h5 className='direction-time'>12:00</h5>
                <p className='direction-name'>Адлер</p>
                <p className='direction-station'>Московский вокзал</p>
            </div>
            </div>
            <div className='duration'>
                <div className='duration-img'></div>
                <div className='duration-text'>
                    <p>9 час.</p>
                    <p>43 мин.</p>
                </div>
            </div>
        </div>
    )
}

export default SeatTrainName