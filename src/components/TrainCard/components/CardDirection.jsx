import moment from 'moment'

const CardDirection = ({ depTime, depFrom, depFromStation, duration, arrTime, arrTo, arrToStation, route}) => {
    
    const secToHours = (time) => {
        if (time) {
          let mins = Math.floor(time / 60);
          let hours = Math.floor(mins / 60);
          let min = mins - (hours * 60);
          let day;
          if(hours > 24) {
            day = Math.floor(hours / 24)
            hours = hours - (day * 24)
          }
          return `${day}:${hours}:${min < 10 ? '0' + min : min}`;
        };
        return '';
    };
    
    return (
        <div className='direction-route'>
            <div className='direction-from'>
                <div className='direction-time'>{moment(depTime * 1000).format('hh:mm')}</div>
                <div className='direction-from'>
                    <h5 className='direction-city'>{depFrom}</h5>
                    <p className='direction-station'>{depFromStation} вокзал</p>
                </div>
            </div>
            <div className='direction-time'>
                <p className='travel-time'>{secToHours(duration)}</p>
                <div className={`arrow-img ${route}`}></div>
            </div>
            <div className='direction-to'>
                <div className='direction-time'>{moment(arrTime * 1000).format('hh:mm')}</div>
                <div className='direction-to'>
                    <h5 className='direction-city'>{arrTo}</h5>
                    <p className='direction-station'>{arrToStation} вокзал</p>
                </div>
            </div>
        </div>
    )
    
}

export default CardDirection