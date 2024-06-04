import PassangerInput from "./PassangerInput"

const PassangerDocs = ({ name, onChangeInput }) => {
    return (
        <div className={`passanger-docs ${name}`}>
            <div className={`docs-select ${name}`}>
                <p className="docs-title">Тип документа</p>
                <div className={`select-doc ${name}`}>{name === 'adult' ? 'Паспорт' : 'Свидетельство о рождении'}</div>
            </div>  
            {name === 'adult' &&  
            <>
            <div className='docs-series'>
                <PassangerInput id={'series'}
                name={'Серия'}
                ph='__  __  __  __' 
                onChange={onChangeInput} 
                type={'text'}
                labelClassName={'docs-series-label'}
                pClassName={'docs-series-title'}
                inputClassName={'docs-series-input'}/>
            </div>
            <div className='pass-docs-number'>
                <PassangerInput id={'number'}
                name={'Номер'}
                ph='__  __  __  __  __  __' 
                onChange={onChangeInput} 
                type={'text'}
                labelClassName={'docs-number-labe'}
                pClassName={'docs-number-title'}
                inputClassName={'docs-number-input'}/>
            </div>
            </>}
            {name === 'child' &&
            <div className='docs-series child'>
                <PassangerInput id={'birthNumber'}
                name={'Номер'}
                ph='_ _ _ _ _ _ _ _ _ _ _ _' 
                onChange={onChangeInput} 
                type={'text'}
                labelClassName={'docs-series-label child'}
                pClassName={'docs-series-title child'}
                inputClassName={'docs-series-input child'}/>
            </div>}
        </div>
    )
}

export default PassangerDocs