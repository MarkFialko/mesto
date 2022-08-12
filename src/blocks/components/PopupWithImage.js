import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    open(link) {
        document.body.classList.add("body_active")
        this._popup.classList.add("popup_active")
        this._popup.querySelector(".popup__image_link").src = link
    }

    setEventListeners(link) {
        this.open(link)
        super._handleEscClose()
        super._handleOutsideClick()
    }
}