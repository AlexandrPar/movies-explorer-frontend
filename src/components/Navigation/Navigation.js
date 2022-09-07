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
                <div className='navigation'>
                    <div className="navigation__menu">
                        <Link
                            className="navigation__film" to='/movies'>Фильмы</Link>
                        <Link className="navigation__save-film" to='/saved-movies'>Сохраненные фильмы</Link>
                    </div>
                    <Link className="navigation__account" to='/profile'><img src={profile} alt='Аккаунт' /></Link>
                </div>
                <button className="menu__open" onClick={handleMenuClick}>
                    <img className="menu__img" src={menuOpen} alt="Открыть" />
                </button>
                <div className={`burger-menu ${isMenuOpen ? " burger-menu_open" : ""}`} onClick={handleOverlayClick}>
                    <section className="menu menu_active">
                        <div className="menu__container">
                            <button className="menu__close" onClick={handleCloseMenu}>
                                <img className="menu__img" src={menuClose} alt="Закрыть" />
                            </button>
                            <nav className="menu__links">
                                <li className="menu__item" onClick={handleCloseMenu}><Link className="menu__link" to='/'>Главная</Link></li>
                                <li className="menu__item" onClick={handleCloseMenu}><Link className="menu__link" to='/movies'>Фильмы</Link></li>
                                <li className="menu__item" onClick={handleCloseMenu}><Link className="menu__link" to='/saved-movies'>Сохраненные фильмы</Link></li>
                            </nav>
                            <Link className="menu__button" to='/profile'><img src={profile} alt='Аккаунт' /></Link>
                        </div>
                    </section>
                </div>
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