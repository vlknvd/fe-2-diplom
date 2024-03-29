import './ValidatePayment.css'

const ValidatePayment = () => {
    return (
        <div className="validate-form pay">
            <div className="validate-form-head pay">
                <h3 className="form-title pay">Способ оплаты</h3>
            </div>
            <div className="validate-form-body pay">
                <div className="form-block-right pay">
                    <p className="method-title pay">Наличные</p>
                </div>
                <div className="form-block-left pay">
                    <button className="change-button">Изменить</button>
                </div>
            </div>
        </div>
    )
}

export default ValidatePayment