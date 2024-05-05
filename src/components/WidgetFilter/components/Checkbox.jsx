import { useState } from "react"

const Checkbox = ({link, alt, name, id}) => {

    const [check, setCheck] = useState(false)

    const onClick = () => {
        setCheck(!check)
    }
    return (
        <div className="checkbox">
            <img src={link} alt={alt} className="checkbox-img" />
            <h3 className="checkbox-title">{name}</h3>
            <div className={`checkbox-element ${check}`} onClick={onClick}> 
                <input type="checkbox" className="checkbox-input" id={id}/>
            </div>
        </div>
    )
}

export default Checkbox