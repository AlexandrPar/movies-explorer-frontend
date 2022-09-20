import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import UseForm from '../UseForm/UseForm';
import './Register.css'
import logo from '../../images/logo.svg'
import Preloader from '../Preloader/Preloader';
import { useHistory } from "react-router-dom";

function Register({ handleRegister, showPreloader, loggedIn }) {
    const { enteredValues, errors, isFormValid, handleChange } = UseForm({});

    const history = useHistory();

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!enteredValues.name || !enteredValues.email || !enteredValues.password || !isFormValid) {
            return;
        }
        handleRegister(enteredValues.name, enteredValues.email, enteredValues.password);
    }

    useEffect(() => {
        if (loggedIn) {
            history.push("/movies");
        }
      }, [ loggedIn, history]);


    return (
        <div className='register'>
            <Link to="/">
                <img src={logo} alt="Логотип" className="register__logo" />
            </Link>
            <h2 className='register__title'>Добро Пожаловать!</h2>
            <Preloader showPreloader={showPreloader} />
            <form className="form register__form" onSubmit={handleSubmit} noValidate>
                <label className="label">Имя</label>
                <input
                    className="input login__input"
                    aria-label="Имя"
                    type="Text"
                    name="name"
                    id="name"
                    required
                    pattern="[A-Za-zА-Яа-яЁё\s-]{2,30}"
                    onChange={handleChange}
                    value={enteredValues.name || ''}
                />
                <span id="name-error" className="error">{!isFormValid && errors.name ? 'Поле Имя от 2 до 30 символов, содержит только латиницу, кириллицу, пробел или дефис.' : ''}</span>
                <label className="label">E-mail</label>
                <input
                    type="email"
                    aria-label="почта"
                    className="input email__input"
                    name="email"
                    required
                    minLength="2"
                    maxLength="40"
                    id="email"
                    pattern='^[^@\s]+@[^@\s]+\.[^@\s]+$'
                    onChange={handleChange}
                    value={enteredValues.email || ''}
                />
                <span id="email-error" className="error">{errors.email}</span>
                <label className="label">Пароль</label>
                <input
                    type="password"
                    aria-label="пароль"
                    className="input password__input"
                    name="password"
                    required
                    pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
                    id="password-input"
                    onChange={handleChange}
                    value={enteredValues.password || ''}
                />
                <span id="password-error" className="error">{!isFormValid && errors.password ? 'Поле пароля: Минимум 8 символов, одна цифра, одна буква в верхнем регистре и одна в нижнем.' : ''}</span>
                <button type="submit" aria-label="Зарегистрироваться" disabled={!isFormValid} className={isFormValid ? 'register__submit' : 'register__submit_disabled'}>Зарегистрироваться</button>
                <p className="register__subtitle">Уже зарегистрированы? <Link to="/signin" className="login__link">Войти</Link></p>
            </form>
        </div>
    )
}

export default Register;