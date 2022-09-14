import React from "react";
import './MoviesCard.css'
import { useLocation } from "react-router-dom";


function MoviesCard({ movie }) {
    const duration = `${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м`;
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
                        <h3 className='movies-card__title'>{movie.nameRU}</h3>
                        <p className='movies-card__duration'>{duration}</p>
                    </div>
                    {path.pathname === "/movies" && (<button type="checkbox" className="movies-card__like" onClick={toggleHandler}></button>)}
                    {path.pathname === "/saved-movies" && (<button type="button" className='movies-card__dell'></button>)}
                </div>
                <img className='movies-car__picture' src={path.pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt={movie.nameRU} />
            </div>
        </>
    )
}

export default MoviesCard;