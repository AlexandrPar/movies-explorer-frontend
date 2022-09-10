import React from 'react';
import './SearchForm.css'

function SearchForm() {
    return (
        <form className='search-form'>
            <div className='search-form__container'>
                <input
                    className='search-form__input'
                    placeholder="Фильм"
                    type="search"
                    name="searchFilm"
                    required
                />
                <button className='search-form__button'  type="submit">Найти</button>
            </div>
            <div className="search-form__filter">
                <div>
                    <div class="switch-button">
                        <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox" />
                            <label for="switch-label" class="switch-button__label"></label>
                    </div>
                </div>
                <p className="search-form__filter-label">Короткометражки</p>
            </div>
        </form>
    )
}

export default SearchForm;