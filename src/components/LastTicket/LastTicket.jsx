import './LastTicket.css'

const LastTicket = () => {
    return (
        <div className="last-ticket">
            <div className="ticket-head">
            <div className="ticket-content">
                    <h4 className="ticket-title">Санкт-Петербург</h4>
                    <p className="ticket-subtitle">Курский вокзал</p>
                </div> 
                <div className="ticket-content content-right">
                    <h4 className="ticket-title">Самара</h4>
                    <p className="ticket-subtitle">Московский вокзал</p>
                </div> 
            </div>
            <div className="ticket-body">
                <div className="ticket-options">
                    <img src="./img/widget-filter/filter-1.png" alt="" className="ticket-option none" />
                    <img src="./img/widget-filter/filter-2.png" alt="" className="ticket-option " />
                    <img src="./img/widget-filter/filter-3.png" alt="" className="ticket-option none" />
                    <img src="./img/widget-filter/filter-4.png" alt="" className="ticket-option none" />
                    <img src="./img/widget-filter/filter-5.png" alt="" className="ticket-option " />
                    <img src="./img/widget-filter/filter-6.png" alt="" className="ticket-option" />
                </div>
                <div className="ticket-price">
                    <p className="price-text">от</p>
                    <h4 className="price-title last">2 500</h4>
                    <div className="price-currency"></div>
                </div>
            </div>
        </div>
    )
}

export default LastTicket