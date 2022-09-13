class MoviesApi {
    constructor(item) {
        this._url = item.url;
        this._headers = item.headers;
    }

    _getRequest(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }


    getMassivMovies() {
        return fetch(this._baseUrl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
      .then(res => {
            return this._getRequest(res)
        })
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});
