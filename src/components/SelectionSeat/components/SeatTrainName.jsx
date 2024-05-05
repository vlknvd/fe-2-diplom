import moment from 'moment'

const SeatTrainName = ({ route, number, cityFrom, cityTo, stationFrom, stationTo, depFrom, depTo, duration }) => {

    let hours;
    let mins;
    const secToHours = (time) => {
        if (time) {
            mins = Math.floor(time / 60);
            hours = Math.floor(mins / 60);
            let min = mins - (hours * 60);
          let day;
          if(hours > 24) {
            day = Math.floor(hours / 24)
            hours = hours - (day * 24)
          }
          return <>
          <p>{`${hours}час.`}</p><p>{`${min < 10 ? '0' + min : min} мин.`}</p>
          </>
        };
        return '';
    };

    return (
        <div className="select-seat-train"> 
            <div className='train-name seat'>
                <div className="train-img"></div>
                <div className='train-desc'>
                    <h5 className='desc-name'>{number}</h5>
                    <p className='desc-city'>{cityFrom}&#8594;</p>
                    {/* <p className='desc-city'>Адлер&#8594;</p> */}
                    <p className='desc-city'>{cityTo}</p>
                </div>
            </div>
            <div className='train-direction-time'>
                <div className='train-direction-city'>
                    <h5 className='direction-time'>{moment(depFrom * 1000).format('hh:mm')}</h5>
                    <p className='direction-name'>{cityFrom}</p>
                    <p className='direction-station'>{stationFrom} вокзал</p>
                </div>
                <div className={`direction-arrow ${route}`}></div>
                <div className='train-direction-city'>
                <h5 className='direction-time'>{moment(depTo * 1000).format('hh:mm')}</h5>
                <p className='direction-name'>{cityTo}</p>
                <p className='direction-station'>{stationTo} вокзал</p>
            </div>
            </div>
            <div className='duration'>
                <div className='duration-img'></div>
                <div className='duration-text'>
                    {secToHours(duration)}
                </div>
            </div>
        </div>
    )
}

export default SeatTrainName