import {initialCards, renderElements} from "../../card/card.js"

export function isValid(element) {
    if (element.value.length !== 0) {
        return true;
    }
    return false;
}

export function removeActivePopup(popupSelector) {
    let popup = document.querySelector(`.${popupSelector}`);
    popup.classList.remove("popup_active");
}

export function removeActiveBody() {
    let body = document.querySelector("body");
    body.classList.remove("body_active");

}

export function PopupUserForm() {
    const saveButton = document.querySelector(".popup__button");
    let name = document.querySelector(".user-title__name");
    let description = document.querySelector(".user-description__subtitle");
    const popupForm = document.querySelector(".popup__form");
    let userNamePopup = popupForm.children[0];
    let userDescriptionPopup = popupForm.children[1];

    saveButton.addEventListener('click', function (e) {
        if (isValid(userNamePopup)) {
            name.innerText = userNamePopup.value;
            userNamePopup.placeholder = userNamePopup.value;
        }
        if (isValid(userDescriptionPopup)) {
            description.innerText = userDescriptionPopup.value;
            userDescriptionPopup.placeholder = userDescriptionPopup.value;
        }
        removeActivePopup("popup__user");
        removeActiveBody();
        e.preventDefault();
    })
}

function renderCard(userNamePopup,userDescriptionPopup) {
    const card = {
        name: `${userNamePopup.value}`,
        link: `${userDescriptionPopup.value}`
    }
    initialCards.push(card);
    renderElements();
    userNamePopup.value = '';
    userDescriptionPopup.value = '';
    removeActivePopup("popup__card");
    removeActiveBody();
}

export function PopupCardForm() {
    const saveButton = document.querySelector(".popup__button_create");
    let popupForm = document.querySelector(".popup__form_card");

    let userNamePopup = popupForm.children[0];
    let userDescriptionPopup = popupForm.children[1];

    userNamePopup.addEventListener('keypress', (e) => {
        if (isValid(userNamePopup) && isValid(userDescriptionPopup) && e.which === 13) {
            renderCard(userNamePopup,userDescriptionPopup);
        }
    })

    userDescriptionPopup.addEventListener('keypress', (e) => {
        if (isValid(userNamePopup) && isValid(userDescriptionPopup) && e.which === 13) {
            renderCard(userNamePopup,userDescriptionPopup);
        }
    })

    saveButton.addEventListener('click', function (e) {
        if (isValid(userNamePopup) && isValid(userDescriptionPopup)) {
            renderCard(userNamePopup,userDescriptionPopup);
        }
    })
}