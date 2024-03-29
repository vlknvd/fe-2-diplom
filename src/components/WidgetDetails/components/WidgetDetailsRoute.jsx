const WidgetDetailsRoute = ({ route }) => {
    return (
        <div className={`details ${route}`}>
            <div className="details-route-head">
                <div className={`head-img ${route}`}></div>
                {route === 'back' ? <h4 className={`head-title ${route}`}>Обратно</h4> :
                <h4 className='head-title '>Туда</h4> }
                <div className='head-date'>25.05.2021</div>
                <div className='head-hide'></div>
            </div>
            <div className="details-route-content">
                <div className="number">
                    <h4>№ Поезда</h4>
                    <p>116C</p>
                </div>
                <div className="name">
                    <h4>Название</h4>
                    <div className="city-name">
                        <p>Адлер</p>
                        <p>Санкт-Петербург</p>
                    </div>
                </div>
            </div>
            <div className="details-route-time">
                <div className="there-direction-from">
                    <div className='time from'>00:10</div>
                    <div className='date from'>25.05</div>
                    <div className='there-direction-from'>
                        <h5>Москва</h5>
                        <p>Курский вокзал</p>
                    </div>
                </div>
                <div className="time-box">
                    <p>9:42</p>
                    <div className={`direction-arr ${route}`}></div>
                </div>
                <div className="there-direction-to">
                    <div className='time to'>23:15</div>
                    <div className='date to'>26.05</div>
                    <div className='there-direction-to'>
                        <h5>Адлер</h5>
                        <p>Адлерский вокзал</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WidgetDetailsRoute