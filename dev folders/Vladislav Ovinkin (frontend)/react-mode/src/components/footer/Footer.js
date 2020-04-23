import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
import './../../font-awesome.min.css';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-info">
                <div className="footer-info-left">
                    <ul className="footer-info-left-list">
                        <li className="footer-info-left-item"><a href="about-contacts.html#about" className="footer-info-left-link">О проекте</a></li>
                        <li className="footer-info-left-item"><Link to="/toFinorg" className="footer-info-left-link">Финансовым организациям</Link></li>
                        <li className="footer-info-left-item"><Link to="/toBusiness" className="footer-info-left-link">Бизнесу</Link></li>
                        <li className="footer-info-left-item"><a href="about-contacts.html#contacts" className="footer-info-left-link">Контакты</a></li>
                    </ul>
                </div>
                <div className="footer-info-right">
                    <ul className="footer-info-right-list">
                        <li className="footer-info-right-item"><a href="#" className="footer-info-right-link">Политика конфиденциальности</a></li>
                        <li className="footer-info-right-item"><a href="#" className="footer-info-right-link">Пользовательское соглашение</a></li>
                        <li className="footer-info-right-item"><a href="#" className="footer-info-right-link">Согласие на обработку персональных данных</a></li>
                        <li className="footer-info-right-item"><a href="#" className="footer-info-right-link">Форма обратной связи</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-social-links-block">
                    <a href="#" className="footer-social-link" title="Мы во вконтакте"><i className="fa fa-vk fa-lg"></i></a>
                    <a href="#" className="footer-social-link" title="Наш инстаграмм"><i className="fa fa-instagram fa-lg"></i></a>
                    <a href="#" className="footer-social-link" title="Наш канал на youtube"><i className="fa fa-youtube fa-lg"></i></a>
                    <a href="#" className="footer-social-link" title="Мы в facebook"><i className="fa fa-facebook-square fa-lg"></i></a>
                </div>  
                <div className="footer-contacts">
                    <a className="footer-email" href="mailto:info@start4.biz" title="Написать письмо">info@start4.biz</a>
                    <a className="footer-phone" href="tel:+79111299351" title="Просто позвоните нам!">+7 911 129-93-51</a>
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;