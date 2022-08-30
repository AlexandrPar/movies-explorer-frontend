import React from 'react';
import './Promo.css';
import logo from '../../../images/logo.svg';
import image from '../../../images/text__COLOR_landing-logo.svg'

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__header'>
                <img src={logo} className='promo__logo' />
                <nav className='promo__navtab'>
                    <a href="#" className='promo__navtab-singup'>Регистрация</a>
                    <a href="#" className='promo__navtab-singin'>Войти</a>
                </nav>
            </div>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <img src={image} className='promo__image' />
        </section>
    )
}

export default Promo;
