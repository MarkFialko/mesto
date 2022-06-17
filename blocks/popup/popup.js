function checkEscape(e) {
    if (e.key === "Escape") {
        const popups = document.querySelectorAll(".popup_active");
        const activePopup = Array.from(popups)[0].className.split(" ")[1];
        closePopup();
    }
}

function openPopup(popupSelector) {
    document.body.classList.add("body_active");

    const popup = document.querySelector(`.${popupSelector}`)
    popup.classList.add("popup_active");
    popup.addEventListener('mousedown', (e) => {
        if (!e.target.closest(".popup__inner") || e.target.closest(".popup__close")) {
            closePopup();
        }
    })

    document.addEventListener('keydown', checkEscape);
}

function closePopup() {
    document.body.classList.remove("body_active");

    const activePopup = document.querySelector(".popup_active").className.split(" ")[1]; // active-popup selector
    const popup = document.querySelector(`.${activePopup}`);
    popup.classList.remove("popup_active");

    document.removeEventListener('keydown', checkEscape)
}

export {checkEscape, openPopup, closePopup}