export function Popup() {

    const editButton = document.querySelector(".user-title__pen");

    function activeBody() {
        let body = document.querySelector("body");
        body.classList.toggle("body_active");
    }

    function activePopup(e) {
        let popup = document.querySelector(".popup");
        popup.classList.toggle("popup_active");
        e.preventDefault();
    }

    function toggleActive() {
        activeBody();
        activePopup();
        e.preventDefault();
    }

    editButton.addEventListener('click', toggleActive)

}