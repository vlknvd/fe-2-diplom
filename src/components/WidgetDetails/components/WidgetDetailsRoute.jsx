import { datetimeToDate, msConversion, toHHMMSS } from "../../../utils/timeFormatter"

const WidgetDetailsRoute = ({ route, dateFrom, num, cityFrom, cityTo, timeFrom, timeTo, dateTo, stationFrom, stationTo, duration }) => {
    return (
        <div className={`details ${route}`}>
            <div className="details-route-head">
                <div className={`head-img ${route}`}></div>
                {route === 'back' ? <h4 className={`head-title ${route}`}>Обратно</h4>
                : <h4 className='head-title '>Туда</h4> }
                <div className='head-date'>{datetimeToDate(dateFrom)}</div>
                <div className='head-hide'></div>
            </div>
            <div className="details-route-content">
                <div className="number">
                    <h4>№ Поезда</h4>
                    <p>{num}</p>
                </div>
                <div className="name">
                    <h4>Название</h4>
                    <div className="city-name">
                        <p>{cityFrom}</p>
                        <p>{cityTo}</p>
                    </div>
                </div>
            </div>
            <div className="details-route-time">
                <div className="there-direction-from">
                    <div className='time from'>{toHHMMSS(timeFrom)}</div>
                    <div className='date from'>{datetimeToDate(dateFrom)}</div>
                    <div className='there-direction-from'>
                        <h5>{cityFrom}</h5>
                        <p>{stationFrom} вокзал</p>
                    </div>
                </div>
                <div className="time-box">
                    <p>{msConversion(duration)}</p>
                    <div className={`direction-arr ${route}`}></div>
                </div>
                <div className="there-direction-to">
                    <div className='time to'>{toHHMMSS(timeTo)}</div>
                    <div className='date to'>{datetimeToDate(dateTo)}</div>
                    <div className='there-direction-to'>
                        <h5>{cityTo}</h5>
                        <p>{stationTo} вокзал</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WidgetDetailsRoute