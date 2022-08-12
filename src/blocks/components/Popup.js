export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
    }

    open() {
        document.body.classList.add("body_active")
        this._popup.classList.add("popup_active")
    }

    close() {
        document.body.classList.remove("body_active")
        this._popup.classList.remove("popup_active")
    }

    _handleEscClose() {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.close()
            }
        })
    }

    _handleOutsideClick() {
        this._popup.addEventListener('mousedown', (e) => {
            if (!e.target.closest(".popup__inner") || e.target.closest(".popup__close")) {
                this.close()
            }
        })
    }

    setEventListeners() {
        this.open()
        this._handleEscClose()
        this._handleOutsideClick()
    }
}