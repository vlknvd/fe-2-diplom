const SeatAmount = () => {
    return (
        <div className='seat-amount_ticket'>
            <h4 className='ticket-title seat'>Количество билетов</h4>
            <div className='ticket-ages'>
                <div className='age-inputs adult'>
                    <input className='age-input adult' type="text" placeholder='Взрослых - 2' />
                    <p className='input-desc adult'>Можно добавить еще 3 пассажиров</p>
                </div>
                <div className='age-inputs children'>
                    <input className='age-input children' type="text" placeholder="Детских - 1"/>
                    <p className='input-desc children'>
                        Можно добавить еще детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле
                        в среднем на 50-65%
                    </p>
                </div>
                <div className='age-inputs no-place'>
                    <input className='age-input no-place' type="text" placeholder='Детских "без места" - 0'/>
                    <p className='input-desc no-place'>Доступно только для взрослого места. Можно добавить еще 2 детей.</p>
                </div>
            </div>
        </div>
    )
}

export default SeatAmount