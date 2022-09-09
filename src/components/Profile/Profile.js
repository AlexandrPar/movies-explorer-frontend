import React from 'react';
import { Link } from "react-router-dom";
import UseForm from '../UseForm/UseForm';
import './Profile.css'

function Profile({ updateUser, userName, email}) {
    const { enteredValues, errors, handleChange } = UseForm({});
    

    return (
        <div className='profile'>
            <h2 className='profile__title'>Привет, {userName}!</h2>
            <form className="profile__form" onSubmit={updateUser} noValidate>
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
                    onChange={handleChange}
                    placeholder= {userName}
                    value={enteredValues.name || ''}
                />
                <span id="name-error" className="error">{errors.name}</span>
                <label className="profile__label">E-mail</label>
                <input
                    type="email"
                    className="input email__input input__profile"
                    name="email"
                    required
                    minLength="2"
                    maxLength="40"
                    id="email-input"
                    onChange={handleChange}
                    placeholder={email}
                    value={enteredValues.email || ''}
                />
                <span id="email-error" className="error">{errors.email}</span>
                <button type="submit" aria-label="Редактировать" className="profile__submit">Редактировать</button>
                <Link to="/signin" className="profile__link_login">Выйти из аккаунта</Link>
            </form>
        </div>
    )
}

export default Profile;