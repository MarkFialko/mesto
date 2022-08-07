import UserInfo from "../components/UserInfo.js"
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import {
    cardForm,
    cardList,
    editCard,
    editUser,
    initialCards,
    settings,
    userForm,
    userSettings
} from "../utils/constants.js"
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";

const user = new UserInfo(userSettings)
user.setUserInfo("Жак-ив Кусто", "Исследователь океана")

const cardSection = new Section(
    {
        items: initialCards,
        renderer: (item) => {
            const card = new Card(item, ".card-template")
            const cardElement = card.generateCard()
            cardSection.setItem(cardElement)
        }
    },
    cardList
)

cardSection.render()

const userFormValidation = new FormValidator(settings, userForm)
const cardFormValidation = new FormValidator(settings, cardForm)

const userPopup = new PopupWithForm(
    {
        popupSelector: ".popup__user",
        submitCallback: ({name, info}) => {
            user.setUserInfo(name, info)
        }
    }
)
const cardPopup = new PopupWithForm(
    {
        popupSelector: ".popup__card",
        submitCallback: ({name, info}) => {
            const card = new Card({title: name, link: info}, ".card-template")
            const cardElement = card.generateCard()
            cardSection.setItem(cardElement)
        }
    }
)

editUser.addEventListener("click", (e) => {
    e.preventDefault()

    userFormValidation.hideError(null,true)
    userFormValidation.changeButton(true,settings)

    document.querySelector("#name-input").placeholder = user.getUserInfo().name
    document.querySelector("#description-input").placeholder = user.getUserInfo().info
    document.querySelector("#name-input").value = user.getUserInfo().name
    document.querySelector("#description-input").value = user.getUserInfo().info

    userPopup.setEventListeners()
})

editCard.addEventListener("click", (e) => {
    e.preventDefault()

    cardFormValidation.changeButton(false,settings)

    cardPopup.setEventListeners()
})

userFormValidation.setEventListeners()
cardFormValidation.setEventListeners()