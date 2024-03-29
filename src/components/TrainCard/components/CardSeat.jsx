const CardSeat = () => {
    return (
        <div className='card-seats'>
            <div className="card-seat">
                <p className='seat-class'>Сидячий</p>
                <span className='seats-amount'>99
                    {/* <!-- <div class='seat-amount'>
                        <div class='seat-up'>
                            <p class='ticket-class'>Сидячий</p>
                            <p class='seat-ticket-start-number'>1920</p>
                            <span class='sign-currency'></span>
                        </div>
                    </div> --> */}
                </span>
                <div className='seat-start-price'>
                    <p className='seat-start-text'>от</p>
                    <p className='seat-start-number'>1920</p>
                    <div className='seat-currency'></div>
                </div>
            </div>
            <div className="card-seat">
                <p className='seat-class'>Купе</p>
                <span className='seats-amount'>99
                    {/* <!-- <div class='seat-amount'>
                        <div class='seat-up'>
                            <p class='ticket-class'>Сидячий</p>
                            <p class='seat-ticket-start-number'>1920</p>
                            <span class='sign-currency'></span>
                        </div>
                    </div> --> */}
                </span>
                <div className='seat-start-price'>
                    <p className='seat-start-text'>от</p>
                    <p className='seat-start-number'>1920</p>
                    <div className='seat-currency'></div>
                </div>
            </div>
            <div className="card-seat">
                <p className='seat-class'>Плацкарт</p>
                <span className='seats-amount'>99
                    {/* <!-- <div class='seat-amount'>
                        <div class='seat-up'>
                            <p class='ticket-class'>Сидячий</p>
                            <p class='seat-ticket-start-number'>1920</p>
                            <span class='sign-currency'></span>
                        </div>
                    </div> --> */}
                </span>
                <div className='seat-start-price'>
                    <p className='seat-start-text'>от</p>
                    <p className='seat-start-number'>1920</p>
                    <div className='seat-currency'></div>
                </div>
            </div>
            <div className="card-seat last">
                <p className='seat-class'>Люкс</p>
                <span className='seats-amount'>99
                    {/* <!-- <div class='seat-amount'>
                        <div class='seat-up'>
                            <p class='ticket-class'>Сидячий</p>
                            <p class='seat-ticket-start-number'>1920</p>
                            <span class='sign-currency'></span>
                        </div>
                    </div> --> */}
                </span>
                <div className='seat-start-price'>
                    <p className='seat-start-text'>от</p>
                    <p className='seat-start-number'>1920</p>
                    <div className='seat-currency'></div>
                </div>
            </div>
            <div className="card-options">
                <img src="./img/train-card/option.png" alt="" className="card-option" />
                <img src="./img/train-card/option1.png" alt="" className="card-option" />
            </div>
            <div className="card-button">
                <button className="choice-seat">Выбрать места</button>
            </div>
        </div> 
    )
}

export default CardSeat