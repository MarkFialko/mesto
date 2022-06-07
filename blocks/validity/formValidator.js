import {Card, CardList} from "./../card/card.js"
import {closePopup} from "./../popup/popup.js"

class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
        this._inputs = form.querySelectorAll("input");
        this._button = form.querySelector("button");
    }

    _checkValidityForm() {
        let countValidity = 0;
        for (let i = 0; i < this._inputs.length; i++) {
            if (this._checkInputValidity(this._inputs[i], false)) {
                countValidity++;
            }
        }
        if (countValidity === this._inputs.length) {
            this._changeButton(true);
            return true;
        }
        this._changeButton(false);
        return false;
    }

    _changeButton(isValid) {
        if (!isValid) {
            this._button.classList.add(`${this._settings.inactiveButtonClass}`);
            this._button.setAttribute("disabled", "true")
        } else {
            this._button.classList.remove(`${this._settings.inactiveButtonClass}`);
            this._button.removeAttribute("disabled");
        }
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = document.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(`${this._settings.inputErrorClass}`);
        errorElement.textContent = errorMessage;
    };

    _hideInputError(inputElement) {
        const errorElement = document.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(`${this._settings.inputErrorClass}`);
        errorElement.textContent = '';
    };

    _checkInputValidity(inputElement, showError = true) {
        if (!inputElement.validity.valid) {
            if (showError) {
                this._showInputError(inputElement, inputElement.validationMessage);
            }
            return false;
        } else if (inputElement.value[0] === " ") {
            if (showError) {
                this._showInputError(inputElement, "Поле не может начинаться с пробела.");
            }
            return false;
        }
        this._hideInputError(inputElement);
        return true;
    }

    _setEventListeners() {
        this._inputs.forEach(input => {
            input.addEventListener("input", (e) => {
                this._checkInputValidity(input, true);
                this._checkValidityForm();
            })
        })
    }
}

class UserFormValidator extends FormValidator {
    constructor(settings, form) {
        super(settings, form)
    }

    _getUser() {
        const inputName = this._form.elements.user.value;
        const inputDescription = this._form.elements.description.value;

        let name = document.querySelector(".user-title__name");
        let description = document.querySelector(".user-description__subtitle");
        name.textContent = inputName;
        description.textContent = inputDescription;
    }

    _setEventListeners() {
        super._setEventListeners();
        this._form.addEventListener('submit', (e) => {
            if (super._checkValidityForm()) {
                e.preventDefault();
                this._getUser();
                super._changeButton(true);

                closePopup("popup__user")
            }
        })

    }

    enableValidation() {
        this._setEventListeners();
    }

}

class CardFormValidator extends FormValidator {
    constructor(settings, form) {
        super(settings, form)
    }

    _getCardElement(item) {
        const card = new Card(item, "card-template");
        const cardElement = card.generateCard();
        return cardElement;
    }

    _renderCard(inputTitle, inputLink) {
        const cardElement = {
            name: inputTitle,
            link: inputLink
        }
        const card = this._getCardElement(cardElement);
        CardList.prepend(card);
    }

    _getCard() {
        const inputTitle = this._form.elements.cardTitle.value;
        const inputLink = this._form.elements.cardLink.value;

        this._renderCard(inputTitle, inputLink);
    }

    _setEventListeners() {
        super._setEventListeners();
        this._form.addEventListener('submit', (e) => {
            if (super._checkValidityForm()) {
                e.preventDefault();
                this._getCard();
                super._changeButton(false);
                this._form.reset();

                closePopup("popup__card");
            }
        })
    }

    enableValidation() {
        this._setEventListeners();
    }
}

export {FormValidator, CardFormValidator, UserFormValidator}