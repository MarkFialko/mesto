import {renderCard} from "./../../card/card.js"
import {closePopup} from "./../__close/popup__close.js"

export function getPopup(e,formElement) {
    if (e.target.closest(".popup__user")) {
        getUser(formElement);
        closePopup("popup__user");
    } else {
        getCard(formElement);
        closePopup("popup__card");
    }
}

export function getUser(formElement) {
    const inputName = formElement.elements.user.value;
    const inputDescription = formElement.elements.description.value;

    let name = document.querySelector(".user-title__name");
    let description = document.querySelector(".user-description__subtitle");
    name.textContent = inputName;
    description.textContent = inputDescription;
}

export function getCard(formElement) {
    const inputTitle = formElement.elements.cardTitle.value;
    const inputLink = formElement.elements.cardLink.value;
    renderCard(inputTitle, inputLink);
}

export function fillUserForm() {
    const name = document.querySelector(".user-title__name").textContent;
    const description = document.querySelector(".user-description__subtitle").textContent;
    const userForm = document.forms.userForm;
    userForm.elements.user.value = name;
    userForm.elements.user.placeholder = name;
    userForm.elements.description.value = description;
    userForm.elements.description.placeholder = description;
}