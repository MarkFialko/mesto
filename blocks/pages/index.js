import {renderElements} from "./../card/card.js"
import {FormValidator, CardFormValidator, UserFormValidator} from "./../validity/formValidator.js"
import {openPopup, closePopup} from "./../popup/popup.js"

const settings = {
    formSelector: '.popup__form',
    inputSelector: '.form__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_type_error'
}

const formMap = new Map();

const forms = document.forms;
Array.from(forms).forEach(form => {
    let newForm;
    if (form.name === "userForm") {
        newForm = new UserFormValidator(settings, form)
        formMap.set("userForm", newForm)
    } else if (form.name === "cardForm") {
        newForm = new CardFormValidator(settings, form);
        formMap.set("cardForm", newForm);
    } else {
        newForm = new FormValidator(settings, form);
    }
    newForm.enableValidation();
})

function fillUserForm() {
    const user = formMap.get("userForm");
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
cardButton.addEventListener('click', () => {
    const card = formMap.get("cardForm");
    card._inputs.forEach(cardInput => {
        card._hideInputError(cardInput);
    })
    card._form.reset();
    card._changeButton(false);
    openPopup("popup__card");
});

renderElements();