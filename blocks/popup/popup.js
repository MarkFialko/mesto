export function Popup() {

    const editButton = document.querySelector(".user-title__pen");
    let popupForm = document.querySelector(".popup__form");
    let name = document.querySelector(".user-title__name");
    let description = document.querySelector(".user-description__subtitle");
    let userNamePopup = popupForm.children[0];  // input имени
    let userDescriptionPopup = popupForm.children[1];  // input описания
    function activeBody() {
        let body = document.querySelector("body");
        body.classList.toggle("body_active");
    }

    function activePopup(e) {
        let popup = document.querySelector(".popup");
        popup.classList.toggle("popup_active");
        userNamePopup.value = name.textContent;
        userDescriptionPopup.value = description.textContent;
        e.preventDefault();
    }

    function toggleActive() {
        activeBody();
        activePopup();
        e.preventDefault();
    }

    editButton.addEventListener('click', toggleActive)

}