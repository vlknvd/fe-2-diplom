import './PassangerCard.css'

const PassangerCard = ({ name, show }) => {
    return (
        <div className="passanger">
            <div className="passanger-head">
                <div className="passanger-head-hide"></div>
                <h3 className="passanger-head-title">Пассажир 1</h3>
                <div className="passanger-head-close"></div>
            </div>
            {show ? 
            <div className='passanger-content'>
                <div className="passanger-main">
                    <div className="passanger-select-age">
                        <div className="select-age">Взрослый</div>
                        <div className="select-ages none">
                            <div className="ages-adult">Взрослый</div>
                            <div className="ages-child">Детский</div>
                        </div>
                    </div>
                    <div className='passanger-names'>
                        <label className='passanger-names-label' htmlFor="">
                            <p className="passanger-names-title">Фамилия</p>
                            <input className='passanger-names-input' type="text" required value='Ирина' />
                        </label>
                        <label className='passanger-names-label' htmlFor="">
                            <p className="passanger-names-title">Имя</p>
                            <input className='passanger-names-input' type="text" required value='' />
                        </label>
                        <label className='passanger-names-label' htmlFor="">
                            <p className="passanger-names-title">Отчество</p>
                            <input className='passanger-names-input last' type="text" required value=''/>
                        </label>
                    </div>
                    <div className='passanger-birth'>
                        <div className='passanger-select-gender'>
                            <p className='select-gender-title'>Пол</p>
                            <div className='select-gender'>
                                <p className='gender-select-color gender-man active'>м</p>
                                <p className='gender-select-color gender-woman'>ж</p>
                            </div>
                        </div>
                        <div className='passanger-birth-date'>
                            <label className='passanger-birth-label' htmlFor="">
                                <p className='passanger-birth-title'>Дата рождения</p>
                                <input className='passanger-birth-input' type="text" placeholder='ДД/ММ/ГГ' required value=''/>
                            </label>
                        </div>
                    </div> 
                </div>
                <div className='passanger-restric-check'>
                    <input type="checkbox" className="input-checkbox" id='cb' />
                    <label htmlFor='cb' className="checkbox-text">ограниченная подвижность</label>
                </div>
                { name === 'adult' ?
                <div className="passanger-docs adult">
                    <div className='docs-select'>
                        <p className="docs-title">Тип документа</p>
                        <div className='select-doc'>Паспорт</div>
                        <div className='select-docs none'>
                            <div className='select-doc-passport'>Паспорт РФ</div>
                            <div className='select-doc-birth'>Свидетельство о рождении</div>
                        </div>
                    </div>   
                    <div className='docs-series'>
                        <label className='docs-series-label' htmlFor="">
                            <p className="docs-series-title">Серия</p>
                            <input className='docs-series-input' type="text" required placeholder='__  __  __  __' value=''/>
                        </label>
                    </div>
                    <div className='pass-docs-number'>
                        <label className='docs-number-label' htmlFor="">
                            <p className="docs-number-title">Номер</p>
                            <input className='docs-number-input' type="text" required placeholder='__  __  __  __  __  __' value=''/>
                        </label>
                    </div>
                </div>    
                    :     
                <div className="passanger-docs child">                
                    <div className='docs-select child'>
                        <p className="docs-title child">Тип документа</p>
                        <div className='select-doc child'>Свидетельство о рождении</div>
                        <div className='select-docs none'>
                        <div className='select-doc-passport'>Паспорт РФ</div>
                        <div className='select-doc-birth'>Свидетельство о рождении</div>
                        </div>
                    </div>    
                    <div className='docs-series child'>
                        <label className='docs-series-label child' htmlFor="">
                            <p className="docs-series-title child">Номер</p>
                            <input className='docs-series-input child' type="text" required placeholder='_ _ _ _ _ _ _ _ _ _ _ _' value=''/>
                        </label>
                    </div>
                </div>
            }
            <div className="passanger-footer">
                <button className="passanger-footer-button">Следующий пассажир</button>
            </div>
            </div>
            : ''}

        </div>
    )
}

export default PassangerCard