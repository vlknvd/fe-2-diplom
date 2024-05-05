import { useState } from "react"

const FilterButton = ({ id }) => {
    const [btn, setBtn] = useState(false)
    const onClick = () => {
        setBtn(!btn)
    }
    return (
        <button className={btn ? 'sort-selected' : 'sort'} id={id} onClick={onClick}>{id}</button>
    )
}

export default FilterButton