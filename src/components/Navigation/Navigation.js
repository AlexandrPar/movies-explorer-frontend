import React, { useState } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import './Navigation.css';
import menuOpen from '../../images/open_menu.svg'
import menuClose from '../../images/close.svg'
import profile from '../../images/profile.svg'


function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleCloseMenu();
        }
    };
    return (
        <>
            <Route exact path="/">
                <div className="promo__navtab">
                    <Link className="promo__navtab-singup" to="/signup">
                        Регистрация
                    </Link>
                    <Link className="promo__navtab-singin" to="/signin">
                        Войти
                    </Link>
                </div>
            </Route>

            <Route exact path={["/movies", "/saved-movies", "/profile"]}>
                <button
                    className="button header__nav-button header__nav-button_type_menu"
                    type="button"
                    onClick={handleMenuClick}
                >
                    <img src={menuOpen} className="header__nav-icon" alt='Меню'></img>
                </button>
                <nav
                    className={`header__nav ${isMenuOpen ? " header__nav_open" : ""}`}
                    onClick={handleOverlayClick}
                >
                    <button
                        className="button header__nav-button header__nav-button_type_close"
                        type="button"
                        onClick={handleCloseMenu}
                    >
                        <img src={menuClose} className="header__nav-icon" alt='Закрыть'></img>
                    </button>
                    <ul className="header__nav-links" id="nav-links">
                        <li className="header__nav-link-item header__nav-link-item_type_main">
                            <Link
                                className="link header__nav-link"
                                to="/"
                                onClick={handleCloseMenu}
                            >
                                Главная
                            </Link>
                        </li>
                        <li className="header__nav-link-item header__nav-link-item_type_movies">
                            <NavLink
                                className="navigation__film"
                                activeClassName="navigation__film_active"
                                to="/movies"
                                onClick={handleCloseMenu}
                            >
                                Фильмы
                            </NavLink>
                        </li>
                        <li className="header__nav-link-item header__nav-link-item_type_saved-movies">
                            <NavLink
                                className="navigation__save-film"
                                activeClassName="navigation__save-film_active"
                                to="/saved-movies"
                                onClick={handleCloseMenu}
                            >
                                Сохранённые фильмы
                            </NavLink>
                        </li>
                        <li className="header__nav-link-item header__nav-link-item_type_profile">
                            <Link
                                className="link header__profile-link"
                                to="/profile"
                                onClick={handleCloseMenu}
                            >
                                <img
                                    src={profile}
                                    alt="Иконка профиля"
                                    className="header__profile-link-icon"
                                />
                                Аккаунт
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Route>
        </>
    );
    // <nav className='navigation'>
    //     <div className='navigation__menu'>
    //         <a className='navigation__film' href='#'>Фильмы</a>
    //         <a className='navigation__save-film' href='#'>Сохранённые фильмы</a>
    //     </div>
    //     <a href='#'><img src={account} className='navigation__account' /></a>
    // </nav>
}

export default Navigation