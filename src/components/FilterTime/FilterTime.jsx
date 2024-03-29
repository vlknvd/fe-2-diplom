import './FilterTime.css'

const FilterTime = ({ route, title }) => {
    return (
        <div className={`filter-time time-there ${route}`}>
            <div className="time-head">
                <div className={`time-img ${route}`}></div>
                <h3 className="time-title title-there">{title}</h3> 
                <button className="time-button show"></button>
            </div>
            <div className="time-body time-leave">
                <h4 className="time-subtitle subtitle-leave">Время отбытия</h4>
                <div className='time-range leave'>
                    <div className='range-input leave'>
                        <input className='range-input-in leave' type="range" min='11' max='22' value="15"/>
                        {/* <!-- <input className='range-input-out' type="range" min='' max='' value=""/> --> */}
                        <div className='range-line leave'></div>
                        <div className='range-line-body leave'>
                            {/* <!-- style={{
                                left: `${leftValue(maxPrice, minPrice, price.start)}%`,
                                right: `${rightValue(maxPrice, minPrice, price.end)}%`
                            }} --> */}
                        </div>
                    </div>
                </div>
                <div className='range-number leave'>
                    {/* <!-- <p className='price-min'>11</p> --> */}
                    <p className='time-start leave'>11:00</p>
                    <p className='time-end leave'>20:00</p>
                    {/* <!-- <p className='price-max'>22</p> --> */}
                </div>
            </div>   
            <div className="time-body time-arrival">
                <h4 className="time-subtitle subtitle-arrival">Время прибытия</h4>
                <div className='time-range arrival'>
                    <div className='range-input arrival'>
                        <input className='range-input-in arrival' type="range" min='11' max='22' value="15"/>
                        {/* <!-- <input className='range-input-out' type="range" min='' max='' value=""/> --> */}
                        <div className='range-line arrival'></div>
                        <div className='range-line-body arrival'>
                            {/* <!-- style={{
                                left: `${leftValue(maxPrice, minPrice, price.start)}%`,
                                right: `${rightValue(maxPrice, minPrice, price.end)}%`
                            }} --> */}
                        </div>
                    </div>
                </div>
                <div className='range-number arrival'>
                    {/* <!-- <p className='price-min'>11</p> --> */}
                    <p className='time-start arrival'>15</p>
                    <p className='time-end arrival'>20</p>
                    {/* <!-- <p className='price-max'>22</p> --> */}
                </div>
            </div> 
        </div>
    )
}

export default FilterTime