const CardDirection = () => {
    return (
        <div className='card-direction filter'>
            <div className='direction-route'>
                <div className='direction-from'>
                    <div className='direction-time'>00:10</div>
                    <div className='direction-from'>
                        <h5 className='direction-city'>Москва</h5>
                        <p className='direction-station'>Курский вокзал</p>
                    </div>
                </div>
                <div className='direction-time'>
                    <p className='travel-time'>9:42</p>
                    <img src="./img/train-card/train-arrow.png" alt="arrow" className="arrow-img" />
                </div>
                <div className='direction-to'>
                    <div className='direction-time'>09:52</div>
                    <div className='direction-to'>
                        <h5 className='direction-city'>Санкт-Петербург</h5>
                        <p className='direction-station'>Ладожский вокзал</p>
                    </div>
                </div>
            </div>
            <div className='direction-route'>
                <div className='direction-from'>
                    <div className='direction-time'>00:10</div>
                    <div className='direction-from'>
                        <h5 className='direction-city'>Москва</h5>
                        <p className='direction-station'>Курский вокзал</p>
                    </div>
                </div>
                <div className='direction-time'>
                    <p className='travel-time'>9:42</p>
                    <img src="./img/train-card/train-arrow-back.png" alt="arrow" className="arrow-img" />
                </div>
                <div className='direction-to'>
                    <div className='direction-time'>09:52</div>
                    <div className='direction-to'>
                        <h5 className='direction-city'>Санкт-Петербург</h5>
                        <p className='direction-station'>Ладожский вокзал</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default CardDirection