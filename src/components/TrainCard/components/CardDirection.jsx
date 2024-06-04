import { msConversion, toHHMMSS } from "../../../utils/timeFormatter"

const CardDirection = ({ depTime, depFrom, depFromStation, duration, arrTime, arrTo, arrToStation, route}) => {
    return (
        <div className='direction-route'>
            <div className='direction-from'>
                <div className='direction-time'>{toHHMMSS(depTime)}</div>
                <div className='direction-from'>
                    <h5 className='direction-city'>{depFrom}</h5>
                    <p className='direction-station'>{depFromStation} вокзал</p>
                </div>
            </div>
            <div className='direction-time'>
                <p className='travel-time'>{msConversion(duration)}</p>
                <div className={`arrow-img ${route}`}></div>
            </div>
            <div className='direction-to'>
                <div className='direction-time'>{toHHMMSS(arrTime)}</div>
                <div className='direction-to'>
                    <h5 className='direction-city'>{arrTo}</h5>
                    <p className='direction-station'>{arrToStation} вокзал</p>
                </div>
            </div>
        </div>
    )
    
}

export default CardDirection