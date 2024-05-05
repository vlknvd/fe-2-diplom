const AvailableSeat = ({ priceDep, priceArr}) => {
    // console.log(priceDep, priceArr) // массив с верхние: цена

    return (
        <div className='seats-up'>
            <div className='seat-amount'>
                <div className='seat-up'>
                    <p className='ticket-class'></p>
                    <p className='seat-ticket-start-number'></p>
                    <span className='sign-currency'></span>
                </div>
            </div>
        </div> 
    )
}

export default AvailableSeat