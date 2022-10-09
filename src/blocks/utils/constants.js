const cardList = ".content__gallery",
    initialCards = [
        {
            title: 'Архыз',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
        },
        {
            title: 'Челябинская область',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
        },
        {
            title: 'Иваново',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
        },
        {
            title: 'Камчатка',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
        },
        {
            title: 'Холмогорский район',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
        },
        {
            title: 'Байкал',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
        }
    ],
    settings = {
        formSelector: '.popup__form',
        inputSelector: '.form__input',
        submitButtonSelector: '.popup__button',
        inactiveButtonClass: 'popup__button_disabled',
        inputErrorClass: 'form__input_type_error'
    },
    userSettings = {
        nameSelector: ".user-title__name",
        aboutSelector: ".user-description__subtitle",
    },
    editUser = document.querySelector(".user-title__pen"),
    editCard = document.querySelector(".content-info__button"),
    userForm = document.forms["userForm"],
    cardForm = document.forms["cardForm"],
    apiSettings = {
        baseUrl: "http://95.82.203.66",
        headers: {
            'Authorization': '29b84512-1e63-45c6-a826-743e655134f6',
            'Content-Type': 'application/json'
        }
    },
    userSaveButton = document.querySelector("[name=user-save]"),
    cardSaveButton = document.querySelector("[name=card-save]")

export {cardList, initialCards, settings, userSettings, editUser, editCard, userForm, cardForm, apiSettings, userSaveButton,cardSaveButton}