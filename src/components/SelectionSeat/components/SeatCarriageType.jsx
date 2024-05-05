import CarriageType from "./CarriageType"

const SeatCarriageType = ({seat, onClick}) => {
    return (
        <div className="seat-carriage-type">
            <h3 className="carriage-type-title">Тип вагона</h3>
            <div className="carriage-types">
                {seat.first && <CarriageType link={'lux'} name={'Люкс'} onClick={onClick} id={'have_first_class'}/>}
                {seat.second && <CarriageType link={'coupe'} name={'Купе'} onClick={onClick} id={'have_second_class'}/>}
                {seat.third && <CarriageType link={'res'} name={'Плацкарт'} onClick={onClick} id={'have_third_class'}/>}
                {seat.fourth && <CarriageType link={'sed'} name={'Сидячий'} onClick={onClick} id={'have_fourth_class'}/>}
            </div>
        </div>
    )
}

export default SeatCarriageType