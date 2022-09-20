import React, { useEffect } from 'react';
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesList from '../MoviesList/MoviesList';
import { UseFilterMovies } from '../UseForm/UseFilterMovies'

function SavedMovies({ movies, onMovieDel, getMovies, showPreloader }) {
    const {
        short,
        setShort,
        filteredMovies,
        updateFilteredMovies,
        inputSearch,
        setInputSearch,
        handleSwitchShort,
        handleInputChange,
        onSubmitSearch
    } = UseFilterMovies(movies, 'saved', true);

    useEffect(() => {
        getMovies();
    }, [])

    useEffect(() => {
        updateFilteredMovies(movies);
        setShort(false);
        setInputSearch('');
    }, [movies]);
    return (
        <>
            <SearchForm
                onSubmitSearch={onSubmitSearch}
                short={short}
                handleChange={handleInputChange}
                handleShort={handleSwitchShort}
                inputSearch={inputSearch} />
            <MoviesList
                movies={filteredMovies}
                short={short}
                onMovieDel={onMovieDel}
                showPreloader={showPreloader}
                />
        </>
    )
}

export default SavedMovies;