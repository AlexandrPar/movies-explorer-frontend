import React from 'react';
import './Login.css'
import logo from '../../images/logo.svg'

function Login() {
    return (
        <div className='login'>
            <img src={logo} className='login__logo' />
            <h2 className='login__title'>Рады видеть!</h2>
            <form className="login__form">
                <label className="label">E-mail</label>
                <input
                    type="email"
                    className="input email__input"
                    name="email"
                    required
                    minLength="2"
                    maxLength="40"
                    id="email-input"
                />
                <span id="email-error" className="email__input"></span>
                <label className="label">Пароль</label>
                <input
                    type="password"
                    className="input password__input"
                    name="password"
                    required
                    minLength="2"
                    maxLength="200"
                    id="password-input"
                />
                <span id="password-error" className="password__error"></span>
                <button type="submit" aria-label="Зарегистрироваться" className="login__submit">Войти</button>
                <p className="login__subtitle">Ещё не зарегистрированы? <a to="/signup" className="login__link">Регистрация</a></p>
            </form>
        </div>
    )
}

export default Login;