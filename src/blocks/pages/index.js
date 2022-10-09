import './index.css';
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import API from "../components/API.js";
import {
    apiSettings,
    cardForm,
    cardList,
    editCard,
    editUser,
    initialCards,
    settings,
    userForm,
    userSaveButton,
    userSettings
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";

const api = new API(apiSettings)

const user = new UserInfo(userSettings)

const getUserInfo = api.getUserInfo()
    .then(userInfo => userInfo)
    .catch(err => console.log(`Ошибка загрузки информации о профиле: ${err}`))


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
        submitCallback: ({name, about}) => {
            userSaveButton.textContent = "Сохранение..."
            api.editProfile({name, about})
                .then(userInfo => {
                    user.setUserInfo(userInfo.name, userInfo.about)
                })
                .catch((error) => {
                    console.log(`Ошибка редактирования профиля ${error}`)
                })
                .finally(() => {
                    userSaveButton.textContent = "Сохранить"
                    userPopup.close()
                })
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

    userFormValidation.hideError(null, true)
    userFormValidation.changeButton(true, settings)

    document.querySelector("#name-input").value = user.getUserInfo().name
    document.querySelector("#description-input").value = user.getUserInfo().about

    userPopup.setEventListeners()
})

editCard.addEventListener("click", (e) => {
    e.preventDefault()

    cardFormValidation.changeButton(false, settings)
    cardFormValidation.hideError(null, true)

    cardPopup.setEventListeners()
})

userFormValidation.setEventListeners()
cardFormValidation.setEventListeners()


Promise.all([getUserInfo])
    .then(([userInfo]) => {
        user.setUserInfo(
            userInfo.name,
            userInfo.about
        )
    })