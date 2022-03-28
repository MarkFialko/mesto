const closeButton = document.querySelector(".popup__close");

closeButton.addEventListener('click',function (e) {
    let body = document.querySelector("body");
    let popup = document.querySelector(".popup");
    popup.classList.remove("_active");
    body.classList.remove("_active");
    e.preventDefault();
})