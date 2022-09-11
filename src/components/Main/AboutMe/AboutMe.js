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
                    <span className='me__bio'>Я родился и живу в Иваново, закончил факультет механики в ИГХТУ. У меня есть жена,
                        дочь и собака. Я люблю слушать музыку, а ещё увлекаюсь компьютерными играми. Недавно начал кодить. С 2013 года работал в компании «Ивхимпром».
                        После того, как пройду курс по веб-разработке, хочу поменять работу и заниматься веб-разработкой.</span>
                    <a className='me__link' href='https://github.com/AlexandrPar'>Github</a>
                </div>
                <img className='me__photo' src={photo} alt='Мое фото' />
            </div>
        </section>
    )
}

export default AboutMe;
