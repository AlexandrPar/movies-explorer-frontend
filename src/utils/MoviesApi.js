class MoviesApi {
    constructor({url, headers}) {
        this._url = url;
        this.headers = headers;
    }

    _getRequest(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }


    getMassivMovies() {
        return fetch(this._url, {
            method: 'GET',
            headers: { ...this.headers },
        })
      .then(res => {
            return this._getRequest(res)
        })
    }
}

export const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers() { 
        return  {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        }
      }
});
