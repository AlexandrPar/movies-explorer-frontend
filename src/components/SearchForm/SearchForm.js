import React, { useState } from 'react';
import './SearchForm.css'

function SearchForm({ onSubmitSearch, short, handleShort, handleChange, inputSearch }) {
    const [error, setError] = useState('');
    function noSubmit(evt) {
        evt.preventDefault();
        setError('Нужно ввести ключевое слово');
    }

    function resetError() {
        setError('');
    }

    return (
        <form className='search-form' onSubmit={inputSearch.length > 0 ? onSubmitSearch : noSubmit} onChange={resetError} noValidate>
            <div className='search-form__container'>
                <input
                    className='search-form__input'
                    placeholder="Фильм"
                    type="search"
                    name="searchFilm"
                    minLength="2"
                    maxLength="50"
                    required
                    onChange={handleChange}
                    value={inputSearch}
                />
                <button className='search-form__button' type="submit">Найти</button>
                <span id="email-error" className="error">{error}</span>
            </div>
            <div className="search-form__filter">
                <div>
                    <div class="switch-button">
                        <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox" checked={short} onChange={handleShort}/>
                        <label for="switch-label" class="switch-button__label"></label>
                    </div>
                </div>
                <p className="search-form__filter-label">Короткометражки</p>
            </div>
        </form>
    )
}

export default SearchForm;