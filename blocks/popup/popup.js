import {closePopup} from "./__close/popup__close.js"

export function checkEscape(e,popupSelector) {
    if (e.key === "Escape") {
        closePopup(popupSelector);
    }
}

export function openPopup(popupSelector) {
    document.body.classList.add("body_active");
    const popup = document.querySelector(`.${popupSelector}`)
    popup.classList.add("popup_active");
    popup.addEventListener('click', (e) => {
        if (!e.target.closest(".popup__inner") || e.target.closest(".popup__close")) {
            closePopup(popupSelector);
        }
    })
    document.addEventListener('keydown', (e) => {
        checkEscape(e,popupSelector);
    })
}