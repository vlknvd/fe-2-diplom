const HowItWorkItem = ({link, text}) => {
    return (
        <div className="hiw-item">
            <img src={link} alt="" className="hiw-item_img" />
            <p className="hiw-item_content">
                {text}
            </p>
        </div>
    )
}

export default HowItWorkItem