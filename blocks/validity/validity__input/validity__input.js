import {showInputError, hideInputError} from "./../../input-error/input-error.js"

export function checkInputValidity(formElement, inputElement, showError = true) {
    if (!inputElement.validity.valid) {
        if (showError) {
            showInputError(formElement, inputElement, inputElement.validationMessage);
        }
        return false;
    } else if (inputElement.value[0] === " ") {
        if (showError) {
            showInputError(formElement, inputElement, "Поле не может начинаться с пробела.");
        }
        return false;
    } else {
        hideInputError(formElement, inputElement);
        return true;
    }
}