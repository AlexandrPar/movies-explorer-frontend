import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__projects'>
                <li className="portfolio__link-item">
                    <a className='portfolio__link' href='https://github.com/AlexandrPar/how-to-learn'>
                        <span className='portfolio__text-link'>Статичный сайт</span>
                        <span className='portfolio__arrow-link'>↗</span>
                    </a>
                </li>
                <li className="portfolio__link-item">
                    <a className='portfolio__link' href='https://github.com/AlexandrPar/russian-travel'>
                        <span className='portfolio__text-link'>Адаптивный сайт</span>
                        <span className='portfolio__arrow-link'>↗</span>
                    </a>
                </li>
                <li className="portfolio__link-item">
                    <a className='portfolio__link' href='https://github.com/AlexandrPar/react-mesto-api-full'>
                        <span className='portfolio__text-link'>Одностраничное приложение</span>
                        <span className='portfolio__arrow-link'>↗</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
