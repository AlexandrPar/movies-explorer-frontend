import React from "react";
import './MoviesCard.css'
import pic1 from '../../images/pic_1.svg'
import pic2 from '../../images/pic_2.svg'
import { useLocation } from "react-router-dom";

function MoviesCard() {
    const path = useLocation();
    function toggleHandler(e) {
        e.preventDefault();
        (e.target.classList.contains("movies-card__like_on") === true) ? e.target.classList.remove("movies-card__like_on") : e.target.classList.add("movies-card__like_on");
    }
    return (
        <>
        <div className='movies-card'>
                <div className='movies-card__description'>
                    <div className="movies__info">
                        <h3 className='movies-card__title'>33 слова о дизайне</h3>
                        <p className='movies-card__duration'>1ч 42м</p>
                    </div>
                    {path.pathname === "/movies" && (<button type="checkbox" className="movies-card__like" onClick={toggleHandler}></button>)}
                    {path.pathname === "/saved-movies" && (<button type="button" className='movies-card__dell'></button>)}
                </div>
                <img className='movies-car__picture' src={pic1} alt='Постер' />
            </div>
            <div className='movies-card'>
                <div className='movies-card__description'>
                    <div className="movies__info">
                        <h3 className='movies-card__title'>Киноальманах «100 лет дизайна»</h3>
                        <p className='movies-card__duration'>1ч 42м</p>
                    </div>
                    {path.pathname === "/movies" && (<button type="checkbox" className="movies-card__like" onClick={toggleHandler}></button>)}
                    {path.pathname === "/saved-movies" && (<button type="button" className='movies-card__dell'></button>)}
                </div>
                <img className='movies-car__picture' src={pic2} alt='Постер' />
            </div>
        </>
    )
}

export default MoviesCard;