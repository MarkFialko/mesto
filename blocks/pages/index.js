import {PopupClose} from "../popup/__close/popup__close.js"
import {PopupForm} from "../popup/__form/popup__form.js"
import {Popup} from "../popup/popup.js"
const editButton = document.querySelector(".user-title__pen");
Popup();
editButton.addEventListener('click',function(e){
    PopupClose();
    PopupForm();
    e.preventDefault();
})