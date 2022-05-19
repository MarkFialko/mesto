import {checkEscape} from "./../popup.js"
export function closePopup(popupSelector) {
    document.body.classList.remove("body_active");

    const popup = document.querySelector(`.${popupSelector}`);
    popup.classList.remove("popup_active");
    document.removeEventListener('keydown', (e) => {
        checkEscape(e,popupSelector);
    })

    const form = popup.querySelector(".popup__form");
    if (form) {
        form.reset();
    }
}