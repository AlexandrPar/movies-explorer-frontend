import React from 'react';
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesList from '../MoviesList/MoviesList';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesList />
            <Footer />
        </>
    )
}

export default Movies;