import React from 'react';
import { Link } from "react-router-dom";
import UseForm from '../UseForm/UseForm';
import './Login.css'

import logo from '../../images/logo.svg'

function Login() {
    const { enteredValues, errors, handleChange } = UseForm({});
    return (
        <div className='login'>
            <Link to="/">
                <img src={logo} alt="Логотип" className="login__logo" />
            </Link>
            <h2 className='login__title'>Рады видеть!</h2>
            <form className="form login__form"  noValidate>
                <label className="label">E-mail</label>
                <input
                    type="email"
                    className="input email__input"
                    name="email"
                    required
                    minLength="2"
                    maxLength="40"
                    id="email-input"
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
                    onChange={handleChange}
                    value={enteredValues.password || ''}
                />
                <span id="password-error" className="error">{errors.password}</span>
                <button type="submit" aria-label="Зарегистрироваться" className="login__submit">Войти</button>
                <p className="login__subtitle">Ещё не зарегистрированы? <Link to="/signup" className="login__link">Регистрация</Link></p>
            </form>
        </div>
    )
}

export default Login;