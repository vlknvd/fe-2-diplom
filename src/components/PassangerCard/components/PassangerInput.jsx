const PassangerInput = ({name, id, onChange, ph, type, labelClassName, pClassName, inputClassName, value}) => {
    return (
        <label className={labelClassName} htmlFor="">
            <p className={pClassName}>{name}</p>
            <input className={inputClassName} type={type} id={id} defaultValue={value} placeholder={ph} onChange={onChange} required/>
        </label>
    )
}

export default PassangerInput