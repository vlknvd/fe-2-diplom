import Link from './Link'
import './Header.css'

const Header = ()=> {
    return (
        <header className="header">
            <nav className="header-navigation">
                <div className="header-navigation_logo">
                    <a href="/main" className="logo-link">
                        <p className="logo-img">Лого</p>
                    </a>
                </div>
                <div className="header-navigation_list">
                    <ul className="navigation_list-items">
                        <Link link='/main#about' title='О нас' />
                        <Link link='/main#hiw' title='Как это работает' />
                        <Link link='/main#feedback' title='Отзывы' />
                        <Link link='/main#footer' title='Контакты' />
                    </ul>
                </div>   
            </nav>
        </header>
    )
}

export default Header