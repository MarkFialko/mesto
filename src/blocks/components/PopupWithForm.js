import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor({popupSelector, submitCallback}) {
        super(popupSelector)
        this._submitCallback = submitCallback
        this._form = this._popup.querySelector("form")
        this._requiredElements = this._form.querySelectorAll("[required]")
    }

    _getInputValues() {
        this._formData = {}

        Array.from(this._requiredElements).forEach(inputData => {
            this._formData[inputData.dataset.info] = inputData.value
        })

        return this._formData
    }

    close() {
        super.close();
        this._form.reset()
    }

    _submitHandle() {
        this._form.addEventListener("submit", (e) => {
            e.preventDefault()
            e.stopImmediatePropagation()

            this._submitCallback(this._getInputValues())
        })
    }

    setEventListeners() {
        super.setEventListeners()
        this._submitHandle()
    }
}