export function PopupClose() {
    const closeButtons = document.querySelectorAll(".popup__close");

    function removeActiveBody() {
        const body = document.querySelector("body");
        body.classList.remove("body_active");
    }

    function removeActivePopup() {
        const popups = document.querySelectorAll(".popup");
        popups.forEach(popup => {
            popup.classList.remove("popup_active");
        })
    }

    function removeActive() {
        removeActiveBody();
        removeActivePopup();
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', removeActive);
    })
}