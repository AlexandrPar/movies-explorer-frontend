import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className='aboutProject'>
            <h2 className='aboutProject__title'>О проекте</h2>
            <div className='aboutProject__description'>
                <div className='aboutProject__description-section'>
                    <h3 className='description__title'>Дипломный проект включал 5 этапов</h3>
                    <p className='description__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='aboutProject__description-section'>
                    <h3 className='description__title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='description__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='aboutProject__timeline'>
                <div className='aboutProject__timeline-first'>
                    <div className='aboutProject__timeline-backend'>1 неделя</div>
                    <p className='aboutProject__timeline-subtitle'>Back-end</p>
                </div>
                <div className='aboutProject__timeline-second'>
                    <div className='aboutProject__timeline-frontend'>4 недели</div>
                    <p className='aboutProject__timeline-subtitle'>Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
