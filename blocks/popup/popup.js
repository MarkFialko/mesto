export function activeBody() {
    const body = document.querySelector("body");
    body.classList.toggle("body_active");
}

export function activePopup(
    popupSelector,
    userNamePopup = null,
    userDescriptionPopup = null,
    name = null,
    description = null
) {
    const popup = document.querySelector(`.${popupSelector}`)
    popup.classList.toggle("popup_active");
    if (name !== null) {
        userNamePopup.value = name.textContent;
        userDescriptionPopup.value = description.textContent;
    }
}

export function getUserPopup() {
    const editButton = document.querySelector(".user-title__pen");
    let popupForm = document.querySelector(".popup__form");
    let name = document.querySelector(".user-title__name");
    let description = document.querySelector(".user-description__subtitle");
    let userNamePopup = popupForm.children[0];  // input имени
    let userDescriptionPopup = popupForm.children[1];  // input описания

    function toggleActive() {
        activeBody();
        activePopup("popup__user", userNamePopup, userDescriptionPopup, name, description);
    }

    editButton.addEventListener('click', toggleActive)
}

export function getCardPopup() {
    const editButton = document.querySelector(".content-info__button");
    let popupForm = document.querySelector(".popup__form");

    function toggleActive() {
        activeBody();
        activePopup("popup__card");
    }

    editButton.addEventListener('click', toggleActive)
}