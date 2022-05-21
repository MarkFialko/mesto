import {fillUserForm} from "./../__form/popup__form.js"
import {openPopup} from "./../popup.js"
import {hideInputError} from "./../../input-error/input-error.js"

export function changeButton(button, settings, isValid) {
    if (!isValid) {
        button.classList.add(`${settings.inactiveButtonClass}`);
        button.setAttribute("disabled", "true")
    } else {
        button.classList.remove(`${settings.inactiveButtonClass}`);
        button.removeAttribute("disabled");
    }
}

export function addPenButton(e, settings) {
    fillUserForm();

    hideInputError(cardForm, userForm.elements.user, settings);
    hideInputError(cardForm, userForm.elements.description, settings);

    const button = document.querySelector(`${settings.submitButtonSelector}`);
    changeButton(button, settings, true);

    openPopup("popup__user", settings);
    e.preventDefault();
}

export function addCardButton(e, settings) {
    const cardForm = document.forms.cardForm;
    hideInputError(cardForm, cardForm.elements.cardTitle, settings);
    hideInputError(cardForm, cardForm.elements.cardLink, settings);

    openPopup("popup__card", settings);
    e.preventDefault();
}