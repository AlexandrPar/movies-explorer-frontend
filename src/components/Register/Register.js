import React from 'react';
import { Link } from "react-router-dom";
import UseForm from '../UseForm/UseForm';
import './Register.css'
import logo from '../../images/logo.svg'

function Register({ onLogin, email }) {
    const { enteredValues, errors, isFormValid, handleChange } = UseForm({});
    function handleSubmit(evt) {
        evt.preventDefault();
        if (!enteredValues.email || !enteredValues.password || !isFormValid) {
            console.log(isFormValid);
            return;
        }
        onLogin(enteredValues.email, enteredValues.password);
    }

    return (
        <div className='register'>
            <Link to="/">
                <img src={logo} alt="Логотип" className="register__logo" />
            </Link>
            <h2 className='register__title'>Добро Пожаловать!</h2>
            <form className="register__form" onSubmit={handleSubmit} noValidate>
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
                    onChange={handleChange}
                    value={enteredValues.name || ''}
                />
                <span id="name-error" className="error">{errors.name}</span>
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
                <button type="submit" aria-label="Зарегистрироваться" className="register__submit">Зарегистрироваться</button>
                <p className="register__subtitle">Уже зарегистрированы? <Link to="/signin" className="login__link">Войти</Link></p>
            </form>
        </div>
    )
}

export default Register;