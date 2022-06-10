import {checkEscape} from "./../popup/popup.js"

const CardList = document.querySelector(".content__gallery")
const initialCards = [
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
    constructor({name, link}, selector) {
        this._name = name;
        this._link = link;
        this._selector = selector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(`.${this._selector}`)
            .content
            .querySelector('.card')
            .cloneNode(true)

        return cardElement
    }

    _closeImage() {
        document.body.classList.remove("body_active");

        const popup = document.querySelector(`.popup__image`);
        popup.classList.remove("popup_active");

        document.removeEventListener('keydown', checkEscape)
    }

    _openImage() {
        document.body.classList.add("body_active");

        const popup = document.querySelector(`.popup__image`)
        popup.classList.add("popup_active");
        popup.addEventListener('mousedown', (e) => {
            if (!e.target.closest(".popup__inner") || e.target.closest(".popup__close")) {
                this._closeImage();
            }
        })

        document.addEventListener('keydown', checkEscape);
    }

    _setEventListeners() {
        const image = this._element.querySelector(".card__image");
        image.addEventListener('click', (e) => {
            const thisImageSrc = e.target.src;
            const thisImageTitle = image.nextElementSibling.children[0].textContent;
            const popup = document.querySelector(".popup__image");

            this._openImage();
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

    generateCard() {
        this._element = this._getTemplate()
        this._setEventListeners()

        this._element.querySelector('.card__image_link').src = this._link
        this._element.querySelector('.description-card__title').textContent = this._name

        return this._element
    }
}

function getCard(item) {
    const card = new Card(item, "card-template");
    const cardElement = card.generateCard();
    return cardElement;
}

function renderElements() {
    initialCards.forEach((item) => {
        const card = getCard(item)
        CardList.prepend(card);
    })
}

export {CardList, initialCards, getCard, renderElements}