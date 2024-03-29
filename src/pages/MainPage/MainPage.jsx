import Header from '../../components/Header/Header.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import SearchForm from '../../components/SearchForm/SearchForm.jsx'
import About from '../../components/About/About.jsx'
import HowItWork from '../../components/HowItWork/HowItWork.jsx'
import Feedback from '../../components/Feedback/Feedback.jsx'
import Footer from '../../components/Footer/Footer.jsx'

import './MainPage.css'

const MainPage = () => {
    return (
        <>
            <Header />
            <Banner name={'home'} link={'./img/banner.png'}>
                <SearchForm />
            </Banner>
            <main className='main'>
                <About />
                <HowItWork />
                <Feedback />
            </main>
            <Footer />
        </>
    )
}

export default MainPage