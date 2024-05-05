import { useState } from 'react'
import './FilterRoute.css'
import Select from 'react-select'
import FilterButton from './FilterButton'


const FilterRoute = () => {
    const trains = JSON.parse(localStorage.getItem('trains'))
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        {value: 'времени', label: 'времени'},
        {value: 'длительностb', label: 'длительности'},
        {value: 'стоимости', label: 'стоимости'}
    ]

    return (
        <div className="filter-route">
            <div className="route-found">
                <p className="found-text">найдено:</p>
                <span>{trains.length}</span>
            </div>
            <div className="route-sort">
                <p>сортировать по:</p>
                <Select className='sort' 
                options={options}
                defaultValue={selectedOption}
                isSearchable={false}
                onChange={setSelectedOption}
                classNamePrefix={'sort-selection'}
                />
            </div>
            <div className='route-show'>
                <p>показывать по: </p>
                <FilterButton id={5}/>
                <FilterButton id={10}/>
                <FilterButton id={20}/>
            </div>
        </div> 
    )
}

export default FilterRoute