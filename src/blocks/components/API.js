export default class API {
    constructor({baseUrl,headers}) {
        this._baseUrl = baseUrl
        this._headers = headers
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/v1/users/me`, {
            headers: this._headers
        })
            .then(response => this._handleResponse(response))

    }

    editProfile(userData) {
        return fetch(`${this._baseUrl}/v1/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: userData.name,
                about: userData.description,
            })
        })
            .then(response => this._handleResponse(response))
    }

}