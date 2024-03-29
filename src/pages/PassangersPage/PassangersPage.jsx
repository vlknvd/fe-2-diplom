import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SearchForm from '../../components/SearchForm/SearchForm'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import './PassangersPage.css'
import WidgetDetails from '../../components/WidgetDetails/WidgetDetails'
import PassangerCard from '../../components/PassangerCard/PassangerCard'

const PassangersPage = () => {
    return (
        <>
            <Header />
            <Banner name={'pass'} link={'./img/banner2.png'}>
                <SearchForm name={'trains'}/>
            </Banner>
            <ProgressBar name={'trains'} step1={'current-step'} step2={'current-step'} />
            <main className='main pass'>
                <WidgetDetails />
                <section className='section pass'>
                    <PassangerCard name = {'adult'} show/>
                    <PassangerCard name = {'child'} show/>
                    <PassangerCard />
                    <div className="add-passanger">
                        <button className="add-passanger-button">Добавить пассажира</button>
                    </div>
                    <div className="next-passanger">
                        <div className="next-passanger-button">Далее</div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default PassangersPage