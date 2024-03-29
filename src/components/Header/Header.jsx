import './Header.css'

const Header = ()=> {
    return (
        <header className="header">
            <nav className="header-navigation">
                <div className="header-navigation_logo">
                    <a href="/" className="logo-link">
                        <p className="logo-img">Лого</p>
                    </a>
                </div>
                <div className="header-navigation_list">
                    <ul className="navigation_list-items">
                        <li className="list-item">
                            <a href="/main#about" className="item-link">О нас</a>
                        </li>
                        <li className="list-item">
                            <a href="/main#hiw" className="item-link">Как это работает</a>
                        </li>
                        <li className="list-item">
                            <a href="/main#feedback" className="item-link">Отзывы</a>
                        </li>
                        <li className="list-item">
                            <a href="/main#footer" className="item-link">Контакты</a>
                        </li>
                    </ul>
                </div>   
            </nav>
        </header>
    )
}

export default Header