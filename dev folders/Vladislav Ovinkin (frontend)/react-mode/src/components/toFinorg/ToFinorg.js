import React from 'react';
import './toFinorg.css';
import toFinorgImage from './../../img/rectangle-335х426.png';
import coinsImage from './../../img/coins.png';
import monitorImage from './../../img/monitor.png';
import commentImage from './../../img/comment.png';
import clockImage from './../../img/clock.png';

function ToFinorg() {
    return (
        <>
            <section class="finorg-info-block">
                <div class="finorg-left-block">
                    <h2 class="to-business-header">Финансовым организациям</h2>
                    <p class="to-business-text">Портал start4.biz позволяет быстро и удобно получить выгодные предложения по ряду продуктов от ведущих лизинговых и финансовых компаний.</p>
                    <p class="to-business-text">Мы будем рады видеть Вас в качестве компании-партнера, если Вы имеете лицензию ЦБ на предоставление финансовых услуг юридическим лицам и предоставляете следующие услуги :</p>
                    <ul class="to-business-list">
                        <li class="to-business-item">Кредитование Юридических лиц и Индивидуальных предпринимателей</li>
                        <li class="to-business-item">Предоставление банковских гарантий для работы с 44-ФЗ и 223-ФЗ</li>
                        <li class="to-business-item">Лизинг транспорта или оборудования</li>
                        <li class="to-business-item">Предоставление овердрафтов для покрытия кассовых разрывов</li>
                        <li class="to-business-item">Эквайринг</li>
                        <li class="to-business-item">Иные финансовые услуги</li>
                    </ul>
                </div>
                <div class="finorg-right-block">
                    <img src={toFinorgImage} alt="Финансовым организациям" width="335" height="426" class="finorg-info-block-image" />
                    <div class="finorg-be-partner-button">
                        <a href="#" class="page-button be-partner-button">
                            <span class="page-button-text be-partner-button-text">
                                Стать партнёром
                            </span>
                        </a>
                    </div>
                </div>
            </section>
            <div class="h-line"></div>
            <section class="why-we">
                <h3 class="why-we-header">Почему мы ?</h3>
                <ul class="why-we-list why-we-list-finorg">
                    <li class="why-we-item why-we-item-finorg">
                        <figure class="why-we-article">
                            <img src={coinsImage} width="110" height="110" alt="Стабильные заявки" class="why-we-article-img" />
                            <figcaption class="why-we-caption">
                                <h4 class="why-we-article-header">Стабильные заявки</h4>
                                <p class="why-we-article-text">Предоставляем стабильный поток заявок на финансовые продукты</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="why-we-item why-we-item-finorg">
                        <figure class="why-we-article">
                            <img src={monitorImage} width="110" height="110" alt="Взаимодействие" class="why-we-article-img" />
                            <figcaption class="why-we-caption">
                                <h4 class="why-we-article-header"Взаимодействие>Взаимодействие</h4>
                                <p class="why-we-article-text">В едином интерфейсе Вы сможете взаимодействовать с заявками</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="why-we-item why-we-item-finorg">
                        <figure class="why-we-article">
                            <img src={commentImage} width="110" height="110" alt="Коммуникация" class="why-we-article-img" />
                            <figcaption class="why-we-caption">
                                <h4 class="why-we-article-header">Коммуникация</h4>
                                <p class="why-we-article-text">Вы получаете новый канал общения с бизнесом</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="why-we-item why-we-item-finorg">
                        <figure class="why-we-article">
                            <img src={clockImage} width="110" height="110" alt="Скорость" class="why-we-article-img" />
                            <figcaption class="why-we-caption">
                                <h4 class="why-we-article-header">Скорость</h4>
                                <p class="why-we-article-text">Быстро реагируем на ваши запросы</p>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
                <div class="why-we-under">
                    <a href="#" class="page-button be-partner-button">
                    <span class="page-button-text be-partner-button-text">
                        Стать партнёром
                    </span>
                    </a>
                </div>
        </section>
        </>
    );
}

export default ToFinorg;