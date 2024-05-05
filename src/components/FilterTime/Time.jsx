import RangeSlider from 'react-range-slider-input';

const Time = ({ name, route, show}) => {
    return (
        <div className={`time-body time-${route} ${show}`}>
            <h4 className={`time-subtitle subtitle-${route}`}>Время {name}</h4>
            <div className={`time-range ${route}`}>
                <div className={`range-input ${route}`}>
                    <RangeSlider className={'range-input-in'} min={0} max={12} defaultValue={0}/>
                </div>
            </div>
            <div className={`range-number ${route} price-start`}>
                <p className={`time-start ${route}`}>00:00</p>
                <p className={`time-end ${route}`}>24:00</p>
            </div>
        </div> 
    )
}

export default Time