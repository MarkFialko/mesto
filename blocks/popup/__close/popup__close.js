const closeButton = document.querySelector(".popup__close");

function removeActiveBody() {
    let body = document.querySelector("body");
    body.classList.remove("body_active");
}

function removeActivePopup() {
    let popup = document.querySelector(".popup");
    popup.classList.remove("popup_active");

}

function removeActive(e) {
    removeActiveBody();
    removeActivePopup();
    e.preventDefault();
}

closeButton.addEventListener('click', removeActive);