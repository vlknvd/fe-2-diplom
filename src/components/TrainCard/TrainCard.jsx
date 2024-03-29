import CardDirection from '../TrainCard/components/CardDirection';
import CardSeat from '../TrainCard/components/CardSeat';
import CardTitle from '../TrainCard/components/CardTitle';

import './TrainCard.css'

const TrainCard = () => {
    return (
        <div className="train-card">
            <CardTitle /> 
            <CardDirection />
            <CardSeat />
        </div>
    )
}

export default TrainCard