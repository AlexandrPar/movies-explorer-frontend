import React, { useContext }  from 'react';
import { Link } from "react-router-dom";
import UseForm from '../UseForm/UseForm';
import './Profile.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ handleUpdateUser, onClick}) {
    const currentUser = useContext(CurrentUserContext);
    const { enteredValues, errors, isFormValid, handleChange } = UseForm();
    const isNotChange = Boolean(currentUser.email === enteredValues.email && currentUser.name === enteredValues.name);

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!isFormValid) {
            return;
        }
        if (!enteredValues.name) {
            enteredValues.name = currentUser.name;
        }
        if (!enteredValues.email) {
            enteredValues.email = currentUser.email;
        }
        handleUpdateUser(enteredValues.name, enteredValues.email);
    }


    return (
        <div className='profile'>
            <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
            <form className="profile__form" onSubmit={handleSubmit} noValidate>
                <label className="profile__label">Имя</label>
                <input
                    className="input login__input input__profile"
                    aria-label="Имя"
                    type="Text"
                    name="name"
                    id="name"
                    required
                    minLength="2"
                    maxLength="30"
                    placeholder={currentUser.name}
                    pattern="[A-Za-zА-Яа-яЁё\s-]{2,30}"
                    onChange={handleChange}
                    value={currentUser.name}
                />
                <span id="name-error" className="error">{errors.name ? 'поле Имя от 2 до 30 символов, содержит только латиницу, кириллицу, пробел или дефис.' : ''}</span>
                <label className="profile__label">E-mail</label>
                <input
                    type="email"
                    className="input email__input input__profile"
                    name="email"
                    required
                    minLength="2"
                    maxLength="40"
                    id="email"
                    onChange={handleChange}
                    placeholder={currentUser.email}
                    value={currentUser.email}
                />
                <span id="email-error" className="error">{errors.email}</span>
                <button disabled={!isFormValid || isNotChange} type="submit" aria-label="Редактировать" className={`profile__submit ${(isFormValid && !isNotChange) ? '' : 'profile__submit_disabled'}`}>Редактировать</button>
                <Link to="/signin" onClick={onClick} className="profile__link_login">Выйти из аккаунта</Link>
            </form>
        </div>
    )
}

export default Profile;