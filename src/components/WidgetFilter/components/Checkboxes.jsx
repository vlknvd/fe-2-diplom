import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFilterOptions } from "../../../store/getFilterSlice";
import Checkbox from "./Checkbox";


const Checkboxes = () => {

    const dispatch = useDispatch()
    const [check, setCheck] = useState({
        coupe: false,
        reserved: false,
        seated: false,
        lux: false,
        wifi: false,
        express: false
    });

    useEffect(() => {
        dispatch(addFilterOptions(check));
    }, [check, dispatch]);

    const onClick = (e) => {

        const { id } = e.target.id
        setCheck({ ...check, id: !check.id })
    }

    console.log(check)
    return (
        <div className="filter-checkboxes">
            <Checkbox link={"./img/widget-filter/filter-1.png"} alt={"купе"} name={'Купе'} id={'coupe'} onClick={onClick} checked={check.id}/>
            <Checkbox link={"./img/widget-filter/filter-2.png"} alt={"плацкарт"} name={'Плацкарт'} id={'reserved'} onClick={onClick}/>
        </div>
        
    )
}

export default Checkboxes