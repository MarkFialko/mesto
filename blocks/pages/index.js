import {PopupClose} from "../popup/__close/popup__close.js"
import {
    PopupUserForm,
    PopupCardForm,
    isValid,
    removeActivePopup,
    removeActiveBody,
} from "../popup/__form/popup__form.js"

import {getUserPopup, getCardPopup, activeBody, activePopup} from "../popup/popup.js"
import {CardList, initialCards, Card, renderElements} from "../card/card.js"

renderElements();

const editButtons = document.querySelectorAll(".edit__button");
getUserPopup();
getCardPopup();
editButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        PopupClose();
        PopupUserForm();
        PopupCardForm();
        e.preventDefault();
    })
})