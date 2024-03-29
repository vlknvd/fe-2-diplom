import './PersonalData.css'

const PersonalData = () => {
    return (
        <div className="personal-data">
            <div className="personal-data-head">
                <h3>Персональные данные</h3>
            </div>
            <div className="personal-data-main">
                <div className="personal-data-info">
                    <div className="data-info">
                        <p className="surname">Фамилия</p>
                        <input type="text" className="surname-input" placeholder="Фамилия" />
                    </div>
                    <div className="data-info">
                        <p className="name">Имя</p>
                        <input type="text" className="name-input" placeholder="Имя" />
                    </div>
                    <div className="data-info">
                        <p className="patr">Отчество</p>
                        <input type="text" className="patr-input" placeholder="Отчество" />
                    </div>
                </div>
                <div className="personal-data-phone">
                    <p className="phone">Контактный телефон</p>
                    <input type="text" className="phone-input" placeholder="+7 ___ ___ __ __" />
                </div>
                <div className="personal-data-mail">
                    <p className="mail">Email</p>
                    <input type="text" className="mail-input" placeholder="inbox@gmail.ru" />
                </div>
            </div>
            <div className="personal-data-footer">
                <div className="footer-title">
                    <h3>Способ оплаты</h3>
                </div>
                <div className="methods">
                    <div className="method-online">
                        <div className='online-checkbox'>
                            <input type="checkbox" className="input-checkbox" id='cb1' />
                            <label htmlFor='cb1' className="checkbox-text">Онлайн</label>
                        </div>
                        <div className="online-variation">
                            <p className="variant card">Банковской картой</p>
                            <p className="variant">PayPal</p>
                            <p className="variant">Visa QIWI Wallet</p>
                        </div>
                    </div>
                    <div className="method-cash">
                        <div className='cash-checkbox'>
                            <input type="checkbox" className="input-checkbox" id='cb2' />
                            <label htmlFor='cb2' className="checkbox-text">Наличными</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalData