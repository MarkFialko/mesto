import {removeActiveBody} from "../popup/__form/popup__form.js"
import {PopupClose} from "../popup/__close/popup__close.js"
import {activeBody,activePopup} from "../popup/popup.js"

export const CardList = document.querySelector(".content__gallery")
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export class Card {
    constructor(name, link) {
        this._name = name;
        this._link = link;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(".card-template")
            .content
            .querySelector('.card')
            .cloneNode(true)

        return cardElement
    }
    
    _setEventListeners() {
        const image = this._element.querySelector(".card__image");
        image.addEventListener('click', (e) => {
            const thisImageSrc = e.target.src;
            const thisImageTitle = image.nextElementSibling.children[0].textContent;
            const popup = document.querySelector(".popup__image");

            activePopup("popup__image");
            activeBody();
            PopupClose();

            popup.querySelector(".popup__image_link").src = thisImageSrc;
            popup.querySelector(".popup__image_text").textContent = thisImageTitle;
        })

        const likeIcon = this._element.querySelector(".icon__like");
        likeIcon.addEventListener('click', () => {
            likeIcon.classList.toggle("icon__like_active");
        })

        const trashButton = this._element.querySelector(".icon__trash");
        trashButton.addEventListener('click', (e) => {
            const thisCard = e.target.parentElement;
            thisCard.remove();
            initialCards.pop();
        })
    }

    _generateCard() {
        this._element = this._getTemplate()
        this._setEventListeners()

        this._element.querySelector('.card__image_link').src = this._link
        this._element.querySelector('.description-card__title').textContent = this._name

        return this._element
    }
}

export function renderElements() {
    CardList.innerHTML = ``;

    initialCards.forEach((item) => {
        const card = new Card(item.name, item.link);
        const cardElement = card._generateCard();
        CardList.prepend(cardElement);
    })
}
