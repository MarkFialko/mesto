import {fillUserForm} from "./../__form/popup__form.js"
import {openPopup} from "./../popup.js"
import {hideInputError} from "./../../input-error/input-error.js"

export function changeButton(button,settings,isValid) {
    if (!isValid) {
        button.classList.add(`${settings.inactiveButtonClass}`);
        button.setAttribute("disabled", "true")
    } else {
        button.classList.remove(`${settings.inactiveButtonClass}`);
        button.removeAttribute("disabled");
    }
}

export function addPenButton(e) {
    fillUserForm();
    hideInputError(cardForm, userForm.elements.user);
    hideInputError(cardForm, userForm.elements.description);
    openPopup("popup__user");
    e.preventDefault();
}

export function addCardButton(e) {
    const cardForm = document.forms.cardForm;
    hideInputError(cardForm, cardForm.elements.cardTitle);
    hideInputError(cardForm, cardForm.elements.cardLink);
    openPopup("popup__card");
    e.preventDefault();
}