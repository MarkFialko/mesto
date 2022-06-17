import {renderElements} from "./../card/card.js"
import {FormValidator, CardFormValidator, UserFormValidator} from "./../validity/formValidator.js"
import {openPopup} from "./../popup/popup.js"

const settings = {
    formSelector: '.popup__form',
    inputSelector: '.form__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_type_error'
}


const user = new UserFormValidator(settings, document.forms.userForm);
const card = new CardFormValidator(settings, document.forms.cardForm);

user.enableValidation();
card.enableValidation();

function fillUserForm() {
    user._inputs.forEach(userInput => {
        user._hideInputError(userInput);
    })
    user._changeButton(true);

    const name = document.querySelector(".user-title__name").textContent;
    const description = document.querySelector(".user-description__subtitle").textContent;
    const userForm = document.forms.userForm;

    userForm.elements.user.value = name;
    userForm.elements.user.placeholder = name;
    userForm.elements.description.value = description;
    userForm.elements.description.placeholder = description;

    openPopup("popup__user");
}

const penButton = document.querySelector(".user-title__pen");
penButton.addEventListener('click', fillUserForm);

const cardButton = document.querySelector(".content-info__button");
cardButton.addEventListener('click', (e) => {
    e.preventDefault();

    card._inputs.forEach(cardInput => {
        card._hideInputError(cardInput);
    })
    card._form.reset();
    card._changeButton(false);

    openPopup("popup__card");
});

renderElements();