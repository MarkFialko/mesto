let saveButton = document.querySelector(".popup__button");

let name = document.querySelector(".user-title__name");
let description = document.querySelector(".user-description__subtitle");

let popupForm = document.querySelector(".popup__form");

let userNamePopup = popupForm.children[0];  // input имени
let userDescriptionPopup = popupForm.children[1];  // input описания

const userPlaceholder = userNamePopup.placeholder;
const userDescriptionPlaceholder = userDescriptionPopup.placeholder;

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

saveButton.addEventListener('click', function (e) {
    if (isValid(userNamePopup)) {
        name.innerText = userNamePopup.value;
    }
    if (isValid(userDescriptionPopup)) {
        description.innerText = userDescriptionPopup.value;
    }
    e.preventDefault();
    removeActivePopup();
})

userNamePopup.addEventListener('blur', function () {   // возвращает placeholder у имени
    userNamePopup.placeholder = userPlaceholder;
})

userDescriptionPopup.addEventListener('blur', function () {   // возвращает placeholder у описания
    userDescriptionPopup.placeholder = userDescriptionPlaceholder;
})

function removePlaceholder(element) {
    element.addEventListener('focus', function () {
        element.placeholder = "";
    })
}

removePlaceholder(userNamePopup);
removePlaceholder(userDescriptionPopup);