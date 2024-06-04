const PassangerCard = ({ age, surname, name, father, gender, date, series, number, birthNumber }) => {
    return (
        <div className="passanger-info">
            <div className="age">
                <div></div>
                <p>{age}</p>
            </div>
            <div className="description">
                <p className="name">{surname} {name} {father}</p>
                <p className="text">
                    Пол {gender === 'female' ? 'женский' : 'мужской'}
                </p>
                <p className="text">
                    Дата рождения {date}
                </p>
                <p className="text">
                    {age === 'Взрослый' && `Паспорт РФ ${series} ${number}`}
                    {age === 'Детский' && `Свидетельство о рождении ${birthNumber}`}
                </p>
            </div>
        </div>
    )
}

export default PassangerCard