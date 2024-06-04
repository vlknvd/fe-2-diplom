import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import SearchForm from '../../components/SearchForm/SearchForm'
import SelectionSeat from '../../components/SelectionSeat/SelectionSeat'
import Footer from '../../components/Footer/Footer'
import WidgetFilter from '../../components/WidgetFilter/WidgetFilter'
import './SelectionSeatPage.css'
import { useNavigate } from 'react-router-dom'

const SelectionSeatPage = () => {
    const navigate = useNavigate()
    const train = JSON.parse(localStorage.getItem('train'))
    const onClick = () => {
        navigate('/passangers')
    }
    return (
        <>
            <Header />
            <Banner name={'trains'} link={'./img/banner2.png'}>
                    <SearchForm name={'trains'}/>
            </Banner>
            <ProgressBar name={'trains'} step1={'current-step'} />
            <main className='main seats'>
                <WidgetFilter />
                <section className='section seat'>
                    <h3 className="seat-title">Выбор мест</h3>
                    <SelectionSeat route={'to'} direction={'departure'} train={train}/>
                    {train.arrival && <SelectionSeat route={'back'} direction={'arrival'} train={train}/>}
                    <button className="seat-button" onClick={onClick}>Далее</button>
                </section>
            </main>   
            <Footer /> 
        </>
        
    )
}

export default SelectionSeatPage