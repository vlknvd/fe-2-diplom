import './ProgressBar.css'

const ProgressBar = ({ name, step1, step2, step3, step4 }) => {
    return (
        <div className={`progress-bar ${name} ${step4}`}>
            <div className={`step-start ${step1}`}></div>
            <div className={`step-tickets ${step1}`}>
                <div className="step-number">
                    <p>1</p>
                </div>
                <div className="step-content">Билеты</div>
                <div className="step-arrow">
                    <div className={`arrow-top ${step1}`}></div>
                    <div className={`arrow-bottom ${step1}`}></div>
                </div>
            </div>
            <div className={`step-passangers ${step2}`}>
                <div className={`step-arrow-out ${step2}`}></div>
                <div className={`step-number ${step2}`}>
                    <p>2</p>
                </div>
                <div className={`step-content ${step2}`}>Пассажиры</div>
                <div className="step-arrow">
                    <div className={`arrow-top ${step2}`}></div>
                    <div className={`arrow-bottom ${step2}`}></div>
                </div>
            </div>
            <div className={`step-pay ${step3}`}>
                <div className={`step-arrow-out ${step3}`}></div>
                <div className={`step-number ${step3}`}>
                    <p>3</p>
                </div>
                <div className="step-content">Оплата</div>
                <div className="step-arrow">
                    <div className={`arrow-top ${step3}`}></div>
                    <div className={`arrow-bottom ${step3}`}></div>
                </div>
            </div>
            <div className={`step-validate ${step4}`}>
                <div className={`step-arrow-out ${step4}`}></div>
                <div className={`step-number ${step4}`}>
                    <p>4</p>
                </div>
                <div className="step-content">Проверка</div>
            </div>
            <div className={`step-end ${step4}`}></div>
    </div>
    )
}

export default ProgressBar