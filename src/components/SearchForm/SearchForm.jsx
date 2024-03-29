import './SearchForm.css'

const SearchForm = ({ name }) => {
    return (
        <div className={`search-form ${name}`}>
            <div className={`search-form-container ${name}`}>
                <div className={`search-form-block block-route ${name}`}>
                    <h2 className="form-title form-title_route">Направление</h2>
                    <div className="form-input-container form-input-container_route">
                        <input type="text" placeholder="Откуда" className="form-input-route form-input-route_there" defaultChecked />    
                        <div className="form-img-route"></div>
                        <input type="text" placeholder="Куда" className="form-input-route form-input-route_back" defaultChecked />
                    </div>
                </div>
                <div className={`search-form-block block-date ${name}`}>
                    <h2 className="form-title form-title_date">Дата</h2>
                    <div className="form-input-container form-input-container_date">
                        <input type="date" placeholder="ДД/ММ/ГГ" className={`form-input-date form-input-date_there ${name}`} defaultChecked />
                        <input type="date" placeholder="ДД/ММ/ГГ" className="form-input-date form-input-date_back" defaultChecked />
                    </div>
                </div>
                <div className={`search-form-block block-controls ${name}`}>
                    <div className="form-controls">
                        <button className="form-controls_button">Найти билеты</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default SearchForm