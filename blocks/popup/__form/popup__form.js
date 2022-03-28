let saveButton = document.querySelector(".popup__button");

let name = document.querySelector(".user-title__name");
let description = document.querySelector(".user-description__subtitle");

let popupForm = document.querySelector(".popup__form");

let userNamePopup = popupForm.children[0];  // input имени
let userDescriptionPopup = popupForm.children[1];  // input описания

const userPlaceholder = userNamePopup.placeholder;
const userDescriptionPlaceholder = userDescriptionPopup.placeholder;

saveButton.addEventListener('click', function () {
    if (userNamePopup.value.length !== 0) {
        name.innerText = userNamePopup.value;
    }
    if (userDescriptionPopup.value.length !== 0) {
        description.innerText = userDescriptionPopup.value;
    }
})

userNamePopup.addEventListener('focus', function () { // убирает placeholder у имени
    userNamePopup.placeholder = "";
})

userNamePopup.addEventListener('blur', function () {   // возвращает placeholder у имени
    userNamePopup.placeholder = userPlaceholder;
})

userDescriptionPopup.addEventListener('focus', function () { // убирает placeholder у описания
    userDescriptionPopup.placeholder = "";
})

userDescriptionPopup.addEventListener('blur', function () {   // возвращает placeholder у описания
    userDescriptionPopup.placeholder = userDescriptionPlaceholder;
})