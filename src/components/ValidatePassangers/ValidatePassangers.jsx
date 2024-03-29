import './ValidatePassangers.css'

const ValidatePassangers = () => {
    return (
        <div className="validate-form pass">
            <div className="validate-form-head pass">
                <h3 className="form-title pass">Пассажиры</h3>
            </div>
            <div className="validate-form-body pass">
                <div className="form-block-right pass">
                    <div className="passanger-info">
                        <div className="age">
                            <div></div>
                            <p>Взрослый</p>
                        </div>
                        <div className="description">
                            <p className="name">Мартынюк Иван Иванович</p>
                            <p className="text">
                                Пол женский
                                Дата рождения 17.02.1985
                                Паспорт РФ 4204 380694
                            </p>
                        </div>
                    </div>
                    <div className="passanger-info">
                        <div className="age">
                            <div></div>
                            <p>Взрослый</p>
                        </div>
                        <div className="description">
                            <p className="name">Мартынюк Иван Иванович</p>
                            <p className="text">
                                Пол женский
                                Дата рождения 17.02.1985
                                Паспорт РФ 4204 380694
                            </p>
                        </div>
                    </div>
                    <div className="passanger-info">
                        <div className="age">
                            <div></div>
                            <p>Взрослый</p>
                        </div>
                        <div className="description">
                            <p className="name">Мартынюк Иван Иванович</p>
                            <p className="text">
                                Пол женский
                                Дата рождения 17.02.1985
                                Паспорт РФ 4204 380694
                            </p>
                        </div>
                    </div>
                </div>
                <div className="form-block-left pass">
                    <div className="result">
                        <p className="result-sum">Всего</p>
                        <p className="result-number">7 760</p>
                    </div>
                    <div className="change pass">
                        <button className="change-button pass">Изменить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ValidatePassangers