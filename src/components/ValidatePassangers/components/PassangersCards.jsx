import { datetimeToDate } from "../../../utils/timeFormatter"
import PassangerCard from "./PassangerCard"

const PassangersCards = ({ passangers }) => {
    return (
        <div className="form-block-right pass">
            {passangers.map(el => 
                <PassangerCard age={el.age}
                surname={el.surname}
                name={el.name}
                father={el.father}
                gender={el.gender}
                date={el.date}
                series={el.series}
                number={el.number}
                birthNumber={el.birthNumber}
                />
            )}
        </div>
    )
}

export default PassangersCards