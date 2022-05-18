import { hideInputError} from "./../input-error/input-error.js"
import {renderElements} from "./../card/card.js"
import {openPopup} from "./../popup/popup.js"
import {enableValidation} from "./../validity/validity.js"
import {addPenButton,addCardButton} from "./../popup/__button/popup__buton.js"

const penButton = document.querySelector(".user-title__pen");
penButton.addEventListener('click', function (e) {
    addPenButton(e);
})

const cardButton = document.querySelector(".content-info__button");
cardButton.addEventListener('click', function (e) {
    addCardButton(e);
})

renderElements();
enableValidation(
    {
        formSelector: '.popup__form',
        inputSelector: '.form__input',
        submitButtonSelector: '.popup__button',
        inactiveButtonClass: 'popup__button_disabled',
        inputErrorClass: 'form__input_type_error'
    }
);