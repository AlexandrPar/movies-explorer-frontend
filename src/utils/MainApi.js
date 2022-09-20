const BASE_URL = 'http://api.parshukov.movies.nomoredomains.sbs';

function getRequest(res) {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}

export const signup = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    }).then(getRequest);
};

export const signin = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
    })
        .then((res) => getRequest(res))
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).then(getRequest);
};

export const setUserInfo = (token, name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email })
    })
        .then(getRequest)
}

export const getMovies = (token) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
        },
    })
        .then(getRequest)
}

export const postMovie = (data, token) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            country: data.country || 'unknown',
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: `https://api.nomoreparties.co${data.image.url}`,
            trailerLink: data.trailerLink,
            thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
            movieId: data.id,
            nameRU: data.nameRU,
            nameEN: data.nameEN || 'unknown'
        }),
    })
        .then(getRequest)
}

export const deleteMovie = (id, token) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
        },
    })
    .then(getRequest)
}