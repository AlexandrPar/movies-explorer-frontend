import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import UseForm from '../UseForm/UseForm';
import './Login.css'
import Preloader from '../Preloader/Preloader'
import { useHistory } from "react-router-dom";
import logo from '../../images/logo.svg'

function Login({ onLogin, showPreloader, loggedIn }) {
    const { enteredValues, errors, isFormValid, handleChange } = UseForm({});

    const history = useHistory();

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!enteredValues.email || !enteredValues.password || !isFormValid) {
            return;
        }
        onLogin(enteredValues.email, enteredValues.password);
    }

    useEffect(() => {
        if (loggedIn) {
            history.push("/movies");
        }
      }, [ loggedIn, history]);

    return (
        <div className='login'>
            <Link to="/">
                <img src={logo} alt="Логотип" className="login__logo" />
            </Link>
            <h2 className='login__title'>Рады видеть!</h2>
            <Preloader showPreloader={showPreloader} />
            <form className="form login__form" onSubmit={handleSubmit} noValidate>
                <label className="label">E-mail</label>
                <input
                    type="email"
                    className="input email__input"
                    name="email"
                    required
                    minLength="2"
                    maxLength="40"
                    id="email-input"
                    pattern='^[^@\s]+@[^@\s]+\.[^@\s]+$'
                    onChange={handleChange}
                    value={enteredValues.email || ''}
                />
                <span id="email-error" className="error">{errors.email}</span>
                <label className="label">Пароль</label>
                <input
                    type="password"
                    className="input password__input"
                    name="password"
                    required
                    minLength="2"
                    maxLength="200"
                    id="password-input"
                    pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
                    onChange={handleChange}
                    value={enteredValues.password || ''}
                />
                <span id="password-error" className="error">{!isFormValid && errors.password ? 'Поле пароля: Минимум 8 символов, одна цифра, одна буква в верхнем регистре и одна в нижнем.' : ''}</span>
                <button type="submit" disabled={!isFormValid || showPreloader} aria-label="Зарегистрироваться" className={isFormValid ? 'login__submit' : 'login__submit_disabled'}>Войти</button>
                <p className="login__subtitle">Ещё не зарегистрированы? <Link to="/signup" className="login__link">Регистрация</Link></p>
            </form>
        </div>
    )
}

export default Login;