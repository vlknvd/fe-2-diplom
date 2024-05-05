import './Popup.css'
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { clearPopup } from "../../store/subscribeSlice";

const Popup = () => {
    const dispatch = useDispatch();
    const { open, status, text } = useSelector((state) => state.subscribe)
    const ref = useRef(null)

    useEffect(() => {
        if(open) {
            ref.current = setTimeout(() => dispatch(clearPopup()), 5 * 1000)
        }
        if(ref.current) {
            return clearTimeout(ref.current)
        }
    }, [open, dispatch])

    const onClick = () => {
        dispatch(clearPopup())
    }
    
    return (
        open &&
        <div className="popup">
            <div className={status === 'success' ? 'popup-img success' : 'popup-img error'}></div>
            <p className="popup-text">{text}</p>
            <button className="popup-button" type="button" onClick={onClick}>Понятно</button>
        </div>    
    )
}

export default Popup