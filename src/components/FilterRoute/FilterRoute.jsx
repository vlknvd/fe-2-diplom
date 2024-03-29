import './FilterRoute.css'


const FilterRoute = () => {
    return (
        <div className="filter-route">
            <div className="route-found">
                <p className="found-text">найдено</p>
                <span></span>
            </div>
            <div className="route-sort">
                <p>сортировать по:
                    <span className="sort-selected">
                        времени
                    </span>
                </p>
                <div className="sort none">
                    <div className='select select-time'>времени</div>
                    <div className='select select-price'>стоимости</div>
                    <div className='select select-duration'>длительности</div>
                </div>
            </div>
            <div className='route-show'>
                <p>показывать по: </p>
                <span className='sort-selected'>5</span>
                <span>10</span>
                <span>20</span>
            </div>
        </div> 
    )
}

export default FilterRoute