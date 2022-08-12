import PopupWithImage from "./PopupWithImage.js";

export default class Card {

    constructor({title, link}, cardSelector) {
        this._title = title
        this._link = link
        this._cardSelector = cardSelector
    }

    _getTemplate() {
        this._cardElement = document.querySelector(this._cardSelector)
            .content
            .querySelector(".card")
            .cloneNode(true)

        return this._cardElement
    }

    _handlePopup() {
        const image = this._cardElement.querySelector(".card__image")

        image.addEventListener("click", () => {
            const imagePopup = new PopupWithImage(".popup__image")
            imagePopup.setEventListeners(this._link)
        })
    }

    _handleLike() {
        const like = this._cardElement.querySelector(".icon__like")
        like.addEventListener("click", () => {
            like.classList.toggle("icon__like_active")
        })
    }

    _handleTrash() {
        const trash = this._cardElement.querySelector(".icon__trash")
        trash.addEventListener("click", () => {
            this._cardElement.remove()
        })
    }

    _setEventListeners() {
        this._handleLike()
        this._handleTrash()
        this._handlePopup()
    }

    generateCard() {
        const card = this._getTemplate()
        this._setEventListeners()
        card.querySelector(".description-card__title").textContent = this._title
        card.querySelector(".card__image_link").src = this._link

        return card
    }
}