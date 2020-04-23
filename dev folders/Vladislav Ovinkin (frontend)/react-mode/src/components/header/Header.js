import React from 'react';
import './header.css';
import logoImage from './img/pre-logo.png';

function Header() {
    return (
    <header className="main-header">
        <div className="header-up">
            <div className="header-up-left">
                <span className="header-up-left-adress">
                    Санкт-Петербург, пл. Карла Фаберже, д8 
                </span>
            </div>
            <a href="index.html" className="header-up-logo-link" title="На главную страницу">
                <img className="header-up-logo" src={logoImage} width="40" height="30" alt="Start4.biz logo" />
            </a>
            <div className="header-up-right">
                <a className="header-up-right-email" href="mailto:info@start4.biz" title="Написать письмо">info@start4.biz</a>
                <a className="header-up-right-phone" href="tel:+79111299351" title="Просто позвоните нам!">+7 911 129-93-51</a>
            </div>
        </div>
        <div className="header-down">
            <nav className="header-down-left-menu">
                <ul className="header-down-left-menu-list">
                    <li className="header-down-left-menu-item"><a href="about-contacts.html#about" className="header-down-left-menu-link">О проекте</a></li>
                    <li className="header-down-left-menu-item"><a href="2business.html" className="header-down-left-menu-link">Бизнесу</a></li>
                    <li className="header-down-left-menu-item"><a href="2finorg.html" className="header-down-left-menu-link">Финансовым организациям</a></li>
                    <li className="header-down-left-menu-item"><a href="about-contacts.html#contacts" className="header-down-left-menu-link">Контакты</a></li>
                </ul>
            </nav>
            <a className="header-down-lk" href="#">Личный кабинет</a>
            <div className="header-down-right-menu">
                <ul className="header-down-right-menu-list">
                    <li className="header-down-right-menu-item"><a href="#" className="header-down-right-menu-link">Кредиты</a></li>
                    <li className="header-down-right-menu-item"><a href="#" className="header-down-right-menu-link">Эквайринг</a></li>
                    <li className="header-down-right-menu-item"><a href="#" className="header-down-right-menu-link">Овердрафты</a></li>
                    <li className="header-down-right-menu-item"><a href="#" className="header-down-right-menu-link">Лизинг</a></li>
                </ul>
            </div>
        </div>
    </header>
    );
  }
  
  export default Header;