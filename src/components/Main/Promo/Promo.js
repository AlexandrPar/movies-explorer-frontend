import React from 'react';
import './Promo.css';
import image from '../../../images/text__COLOR_landing-logo.svg'

function Promo() {
    return (
        <section className='promo'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <img src={image} className='promo__image' alt='Промо' />
        </section>
    )
}

export default Promo;
