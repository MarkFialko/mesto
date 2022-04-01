export function Popup() {

    const editButton = document.querySelector(".user-title__pen");

    function activeBody() {
        let body = document.querySelector("body");
        body.classList.toggle("body_active");

    }

    function activePopup() {
        let popup = document.querySelector(".popup");
        popup.classList.toggle("popup_active");
    }

    function toggleActive(e) {
        activeBody();
        activePopup();
        e.preventDefault();
    }

    editButton.addEventListener('click', toggleActive)

}