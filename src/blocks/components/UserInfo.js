export default class UserInfo {
    constructor({nameSelector, aboutSelector, avatarSelector}) {
        this._nameSelector = nameSelector
        this._aboutSelector = aboutSelector
        this._avatarSelector = avatarSelector
    }

    getUserInfo() {
        return {
            name: document.querySelector(this._nameSelector).textContent,
            about: document.querySelector(this._aboutSelector).textContent,
            avatar: document.querySelector(this._avatarSelector).src
        }
    }

    setUserInfo({name, about}) {
        document.querySelector(this._nameSelector).textContent = name
        document.querySelector(this._aboutSelector).textContent = about
    }

    setUserAvatar({avatar}) {
        document.querySelector(this._avatarSelector).src = avatar
    }
}