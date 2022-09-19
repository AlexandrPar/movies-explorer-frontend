import React from "react";
import './MoviesList.css'
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesList({ movies, savedMovies, onMovieSave, onMovieDel }) {
    const path = useLocation();
    return (
        <div className='movies-list'>
            {movies.map((movie) => (
                <MoviesCard
                    key={movie.id || movie._id}
                    movie={movie}
                    savedMovies={savedMovies}
                    onMovieSave={onMovieSave}
                    onMovieDel={onMovieDel}
                />
            )
            )}
            {path.pathname === "/movies" && (<button type="submit" className='movies-list__more'>Ещё</button>)}
        </div >
    )
}

export default MoviesList;