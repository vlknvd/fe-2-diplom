const Social = ({name}) => {
    return (
        <>
        <li className="social-item">
            <a href="" className="social-link">
                <div className={`social-img ${name}`}></div>
            </a>
        </li>
        </>
    )
}

export default Social