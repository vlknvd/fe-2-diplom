const Error = ({ text, success }) => {
    return (
        <div className={`validate-error ${success}`}>
            <div className={`validate-error-image ${success}`}></div>
            <p className="validate-error-text">{text}</p>
        </div>
    )
}

export default Error