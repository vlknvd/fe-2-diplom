const Header = ({ count, onClickDelete}) => {
    return (
        <div className="passanger-head">
            <div className="passanger-head-hide"></div>
            <h3 className="passanger-head-title">Пассажир {count}</h3>
            <div className="passanger-head-close" onClick={onClickDelete}></div>
        </div>
    )
}

export default Header