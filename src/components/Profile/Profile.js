import React from 'react';
import { Link } from "react-router-dom";
import UseForm from '../UseForm/UseForm';
import './Profile.css'

function Profile({ loggedIn, userName, email, isMenuOpen, onClicOpen }) {
    const { enteredValues, errors, isFormValid, handleChange } = UseForm({});
    function handleSubmit(evt) {
        evt.preventDefault();
        if (!enteredValues.email || !enteredValues.password || !isFormValid) {
            console.log(isFormValid);
            return;
        }
    }

    return (
        <div className='profile'>
            <h2 className='profile__title'>Привет, {userName}!</h2>
            <form className="profile__form" onSubmit={handleSubmit} noValidate>
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
                    placeholder='Имя'
                    value={enteredValues.name || ''}
                />
                <span id="name-error" className="error">{errors.name}</span>
                <input
                    type="email"
                    className="input email__input"
                    name="email"
                    required
                    minLength="2"
                    maxLength="40"
                    id="email-input"
                    onChange={handleChange}
                    placeholder='E-mail'
                    value={enteredValues.email || ''}
                />
                <span id="email-error" className="error">{errors.email}</span>
                <button type="submit" aria-label="Редактировать" className="register__submit">Редактировать</button>
                <Link to="/signin" className="login__link login__link_profile">Выйти из аккаунта</Link>
            </form>
        </div>
    )
}

export default Profile;