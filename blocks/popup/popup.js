import {closePopup} from "./__close/popup__close.js"
import {changeButton} from "./__button/popup__buton.js"

export function checkEscape(e, popupSelector, button, settings) {
    if (e.key === "Escape") {
        closePopup(popupSelector);
        if (button !== null) {
            changeButton(button, settings, false);
        }
    }
}

export function openPopup(popupSelector, settings) {
    document.body.classList.add("body_active");

    const popup = document.querySelector(`.${popupSelector}`)
    const button = popup.querySelector(`${settings.submitButtonSelector}`);

    popup.classList.add("popup_active");
    popup.addEventListener('mousedown', (e) => {
        if (!e.target.closest(".popup__inner") || e.target.closest(".popup__close")) {
            closePopup(popupSelector);
            if (button !== null) {
                changeButton(button, settings, false);
            }
        }
    })

    document.addEventListener('keydown', (e) => {
        checkEscape(e, popupSelector, button, settings);
    })
}