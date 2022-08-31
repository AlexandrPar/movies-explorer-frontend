import React from 'react';
import "./NotFound.css"

function NotFound() {
    return (
        <main className="notFound">
            <h1 className="notFound__title">404</h1>
            <p className="notFound__subtitle">Страница не найдена</p>
            <a href='#' className="notFound__link">Назад</a>
        </main>
    )
}

export default NotFound