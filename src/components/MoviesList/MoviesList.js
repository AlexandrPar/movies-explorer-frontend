import React from "react";
import './MoviesList.css'
import { useLocation } from "react-router-dom";
import Preloader from '../Preloader/Preloader'
import MoviesCard from "../MoviesCard/MoviesCard";
import { useScreen } from '../UseForm/UseScreen'

function MoviesList({ movies, savedMovies, onMovieSave, onMovieDel, showPreloader, isSearchError }) {
    const path = useLocation();

    const {
        displayedMovies,
        displayMoreMovies,
    } = useScreen(movies)

    return (
        <>
            <Preloader showPreloader={showPreloader} />
            <p className={`movies-list__text ${isSearchError && 'movies-list__text_visible'}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного ипопробуйте ещё раз</p>
            <p className={`movies-list__text ${((displayedMovies?.length === 0 && localStorage.getItem('beatFilmMovies')) || (movies?.length === 0))
                && 'movies-list__text_visible'}`}>Ничего не найдено</p>
            <section className='movies-list'>
                {displayedMovies.map((movie) => (
                    <MoviesCard
                        key={movie.id || movie._id}
                        movie={movie}
                        savedMovies={savedMovies}
                        onMovieSave={onMovieSave}
                        onMovieDel={onMovieDel}
                    />
                )
                )}
                {Boolean(path.pathname === "/movies" & (movies.length > displayedMovies.length)) && (<button type="submit" className='movies-list__more' onClick={displayMoreMovies}>Ещё</button>)}
            </section >
        </>
    )
}

export default MoviesList;