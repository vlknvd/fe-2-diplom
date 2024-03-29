import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import SearchForm from '../../components/SearchForm/SearchForm'
import SelectionSeat from '../../components/SelectionSeat/SelectionSeat'
import Footer from '../../components/Footer/Footer'
import WidgetFilter from '../../components/WidgetFilter/WidgetFilter'
import './SelectionSeatPage.css'

const SelectionSeatPage = () => {
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
                    <h3 class="seat-title">Выбор мест</h3>
                    <SelectionSeat />
                    <SelectionSeat route={'back'}/>
                    <button className="seat-button">Далее</button>
                </section>
                
            </main>   
            <Footer /> 
        </>
        
    )
}

export default SelectionSeatPage