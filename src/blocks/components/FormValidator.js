export default class FormValidator {
    constructor(settings, form) {
        this._settings = settings
        this._form = form;
        this._requiredElements = this._form.querySelectorAll("[required]")
        this._button = this._form.querySelector("button")
    }

    changeButton(valid, {inactiveButtonClass}) {
        if (!valid) {
            this._button.classList.add(inactiveButtonClass)
            return
        }
        this._button.classList.remove(inactiveButtonClass)
    }

    _checkTrim(formElement) {
        console.log(formElement.value.trim() === formElement.value)
        return formElement.value.trim() === formElement.value
    }

    _checkFormValid() {
        const countValidity = Array.from(this._requiredElements).reduce((itemOne, itemTwo) => {
            this._checkTrim(itemOne)
            return Number(itemOne.validity.valid && this._checkTrim(itemOne)) + Number(itemTwo.validity.valid && this._checkTrim(itemTwo))
        })

        return this._requiredElements.length === countValidity
    }

    showError(requiredElement) {
        const errorElement = this._form.querySelector(`.${requiredElement.id}-error`)
        errorElement.textContent = requiredElement.dataset.error
    }

    hideError(requiredElement = null, hideAll = false) {
        if (hideAll) {
            Array.from(this._requiredElements).forEach(requiredElement => {
                const errorElement = this._form.querySelector(`.${requiredElement.id}-error`)
                errorElement.textContent = ''
            })
            return
        }

        const errorElement = this._form.querySelector(`.${requiredElement.id}-error`)
        errorElement.textContent = ''
    }

    _isEmpty(requiredElement) {
        return requiredElement.value.trim().length
    }

    _handleInput() {
        this._requiredElements.forEach(requiredElement => {
            requiredElement.addEventListener("input", () => {
                this.changeButton(this._checkFormValid(), this._settings)
                if (requiredElement.validity.valid && this._isEmpty(requiredElement)) {
                    this.hideError(requiredElement)
                } else {
                    this.showError(requiredElement)
                }
            })
        })
    }

    setEventListeners() {
        this._handleInput()
    }
}