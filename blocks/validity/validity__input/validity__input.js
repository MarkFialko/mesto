import {showInputError, hideInputError} from "./../../input-error/input-error.js"
export function checkInputValidity(formElement, inputElement, showError = true) {
    if (!inputElement.validity.valid) {
        if (showError) {
            showInputError(formElement, inputElement, inputElement.validationMessage);
        }
        return false;
    } else {
        hideInputError(formElement, inputElement);
        return true;
    }
}