import React from 'react';
import './Navigation.css';
import account from '../../images/profile.svg'

function Navigation() {
    return (
        <nav className='navigation'>
            <div className='navigation__menu'>
                <a className='navigation__film' href='#'>Фильмы</a>
                <a className='navigation__save-film' href='#'>Сохранённые фильмы</a>
            </div>
            <a href='#'><img src={account} className='navigation__account' /></a>
        </nav>
    )
}

export default Navigation