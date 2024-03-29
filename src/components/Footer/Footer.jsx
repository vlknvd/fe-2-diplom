import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer" id='footer'>
            <div className="footer-container">
                <div className="footer-content top">
                    <div className="footer-content_block block-left">
                        <h3 className="block-title left">Свяжитесь с нами</h3>
                        <ul className="block-list">
                            <li className="block-item">
                                <a href="" className="block-item_link">
                                    <img src="../img/footer/phone.png" alt="phone" className="block-item_img" />
                                </a>
                                <a href="" className="block-item_link">
                                    <p className="block-item_text">8 (800) 000 00 00</p>
                                </a>
                            </li>
                            <li className="block-item">
                                <a href="" className="block-item_link">
                                    <img src="../img/footer/mail.png" alt="mail" className="block-item_img" />
                                </a>
                                <a href="" className="block-item_link">
                                    <p className="block-item_text">inbox@mail.ru</p>
                                </a>
                            </li>
                            <li className="block-item">
                                <a href="" className="block-item_link">
                                    <img src="../img/footer/skype.png" alt="skype" className="block-item_img" /> 
                                </a>
                                <a href="" className="block-item_link">
                                    <p className="block-item_text">tu.train.tickets</p>
                                </a>
                            </li>
                            <li className="block-item">
                                <a href="" className="block-item_link">
                                    <img src="../img/footer/location.png" alt="" className="block-item_img" />
                                </a>
                                <a href="" className="block-item_link">
                                    <p className="block-item_text">
                                        г. Москва
                                        ул. Московская 27-35
                                        555 555
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-content_block block-right">
                        <h3 className="block-title right">Подписка</h3>
                        <div className="block-feedback">
                            <h4 className="feedback-subtitle">Будьте в курсе событий</h4>
                            <div className="feedback-content">
                                <input type="text" className="feedback-input" placeholder="email" />
                                <button className="feedback-button">Отправить</button>
                            </div>
                        </div>
                        <div className="block-social-group">
                            <h4 className="block-title social-group-title">Подписывайтесь на нас</h4>
                            <ul className="social-group-list">
                                <li className="social-item">
                                    <a href="" className="social-link">
                                        <div className='social-img youtube'></div>
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a href="" className="social-link">
                                        <div className="social-img linkedin"></div>
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a href="" className="social-link">
                                        <div className="social-img gmail"></div>
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a href="" className="social-link">
                                        <div className="social-img facebook"></div>
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a href="" className="social-link">
                                        <div className="social-img twitter"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-content bottom">
                    <div className="footer-content_block block-bottom">
                        <a href="" className="block-bottom-link logo-link">
                            <p className="block-bottom-text logo">Лого</p>
                        </a>
                        <a href="" className="block-bottom-link arrow-link">
                            <div className='block-bottom-arrow'></div>
                        </a>
                        <p className="block-bottom-text">2018 WEB</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer