import FilterTime from '../FilterTime/FilterTime'
import LastTicket from '../LastTicket/LastTicket'
import './WidgetFilter.css'

const WidgetFilter = () => {
    return (
        <aside className="aside-widgets">
            <div className="widget-filter">
                <div className="filter-dates">
                    <div className="date date-from">
                        <h3 className="date-title from">Дата поездки</h3>
                        <input type="text" className="date-input from" placeholder="ДД/ММ/ГГ" value="" defaultChecked/>
                    </div>
                    <div className="date date-to">
                        <h3 className="date-title to">Дата возвращения</h3>
                        <input type="text" className="date-input to" placeholder="ДД/ММ/ГГ" value="" defaultChecked/>
                    </div>
                </div>
                <div className="filter-checkboxes">
                    <div className="checkbox">
                        <img src="./img/widget-filter/filter-1.png" alt="купе" className="checkbox-img" />
                        <h3 className="checkbox-title">Купе</h3>
                        <div className="checkbox-element false"> 
                            <input type="checkbox" className="checkbox-input" />
                        </div>
                    </div>
                    <div className="checkbox">
                        <img src="./img/widget-filter/filter-2.png" alt="плацкарт" className="checkbox-img" />
                        <h3 className="checkbox-title">Плацкарт</h3>
                        <div className="checkbox-element true">
                            <input type="checkbox" className="checkbox-input" />
                        </div>
                    </div>
                    <div className="checkbox">
                        <img src="./img/widget-filter/filter-3.png" alt="сидячий" className="checkbox-img" />
                        <h3 className="checkbox-title">Сидячий</h3>
                        <div className="checkbox-element true"> 
                            <input type="checkbox" className="checkbox-input" />
                        </div>
                    </div>
                    <div className="checkbox">
                        <img src="./img/widget-filter/filter-4.png" alt="люкс" className="checkbox-img" />
                        <h3 className="checkbox-title">Люкс</h3>
                        <div className="checkbox-element true"> 
                            <input type="checkbox" className="checkbox-input" />
                        </div>
                    </div>
                    <div className="checkbox">
                        <img src="./img/widget-filter/filter-5.png" alt="wi-fi" className="checkbox-img" />
                        <h3 className="checkbox-title">Wi-Fi</h3>
                        <div className="checkbox-element false"> 
                            <input type="checkbox" className="checkbox-input" />
                        </div>
                    </div>
                    <div className="checkbox">
                        <img src="./img/widget-filter/filter-6.png" alt="" className="checkbox-img" />
                        <h3 className="checkbox-title">Экспресс</h3>
                        <div className="checkbox-element false"> 
                            <input type="checkbox" className="checkbox-input" />
                        </div>
                    </div>     
                </div>
                <div className="filter-price">
                    <h3 className="price-title">Cтоимость</h3>
                    <div className='price-range'>
                        <div className='range-text'>
                            <p>от</p>
                            <p>до</p>
                        </div>
                        <div className='range-input'>
                            <input className='range-input-in' type="range" min='11' max='22' value="15"/>
                            {/* <!-- <input class='range-input-out' type="range" min='' max='' value=""/> --> */}
                            <div className='range-line'></div>
                            <div className='range-line-body'>
                                {/* <!-- style={{
                                    left: `${leftValue(maxPrice, minPrice, price.start)}%`,
                                    right: `${rightValue(maxPrice, minPrice, price.end)}%`
                                }} --> */}
                            </div>
                        </div>
                    </div>
                    <div className='range-number'>
                        {/* <!-- <p class='price-min'>11</p> --> */}
                        <p className='price-start'>15</p>
                        <p className='price-end'>20</p>
                        {/* <!-- <p class='price-max'>22</p> --> */}
                      </div>
                </div>
                <FilterTime title={'Туда'} route={'to'} />
                <FilterTime title={'Обратно'} route={'back'}/>
            </div>
            <div className="widget-last-tickets">
                <h3 className="last-tickets-title">Последние билеты</h3>
                <div className="last-tickets">
                    <LastTicket />
                </div>
            </div>
        </aside>
    )
}

export default WidgetFilter