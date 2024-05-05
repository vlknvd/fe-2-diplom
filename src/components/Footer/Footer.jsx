import { useEffect, useState } from 'react'
import './Footer.css'
import Item from './Item'
import Social from './Social'
import Popup from '../Popup/Popup'
import { useDispatch, useSelector } from 'react-redux'
import { changePopup, getSubscribe, error, clearPopup } from '../../store/subscribeSlice'

const Footer = () => {
    const [mail, setMail] = useState('');
    const dispatch = useDispatch();
    const { open } = useSelector((state) => state.subscribe)

    const validateMail = (mail) => {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(mail);
    }
    
    const onChange = (e) => {
        setMail(e.target.value);
    }

    const onClick = () => {
        if(validateMail(mail)) {
            dispatch(getSubscribe(mail))
            dispatch(changePopup('Подписка успешно оформлена')) 
        } else {
            dispatch(error('Неверный адрес электронной почты'))
        }
        setMail('')
        setTimeout(() => dispatch(clearPopup()), 5 * 1000)
    }

    return (
        <footer className="footer" id='footer'>
            <Popup />
            <div className="footer-container">
                <div className="footer-content top">
                    <div className="footer-content_block block-left">
                        <h3 className="block-title left">Свяжитесь с нами</h3>
                        <ul className="block-list">
                            <Item link='../img/footer/phone.png' alt='phone' text='8 (800) 000 00 00' />
                            <Item link='../img/footer/mail.png' alt='mail' text='inbox@mail.ru' />
                            <Item link='../img/footer/skype.png' alt='skype' text='tu.train.tickets' />
                            <Item link='../img/footer/location.png' alt='location' 
                            text='
                            г. Москва
                            ул. Московская 27-35 
                            555 555' />
                        </ul>
                    </div>
                    <div className="footer-content_block block-right">
                        <h3 className="block-title right">Подписка</h3>
                        <div className="block-feedback">
                            <h4 className="feedback-subtitle">Будьте в курсе событий</h4>
                            <div className="feedback-content">
                                <input type="text" className="feedback-input" placeholder="email" onChange={onChange} />
                                <button className="feedback-button" onClick={onClick}>Отправить</button>
                            </div>
                        </div>
                        <div className="block-social-group">
                            <h4 className="block-title social-group-title">Подписывайтесь на нас</h4>
                            <ul className="social-group-list">
                                <Social name={'youtube'} />
                                <Social name={'linkedin'} />
                                <Social name={'gmail'} />
                                <Social name={'facebook'} />
                                <Social name={'twitter'} />
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