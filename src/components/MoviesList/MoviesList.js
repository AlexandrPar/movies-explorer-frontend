import React from 'react';
import './MoviesList.css'
import pic1 from '../../images/pic_1.svg'
import pic2 from '../../images/pic_2.svg'

function MoviesList() {
    return (
        <div className='movies-list'>
            <div className='movies-card'>
                <div className='movies-card__description'>
                    <h3 className='movies-card__title'>33 слова о дизайне</h3>
                    <p className='movies-card__duration'>1ч 42м</p>
                    <button className='movies-card__like'></button>
                </div>
                <img className='movies-car__picture' src={pic1} />
            </div>
            <div className='movies-card'>
                <div className='movies-card__description'>
                    <h3 className='movies-card__title'>Киноальманах «100 лет дизайна»</h3>
                    <p className='movies-card__duration'>1ч 42м</p>
                    <button className='movies-card__like'></button>
                </div>
                <img className='movies-car__picture' src={pic2} />
            </div>
            <button className='movies-list__more'>Ещё</button>
        </div >
    )
}

export default MoviesList;