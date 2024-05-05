const Ticket = ({ ticket }) => {
    return (
        <div className="last-ticket">
            <div className="ticket-head">
            <div className="ticket-content">
                    <h4 className="ticket-title">{ticket.departure.from.city.name}</h4>
                    <p className="ticket-subtitle">{ticket.departure.from.railway_station_name} вокзал</p>
                </div> 
                <div className="ticket-content content-right">
                    <h4 className="ticket-title">{ticket.departure.to.city.name}</h4>
                    <p className="ticket-subtitle">{ticket.departure.to.railway_station_name} вокзал</p>
                </div> 
            </div>
            <div className="ticket-body">
                <div className="ticket-options">
                    {ticket.departure.have_wifi && <img src="./img/widget-filter/filter-5.png" alt="" className="ticket-option " />}
                    {ticket.departure.have_air_conditioning && <img src="./img/widget-filter/filter-7.png" alt="" className="ticket-option" />}
                    {ticket.departure.is_express && <img src="./img/widget-filter/filter-6.png" alt="" className="ticket-option" />}
                </div>
                <div className="ticket-price">
                    <p className="price-text">от</p>
                    <h4 className="price-title last">{ticket.departure.min_price}</h4>
                    <div className="price-currency"></div>
                </div>
            </div>
        </div>
    )
}

export default Ticket