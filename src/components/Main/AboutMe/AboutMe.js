import React from 'react';
import './AboutMe.css';
import photo from '../../../images/95378526.jpg'

function AboutMe() {
    return (
        <section className='me'>
            <h2 className='me__title'>Студент</h2>
            <div className='me__content'>
                <div className='me__info'>
                    <span className='me__name'>Александр</span>
                    <span className='me__job'>Фронтенд-разработчик, 33 года</span>
                    <span className='me__bio'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                        После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</span>
                    <a className='me__link' href='https://github.com/AlexandrPar'>Github</a>
                </div>
                <img className='me__photo' src={photo} alt='Мое фото' />
            </div>
        </section>
    )
}

export default AboutMe;
