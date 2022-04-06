export function PopupForm() {

    let saveButton = document.querySelector(".popup__button");

    let name = document.querySelector(".user-title__name");
    let description = document.querySelector(".user-description__subtitle");

    let popupForm = document.querySelector(".popup__form");

    let userNamePopup = popupForm.children[0];  // input имени
    let userDescriptionPopup = popupForm.children[1];  // input описания
    function isValid(element) {
        if (element.value.length !== 0) {
            return true;
        }
        return false;
    }

    function removeActivePopup() {
        let popup = document.querySelector(".popup");
        popup.classList.remove("popup_active");
    }

    function removeActiveBody() {
        let body = document.querySelector("body");
        body.classList.remove("body_active");

    }

    saveButton.addEventListener('click', function (e) {
        if (isValid(userNamePopup)) {
            name.innerText = userNamePopup.value;
            userNamePopup.placeholder = userNamePopup.value;
        }
        if (isValid(userDescriptionPopup)) {
            description.innerText = userDescriptionPopup.value;
            userDescriptionPopup.placeholder = userDescriptionPopup.value;
        }
        removeActivePopup();
        removeActiveBody();
        e.preventDefault();
    })

}