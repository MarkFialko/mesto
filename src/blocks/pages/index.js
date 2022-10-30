import './index.css';
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import API from "../components/API.js";
import {
    apiSettings,
    avatarForm,
    avatarSaveButton,
    cardForm,
    cardList,
    editAvatar,
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
const avatarFormValidation = new FormValidator(settings, avatarForm)

const userPopup = new PopupWithForm(
    {
        popupSelector: ".popup__user",
        submitCallback: (profileData) => {
            userSaveButton.textContent = "Сохранение..."
            api.editProfile(profileData)
                .then(response => {
                    user.setUserInfo({
                        name: response.name,
                        about: response.about,
                    })
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


const avatarPopup = new PopupWithForm(
    {
        popupSelector: ".popup__avatar",
        submitCallback: (avatarData) => {
            avatarSaveButton.textContent = "Сохранение..."
            api.updateAvatar(avatarData)
                .then(() => {
                    user.setUserAvatar({
                        avatar: avatarData.avatar
                    })
                })
                .catch((error) => {
                    console.log(`Ошибка редактирования профиля ${error}`)
                })
                .finally(() => {
                    avatarSaveButton.textContent = "Сохранить"
                    avatarPopup.close()
                })
        }
    }
)


editAvatar.addEventListener("click", (e) => {
    e.preventDefault()

    avatarFormValidation.hideError(null, true)
    avatarFormValidation.changeButton(false, settings)

    avatarPopup.setEventListeners()
})

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
avatarFormValidation.setEventListeners()

Promise.all([getUserInfo])
    .then(([userInfo]) => {
        user.setUserInfo({
            name: userInfo.name,
            about: userInfo.about,
        })
        user.setUserAvatar({
            avatar: userInfo.avatar
        })
    })
    .catch(error => {
        console.log(`Ошибка загрузки данных: ${error}`)
    })