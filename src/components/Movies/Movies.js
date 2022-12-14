import React, { useState, useEffect } from 'react';
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';
import { moviesApi } from '../../utils/MoviesApi';
import { UseFilterMovies } from '../UseForm/UseFilterMovies';

function Movies({savedMovies, onMovieSave}) {
  const [beatFilmMovies, setBeatFilmMovies] = useState([]);
  const [showPreloader, setShowPreloader] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);

  const {
    short,
    filteredMovies,
    inputSearch,
    handleSwitchShort,
    handleInputChange,
    onSubmitSearch,
    filterMovies,
  } = UseFilterMovies(beatFilmMovies, 'beatFilm', false, getMoviesBeatfilm);

  function getMoviesBeatfilm() {
    if (localStorage.getItem('beatFilmMovies')) {
      setBeatFilmMovies(JSON.parse(localStorage.getItem('beatFilmMovies')));
      filterMovies(JSON.parse(localStorage.getItem('beatFilmMovies')), inputSearch, short)
    } else {
      setShowPreloader(true);
      moviesApi
        .getMassivMovies()
        .then(data => {
          setBeatFilmMovies(data);
          localStorage.setItem('beatFilmMovies', JSON.stringify(data));
          filterMovies(data, inputSearch, short);
          setIsSearchError(false);
        }
        ).catch(err => {
          setIsSearchError(true);
          console.log(err)
        })
        .finally(() => setShowPreloader(false));
    }
  }

  useEffect(() => {
    setIsSearchError(false);
    if (localStorage.getItem('beatFilmMovies')) {
      setBeatFilmMovies((JSON.parse(localStorage.getItem('beatFilmMovies'))));
    }
  }, [])

  return (
    <>
      <SearchForm 
      onSubmitSearch={onSubmitSearch}
      short={short}
      handleChange={handleInputChange}
      handleShort={handleSwitchShort}
      inputSearch={inputSearch}/>
      <MoviesList
        short={short}
        movies={filteredMovies}
        savedMovies={savedMovies}
        onMovieSave={onMovieSave}
        showPreloader={showPreloader}
        isSearchError={isSearchError}
       />
    </>
  )
}

export default Movies;