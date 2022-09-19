import React from "react";
import './MoviesCard.css'
import { useLocation } from "react-router-dom";


function MoviesCard({ movie, savedMovies, onMovieSave, onMovieDel }) {
  const duration = `${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м`;
  const path = useLocation();
  const isSaved = savedMovies?.some(i => i.movieId === movie.id);


  function handleSaveClick() {
    onMovieSave(movie);
  }

  function handleDelClick() {
    onMovieDel(movie);
  }


  return (
    <>
      <div className='movies-card'>
        <div className='movies-card__description'>
          <div className="movies__info">
            <h3 className='movies-card__title'>{movie.nameRU}</h3>
            <p className='movies-card__duration'>{duration}</p>
          </div>
          {path.pathname === "/movies" && (<button type="checkbox" className={`movies-card__like ${isSaved && 'movies-card__like_on'}`} onClick={handleSaveClick}></button>)}
          {path.pathname === "/saved-movies" && (<button type="button" className='movies-card__dell' onClick={handleDelClick}></button>)}
        </div>
        <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
          <img className='movies-car__picture' src={path.pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt={movie.nameRU} />
        </a>
      </div>
    </>
  )
}

export default MoviesCard;