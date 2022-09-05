import React from 'react';
import './Register.css'
import logo from '../../images/logo.svg'

function Register() {
    return (
        <div className='register'>
            <img src={logo} className='register__logo' />
            <h2 className='register__title'>Добро Пожаловать!</h2>
            <form className="register__form">
                <label className="label">Имя</label>
                <input
                    className="input login__input"
                    aria-label="Имя"
                    type="Text"
                    name="name"
                    id="name"
                    required
                    minLength="2"
                    maxLength="30"
                />
                <span id="name-error" className="login__error"></span>
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
                <button type="submit" aria-label="Зарегистрироваться" className="register__submit">Зарегистрироваться</button>
                <p className="register__subtitle">Уже зарегистрированы? <a to="/signin" className="login__link">Войти</a></p>
            </form>
        </div>
    )
}

export default Register;