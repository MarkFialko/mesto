export function showInputError(formElement, inputElement, errorMessage){
    let errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`form__input_type_error`);
    errorElement.textContent = errorMessage;
};

export function hideInputError(formElement, inputElement) {
    let errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.textContent = '';
};