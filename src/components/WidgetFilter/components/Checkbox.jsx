import { useState } from "react"
import { addFilterOptions } from "../../../store/getFilterSlice"
import { useDispatch } from "react-redux"

const Checkbox = ({link, alt, name, id}) => {

    const [check, setCheck] = useState(false)
    const dispatch = useDispatch()

    const onClick = (e) => {
        setCheck(!check)
        const { id } = e.target
        dispatch(addFilterOptions({ id, check })) 
    }
    return (
        <div className="checkbox">
            <img src={link} alt={alt} className="checkbox-img" />
            <h3 className="checkbox-title">{name}</h3>
            <div className={`checkbox-element ${check}`} onClick={onClick} id={id}> 
                <input type="checkbox" className="checkbox-input" />
            </div>
        </div>
    )
}

export default Checkbox