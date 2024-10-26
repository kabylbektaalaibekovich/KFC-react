import React, { useState } from 'react';
import './Hero.css';
import Footer from '../../components/Footer/Footer';
import Infa from '../../components/Infa/Infa';
import { Link } from 'react-router-dom';
import { BsXLg } from "react-icons/bs";

const Hero = () => {
    const [isGmailVisible, setGmailVisible] = useState(false);

    // Функция закрытия с анимацией
    const closeMaingmail = () => {
        const maingmail = document.querySelector('.Maingmail');
        if (maingmail) {
            maingmail.classList.add('slide-up');

            // Удаление элемента после завершения анимации
            maingmail.addEventListener('animationend', () => {
                setGmailVisible(false); // Закрытие через обновление состояния
            }, { once: true });
        }
    };

    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="cards">
                        <div className="card">
                            <img className='cardImg1' src="https://www.kfc.kg/admin/files/4667.jpeg" alt="" />
                            <img className='cardImg2' src="https://www.kfc.kg/admin/files/4687.jpeg" alt="" />
                            <img className='cardImg3' src="https://www.kfc.kg/admin/files/4701.jpeg" alt="" />

                            <h1 className='cardText1'>Оставьте нам свой отзыв</h1>
                            <p className='cardTextP'>Оцените свой опыт работы с нами.</p>
                            <Link to='/review'><button className='cardBtn1'>Оцените нас</button></Link>

                            {/* Кнопка для открытия формы подписки */}
                            <button className='cardBtn2' onClick={() => setGmailVisible(true)}>
                                Подписаться сейчас
                            </button>

                            <h1 className='cardText3'>11 ингредиентов</h1>
                            <p className='cardTextP3'>ЧТО ДЕЛАЕТ НАШУ ПИЩУ ОСОБЕННОЙ</p>
                            <Link to='/ingred'><button className='cardBtn3'>Откройте для себя их</button></Link>
                        </div>
                    </div>

                    {isGmailVisible && (
                        <div   className="Maingmail">
                            <div className="gmail">
                                <div className="gmailBox">
                                    <h3>Подписаться на рассылку</h3>
                                    <button className='gmailBtn' onClick={closeMaingmail}>
                                        <BsXLg />
                                    </button>
                                </div> 
                                <div className="gmail-input">
                                    <input className='gmailInput' type="email" placeholder='Эл. почта' />
                                    <a href="https://www.kfc.kg/page/privacy-policy">
                                        <h1 className='gmailH1'>Читать Политика конфиденциальности</h1>
                                    </a>
                                    <button onClick={closeMaingmail} className='siginUp'>Зарегистрироваться</button>
                                </div> 
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Infa />
            <Footer />
        </div>
    );
};

export default Hero;
