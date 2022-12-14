import React from 'react';
import { Route, Switch } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <Switch>
      <Route exact path={["/movies", "/saved-movies", "/"]}>
        <footer className='footer'>
          <span className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</span>
          <div className='footer__info'>
            <span className='footer__copyright'>&copy; {new Date().getFullYear()}</span>
            <div className='footer__links'>
              <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel="noopener noreferrer">Яндекс.Практикум</a>
              <a className='footer__link' href='https://github.com/AlexandrPar'>Github</a>
            </div>
          </div>
        </footer>
      </Route>
    </Switch >
  )
};

export default Footer;
