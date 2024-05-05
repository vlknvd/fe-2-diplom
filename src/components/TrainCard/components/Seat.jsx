import AvailableSeat from "./AvailableSeat";

const Seat = ({priceDep, priceArr, name, seat}) => {

   const price = () => [
        priceDep?.price,
        priceDep?.top_price,
        priceDep?.bottom_price,
        priceDep?.side_price,
        priceArr?.price,
        priceArr?.top_price,
        priceArr?.bottom_price,
        priceArr?.side_price,
   ].filter((item) => typeof item === 'number');

   return (
      <div className="card-seat">
         <p className='seat-class'>{name}</p>
         <span className='seats-amount'>{seat}</span>      
         <div className='seat-start-price'>
            <p className='seat-start-text'>от</p>
            <p className='seat-start-number'>{Math.min(...price())}</p>
            <div className='seat-currency'></div>
         </div>
         <AvailableSeat  priceDep={priceDep} priceArr={priceArr}/>
      </div>
    )
}

export default Seat