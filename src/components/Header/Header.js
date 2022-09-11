import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  const location = useLocation();
  const headerName = `header${location.pathname === "/" ? " header__theme_pink" : ""}`;
  return (
    <Switch>
      <Route exact path={["/movies", "/saved-movies", "/profile", "/"]}>
        <header className={headerName}>
            <Link to="/" className="promo__logo">
              <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            <Navigation />
        </header>
      </Route>
    </Switch>
  );
}

export default Header