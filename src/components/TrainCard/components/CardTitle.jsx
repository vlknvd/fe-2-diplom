const CardTitle = ({ depTrain, depFrom, depTo, arrTrain, arrTo }) => {
    
    return (
        <div className='card-head filter'>
            <img src='./img/train-card/train.png' className="card-head-img" alt="train" />
            <span className='card-head-name'>{depTrain}</span>
            <div className="card-head-direction">
                <span className='direction-city'>{depFrom}<div className="dir-arr"></div></span>
                <span className='direction-city'>{depTo}
                    {arrTrain && (<div className="dir-arr"></div>)}
                </span>
                {arrTrain && (
                <>
                <span className='direction-city'>{arrTo}</span>

                <span className='direction-city'>{arrTrain}</span>
                </>
                )}
            </div>
        </div>
    )
}

export default CardTitle