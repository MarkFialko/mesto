import {checkValidityForm} from "./validity__form/validity__form.js"
import {checkInputValidity} from "./validity__input/validity__input.js"
import {changeButton} from "./../popup/__button/popup__buton.js"
import {getPopup} from "./../popup/__form/popup__form.js"

function setEventListeners(formElement, settings) {
    const inputList = Array.from(document.querySelectorAll(`${settings.inputSelector}`));
    const button = formElement.querySelector(`${settings.submitButtonSelector}`);

    inputList.forEach(inputElement => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formElement, inputElement,true,settings);
            if (!checkValidityForm(formElement,settings)) {
                changeButton(button, settings, false);
            } else {
                changeButton(button, settings, true);
                button.addEventListener('click', (e) => {
                    getPopup(e, formElement);
                    button.closest(".popup__user") ? changeButton(button,settings,true) : changeButton(button,settings,false);
                    e.preventDefault();
                    e.stopImmediatePropagation();
                })
            }
        })
    })
}

export function enableValidation(settings) {
    let formList = Array.from(document.querySelectorAll("form"));
    formList.forEach(formElement => {
        formElement.addEventListener("submit", function (evt) {
            evt.preventDefault();
        })
        setEventListeners(formElement, settings);
    })
}