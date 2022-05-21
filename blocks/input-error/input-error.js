export function showInputError(formElement, inputElement, errorMessage, settings) {
    let errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`${settings.inputErrorClass}`);
    errorElement.textContent = errorMessage;
};

export function hideInputError(formElement, inputElement, settings) {
    let errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(`${settings.inputErrorClass}`);
    errorElement.textContent = '';
};