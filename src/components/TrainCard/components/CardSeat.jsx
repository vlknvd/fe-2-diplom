import { useEffect } from "react"
import Seat from "./Seat"
import { useNavigate } from "react-router-dom"

const CardSeat = ({ availableSeats, priceDep, priceArr, conditioner, wifi, express, onClick}) => {

    return (
        <div className='card-seats'>
            {availableSeats?.fourth && 
                <Seat 
                priceDep={priceDep?.fourth}
                priceArr={priceArr?.fourth}
                name={'Сидячий'}
                seat={availableSeats?.fourth}
                />
            }
            {availableSeats?.second && 
                <Seat 
                priceDep={priceDep?.second}
                priceArr={priceArr?.second}
                name={'Купе'}
                seat={availableSeats?.second}
                />
            }
            {availableSeats?.third && 
                <Seat 
                priceDep={priceDep?.third}
                priceArr={priceArr?.third}
                name={'Плацкарт'}
                seat={availableSeats?.third}
                />
            }
            {availableSeats?.first &&
                <Seat 
                priceDep={priceDep?.first}
                priceArr={priceArr?.first}
                name={'Люкс'}
                seat={availableSeats?.first}
                />
            }
            <div className="card-options">
                {conditioner && <img src="./img/train-card/option.png" alt="" className="card-option" />}
                {wifi && <img src="./img/train-card/option-3.png" alt="" className="card-option" />}
                {express && <img src="./img/train-card/option-2.png" alt="" className="card-option" />}
            </div>
            <div className="card-button">
                <button className="choice-seat" onClick={onClick}>Выбрать места</button>
            </div>
        </div> 
    )
}

export default CardSeat