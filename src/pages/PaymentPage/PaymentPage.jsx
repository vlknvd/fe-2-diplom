import Banner from '../../components/Banner/Banner'
import SearchForm from '../../components/SearchForm/SearchForm'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Header from '../../components/Header/Header'
import './PaymentPage.css'
import Footer from '../../components/Footer/Footer'
import WidgetDetails from '../../components/WidgetDetails/WidgetDetails'
import PersonalData from '../../components/PersonalData/PersonalData'

const PaymentPage = () => {
    return (
        <>
        <Header/>
        <Banner name={'trains'} link={'./img/banner2.png'}>
            <SearchForm name={'trains'}/>
        </Banner>
        <ProgressBar name={'trains'} step1={'current-step'} step2={'current-step'} step3={'current-step'} />
        <main className='main payment'>
            <WidgetDetails />
            <section className='section payment'>
                <PersonalData />
                <div className="payment-buy">
                    <button className="buy-button">Купить билеты</button>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default PaymentPage