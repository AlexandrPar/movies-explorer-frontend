import React, { useState, useEffect } from 'react';
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';
import { moviesApi } from '../../utils/MoviesApi';

function Movies() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    moviesApi
      .getMassivMovies()
      .then((movies) => {
        setMovies(movies);
        localStorage.setItem('setMovies', JSON.stringify(movies))
      })
      .catch(err => console.log(err));
  };
 
  fetchMovies();
  
  return (
    <>
      <SearchForm />
      <MoviesList
        movies={movies} />
    </>
  )
}

export default Movies;